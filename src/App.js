import logo from './logo.svg';
import './App.css';
import React from 'react';

// all commented out code are relevant as they represent different case scenarios

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      visibility: !this.state.visibility
    });
  }

  // render() {
  //   return (
  //     <React.Fragment>
  //       {this.state.visibility ? 
  //         <div>
  //           <a href="#" onClick={this.handleClick}>Want to buy a new car?</a>
  //           <p>Call +11 22 33 44 now!</p> 
  //         </div>
  //         :
  //         <div><a href="#" onClick={this.handleClick}>Want to buy a new car?</a></div>
  //       }
  //     </React.Fragment>
  //   );
  // }
  // render() {
  //   return (
  //     <div>
  //       {this.state.visibility ?
  //         <button onClick={this.handleClick}>ON</button> :
  //         <button onClick={this.handleClick}>OFF</button>
  //       }
  //     </div>
  //  );
  // }
  // render() {
  //   return (
  //     <React.Fragment>
  //       {this.state.visibility ?
  //           <div> 
  //             <a href="#" onClick={this.handleClick}>Want to buy a new car?</a>
  //             <p>Call +11 22 33 44 now!</p> 
  //           </div>
  //         :
  //         <a href="#" onClick={this.handleClick}>Want to buy a new car?</a>
  //       }
  //     </React.Fragment>
  //   );
  // }

  // render() {
  //   if(this.state.visibility) {
  //     return (
  //         <a href="#" onClick={this.handleClick}>Want to buy a new car?</a>
  //     )} else {
  //       return (
  //         <a href="#" onClick={this.handleClick}>Want to buy a New car?</a>
  //       );
  //     }

  //   }

  render() {
    if(this.state.visibility) {
      return <a href="#" onClick={this.handleClick}>Want to buy a new car?</a>
    } else {
        return <a href="#" onClick={this.handleClick}>Want to buy a New car?</a>
    }
  }
}

export default App;

