import Navbar from "./AdminNav";
import axios from "axios";
import { useState, useEffect } from "react";
import Pie from "./components/PieCharts";
const reportApi = import.meta.env.VITE_REPORTAPI_URL;

const AdminDashboard = (props) => {
  const [stat1, setStat1] = useState({});
  const [store, setStore] = useState("ea");
  const [storeClass, setStoreClass] = useState(
    "text-light text-decoration-none"
  );

  useEffect(() => {
    getEndPoint(`product-inventory/${store}`);
  }, [store]);

  const getEndPoint = async (endPoint) => {
    try {
      const response = await axios.get(`${reportApi}/${endPoint}`);
      setStat1(response.data);
      setStoreClass("text-light text-decoration-none");
    } catch (error) {
      console.error(error.response.data.error);
      alert(error.response.data.error);
      setStoreClass("text-danger text-decoration-line-through");
    }
  };
  // console.log(stat1);

  return (
    <div>
      <Navbar source={"dashboard"}/>
      <h5 className="container-fluid text-center mt-5">
        Admin Pages:{" "}
        <span className="text-success">Development in progress</span>
      </h5>
      <br />
      <div
        className="container p-5 d-flex flex-column justify-content-center align-items-center position-relative text-bg-dark"
        style={{
          maxHeight: "fit-content",
          maxWidth: "500px",
          backgroundColor: "#efefef",
        }}
      >
        <select
          name="store"
          id="store"
          className="form-control position-absolute d-block top-0 start-0 m-2"
          style={{ maxWidth: "fit-content" }}
          onChange={(e) => {
            setStore(e.target.value);
          }}
        >
          <option value="ea">Electronics & Accessories</option>
          <option value="sp">Spares & Parts</option>
          {/* <option value="gl">General Store</option> */}
          {/* <option value="cf">Clothing & Fashion</option> */}
          {/* <option value="hg">Home & Garden</option> */}
          {/* <option value="bt">Books & Textbooks</option> */}
          {/* <option value="ft">Fitness & Sports</option> */}
        </select>

        <p className={`fw-bold mt-5 ${storeClass} `}>
          {store.toLocaleUpperCase()}'s Product Demographic
        </p>
        <Pie propData={stat1} />
      </div>
    </div>
  );
};
export default AdminDashboard;
