import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import { useEffect, useState } from "react";

const Navbar = ({ cart }) => {
  const navigate = useNavigate();
  const [numberOfProducts, setNumberOfProducts] = useState(0);

  useEffect(() => {
    setNumberOfProducts(cart.length);
  }, [cart]);

  // console.log(cart)
  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container d-flex f-space-between">
        <Link className="navbar-brand" to="/">
          Electron
        </Link>

        <div className="d-flex align-items-center flex-grow-1 ms-lg-3">
          {/* Search Form */}
          <div className="d-flex flex-grow-1 align-items-center me-5 my-2 my-lg-3">
            <div
              className="d-none d-xl-block me-2 "
              style={{ maxWidth: "300px" }}
            >
              <select
                className="form-select"
                onChange={(e) => {
                  const value = e.target.value;
                  if (value) {
                    e.target.value = "";
                    navigate(`/filter/category/${value}`);
                  }
                }}
                defaultValue={""}
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="Laptops">Laptops</option>
                <option value="Phones">Phones</option>
                <option value="Speakers">Speakers</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>

            <Search />
          </div>

          {/* Cart Icon */}
          <Link to="/myCart" className="position-relative text-light">
            <BsCart2 size={30} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {numberOfProducts == 0? "": numberOfProducts}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
