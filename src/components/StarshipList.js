import React from "react";

const StarshipList = ({ starshipList }) => {
    return (
        <>
            {starshipList.map((item) => {
                return (
                    <tr key={item.created}>
                        <td>{item.name}</td>
                    </tr>
                );
            })}
        </>
    );
};

export default StarshipList;
