import React from 'react';
// import ReactDOM from 'react-dom';

class Count extends React.Component {
  state ={
    count: 0,
  }
 
  plusCount = () => {
    this.setState( (prevState) => {
      return {
        count: prevState.count + 1,
      }
    });
  }
  minusCount = () => {

    if(this.state.count === 0) {
      return;
    }
    this.setState( (prevState) => {
      return {
        count: prevState.count - 1,
      }
    });
  }

  render() {
    console.log('@', );
    return (
      <div>
        <h1>I am clas Component! {this.state.count}</h1>
        <button onClick={this.plusCount}>+</button>
        <button onClick={this.minusCount}>-</button>
      </div>
    )
  }
}

export default Count;