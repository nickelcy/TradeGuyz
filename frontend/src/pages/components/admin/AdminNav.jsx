import { MdLogout } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminNav = () => {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const navigate = useNavigate();

  const logout = () => {
    axios
      .get(`${serverUrl}/admin/logout`, { withCredentials: true })
      .then((res) => {
        alert(res.data.message);
        navigate(`/}`);
      })
      .catch((error) => {
        console.error(error);
        alert(error.response?.data?.message || "Logout failed");
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler me-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Centered title */}
        <div className="mx-auto">
          <h5
            className="navbar-brand m-0 text-center"
            style={{ cursor: "pointer" }}
          >
            LOCALLY ADMIN
          </h5>
        </div>

        {/* Right icons */}
        <div className="d-flex align-items-center mx-3">
          <MdLogout
            size={25}
            onClick={logout}
            className="text-danger mx-2"
            style={{ cursor: "pointer" }}
          />
          <AiOutlineUserAdd
            size={25}
            className="text-secondary mx-2"
            style={{ cursor: "pointer" }}
          />
        </div>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="adminNavbar">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admin/uploads">
                Uploads
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Approval
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Reports
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;
