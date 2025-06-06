const LoginForm = ({
  source,
  handleSubmit,
  setUsername,
  setPassword,
  username,
  password,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="col-10 col-sm-4 text-bg-secondary text-center pb-4 px-0 rounded"
      style={{ transform: "translateY(-10%)" , maxWidth: "500px"}}
    >
      <h2 className="mt-4 mb-4">{source} Login</h2>
      <div className="form-floating mb-2 w-75 m-auto">
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
          type="text"
          name="username"
          id="username"
          value={username}
          placeholder="Username"
          required
        />
        <label htmlFor="username">Username</label>
      </div>
      <div className="form-floating mb-4 w-75 m-auto">
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          type="password"
          name="password"
          id="password"
          value={password}
          placeholder="Password"
          required
        />
        <label htmlFor="password">Password</label>
      </div>
      <button type="submit" className="btn btn-success w-75">
        Sign in
      </button>

      {source === "User" ? (
        <p className="mt-4">
          Don't have an account?{" "}
          <a href="/user/register" className="text-warning ">
            Click here.
          </a>
        </p>
      ) : (
        <></>
      )}
    </form>
  );
};
export default LoginForm;
