import React from "react";
import styled from "@emotion/styled";
import Pro_img from "./image/korea.png";
// 학위
// 공학박사
// 전공
// 건축시공및경영
// 전화번호
// 02-3399-1853
// 이메일
// hryu@syu.ac.kr

  const Student = styled.img`
  width : 20%;
  height: 10%;
  overflow: hidden;
  margin-left: 200px;
  margin-bottom : 20px;
  object-fit: cover;
  background-size: cover;
  margin-top: 20px;
  `
  
  
  const Professor = styled.img`
  width : 20%;
  height: 10%;
  overflow: hidden;
  margin-left: 200px;
  margin-bottom : 20px;
  object-fit: cover;
  background-size: cover;
  margin-top: 20px;
  `;
  
  const Each = styled.div`
    background-color: white;
    display: flex;
  `
  
  const Member_profile = styled.div`
  float: right;
  background-color: white;
  margin-top:20px;
  font-size:18px;
  vertical-align: middle;
  margin-left: 30px;
  text-align: left;
  `
  const Position_Pro = styled.h1`
  margin-top: 320px;
  display: flex;
  justify-content: center;
  
  `
  
  const Position_Stu = styled.h1`
  display: flex;
  justify-content: center;
  `
const pro_profile= [                     
  {
    id: 1,
    img_src: {Pro_img},
    alt: '류한국',
    name: '류한국',
    degree: '학위 : 공학박사',
    major : "전공 : 건축 시공 및 경영",
    number : "전화번호 : 02-3399-1853",
    email : "이메일 : hryu@syu.ac.kr",
    cName: 'members_name'
    //Academic & Professional Activities
    //Education
    //Employment History
  },
 {
    id: 2, 
    img_src: './image/kang.jpeg',
    alt: '강경수',
    name: '강경수',
    degree: '학위 : 공학박사',
    major : "전공 : 건축 시공 및 경영",
    number : "전화번호 : 02-3399-1853",
    email : "이메일 : hryu@syu.ac.kr",
    cName: 'members_name'
  }
 
];

{/* <img src={require("이미지 경로").default} /> */}

const stu_profile=[
  {
    id: 1,
    img_src: './image/ssmln.jpg',
    alt: '이상민',
    name: '이상민',
    degree: '학위 : 학부연구생',
    major : "전공 : 컴퓨터 공학부 소프트웨어 전공",
    number : "전화번호 : 010-4342-7630",
    email : "이메일 : lsm7630@gmail.com",
    cName: 'members_name'
  },
  {
    id: 2,
    img_src: './image/hun.png',
    alt: '윤성훈',
    name: '윤성훈',
    degree: '학위 : 학부연구생',
    major : "전공 : 컴퓨터 공학부 소프트웨어 전공",
    number : "전화번호 : 02-3399-1853",
    email : "이메일 : hryu@syu.ac.kr",
    cName: 'members_name'
  }
]
function prolist(props) {
  return pro_profile.map((item) => {
    if(props === (item.id)){
    return <p key={item.id}>
     {item.name} <br /> 
      {item.degree} <br /> 
      {item.major} <br /> 
      {item.email}
    </p>
    }
 })
}

function stulist(props) {
  return stu_profile.map((item) => {
    if(props === (item.id)){
      return <p key={item.id}>
       {item.name} <br /> 
        {item.degree} <br /> 
        {item.major} <br /> 
        {item.email}
      </p>
      }
 })
}






function Members() {
  return (
    <div>     
    
      <Position_Pro>Professor</Position_Pro>
        <hr />
        <Each>
        <Professor src={Pro_img}></Professor>
        <Member_profile>{prolist(1)}</Member_profile>
        </Each>
        <hr />
        <Each>
        <Professor src={require("./image/kang.jpeg")}></Professor>
        <Member_profile>{prolist(2)} </Member_profile>
        </Each>
        <hr />

      <Position_Stu>Student</Position_Stu>
        <hr />
        <Each>
        <Student src={require("./image/ssmln.jpg")} />
        <Member_profile>{stulist(1)} </Member_profile>
        </Each>
        <hr />
        <Each>
        <Student src={require("./image/hun.jpg")} />
        <Member_profile>{stulist(2)}</Member_profile>
        </Each> 


    </div>
  )
}

export default Members;