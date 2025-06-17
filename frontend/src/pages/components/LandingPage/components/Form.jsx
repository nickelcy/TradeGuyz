const Form = (props) => {
  const submitForm = (e) => {
    e.preventDefault();
    console.log("linkSubmitted");
    alert("This functionality will be implemented very soon!\nPlease check out our Stores.")
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-2 py-4 mx-2">
      <b className="mt-2 mb-3 text-center w-75 d-none d-md-block text-muted fs-5">
        Don't see what you need? Send us a link or a product description quick,
        simple, and hassle-free.
      </b>
      <b className="mt-4 mb-1 text-center w-100 d-md-none text-muted">
        Send us a link or a product description simple, and hassle-free.
      </b>
      <form
        onSubmit={submitForm}
        className="w-100 h-100 m-2 d-flex flex-column justify-content-center align-items-center"
        style={{ maxWidth: "450px" }}
      >
        <label
          htmlFor="link"
          className="w-100 px-2 text-start fw-bold text-muted"
        >
          Add a product link to product you want to import.
        </label>
        <input
          id="link"
          type="text"
          className="form-control bg-light border-success text-dark rounded-start m-1"
          placeholder="Links from: Amazon, Ebay, Shein. etc"
          required
        />
        <label
          htmlFor="link"
          className="w-100 px-2 text-start fw-bold text-muted mt-2"
        >
          Add any specification or description (optional).
        </label>
        <input
          type="text"
          className="form-control bg-light border-success text-dark rounded-start m-1"
          placeholder="Enter your specification "
        />
        <button
          className="btn btn-success rounded-end w-100 mt-3 mb-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
