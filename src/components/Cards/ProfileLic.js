import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

export class ProfileLic extends Component {
  render () {
    return (
      <>
        <p>자격증 정보</p>
        <Image src={process.env.PUBLIC_URL + '/img/자격증정보.PNG'} thumbnail>
        </Image>
      </>
    );
  }
}
