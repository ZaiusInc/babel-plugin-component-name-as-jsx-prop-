import React, { Component } from 'react';

export default class Example1 extends Component {
  renderHeader() {
    return <hr />;
  }
  render() {
    const hi = <h1>Hi!</h1>;
    let Greetings = (arg) => {
      return <h2>Greetings {arg}!</h2>;
    };
    if (this.props.loading) {
      return <p />;
    }
    return (
      <ul>
        {someArray.map(val => <li>{val}</li>)}
        {someOtherArray.map(val => { return <li>{val}</li> })}
      </ul>
    );
  }
}

let Example2 = class Example2 extends Component {
  renderHeader() {
    return <hr />;
  }
  render() {
    const hi = <h1>Hi!</h1>;
    let Greetings = (arg) => {
      return <h2>Greetings {arg}!</h2>;
    };
    if (this.props.loading) {
      return <p />;
    }
    return (
      <ul>
        {someArray.map(val => <li>{val}</li>)}
        {someOtherArray.map(val => { return <li>{val}</li> })}
      </ul>
    );
  }
}

