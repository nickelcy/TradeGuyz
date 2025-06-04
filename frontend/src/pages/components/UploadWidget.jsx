import { useState, useEffect, useRef } from "react";

// Solution one: Button is not found 
export const UploadWidgetV1 = ({ setImageUrl }) => {
  const [images, setImages] = useState([]);
  const cloudName = import.meta.env.VITE_CLOUDINARY_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_PRESET;
  
  useEffect(() => {
    const button = document.getElementById("upload-button");
    if (!button) return
    if (!window.cloudinary) return;

    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName,
        uploadPreset,
        multiple: true,
      },
      (error, result) => {
        if (!error && result.event === "success") {
          setImages((prev) => [...prev, result.info.secure_url]);
        }
      }
    );

    if (button) {
      button.addEventListener("click", () => widget.open());
    }

    return () => {
      if (button) {
        button.removeEventListener("click", () => widget.open());
      }
    };
  }, []);

  // Sync local state with parent after images state changes
  useEffect(() => {
    setImageUrl(images);
  }, [images, setImageUrl]);

  return (
    <>
      <button id="upload-button" className="btn btn-primary">
        Upload Images
      </button>
      <div className="my-2 d-flex flex-wrap gap-2">
        {images.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt={`upload-${idx}`}
            style={{
              width: 100,
              height: 100,
              objectFit: "cover",
              borderRadius: 8,
            }}
          />
        ))}
      </div>
    </>
  );
};



export const UploadWidgetV2 = ({ setImageUrl }) => {
  const buttonRef = useRef(null);
  const cloudName = import.meta.env.VITE_CLOUDINARY_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_PRESET;

  useEffect(() => {
    if (!window.cloudinary || !buttonRef.current) return;

    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName,
        uploadPreset,
        multiple: true,
        sources: ["local", "url", "camera", "image_search", "google_drive"],
        maxFiles: 5,
      },
      (error, result) => {
        if (!error && result.event === "success") {
          setImageUrl((prev) => [...prev, result.info.secure_url]);
        }
      }
    );

    const handler = () => widget.open()

    const button = buttonRef.current;
    button.addEventListener("click", handler);

    return () => {
      button.removeEventListener("click", handler);
    };
  }, [setImageUrl]);

  return (
    <button ref={buttonRef} className="btn btn-primary">
      Upload Images
    </button>
  );
};


const UploadWidget = ({ setImageUrl }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://upload-widget.cloudinary.com/global/all.js";
    script.async = true;

    script.onload = () => {
      const widget = window.cloudinary.createUploadWidget(
        {
          cloudName: import.meta.env.VITE_CLOUDINARY_NAME,
          uploadPreset: import.meta.env.VITE_CLOUDINARY_PRESET,
        },
        (error, result) => {
          if (!error && result.event === "success") {
            setImageUrl((prev) => [...prev, result.info.secure_url]);
          }
        }
      );

      const btn = document.getElementById("upload-button");
      if (btn) {
        btn.addEventListener("click", () => widget.open());
      }
    };

    document.body.appendChild(script);

    return () => {
      const btn = document.getElementById("upload-button");
      if (btn) {
        btn.removeEventListener("click", () => widget.open());
      }
    };
  }, [setImageUrl]);

  return <button id="upload-button">Upload Image</button>;
};

export default UploadWidget;

