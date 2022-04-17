import React from "react";

const PeopleList = ({ peopleList, searchWord }) => {
  return (
    <>
      {peopleList
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
    </>
  );
};

export default PeopleList;
