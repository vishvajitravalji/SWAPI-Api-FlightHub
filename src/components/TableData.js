import React, { useState } from "react";

const TableData = ({ updatedValue, apiData }) => {
  const [searchWord, setSearchWord] = useState("");

  return (
    <div className="tbl-content">
      <table>
        <tbody>
          <input
            type="text"
            placeholder="Search Person"
            onChange={(e) => setSearchWord(e.target.value)}
            hidden={updatedValue !== "people"}
          />
          {apiData
            .filter((val) => {
              return val.name.toLowerCase().includes(searchWord.toLowerCase());
            })
            .map((item) => {
              return (
                <tr key={item.created}>
                  <td>{item.name}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
