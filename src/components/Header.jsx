import React from "react";

function Header(){

    let greeting;

    const customStyles = {
        color: ""
    };

    var randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);

    if (randomNumber < 3){
        greeting = "Server 1 is running";
        customStyles.color = "red";
    } else if (randomNumber < 6){
        greeting = "Server 2 is running";
        customStyles.color = "blue";
    } else {
        greeting = "Server 3 is running";
        customStyles.color = "green";
    }

    return(
    <h1 classname="heading" style={customStyles}>{greeting}</h1>
        );
}


export default Header;