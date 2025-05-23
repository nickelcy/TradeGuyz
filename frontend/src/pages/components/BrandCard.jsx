const BrandCard = (props) => {
  const { brand, img } = props;

  return (
    <a href={`filter/brand/${brand}`} className="container d-flex flex-column justify-content-center align-items-center ">
      <img
        src={img}
        alt={brand}
        // width={200}
        // height={200}
        className="rounded-0 w-100 h-100"
      />
    </a>
  );
};
export default BrandCard;
