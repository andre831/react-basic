import React, { Component } from "react";
import PropTypes from 'prop-types';


class Button extends Component {    
    
    //set default behavior
    static defaultProps = { 

        title: 'Default Behavior '

    }

    //set default type for prop
    static propTypes = {
        
        title: PropTypes.string.isRequired

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