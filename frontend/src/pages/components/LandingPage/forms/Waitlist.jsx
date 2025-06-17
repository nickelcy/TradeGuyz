import { useEffect, useRef } from "react";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom";

const Waitlist = () => {
  const param = useParams();
  const formContainerRef = useRef(null);

  useEffect(() => {
    if (!formContainerRef.current) return;

    const script = document.createElement("script");
    script.src =
      "https://formfacade.com/include/113816514998339997060/form/1FAIpQLSeI3X7f8wVW8jjYgULDKximdTe75rqwXolWLQjXap_EMUi9UQ/bootstrap.js?div=ff-compose";
    script.async = true;
    script.defer = true;
    formContainerRef.current.appendChild(script);

    return () => {
      if (formContainerRef.current) {
        formContainerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="text-white bg-dark">
      {param.formId && <Navbar />}
      <div className="container p-3" id="ff-compose" ref={formContainerRef} />
    </div>
  );
};

export default Waitlist;
