import { useEffect, useState } from "react";
const Contact = ({ setBuyer }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setNumber] = useState("");

  const buyerInformation = {
    firstname,
    lastname,
    email,
    telephone,
  };

  useEffect(() => {
    setBuyer(buyerInformation);
  }, [firstname, lastname, email, telephone]);

  useEffect(() => {
    try {
      const storedGuest = JSON.parse(localStorage.getItem("user"));
      if (storedGuest) {
        setFirstname(storedGuest.firstname || "");
        setLastname(storedGuest.lastname || "");
        setEmail(storedGuest.email || "");
        setNumber(storedGuest.telephone || "");
      }
    } catch {
      console.log("There was an error parsing guest")
      // Handle JSON parse error silently or log
    }
  }, []);

  return (
    <div className="row mt-3 " id="ContactSection">
      <div className="col-12">
        <h2>Confirm Contact Information</h2>

        <div className="input-group w-100 mb-1">
          <div className="form-floating">
            <input
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              value={firstname}
              // defaultValue={firstname}
              className="form-control"
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
              required
            />
            <label htmlFor="firstname">First Name</label>
          </div>
          <div className="form-floating">
            <input
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              value={lastname}
              className="form-control"
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
              required
            />
            <label htmlFor="lastname">Last Name</label>
          </div>
        </div>

        <div className="input-group">
          <div className="form-floating mb-1">
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="email"
              aria-describedby="emailHelp"
              required
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>

        <div className="input-group mb-1">
          <span className="input-group-text" id="country-code">
            592
          </span>
          <div className="form-floating">
            <input
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              value={telephone}
              type="tel"
              className="form-control"
              id="telephone"
              name="telephone"
              placeholder="687-1016"
              pattern="[0-9]{3}-[0-9]{4}"
              required
            />
            <label htmlFor="telephone">Telephone (Example: 687-1016)</label>
          </div>
        </div>
        <div className="form-text text-light px-2">
          Your information will only be used to contact you and will not be
          shared with others.
        </div>
      </div>
    </div>
  );
};
export default Contact;
