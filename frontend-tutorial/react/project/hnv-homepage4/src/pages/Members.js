import React from "react";
import styled from "@emotion/styled";
// import ssmln from './image/ssmln.jpg'


const profile= [                     
  {
    id: 1,
    img_src: './image/Pro.png',
    alt: '류한국',
    name: '류한국'
  },
 {
    id: 2, 
    img_src: './image/kang.jpeg',
    alt: '강경수',
    name: '강경수',
  },
  {
    id: 3,
    img_src: './image/ssmln.jpg',
    alt: '이상민',
    name: '이상민',
  },
  {
    id: 4,
    img_src: './image/hun.png',
    alt: '윤성훈',
    name: '윤성훈',
  },
];




const Profile = styled.div`


`;

const Professior = styled.img`
  width: 50%;
`;




function Members() {
  return (
    <div>
      <Profile>
      <Professior src={process.env.PUBLIC_URL + profile[1].img_src} />
      <Professior src={profile[2].img_src} />
  
  

    </Profile>
    </div>
  )
}

export default Members;
