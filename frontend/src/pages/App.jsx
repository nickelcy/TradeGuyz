import { createContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";

export const PositionContext = createContext();
export const CartContext = createContext();
export const SelectedProductContext = createContext();
export const UserContext = createContext();

import LandingPage from "./LandingPage";
import About from "./components/LandingPage/pages/About";
import Referrer from "./components/LandingPage/pages/Referrer";
import Seller from "./components/LandingPage/pages/Seller";
import Business from "./components/LandingPage/pages/Business";
import Waitlist from "./components/LandingPage/forms/Waitlist";

import Admin from "./Admin";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminLogin from "./components/admin/AdminLogin";
import Orders from "./components/admin/Orders"
import UploadPage from "./components/admin/UploadPage";

import User from "./User";
import Home from "./Home";
import UserLogin from "./components/user/UserLogin";
import UserInfo from "./components/user/UserInfo";
import UserRegister from "./components/user/UserRegister";
import Payment from "./Payment";

import "./components/shared/styles/components.css";
// import FilterRoutes from "./components/filter/FilterRoutes"; // This functionality will be implemented in the future

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, addToCart] = useState([]);
  const [chosenProduct, setChosenProduct] = useState(false);
  const [basePosition, setBasePosition] = useState("");
  const [userContact, setUserContact] = useState({});

  useEffect(() => {
    addToCart(JSON.parse(localStorage.getItem("cart") || "[]"));
    if (localStorage.getItem("user")) {
      setUserContact(localStorage.getItem("user"));
    }
  }, []);

  return (
    <UserContext.Provider value={{ userContact, setUserContact }}>
      <SelectedProductContext.Provider
        value={{ chosenProduct, setChosenProduct }}
      >
        <CartContext.Provider value={{ cart, addToCart }}>
          <PositionContext.Provider value={{ basePosition, setBasePosition }}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/referrer" element={<Referrer />} />
              <Route path="/seller" element={<Seller />} />
              <Route path="/business" element={<Business />} />
              <Route path="/form/:formId" element={<Waitlist />} />
              <Route
                path="/:code"
                element={
                  <Home
                    products={products}
                    addToCart={addToCart}
                    setProducts={setProducts}
                  />
                }
              />

              {/* {FilterRoutes({
                addToCart,
                cart,
                chosenProduct,
                setChosenProduct,
              })} */}

              <Route
                path="/cart"
                element={<Cart cart={cart} addToCart={addToCart} />}
              />

              <Route path="/user/login" element={<UserLogin />} />
              <Route path="/user/register" element={<UserRegister />} />
              <Route path="/user" element={<User />}>
                <Route
                  path="payment"
                  element={<Payment cart={cart} addToCart={addToCart} />}
                />
                <Route path="about" element={<UserInfo />} />
              </Route>

              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<Admin />}>
                <Route index element={<AdminDashboard />} />
                <Route path="uploads" element={<UploadPage />} />
                <Route path="orders" element={<Orders />} />
              </Route>
            </Routes>
          </PositionContext.Provider>
        </CartContext.Provider>
      </SelectedProductContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
