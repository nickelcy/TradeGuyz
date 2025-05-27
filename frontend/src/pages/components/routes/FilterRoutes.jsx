import { Route } from "react-router-dom";
import Filter from "../../Filter";

const FilterRoutes = ({ addToCart, cart, chosenProduct, setChosenProduct }) => (
  <>
    <Route
      path="/filter/brand/:parameter1"
      element={
        <Filter
          location="/filter/brand"
          src="brandFilter"
          addToCart={addToCart}
          cart={cart}
          chosenProduct={chosenProduct}
          setChosenProduct={setChosenProduct}
        />
      }
    />
    <Route
      path="/filter/category/:parameter1"
      element={
        <Filter
          location="/filter/category"
          src="categoryFilter"
          addToCart={addToCart}
          cart={cart}
          chosenProduct={chosenProduct}
          setChosenProduct={setChosenProduct}
        />
      }
    />
    <Route
      path="/filter/multi/:parameter1/:parameter2/:parameter3"
      element={
        <Filter
          location="/filter/multi"
          src="multiFilter"
          addToCart={addToCart}
          cart={cart}
          chosenProduct={chosenProduct}
          setChosenProduct={setChosenProduct}
        />
      }
    />
    <Route
      path="/search/:parameter1"
      element={
        <Filter
          location="/search"
          src="search"
          addToCart={addToCart}
          cart={cart}
          chosenProduct={chosenProduct}
          setChosenProduct={setChosenProduct}
        />
      }
    />
  </>
);

export default FilterRoutes;