import axios from "axios";
import { useEffect, useState } from "react";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const Status = ({ order, disabled, setData, index }) => {
  const [status, setStatus] = useState({});

  const updateStatus = (orderId, newStatus) => {
    const updated = { oid: orderId, status: newStatus };
    setStatus(updated);
    // console.log(updated);
  };

  useEffect(() => {
    const updateStatusReq = async () => {
      if (!status.oid) return;

      try {
        const response = await axios.patch(
          `${serverUrl}/admin/status`,
          status,
          { withCredentials: true }
        );

        // Update local UI
        setData((prev) =>
          prev.map((item, i) =>
            i === index ? { ...item, status: status.status } : item
          )
        );
      } catch (error) {
        alert(error.response?.data?.message || "There was an error.");
        console.error(error);
      }
    };

    updateStatusReq();
  }, [status]);

  return (
    <ul className="dropdown-menu">
      {["pending", "received", "processing", "delivered"].map((s) => (
        <li key={s}>
          <button
            className="dropdown-item"
            onClick={() => updateStatus(order.oid, s)}
          >
            {s}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Status;
