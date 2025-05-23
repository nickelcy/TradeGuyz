const ProductCard = (props) => {
  const { name, img, price } = props;

  return (
    <div className="container d-flex flex-column justify-content-start align-items-start text-bg-dark py-3 px-4 productCon">
      <img
        src={img}
        alt={name}
        className="productImage pt-2"
      />
      <h4 className="ps-2 mt-3 text-start">{name}</h4>
      <h5 className="ps-2 mt-3 text-start">Price: ${price}</h5>
      <button className="btn btn-success mt-2 mb-2 w-100">Add to Cart</button>
    </div>
  );
};
export default ProductCard;
