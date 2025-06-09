import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GroupedFilters = () => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [brand, setBrand] = useState("none");
  const [category, setCategory] = useState("none");
  const [range, setRange] = useState("none");

  useEffect(() => {
    const savedState = localStorage.getItem("showFilters");
    setShowFilters(savedState === "true"); // Parse string to boolean
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("showFilters", showFilters);
    navigate(`/filter/multi/${brand}/${category}/${range}`);
  };

  const toggleFilters = () => {
    setShowFilters((prev) => {
      const newState = !prev;
      localStorage.setItem("showFilters", newState);
      return newState;
    });
  };

  return (
    <form className="container py-3" onSubmit={handleSubmit}>
      <div className="row g-2 justify-content-center">
        {/* Brand select */}
        <div className={`col-12 col-sm-6 col-md-4 ${!showFilters && "d-none"}`}>
          <select
            className="form-select"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="none">Select Brand</option>
            {[
              "Apple",
              "Samsung",
              "Sony",
              "Dell",
              "HP",
              "Lenovo",
              "Microsoft",
              "Logitech",
              "Bose",
              "JBL",
              "Google",
              "Razer",
            ].map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        {/* Category select */}
        <div className={`col-12 col-sm-6 col-md-4 ${!showFilters && "d-none"}`}>
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="none">Select Category</option>
            {[
              "Phones",
              "Laptops",
              "Tablets",
              "Audio",
              "Gaming",
              "Wearables",
              "Cameras",
              "TV & Media",
              "Accessories",
              "Smart Home",
              "Storage",
              "Networking",
            ].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range select */}
        <div className={`col-12 col-sm-6 col-md-4 ${!showFilters && "d-none"}`}>
          <select
            className="form-select"
            value={range}
            onChange={(e) => setRange(e.target.value)}
          >
            <option value="none">Select Price Range</option>
            <option value="100">Under $100</option>
            <option value="500">Under $500</option>
            <option value="1000">Under $1000</option>
            <option value="2000">Under $2000</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="col-12 d-flex justify-content-center gap-3 pt-2">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={toggleFilters}
          >
            {showFilters ? "Hide Filter" : "Show Filter"}
          </button>
          <button type="submit" className="btn btn-outline-success">
            Apply Filter
          </button>
        </div>
      </div>
    </form>
  );
};

export default GroupedFilters;
