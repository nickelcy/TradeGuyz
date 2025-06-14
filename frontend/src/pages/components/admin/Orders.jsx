import { useState, createContext, useEffect } from "react";
import axios from "axios";
import Navbar from "./AdminNav";
import OrderFilter from "./components/OrderFilter";
import OrderCard from "./components/OrderCard";
const serverUrl = import.meta.env.VITE_SERVER_URL;
export const FilterContext = createContext();

const Orders = () => {
  const [data, setData] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [filter, setFilter] = useState("all");

  const getData = async (param) => {
    let response = [];
    try {
      if (param === "official") {
        response = await axios.get(`${serverUrl}/admin/orders?param=official`, {
          withCredentials: true,
        });
        setDisabled(false);
      } else if (param === "delivered") {
        response = await axios.get(
          `${serverUrl}/admin/orders?param=delivered`,
          {
            withCredentials: true,
          }
        );
        setDisabled(true);
      } else {
        response = await axios.get(`${serverUrl}/admin/orders`, {
          withCredentials: true,
        });
        setDisabled(false);
      }
      // console.log(response?.data);
      setData(response?.data || []);
    } catch (error) {
      alert(error.response.data.message || "There was an error.");
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const OrderSection = ({ data, disabled, setData, getData }) => {
    if (data.length > 0) {
      return data.map((order, index) => (
        <div
          key={order.oid}
          className="w-100 bg-dark mx-auto text-light p-3 m-2 rounded"
          style={{ maxWidth: "500px" }}
        >
          <OrderCard
            order={order}
            disabled={disabled}
            setData={setData}
            index={index}
            getData={getData}
          />
        </div>
      ));
    } else {
      return <p className="text-center text-muted mt-4">No orders found.</p>;
    }
  };

  return (
    <>
      <FilterContext.Provider value={{ filter, setFilter }}>
        <Navbar source={"order"} />
        <OrderFilter getData={getData} />
        <div className="container-fluid mt-2 my-2">
          {
            <OrderSection
              data={data}
              disabled={disabled}
              setData={setData}
              getData={getData}
            />
          }
        </div>
      </FilterContext.Provider>
    </>
  );
};
export default Orders;
