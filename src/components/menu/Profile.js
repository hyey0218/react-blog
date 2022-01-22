import React, { Component } from 'react';
import { Container, Col, Row, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { ProfileCompany } from '../Cards/ProfileCompany';
import { ProfileLic } from '../Cards/ProfileLic';
import { ProfileSchool } from '../Cards/ProfileSchool';
import { ProfileTech } from '../Cards/ProfileTech';

const txtStyle = {
  fontFamily : 'bmjua'
}
const imgStyle = {
  width : '200px',
  display: 'block',
  margin: 'auto'
}
export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { leftMenu : <ProfileSchool/> };
  }
  changeLeftMenu(v){
    if(v === 0){
      this.setState({leftMenu: <ProfileSchool/>});
    }else if(v === 1){
      this.setState({leftMenu: <ProfileCompany/>});
    }else if(v === 2){
      this.setState({leftMenu: <ProfileTech/>});
    }else if(v === 3){
      this.setState({leftMenu: <ProfileLic/>});
    }else{
      this.setState({leftMenu: <></>});
    }
  }

  render () {
    return (
      <Container>
        <h1>Profile</h1>
        <Row>
          <Col sm={3} >
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" className="justify-content-md-center" 
                  style={imgStyle} src={process.env.PUBLIC_URL + '/img/image1.jpg'} />
              <Card.Body>
                <Card.Title>HYE YOON</Card.Title>
                <Card.Text style={txtStyle} >
                  MAIN : JAVA developer <br></br>
                  SUB : SW Engineer (Search Engine & Text Analytics)
                </Card.Text>
              </Card.Body>
              <ListGroup style={txtStyle} className="list-group-flush">
                <ListGroupItem action onClick={() => this.changeLeftMenu(0) }>학력사항</ListGroupItem>
                <ListGroupItem action onClick={() => this.changeLeftMenu(1) }>경력사항</ListGroupItem>
                <ListGroupItem action onClick={() => this.changeLeftMenu(2) }>보유기술</ListGroupItem>
                <ListGroupItem action onClick={() => this.changeLeftMenu(3) }>자격증/어학/수상</ListGroupItem>
              </ListGroup>
            </Card>

          </Col>
          <Col sm={{ span: 8, offset: 1 }} style={{paddingTop: '40px'}}>
            {this.state.leftMenu}
          </Col>
        </Row>
      </Container>
    );
  }
}
