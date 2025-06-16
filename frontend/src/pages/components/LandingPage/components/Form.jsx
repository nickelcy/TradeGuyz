const Form = (props) => {
  const submitForm = (e) => {
    e.preventDefault();
    console.log(linkSubmitted);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <b className="mt-4 mb-3 text-center w-75 d-none d-md-block text-muted">
        Don't see what you need? Send us a link or a product description quick,
        simple, and hassle-free.
      </b>
      <b className="mt-4 mb-3 text-center w-75 d-md-none text-muted">
        Send us a link or a product description simple, and hassle-free.
      </b>
      <form onSubmit={(e) => submitForm}>
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-light border-success text-dark rounded-start"
            placeholder="Enter product link"
          />
          <button className="btn btn-success rounded-end" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
