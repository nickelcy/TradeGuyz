const Login = (props) => {
  return (
    <form className="col-10 col-sm-4 text-bg-secondary text-center pb-4 px-0 rounded" style={{transform: "translateY(-10%)"}}>
      <h2 className="mt-4 mb-4 ">Admin Login</h2>
      <div className="form-floating mb-2 w-75 m-auto ">
        <input
          className="form-control"
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
        <label htmlFor="username">Username</label>
      </div>
      <div className="form-floating mb-5 w-75 m-auto">
        <input
          className="form-control"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <label htmlFor="password" className="form-text">
          Password
        </label>
      </div>

      <button type="submit" className="btn btn-success w-75">
        Sign in
      </button>
    </form>
  );
};
export default Login;
