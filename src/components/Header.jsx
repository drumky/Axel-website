import React from "react";

const Header = () => {

    const time = new Date().getHours();
    console.log(time);

    let greeting;

    const customStyles = {
        color: ""
    };



    // var randomNumber = Math.floor(Math.random() * 10);
    // console.log(randomNumber);

    if (time < 12) {
        greeting = "Good Morning";
        customStyles.color = "yellow";
    } else if (time < 15) {
        greeting = "Good Afternoon";
        customStyles.color = "orange";
    } else if (time < 18) {
        greeting = "Good Afternoon";
        customStyles.color = "red";
    } else {
        greeting = "Good Evening";
        customStyles.color = "green";
    }

    return (
        <h1 className="heading" style={customStyles}>{greeting}</h1>
    );
}


export default Header;