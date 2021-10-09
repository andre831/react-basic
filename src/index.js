
import React from 'react';
import { render } from 'react-dom';
import Button from './components/Button/button';

class App extends React.Component {
  render() {
    return (
      <span>
          <Button>
            Update 
          </Button>
      </span>
     

      
      
    );
    
  }
}

render(<App />, document.getElementById('app'));