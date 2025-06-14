import Status from "./Status";
import { formatPrice, formatDate } from "../../shared/utils/helpers";
import { useState, useContext } from "react";
import axios from "axios";
import { FilterContext } from "../Orders";
const serverUrl = import.meta.env.VITE_SERVER_URL;

const OrderCard = ({ order, disabled, setData, index, getData }) => {
  const [description, setDescription] = useState(order.description);
  const [visibility, setVisibility] = useState(false);
  const { filter } = useContext(FilterContext);

  const setDBDescription = async () => {
    try {
      const result = await axios.patch(
        `${serverUrl}/admin/description`,
        { oid: order.oid, description: description },
        { withCredentials: true }
      );
      getData(filter);
    } catch (error) {
      alert("An error occurred.");
      console.log(error);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div>{`Id#${order.oid} (${order.quantity}) ${order.name}`}</div>
        <div className="dropdown">
          <button
            disabled={disabled}
            className={`btn dropdown-toggle ${
              order.status === "pending"
                ? "btn-danger"
                : order.status === "received"
                ? "btn-warning"
                : order.status === "processing"
                ? "btn-primary"
                : order.status === "delivered"
                ? "btn-success"
                : "btn-secondary"
            }`}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {order.status}
          </button>
          <Status
            order={order}
            disabled={disabled}
            setData={setData}
            index={index}
          />
        </div>
      </div>
      <hr className="mt-3 mb-0 "></hr>
      <button
        type="button"
        className="text-secondary btn"
        data-bs-toggle="collapse"
        data-bs-target={`#details${order.oid}${index}`}
        aria-expanded="false"
      >
        Show Details
      </button>
      <div className="collapse px-2 pt-1" id={`details${order.oid}${index}`}>
        {/* Name & Method */}
        <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-start align-items-sm-center my-2 my-sm-0  p-2">
          <b>
            {order.firstname} {order.lastname}
          </b>
          <p className="p-0 m-0">
            Method:{" "}
            <span className="text-secondary fw-bold">{order.collection}</span>
          </p>
        </div>
        {/* Address only if set */}
        {order.Address ? (
          <p className="p-0 m-0">
            Address:{" "}
            <span className="text-secondary fw-bold">
              {order.address ? order.address : "not-set"}
            </span>
          </p>
        ) : (
          <></>
        )}
        {/* Created & Finalized */}
        <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-start align-items-sm-center my-2 my-sm-0  p-2">
          <p className="p-0 m-0">
            Created:{" "}
            <span className="text-secondary fw-bold fw-bold">
              {/* {new Date(order.initialized).toLocaleDateString()} */}
              {formatDate(order.initialized)}
            </span>
          </p>
          <p className="p-0 m-0">
            Finalized:{" "}
            <span className="text-secondary fw-bold">
              {order.finalized ? formatDate(order.finalized) : "pending"}
            </span>
          </p>
        </div>
        {/* Email & Telephone */}
        <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-start align-items-sm-center my-2 my-sm-0 p-2">
          <p className="p-0 m-0">
            Email: <span className="text-secondary fw-bold">{order.email}</span>
          </p>
          <p className="p-0 m-0">
            Telephone:{" "}
            <span className="text-secondary fw-bold">
              592 {order.telephone}
            </span>
          </p>
        </div>
        {/* Product & Order */}
        <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-start align-items-sm-center my-2 my-sm-0  p-2">
          <p className="p-0 m-0">
            Product:{" "}
            <span className="text-secondary fw-bold">{order.productType}</span>
          </p>
          <p className="p-0 m-0">
            Order: <span className="text-secondary fw-bold">{order.type}</span>
          </p>
        </div>
        {/* Code and Total */}
        <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-start align-items-sm-center my-2 my-sm-0  p-2">
          <p className="p-0 m-0">
            Code: <span className="text-secondary fw-bold">{order.code}</span>
          </p>
          <p className="p-0 m-0">
            Total:{" "}
            <span className="text-secondary fw-bold">
              {formatPrice(order.total_price)}
            </span>
          </p>
        </div>
        {/* Text Area */}
        <div className="form-floating mt-3 ">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            style={{ height: "100px" }}
            value={description}
            onChange={(e) => {
              setVisibility(true);
              setDescription(e.target.value);
            }}
          ></textarea>
          <label htmlFor="floatingTextarea">Comments</label>
        </div>
        <button
          className={`btn fs-6 mt-1 btn-success ${
            visibility ? "d-block" : "d-none"
          }`}
          onClick={() => {
            setVisibility(false);
            setDBDescription()
          }}
        >
          Save comment
        </button>
      </div>
    </>
  );
};

export default OrderCard;
