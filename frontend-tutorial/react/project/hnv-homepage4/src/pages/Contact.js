import React from 'react';
import styled from '@emotion/styled';

const H1 = styled.h1`
font-size: 3rem;
color: 'black' ;
`
const P = styled.p`

`
const H2 = styled.h2`

color: 'black' ;
`

const All = styled.div`
margin-top: 320px;

`
function Contact() {
  return (
    <div>
    <All>
      <H1>석/박사과정 대학원생 모집안내</H1>
      <P>본 연구실의 연구 분야에 관심이 있는 대학원 석/박사과정 연구원을 모집합니다.</P>
      <H2>모집 분야</H2>
      <P>본 연구실은 딥러닝, 기계학습, 통계, 추천 시스템 및 네트워크 분석 등을 탐구하는 공간입니다.</P>
      <P> 빅데이터 시대를 맞이하여 관련 업계 및 연구소에 진출을 희망하는 분들은 대학원 진학을 추천합니다.</P>
      <P>본 연구실의 연구원은 현재 진행 중인 연구 개발 프로젝트에 참여하게 되며 이에 따른 다양한 혜택을 받게 됩니다</P>

      <H2>지원 혜택</H2>
    
      <ul >
        <li>프로젝트 인건비 지급 가능</li>
        <li>국내/외 학회 및 교육 참가</li>
      </ul>

      <H2>상담 신청</H2>
      <P>대학원 진학 또는 연구실 지원 (전공선택)을 고민하고 있거나, 현재 진행중인 연구분야에 대해 궁금한 사항을 가지고 있는 학생은 언제든지 상담을 환영합니다.</P>
      <P>이메일: hnvlab</P>

      <H2>Address</H2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>

          <P></P>
          <img src="img/206.jpg" width="600" alt="사진" />
        </div>

      </div>

      <H2>Address</H2>
      <img src="img/s.jpg" width="600" alt="사진" />
      <P>삼육대학교 206호</P>

      <H2>지원양식</H2>
      <P>지원양식 내용이 여기에 들어갑니다.</P>

      <H2>상담신청</H2>
      <P>상담신청 내용이 여기에 들어갑니다.</P>
    </All>
    </div>
  );
}

export default Contact;

