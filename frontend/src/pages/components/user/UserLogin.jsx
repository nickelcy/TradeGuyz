import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../shared/components/LoginForm";
import { PositionContext } from "../../App";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const navigate = useNavigate();
  const { basePosition } = useContext(PositionContext);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent form reload
    const userInfo = { username, password };

    axios
      .post(`${serverUrl}/user/login`, userInfo, {
        withCredentials: true,
      })
      .then((response) => {
        alert(response?.data?.message || "Invalid Username or Password!");
        navigate(`/${basePosition}`);
      })
      .catch((error) => {
        alert(JSON.parse(error.request.response).message);
        alert("Invalid Username or Password!");
      });
  };
  console.log(basePosition);
  return (
    <div
      className="row m-0 d-flex justify-content-center align-items-center text-bg-dark"
      style={{ minHeight: "100vh" }}
    >
      <button
        className="btn btn-secondary position-absolute top-0 start-0 mx-2 my-3"
        onClick={() => navigate(`/${basePosition}`)}
        style={{ maxWidth: "125px" }}
      >
        ← Go back
      </button>

      <LoginForm
        source={"User"}
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
