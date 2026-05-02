import React from "react";

const H1 = (props) => {
    return (
        <>
            <h1>{props.title  || "No Tittle provided"}</h1>
            <p>{props.desc  || "No description provided"}</p>
        </>

    );
};
export default H1;


