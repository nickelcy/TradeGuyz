import { useContext } from "react";
import { PositionContext } from "../../../App";
const defaultImg = import.meta.env.VITE_DEFAULT_PRODUCT_IMAGE;
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Store = ({ index, store }) => {
  const { setBasePosition } = useContext(PositionContext);
  const navigate = useNavigate();
  return (
    <div
      className="text-bg-dark px-3 py-2 rounded"
      style={{ maxWidth: "320px", maxHeight: "" }}
    >
      <p className="px-1 pt-2 fs-6">{store.name}</p>
      <div className="row gx-1 gy-1 m-0 p-0 ">
        <div
          className="col-6 "
          style={{ maxHeight: "110px", minHeight: "110px" }}
        >
          <img
            className="rounded"
            src={store.media && store.media[0] ? store.media[0] : defaultImg}
            alt="storename"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div
          className="col-6"
          style={{ maxHeight: "110px", minHeight: "110px" }}
        >
          <img
            className="rounded"
            src={store.media && store.media[1] ? store.media[1] : defaultImg}
            alt="storename"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div
          className="col-6"
          style={{ maxHeight: "110px", minHeight: "110px" }}
        >
          <img
            className="rounded"
            src={store.media && store.media[2] ? store.media[2] : defaultImg}
            alt="storename"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div
          className="col-6"
          style={{ maxHeight: "110px", minHeight: "110px" }}
        >
          <img
            className="rounded"
            src={store.media && store.media[3] ? store.media[3] : defaultImg}
            alt="storename"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>

      <p className="px-1 pt-2 mb-3 fs-6 text-secondary">{store.description}</p>
      <p
        className="px-2 text-primary fw-bold"
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate(store.link);
          setBasePosition(store.link);
        }}
      >
        Visit store{" "}
        <span>
          <IoIosArrowRoundForward />
        </span>
      </p>
    </div>
  );
};
export default Store;
