import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${serverUrl}/admin/`, { withCredentials: true })
      .then((response) => {
        setLoggedIn(true);
        // alert(response.data.message);
      })
      .catch((error) => {
        alert(error.response?.data?.message || "Authentication failed");
        navigate("/admin/login");
      });
  }, []);

  return loggedIn ? <Outlet /> : null; // Avoid redirect loop
};

export default Admin;
