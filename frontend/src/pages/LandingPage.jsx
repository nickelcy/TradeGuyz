import axios from "axios";
import Navbar from "./components/LandingPage/Navbar";
import Carousel from "./components/LandingPage/components/Carousel";
import Store from "./components/LandingPage/components/Store";
import { useState, useEffect } from "react";
import Form from "./components/LandingPage/components/Form";
const serverUrl = import.meta.env.VITE_SERVER_URL;
import Waitlist from "./components/LandingPage/forms/Waitlist";
import Footer from "./components/shared/components/Footer";

const LandingPage = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    axios
      .get(`${serverUrl}/stores`)
      .then((response) => {
        setStores(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="showContent4">
        <Navbar />
      </div>

      <Carousel />

      <Form />

     <div>
       {/* <h4 className="text-center mt-2 text-muted">Buy and Sell from our local Stores</h4> */}
        {/* <section className="mt-4 mb-5 mx-2 d-flex flex-column flex-sm-row gap-4 justify-content-center align-items-center showContent5">
          {stores ? (
            stores.map((store, index) => (
              <Store key={store.name} index={index} store={store} />
            ))
          ) : (
            <></>
          )}
        </section> */}
     </div>
      <Waitlist />
      
      <Footer />
    </div>

  );
};

export default LandingPage;
