import React from 'react';
export default class EmployeeDetails extends React.Component {
  render() {
    if (this.props.name === 'Joker') {
      throw new Error('Not a hero!');
    }
    return <div>{this.props.name}</div>;
  }
}
