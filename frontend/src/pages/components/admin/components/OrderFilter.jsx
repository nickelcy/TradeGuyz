import axios from "axios";
const serverUrl = import.meta.env.VITE_SERVER_URL;
import { useEffect, useContext } from "react";
import { FilterContext } from "../Orders";

const OrderFilter = ({ getData }) => {
  const {filter, setFilter } = useContext(FilterContext)

  useEffect(() => {
    const elements = document.querySelectorAll(".collapse.show");
    elements.forEach((element) => {
      // console.log(element);
      element.classList.remove("show");
    });
  }, [filter]);

  const selected = (source) => {
    setFilter(source);
    const links = document.querySelectorAll(".nav-item.order-filter");
    links.forEach((link) => {
      link.classList.remove("fw-bold");
    });
    const current = document.querySelector(`#${source}`);
    current?.classList.add("fw-bold");
  };

  return (
    <nav className="navbar navbar-light mt-3">
      <div className="container-fluid ">
        <div
          className="navbar-nav d-flex flex-row gap-3 gap-sm-5 mx-auto"
          style={{ maxWidth: "500px" }}
        >
          <button
            id="all"
            className="nav-item order-filter nav-link btn btn-link text-dark fw-bold"
            onClick={() => {
              selected("all");
              getData();
            }}
          >
            All
          </button>
          <button
            id="official"
            className="nav-item order-filter nav-link btn btn-link text-dark"
            onClick={() => {
              selected("official");
              getData("official");
            }}
          >
            Official
          </button>
          <button
            id="history"
            className="nav-item order-filter nav-link btn btn-link text-dark"
            onClick={() => {
              selected("history");
              getData("delivered");
            }}
          >
            History
          </button>
        </div>
      </div>
    </nav>
  );
};
export default OrderFilter;
