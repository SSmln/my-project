import React from 'react';
import styles from 'styled-components';
function Contact() {
  return (
    <div>
      <img src="img/size.png" />
      <h1 style={{ fontSize: '3em', color: 'black' }}>석/박사과정 대학원생 모집안내</h1>

      <p>본 연구실의 연구 분야에 관심이 있는 대학원 석/박사과정 연구원을 모집합니다.</p>
      <h2>모집 분야</h2>
      <p>본 연구실은 딥러닝, 기계학습, 통계, 추천 시스템 및 네트워크 분석 등을 탐구하는 공간입니다.</p>
      <p> 빅데이터 시대를 맞이하여 관련 업계 및 연구소에 진출을 희망하는 분들은 대학원 진학을 추천합니다.</p>
      <p>본 연구실의 연구원은 현재 진행 중인 연구 개발 프로젝트에 참여하게 되며 이에 따른 다양한 혜택을 받게 됩니다</p>

      <h2>지원 혜택</h2>
      <ul className={styles.sibal}>
        <li>프로젝트 인건비 지급 가능</li>
        <li>국내/외 학회 및 교육 참가</li>
      </ul>

      <h2>상담 신청</h2>
      <p>대학원 진학 또는 연구실 지원 (전공선택)을 고민하고 있거나, 현재 진행중인 연구분야에 대해 궁금한 사항을 가지고 있는 학생은 언제든지 상담을 환영합니다.</p>
      <p>이메일: hnvlab</p>

      <h2>Address</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>

          <p>삼육대학교 206호</p>
          <img src="img/206.jpg" width="600" alt="사진" />
        </div>

        <div>
          {/* <img src="img/206.jpg" width="600" alt="사진" /> */}
        </div>
      </div>

      <h2>Address</h2>
      <img src="img/s.jpg" width="600" alt="사진" />
      <p>삼육대학교 206호</p>

      <h2>지원양식</h2>
      <p>지원양식 내용이 여기에 들어갑니다.</p>

      <h2>상담신청</h2>
      <p>상담신청 내용이 여기에 들어갑니다.</p>
    </div>
  );
}

export default Contact;

