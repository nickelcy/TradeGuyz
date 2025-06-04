import { useState, useEffect } from "react";

const UploadWidget = ({ setImageUrl }) => {
  const [images, setImages] = useState([]);

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
            setImages((prev) => [...prev, result.info.secure_url]);
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

    useEffect(() => {
      setImageUrl(images);
    }, [images, setImageUrl]);

  return (
    <>
      <button id="upload-button" className="btn btn-primary" type="button">
        Upload Image
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

export default UploadWidget;
