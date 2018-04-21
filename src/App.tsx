import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {
  
  componentWillmount() {
    const a = 'qq';
    console.log('data: ', a);
  } 
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" onClick={this.handleClick}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }

  private handleClick = (event: React.MouseEvent<HTMLParagraphElement>) => {
    const a: HTMLParagraphElement = event.currentTarget;
    console.log(a);
  }
}

export default App;
