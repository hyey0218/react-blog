import React, { Component } from 'react';
import {Container} from 'reactstrap';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <Container>
        <h1>Hello, world!</h1>
        <p>Welcome to your new single-page application, built with:</p>
        <ul>
          <li><a href='https://www.elastic.co/kr/what-is/elk-stack'>ELK</a> for Elastic Stack </li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
        </ul>

      </Container>
    );
  }
}
