import { useState, useEffect } from "react";

const UploadWidget = ({ setImageUrl }) => {
  const [images, setImages] = useState([]);
  const cloudName = import.meta.env.VITE_CLOUDINARY_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_PRESET;

  useEffect(() => {
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

    const button = document.getElementById("upload-button");
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

export default UploadWidget;
