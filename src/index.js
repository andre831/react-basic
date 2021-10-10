
import React, { Component} from 'react';
import { render } from 'react-dom';
import Button from './components/Button/button';

class App extends Component {

  state = {
    counter: 0,
    text: '',
  }

  writeText = (e) => {

    this.setState({
      text: e.target.value,
    })

  }

  add = () => {
    this.setState({
      counter: this.state.counter+2,
    });
  }

  render() {
    
    return (
      <div> 
        <input onChange={this.writeText} />
        text: {this.state.text}
        <br />
        <Button press={this.add}>
          Update 
        </Button>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));