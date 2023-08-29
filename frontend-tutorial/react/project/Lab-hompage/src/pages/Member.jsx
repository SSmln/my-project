import React from 'react'
import porfile_1 from "/img/korea.png"
import porfile_2 from "/img/kang.jpeg"
import porfile_3 from "/img/ssmln.jpg"
import porfile_4 from "/img/hun.jpg"

const profilelist= [                     
  {
    id: 1,
    img_src: {porfile_1},
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
    img_src: './image/ssmln.jpg',
    alt: '강경수',
    name: '강경수',
    degree: '학위 : 공학박사',
    major : "전공 : 건축 시공 및 경영",
    number : "전화번호 : 02-3399-1853",
    email : "이메일 : hryu@syu.ac.kr",
    cName: 'members_name'
  },
 {
    id: 3,
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
    id: 4,
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



const Member = () => {
  return (
    <div className=''>
      <img src={porfile_1} />
      <img src={porfile_2} />
      <img src={porfile_3} />
      <img src={porfile_4} />

    

    </div>
  )
}

export default Member