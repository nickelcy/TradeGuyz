import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MyCart from "./MyCart";
import axios from "axios";
import { useState, useEffect } from "react";
import Payment from "./Payment";
import FilterRoutes from "./components/routes/FilterRoutes";
import LandingPage from "./LandingPage";
import Admin from "./Admin";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminLogin from "./components/admin/AdminLogin";
import UserLogin from "./components/user/UserLogin";
import User from "./User";
import UploadPage from "./components/admin/UploadPage";
import UserInfo from "./components/user/UserInfo";
import UserRegister from "./components/user/UserRegister";
import { createContext } from "react";
export const PositionContext = createContext();

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, addToCart] = useState([]);
  const [chosenProduct, setChosenProduct] = useState(false);
  const [basePosition, setBasePosition] = useState("");

  return (
    <PositionContext.Provider value={{basePosition, setBasePosition}}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/:code"
          element={
            <Home
              products={products}
              addToCart={addToCart}
              cart={cart}
              setProducts={setProducts}
            />
          }
        />

        {FilterRoutes({ addToCart, cart, chosenProduct, setChosenProduct })}

        <Route
          path="/cart"
          element={<MyCart cart={cart} addToCart={addToCart} />}
        />

        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user" element={<User />}>
          <Route
            path="payment"
            element={<Payment cart={cart} addToCart={addToCart} />}
          />
          <Route path="about" element={<UserInfo />} />
        </Route>
        <Route path="/user/register" element={<UserRegister />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminDashboard />} />
          <Route path="uploads" element={<UploadPage />} />
        </Route>
      </Routes>
    </PositionContext.Provider>
  );
};

export default App;
