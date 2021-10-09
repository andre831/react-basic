import React, { Component } from "react";

class Button extends Component {    

    render(){

        return(
            
            <div>
                {this.props.title}
                <button> {this.props.children} </button>
            </div>
        )

    }

}

export default Button;