// import "./components.css"

const ProductCard = (props) => {
  const { name, img, price, setClick, thisProduct, setChosenProduct } = props;

  return (
    <>
      <div
        onClick={() => {
          setClick((prev) => {
            if (prev == false) {
              setChosenProduct(thisProduct)
            } else setChosenProduct([])
            return !prev;
          });
        }}
        className="container d-flex flex-column justify-content-start align-items-start text-bg-dark py-3 px-4 pop"
      >
        <img src={img} alt={name} className="productImage pt-2" />
        <h4 className="ps-2 mt-3 text-start m-0">{name}</h4>
        <h5 className="ps-2 mt-3 text-start mb-4">
          Price:&nbsp;
          {new Intl.NumberFormat("en-GY", {
            style: "currency",
            currency: "GYD",
          }).format(price)}
        </h5>
        <button className="btn btn-success mt-2 mb-2 w-100">Add to Cart</button>
      </div>
    </>
  );
};
export default ProductCard;
