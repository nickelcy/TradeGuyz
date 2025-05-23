import { useParams } from "react-router-dom";
import Navbar from "./components/Navbar";

const Filter = (props) => {
  const { filterType } = props;
  const { parameter } = useParams();

  return (
    <>
      <Navbar />
      <h1>You are trying to filter the {filterType} {parameter} </h1>
    </>
  );
};
export default Filter;
