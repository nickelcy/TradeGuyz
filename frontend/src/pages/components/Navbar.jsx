import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container d-flex f-space-between">
        <Link className="navbar-brand" to="/">
          Electron
        </Link>

        <div className="d-flex align-items-center flex-grow-1 ms-lg-3">
          {/* Search Form */}
          <form className="flex-grow-1 me-5 my-2 my-lg-3" role="search">
            <div className="input-group w-100">
              <select
                className="form-select d-none d-lg-block rounded-l"
                style={{ maxWidth: "120px" }}
              >
                <option value="computers">Computers</option>
                <option value="phones">Phones</option>
                <option value="speakers">Speakers</option>
                <option value="accessories">Accessories</option>
              </select>

              <input
                className="form-control "
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-light" type="submit">
                <CiSearch />
              </button>
            </div>
          </form>

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
