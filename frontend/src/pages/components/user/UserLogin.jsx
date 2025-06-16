import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../shared/components/LoginForm";
// import { PositionContext } from "../../App";
import { UserContext } from "../../App";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const navigate = useNavigate();
  // const { basePosition } = useContext(PositionContext);
  const { setUserContact } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent form reload
    const userInfo = { username: username.trim(), password };

    axios
      .post(`${serverUrl}/user/login`, userInfo, {
        withCredentials: true,
      })
      .then((response) => {
        alert(response?.data?.message || "Invalid Username or Password!");
        navigate("/");
        // Set the the collected data to user
        setUserContact(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      })
      .catch((error) => {
        // alert(JSON.parse(error.request.response).message);
        console.log(error)
        alert("Invalid Username or Password!");
      });
  };
  return (
    <div
      className="row m-0 d-flex justify-content-center align-items-center text-bg-dark"
      style={{ minHeight: "100vh" }}
    >
      <button
        className="btn btn-secondary position-absolute top-0 start-0 mx-2 my-3"
        onClick={() => navigate(`/`, {replace: true})}
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
