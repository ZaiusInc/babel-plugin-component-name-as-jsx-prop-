import React, { PureComponent } from 'react';

export default class Example1 extends PureComponent {
  render() {
    return <div someOtherAttribute/>;
  }
}

let Example2 = class Example2 extends PureComponent {
  render() {
    return <div someOtherAttribute/>;
  }
}
