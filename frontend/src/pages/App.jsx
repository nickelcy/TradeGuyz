import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import { useState } from "react";
import Payment from "./Payment";
// import FilterRoutes from "./components/filter/FilterRoutes"; // This functionality will be implemented in the future
import LandingPage from "./LandingPage";
import Admin from "./Admin";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminLogin from "./components/admin/AdminLogin";
import UserLogin from "./components/user/UserLogin";
import User from "./User";
import UploadPage from "./components/admin/UploadPage";
import UserInfo from "./components/user/UserInfo";
import UserRegister from "./components/user/UserRegister";
import { createContext, useEffect } from "react";
import About from "./components/LandingPage/pages/About";
import Referrer from "./components/LandingPage/pages/Referrer";
import Seller from "./components/LandingPage/pages/Seller";
import Business from "./components/LandingPage/pages/Business";
import "./components/shared/styles/components.css";
export const PositionContext = createContext();
export const CartContext = createContext();
export const SelectedProductContext = createContext();
export const UserContext = createContext();

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
              </Route>
            </Routes>
          </PositionContext.Provider>
        </CartContext.Provider>
      </SelectedProductContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
