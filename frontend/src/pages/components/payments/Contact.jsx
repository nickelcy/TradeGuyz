import axios from "axios";
import { useEffect, useState } from "react";
const serverUrl = import.meta.env.VITE_SERVER_URL;

const Contact = ({ setBuyer }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setNumber] = useState("");
  const [update, setUpdate] = useState(false);

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
      console.log("There was an error parsing guest");
      // Handle JSON parse error silently or log
    }
  }, []);

  useEffect(() => {
    const updateTelephone = async () => {
      if (update) {
        try {
          const res = await axios.patch(
            `${serverUrl}/user/update-tel`,
            { telephone },
            { withCredentials: true }
          );
          // console.log(res);
        } catch (error) {
          console.log(error);
          alert("Error updating your information.");
        }
      }
    };

    updateTelephone();
    setUpdate(false)
  }, [update, telephone, serverUrl]);

  return (
    <div className="row" id="ContactSection">
      <div className="col-12">
        <h5>Contact Information</h5>
        <div className="form-text text-light">
          Your info is private and only used to contact you.
        </div>

        <div className="input-group w-100 mb-1">
          <div className="form-floating">
            <input
              // onChange={(e) => {
              //   setFirstname(e.target.value);
              // }}
              value={firstname}
              className="form-control"
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
              required
              readOnly
            />
            <label htmlFor="firstname">First Name</label>
          </div>
          <div className="form-floating">
            <input
              // onChange={(e) => {
              //   setLastname(e.target.value);
              // }}
              value={lastname}
              className="form-control"
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
              required
              readOnly
            />
            <label htmlFor="lastname">Last Name</label>
          </div>
        </div>

        <div className="input-group">
          <div className="form-floating mb-1">
            <input
              // onChange={(e) => {
              //   setEmail(e.target.value);
              // }}
              value={email}
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="email"
              aria-describedby="emailHelp"
              required
              readOnly
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
                setUpdate(true);
                setNumber(e.target.value);
              }}
              value={telephone}
              type="tel"
              className="form-control"
              id="telephone"
              name="telephone"
              placeholder="687-1016"
              // pattern="[0-9]{3}[0-9]{4}"
              required
            />
            <label htmlFor="telephone">Telephone (Example: 6871016)</label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
