import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

const Navbar = (props) => {
  const navigate = useNavigate();

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
                <option value="Computers">Computers</option>
                <option value="Phones">Phones</option>
                <option value="Speakers">Speakers</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>

            {/* <form className="flex-grow-1" role="search">
              <div className="input-group w-100">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                />
                <button className="btn btn-light" type="submit">
                  <CiSearch />
                </button>
              </div>
            </form> */}
            
            <Search />



          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="position-relative text-light">
            <BsCart2 size={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              0
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
