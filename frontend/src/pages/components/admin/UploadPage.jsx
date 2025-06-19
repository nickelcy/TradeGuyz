import axios from "axios";
import { useState, useEffect } from "react";
import CustomSearch from "./components/CustomSearch";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../shared/components/UploadWidget";
import Navbar from "./AdminNav";

const UploadPage = (props) => {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const navigate = useNavigate();
  const [data, setData] = useState({ category: [], brand: [] });
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [filteredBrand, setFilteredBrand] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [store, setStore] = useState("ea"); // Default added so an initial get request can be ran
  const [categoryValue, setCategoryValue] = useState([]);
  const [brandValue, setBrandValue] = useState([]);
  const [tags, setTags] = useState([]);
  const [media, setMedia] = useState([]);
  const [productSource, setProductSource] = useState("");

  const [uploadData, setUploadData] = useState({});

  useEffect(() => {
    setUploadData({
      name: name,
      description: description,
      price: parseInt(price),
      store: store,
      category: categoryValue,
      brand: brandValue,
      tags: tags,
      media: media,
      productSource: productSource,
    });
  }, [
    name,
    description,
    price,
    store,
    categoryValue,
    brandValue,
    tags,
    media,
    productSource,
  ]);

  useEffect(() => {
    if (!store) return;
    const fetchData = async () => {
      try {
        const [resCategory, resBrand] = await Promise.all([
          axios.get(`${serverUrl}/${store}/c`),
          axios.get(`${serverUrl}/${store}/b`),
        ]);

        setData({
          category: resCategory.data,
          brand: resBrand.data,
        });
        setFilteredCategory(resCategory.data);
        setFilteredBrand(resBrand.data);
      } catch (error) {
        console.error("Data fetch error:", error);
      }
    };
    fetchData();
  }, [store]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${serverUrl}/admin/upload`, uploadData, {
        withCredentials: true,
      });
      console.log(res.data);
      alert(res.data.message);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const clear = () => {
    setName("");
    setDescription("");
    setPrice(0);
    setStore("");
    setCategoryValue([]);
    setBrandValue([]);
    setTags([]);
    setMedia([]);
    setProductSource("");
  };

  const cancel = () => {
    clear();
    navigate("/admin");
  };

  return (
    <>
      <Navbar source={"upload"} />
      <div
        className="w-100 h-100 d-flex justify-content-center align-items-center "
        style={{ minWidth: "100%", minHeight: "100vh" }}
      >
        <form
          className="container m- mx-2 text-bg-dark px-4 py-3 overflow-y-auto rounded text-secondary"
          style={{ maxWidth: "500px", maxHeight: "98vh" }}
          onSubmit={(e) => handleSubmit(e)}
        >
          <h3 className="text-light">Product Upload Form</h3>
          <div className="mb-3">
            <label htmlFor="product" className="form-label ">
              Name of Product
            </label>
            <input
              className="form-control"
              id="product"
              name="product"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name of Product"
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="1"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your product in 50 words or more."
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price of Product
            </label>
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input
                type="number"
                id="price"
                name="price"
                className="form-control"
                step="1000.00"
                min="0"
                placeholder="0"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="store" className="form-label">
              Select a store
            </label>
            <select
              className="form-select"
              onChange={(e) => setStore(e.target.value)}
              value={store}
              name="store"
              id="store"
              required
            >
              <option value="" disabled>
                choose a Store
              </option>
              <option value="ea">Electronics & Accessories</option>
              <option value="sp">Spares & Motor-Vehicle Parts</option>
              <option value="cf">Clothing & Fashion</option>
              <option value="hg">Home & Garden</option>
              <option value="bt">Books & Textbooks</option>
              <option value="ft">Fitness & Sports</option>
            </select>
          </div>
          <CustomSearch
            label={"Product Category"}
            value={categoryValue}
            setValue={setCategoryValue}
            placeholder={"Choose Category"}
            filteredArray={filteredCategory}
            setFilteredArray={setFilteredCategory}
            data={data.category}
            required
          />
          <CustomSearch
            label={"Product Brand"}
            value={brandValue}
            setValue={setBrandValue}
            placeholder={"Choose Brand"}
            setFilteredArray={setFilteredBrand}
            filteredArray={filteredBrand}
            data={data.brand}
            required
          />
          <div className="mb-3">
            <label htmlFor="tags" className="form-label">
              Product Tags
            </label>
            <input
              type="text"
              className="form-control"
              id="tags"
              placeholder="Enter tags, separated by commas"
              autoComplete="off"
              onChange={(e) => {
                const input = e.target.value;
                const tagArray = input
                  .split(",")
                  .map((tag) => tag.trim())
                  .filter((tag) => tag !== "");
                setTags(tagArray);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productSource" className="form-label ">
              Product source
            </label>
            <input
              className="form-control"
              id="productSource"
              name="productSource"
              value={productSource}
              onChange={(e) => setProductSource(e.target.value)}
              placeholder="Enter link to product"
              autoComplete="off"
              required
            />
          </div>
          <UploadWidget setImageUrl={setMedia} />
          <div className="w-100 d-flex flex-row justify-content-between">
            <button
              type="button"
              className="btn btn-secondary me-2"
              onClick={() => clear()}
              disabled={media.length !== 0}
            >
              Clear
            </button>
            <div>
              <button
                type="button"
                className="btn btn-danger me-2"
                onClick={() => cancel()}
                disabled={media.length !== 0}
              >
                Back
              </button>
              <button
                type="submit"
                className="btn btn-success"
                disabled={media.length === 0}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default UploadPage;
