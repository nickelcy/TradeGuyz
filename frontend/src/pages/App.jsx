import { Route, Routes } from "react-router-dom";
import Home from "./Home";


const App = (props) => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filter/category/:parameter" element={<Home />} />
      <Route path="/filter/brand/:parameter" element={<Home />} />
    </Routes>
  );
};
export default App;