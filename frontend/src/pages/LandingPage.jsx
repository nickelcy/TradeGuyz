import axios from "axios";
import Navbar from "./components/LandingPage/Navbar";
import Carousel from "./components/LandingPage/components/Carousel";
import Store from "./components/LandingPage/components/Store";
import { useState, useEffect } from "react";
const serverUrl = import.meta.env.VITE_SERVER_URL;

const LandingPage = () => {

  const [stores, setStores] = useState([])

  useEffect(() => {
    axios
      .get(`${serverUrl}/stores`)
      .then((response) => {
        setStores(response.data);
        console.log(stores)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="showContent4">
        <Navbar />
      </div>
      <Carousel />
      <section className="mt-5 d-flex justify-content-center">

      </section>

      <section className="mt-5 mx-1 d-flex flex-column flex-sm-row gap-4 justify-content-center align-items-center showContent5">
        {stores? stores.map((store, index) => (
          <Store key={store.name} index={index} store={store}/>
        )): <></>}
      </section>
    </div>
  );
};

export default LandingPage;
