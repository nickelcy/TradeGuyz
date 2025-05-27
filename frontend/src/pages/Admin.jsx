import Login from "./components/admin/Login";

const Admin = (props) => {
  return (
    <div
      className="row m-0 d-flex justify-content-center align-items-center  text-bg-dark "
      style={{ minHeight: "100vh", maxHeigh: "100vh" }}
    >
      <Login />
    </div>
  );
};
export default Admin;
