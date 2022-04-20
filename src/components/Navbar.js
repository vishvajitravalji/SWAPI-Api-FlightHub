import React from "react";

const Navbar = ({ handleOnClick }) => {
  return (
    <div className="tbl-header">
      <table>
        <thead>
          <tr>
            <th>
              <button value={"people"} onClick={handleOnClick}>
                Load People
              </button>
              <button value={"planets"} onClick={handleOnClick}>
                Load Planets
              </button>
              <button value={"starships"} onClick={handleOnClick}>
                Load Starships
              </button>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Navbar;
