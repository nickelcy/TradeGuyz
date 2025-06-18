import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const [special, setSpecial] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setSpecial(JSON.parse(localStorage.getItem("special")) || {});
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const link = formData.get("link");
    const description = formData.get("description");
    setSpecial({ link, description });
    localStorage.setItem("special", JSON.stringify({ link, description }));
    navigate("/user/import");
    // console.log({ link, description });
  };

  // console.log(special);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-2 py-4 mx-2">
      {/* <b className="mt-2 mb-3 text-center w-75 d-none d-md-block text-muted fs-5">
        Don't see what you need? Send us a link or a product description quick,
        simple, and hassle-free.
      </b>
      <b className="mt-4 mb-1 text-center w-100 d-md-none text-muted">
        Send us a link or a product description simple, and hassle-free.
      </b> */}
      <form
        onSubmit={submitForm}
        className="w-100 h-100 m-2 d-flex flex-column justify-content-center align-items-center"
        style={{ maxWidth: "600px" }}
      >
        <label htmlFor="link" className="w-100 text-center fw-bold text-muted">
          Paste the product link you want to import.
        </label>
        <input
          id="link"
          type="text"
          name="link"
          className="form-control bg-light border-success text-dark rounded-start m-1 w-75"
          placeholder="Links from: Amazon, Ebay, Shein. etc"
          style={{ maxWidth: "450px" }}
          defaultValue={special.link ? special.link : ""}
          required
        />
        <label
          htmlFor="link"
          className="w-100 text-center fw-bold text-muted mt-2"
        >
          Add any specification or description (optional).
        </label>
        <textarea
          className="form-control bg-light border-success text-dark rounded-start m-1 w-75"
          placeholder="Enter your specification"
          name="description"
          style={{ maxWidth: "450px" }}
          defaultValue={special.description ? special.description : ""}
        />
        <button
          className="btn btn-success rounded-end mt-3 mb-2 w-50"
          type="submit"
          style={{ maxWidth: "200px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
