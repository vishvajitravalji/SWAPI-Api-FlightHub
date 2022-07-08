import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TableData from "./components/TableData";

function App() {
  const [apiData, setApiData] = useState([]);
  const [updatedValue, setUpdatedValue] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadPlanetData(updatedValue);
  }, [updatedValue]);

  const loadPlanetData = async (updatedValue) => {
    const response = await fetch(
      `http://localhost:4300/rest/?action=Apis&type=${updatedValue}`
    );
    const data = await response.json();
    const temp = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].results.length; j++) {
        temp.push(data[i].results[j]);
      }
    }
    setApiData(temp);
    setIsLoading(false);
  };

  const handleOnClick = (e) => {
    setUpdatedValue(e.target.value);
    setIsLoading(true);
  };

  return (
    <div className="container">
      <Navbar handleOnClick={handleOnClick} />
      {isLoading ? (
        <div className="tbl-loading">Loading {updatedValue}...</div>
      ) : (
        <TableData updatedValue={updatedValue} apiData={apiData} />
      )}
    </div>
  );
}

export default App;
