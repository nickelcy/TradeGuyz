import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Search from "./Search";
import { useEffect, useState, useContext } from "react";
// import logo from "../../../assets/logo/logo.svg";
import { BsCart2 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { CartContext } from "../../../../App";

const MainNavBtn = ({size}) => {
  const { cart, setCart } = useContext(CartContext);

  const navigate = useNavigate();
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [visible, setVisibility] = useState("d-none");
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setNumberOfProducts(cart.length);
  }, [cart]);

  const loginStatus = async () => {
    try {
      await axios.get(`${serverUrl}/user/`, { withCredentials: true });
      setLoggedIn(true);
      return true;
    } catch (error) {
      console.log(error);
      setLoggedIn(false);
      return false;
    }
  };

  const logoutUser = async () => {
    try {
      await axios.get(`${serverUrl}/user/logout`, { withCredentials: true });
      alert("You are logged out.");
      setLoggedIn(false);
      localStorage.removeItem("user")
    } catch (error) {
      setLoggedIn(false);
      alert("There was an error logging out.");
      console.error(error);
    }
  };

  return (
    <>
      <Link to="/cart" className="position-relative text-light">
        <BsCart2 size={size} />
        {numberOfProducts > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {numberOfProducts}
          </span>
        )}
      </Link>
      <div className="position-relative">
        <FaUserCircle
          size={size}
          className="text-light"
          role="button"
          onClick={async () => {
            const isLoggedIn = await loginStatus();
            if (isLoggedIn) {
              setVisibility((prev) =>
                prev === "d-block" ? "d-none" : "d-block"
              );
            } else {
              navigate("/user/login", { replace: true });
            }
          }}
        />

        {loggedIn ? (
          <ul
            className={`py-3 px-2 bg-dark position-absolute end-0 mt-4 shadow rounded ${visible} top`}
            style={{ minWidth: "180px", zIndex: "10000" }}
          >
            {/* Future Implement */}
            {/* <li className="btn btn-secondary w-100 rounded-0 fw-semibold mb-2 pop" onClick={() => navigate("/user/about")}>
              Your information
            </li> */}
            <li
              className="btn btn-danger w-100 rounded-0 fw-semibold pop"
              onClick={logoutUser}
            >
              Logout
            </li>
          </ul>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
export default MainNavBtn;
