import React from "react";

const Header = () => {

    let greeting;

    const customStyles = {
        color: ""
    };

    var randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);

    if (randomNumber < 3) {
        greeting = "H.O.M.E";
        customStyles.color = "orange";
    } else if (randomNumber < 6) {
        greeting = "H.O.M.E";
        customStyles.color = "red";
    } else {
        greeting = "H.O.M.E";
        customStyles.color = "green";
    }

    return (
        <h1 className="heading" style={customStyles}>{greeting}</h1>
    );
}


export default Header;