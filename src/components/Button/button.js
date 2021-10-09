import React, { Component } from "react";
import PropTypes from 'prop-types';


class Button extends Component {    
    
    //set default behavior
    static defaultProps = { 

        title: 'Comportamento Default'

    }



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