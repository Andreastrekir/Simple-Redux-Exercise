import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      property_one: '123456',
      property_two: '789456',

    }
  }

  NewProperty = (e) =>{
    this.setState({property_one: e.target.value})
  }
  whenClick = () => {
    this.setState({property_two: this.state.property_one})
  }
  render(){
    const { property_one, property_two} = this.state;
    return (
      <div className= "App">
      
        <h1>Simple Redux Exercise</h1>
        <h3>Property one: {property_one} </h3>
        <h3>Property two: {property_two}</h3>
        <input type="text" onChange={this.NewProperty}/>
        <button onClick={this.whenClick}> click 1 </button>
        </div>
    );
  }
}

export default App;
