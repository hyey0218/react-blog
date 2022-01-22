import React, { Component } from 'react';
import { Accordion } from 'react-bootstrap';


const subTitleStyle = {
  color : "black",
  fontSize :"20px"
}
const subContentStyle= {
  color : "#6c6c6c",
  fontFamily : "bmjua"
}

export class ProfileCompany extends Component {
  render () {
    return (
      <> 
        <p>경력 사항</p>
        <Accordion defaultActiveKey={['2']} alwaysOpen >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Bizwell for 2015.04 ~ 2017.03 </Accordion.Header>
          <Accordion.Body style={subContentStyle}>
            <p style={subTitleStyle}>
            그룹웨어 솔루션 유지 보수
            </p>
            - 그룹웨어 기능 오류 수정/정기 패치 반영
            <br/>
            - ERP (SAP) 연동 결재 문서 수정
            <br/>
            - 결재 공람지정 시 알림 메일 자동 발송
            <br/>
            - 그룹웨어-AD서버 간 사용자 관리 시스템 연동 관련 시스템 수정
            <br/>
            - 결재 문서 생성(jsp 페이지) , 결재 연동/로적 수정( 웹서비스 호출 후 XML 데이터 파싱 작업)
            <br/>
            - 특정 기능 게시판 개발
            <br/>
            - 메일 서버 장애/오류 점검
            <br/>
            - 그룹웨어 서버 환경 변경에 따른 지원

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Initech for 2017.12 ~ 2019.03 </Accordion.Header>
          <Accordion.Body style={subContentStyle}>
            <p style={subTitleStyle}>DB 암호화 솔루션 구축 수행</p>
            - 정형/비정형 데이터 암호화 솔루션 설치 및 유지보수 수행
            <br/>
            - API 방식 : 데이터 암호화 API 제공 및 가이드
            <br/>
            - plugin 방식 : oracle java function 구현
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Konan Technology for 2019.03 ~</Accordion.Header>
          <Accordion.Body style={subContentStyle}>
            <p style={subTitleStyle}>검색/분석 엔진 구축 및 시스템 개발</p>
            - 자사 솔루션 구축 후 엔드포인트 연동부 개발(화면 및 API)
            <br/>
            - 고객사가 요구하는 기능을 위한 데이터 분석 및 화면(웹페이지 및 시각화) 개발
            <br/>
            - 주요 프로젝트 내역
            <br/>
              1) 2019 현대자동차 소비자 설문조사 관리시스템 개발
              <br/>
                - 자료 관리 및 통합 검색 시스템 개발
                <br/>
                - 자료 PDF 변환 및 viewer 오픈소스 적용 
                <br/>
              2) 2019 국방전산정보원 진위여부 분석시스템 개발
              <br/>
                - 인물 관계 데이터 분석 및 관계망 시각화
                <br/>
              3) 내부 프로젝트 – 크롤러 개발
              <br/>
                - 웹 크롤러 개발
                <br/>
                - 데이터 파싱
                <br/>
              4) 2020 경찰청 빅데이터 플랫폼 1차년도 개발
              <br/>
                - 통합 검색 시스템 구축 및 분석 파일럿 개발
                <br/>
                - 법령 xml 데이터, 내부 게시판 db 데이터 등 검색 스키마 구성 및 API 제공
                <br/>
              5) 서울지방국세청 포렌식 검색시스템(2021~현재) 개발
              <br/>
                - 탈세 조사용 포렌식 검색 시스템 구축
                <br/>
                - 주요 기능 : 대량(79대)서버 환경 구축, 대용량 파일 데이터(10~20T) 텍스트 추출 및 색인, 검색 화면 개발
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </>
    );
  }
}
