import React from 'react'


const profile= [                     
  {
    id: 1,
    img_src: './image/Pro.png',
    alt: '류한국',
    name: '류한국',
    url: "www.google.com"
    
  
  },
 {
    id: 2, 
    img_src: './image/kang.jpeg',
    alt: '강경수',
    name: '강경수',
    
    url: "www.google.com"

  },
  {
    id: 3,
    img_src: './image/ssmln.jpg',
    alt: '이상민',
    name: '이상민'
    ,
    url: "www.google.com"

  },
  {
    id: 4,
    img_src: './image/hun.png',
    alt: '윤성훈',
    name: '윤성훈'
    ,
    url: "http:/google.com"

  },
];


// const todos = [
//   {id:'a', content:'빨래하기'},
//   {id:'b', content:'청소기 필터 분해하기'},
// ]

// const todoLista = todos.map((todo)=>
// <li key={todo.id}>{todo.id}, {todo.content}</li>)

function profilelist() {
  return profile.map((item) => {
    return <div key={item.id}>
        <img src="./image/ssmln.jpg" alt="" />
   </div>
 })
}




const Testing = () => {
  return (
  <div>
    <ul>
        {profilelist()}
    </ul>          

</div>

  )
}

export default Testing