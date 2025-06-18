// import banner1 from './images/ea/banner1.jpg';
// import banner2 from './images/ea/banner2.jpg';
// import banner3 from './images/ea/banner3.jpg';
// import banner4 from './images/ea/banner4.jpg';

// Store banners on database in the store table in an array using cloudinary

const Banner = (props) => {
  return (
    <div
      id="carousel"
      className="carousel slide w-100 h-100 overflow-hidden mt-1"
      data-bs-ride="carousel"
      style={{ maxHeight: "60vh" }}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100 pop"
            src={banner1}
            alt="Slide 1"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100 pop"
            src={banner2}
            alt="Slide 2"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100 pop"
            src={banner3}
            alt="Slide 3"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100 pop"
            src={banner4}
            alt="Slide 4"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Optional carousel controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Banner;
