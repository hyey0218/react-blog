import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export class Profile extends Component {

  render () {
    return (
      <div>
        <h1>Profile</h1>
        <Container>
            <Row>
            <Col sm={3} style={{ borderRight: "1px solid #ababab"}} >Extending or replacing the default ESLint config
You can extend our base ESLint config, or replace it completely if you need.

There are a few things to remember:

We highly recommend extending the base config, as removing it could introduce hard-to-find issues.
When working with TypeScript, you'll need to provide an overrides object for rules that should only target TypeScript files.
It's important to note that any rules that are set to "error" will stop the project from building.
In the below example:</Col>            
            <Col sm={9}>This feature is currently only supported by Visual Studio Code and WebStorm.

Visual Studio Code and WebStorm support debugging out of the box with Create React App. This enables you as a developer to write and debug your React code without leaving the editor, and most importantly it enables you to have a continuous development workflow, where context switching is minimal, as you don’t have to switch between tools.</Col>    
            </Row>
        </Container>
      </div>
    );
  }
}
