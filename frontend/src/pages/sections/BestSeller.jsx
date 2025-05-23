import ProductCard from "../components/ProductCard";
import catImage1 from "../../assets/Product/phone.png";
import catImage2 from "../../assets/Product/phone.png";
import catImage3 from "../../assets/Product/phone.png";
import catImage6 from "../../assets/Product/phone.png";
import catImage7 from "../../assets/Product/phone.png";
import catImage8 from "../../assets/Product/phone.png";
import catImage9 from "../../assets/Product/phone.png";
import catImage10 from "../../assets/Product/phone.png";
import catImage11 from "../../assets/Product/phone.png";
import catImage12 from "../../assets/Product/phone.png";

const BestSeller = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-0 mb-md-2 text-center">BEST SELLERS</h2>
      <div className="row g-5 text-center bestSellerCon">
        <div className="col-12 col-md-6 col-lg-4">
          <ProductCard name="iPhone 15 Pro Max" img={catImage1} price={1199} />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <ProductCard name="MacBook Air M2" img={catImage2} price={1299} />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <ProductCard name="iPad Pro 12.9" img={catImage3} price={1099} />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <ProductCard name="Sony WH-1000XM5" img={catImage6} price={399} />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <ProductCard name="PlayStation 5" img={catImage7} price={499} />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <ProductCard
            name="Apple Watch Series 9"
            img={catImage8}
            price={399}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <ProductCard name="Canon EOS R50" img={catImage10} price={679} />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <ProductCard
            name="Samsung 65'' QLED TV"
            img={catImage12}
            price={1499}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <ProductCard name="iPhone 15 Pro Max" img={catImage1} price={1199} />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <ProductCard name="MacBook Air M2" img={catImage2} price={1299} />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <ProductCard name="iPad Pro 12.9" img={catImage3} price={1099} />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <ProductCard name="Sony WH-1000XM5" img={catImage6} price={399} />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <ProductCard name="PlayStation 5" img={catImage7} price={499} />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <ProductCard
            name="Apple Watch Series 9"
            img={catImage8}
            price={399}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <ProductCard name="Canon EOS R50" img={catImage10} price={679} />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <ProductCard
            name="Samsung 65'' QLED TV"
            img={catImage12}
            price={1499}
          />
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
