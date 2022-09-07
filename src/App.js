import React from 'react';
import Employee from './Employee.jsx';
import ErrorBoundaries from './ErrorBoundaries.jsx';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <ErrorBoundaries>
          {' '}
          <Employee name="Adinai" />
          <Employee name="Joker" />
        </ErrorBoundaries>
      </div>
    );
  }
}
