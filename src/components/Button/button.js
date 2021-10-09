import React, { Component } from "react";
import PropTypes from 'prop-types';


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

//set default behavior
Button.defaultProps = { 

    title: 'Default Behavior '

}

//set default type for prop
Button.propTypes = {
    
    title: PropTypes.string.isRequired

}

//exports
export default Button;