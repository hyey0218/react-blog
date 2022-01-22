import React, { Component } from 'react';
import { ListGroup, Table } from 'react-bootstrap';

export class ProfileSchool extends Component {
  render () {
    return (
      <>
        <p>학력 사항</p>
        <Table responsive="md">
          <thead>
            <tr>
              <th>#</th>
              <th>학교명(소재지)</th>
              <th>구분</th>
              <th>재학기간</th>
              <th>전공</th>
              <th>학점</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>백석대학교 (충남)</td>
              <td>졸업</td>
              <td>2011.03 ~ 2015.02</td>
              <td>정보통신 멀티미디어학과<br />
            정보통신 소프트웨어학과 (부전공)</td>
              <td>3.97 / 4.5</td>
            </tr>
            <tr>
              <td>2</td>
              <td>삼척여자고등학교</td>
              <td>졸업</td>
              <td>2008.03 ~ 2011.02</td>
              <td>문과</td>
              <td>-</td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}
