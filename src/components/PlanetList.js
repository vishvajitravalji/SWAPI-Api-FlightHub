import React from "react";

const PlanetList = ({ planetList }) => {
    return (
        <>
            {planetList.map((item) => {
                return (
                    <tr key={item.created}>
                        <td>{item.name}</td>
                    </tr>
                );
            })}
        </>
    );
};

export default PlanetList;
