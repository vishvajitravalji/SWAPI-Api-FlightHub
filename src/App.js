import "./App.css";
import { useState } from "react";
import PeopleList from "./components/PeopleList";
import PlanetList from "./components/PlanetList";
import StarshipList from "./components/StarshipList";

function App() {
  const [peopleList, setPeopleList] = useState([]);
  const [planetList, setPlanetList] = useState([]);
  const [starshipList, setStarshipList] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  // Loading people data from backend API
  const loadPeopleData = async () => {
    const response = await fetch(
      "http://localhost:4300/rest/?action=Apis&type=people"
    );
    const data = await response.json();
    const temp = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].results.length; j++) {
        temp.push(data[i].results[j]);
      }
    }
    setPeopleList(temp);
  };

  // Loading planet data from backend API
  const loadPlanetData = async () => {
    const response = await fetch(
      "http://localhost:4300/rest/?action=Apis&type=planets"
    );
    const data = await response.json();
    const temp = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].results.length; j++) {
        temp.push(data[i].results[j]);
      }
    }
    setPlanetList(temp);
  };

  // Loading starship data from backend API
  const loadStarshipData = async () => {
    const response = await fetch(
      "http://localhost:4300/rest/?action=Apis&type=starships"
    );
    const data = await response.json();
    const temp = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].results.length; j++) {
        temp.push(data[i].results[j]);
      }
    }
    setStarshipList(temp);
  };

  return (
    <div className="container">
      <div className="tbl-header">
        <table>
          <thead>
            <tr>
              <th>
                <button className="button" onClick={loadPeopleData}>
                  Load People
                </button>
                <input
                  type="text"
                  placeholder="Search Person"
                  onChange={(e) => setSearchWord(e.target.value)}
                />
              </th>
              <th>
                <button className="button" onClick={loadPlanetData}>
                  Load Planets
                </button>
              </th>
              <th>
                <button className="button" onClick={loadStarshipData}>
                  Load Starships
                </button>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table>
          <tbody>
            <tr>
              <td>
                <PeopleList peopleList={peopleList} searchWord={searchWord} />
              </td>
              <td>
                <PlanetList planetList={planetList} />
              </td>
              <td>
                <StarshipList starshipList={starshipList} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
