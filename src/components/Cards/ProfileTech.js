import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';


const subContentStyle= {
  color : "#6c6c6c",
  fontFamily : "bmjua"
}

export class ProfileTech extends Component {
  render () {
    return (
      <>
        <p>보유 기술</p>
        <ListGroup>
          <ListGroup.Item>Java Programming / 상</ListGroup.Item>
          <ListGroup.Item><p>DataBase & SQL / 중</p>
            <div style={subContentStyle}>
              ORACLE 환경의 DataBase 사용<br />
              DBMS 또는 SQL문을 활용하여 테이블, 시퀀스 생성 및 변경, 삭제.<br />
              SQL문을 이용하여 Data 조작 및 활용.<br />
            </div>
          </ListGroup.Item>
          <ListGroup.Item><p>JavaScript / 중</p>
            <div style={subContentStyle}>
              Event처리 및 함수 정의, 구현<br />
              ES6 개념<br />
              Library : Jquery , node.js , react
            </div>
          </ListGroup.Item>
          <ListGroup.Item><p>Servlet & JSP / 중</p>
            <div style={subContentStyle}>
              MVC1 및 MVC2모델을 이용하여 구성<br />
              JDBC를 사용하여 데이터베이스 연동.
            </div>
          </ListGroup.Item>
          <ListGroup.Item><p>XML/JSON Data Programming / 상</p>
            <div style={subContentStyle}>
              XML 형식으로 된 문서를 파싱하여 Java 프로그램에서 읽어들이거나, 영구적으로 XML 형식의 물리적인 문서로 구성<br />
              Json 기반 restAPI 개발
            </div>
          </ListGroup.Item>
          <ListGroup.Item><p>Framework</p>
            <div style={subContentStyle}>
              Spring 3-5 <br />
              Spring Boot<br />
              vue.js <br />
              Mybatis , JPA
            </div>
          </ListGroup.Item>
          <ListGroup.Item><p>DB & SQL </p>
            <div style={subContentStyle}>
              RDB : MySQL, oracle, MSSQL<br />
              NoSQL : MongoDB, BigQuery<br />
              테이블, 시퀀스 생성 및 변경, 삭제.<br />
              SQL문을 이용하여 Data 조작 및 활용.<br />
            </div>
          </ListGroup.Item>
          <ListGroup.Item></ListGroup.Item>
          <ListGroup.Item></ListGroup.Item>
        </ListGroup>
      </>
    );
  }
}
