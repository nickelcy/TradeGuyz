import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../shared/components/LoginForm";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent form reload
    const adminInfo = { username, password };

    axios
      .post(`${serverUrl}/admin/login`, adminInfo, {
        withCredentials: true,
      })
      .then((response) => {
        alert(`Welcome back, ${response.data.admin.username}!`);
        navigate("/admin");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div
      className="row m-0 d-flex justify-content-center align-items-center text-bg-dark"
      style={{ minHeight: "100vh" }}
    >
      <LoginForm
        source={"Admin"}
        handleSubmit={handleSubmit}
        setUsername={setUsername}
        setPassword={setPassword}
        username={username}
        password={password}
      />
    </div>
  );
};

export default AdminLogin;
