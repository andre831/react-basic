import React from "react";


const Button = (props) =>{ 

    return(       
        <button> {props.children} </button>
    );
}


//exports
export default Button;