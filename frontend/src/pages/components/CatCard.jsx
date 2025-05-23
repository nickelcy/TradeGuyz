const CatCard = (props) => {
    const { category, img } = props;

  return (
    <a href={`/filter/category/${category}`} className="container d-flex flex-column justify-content-center align-items-center text-decoration-none text-dark">
      <img src={img} alt={category} width={200} height={200} className="rounded-pill catImage pop"/>
      <h3 className="mt-3">{category}</h3>
    </a>
    );
};
export default CatCard;