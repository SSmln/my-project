import Avatar from '../components/Avatar';

// let members = [
//     {"name": "정현묵", "img": "/", "degree": "M.S."},
//     {"name": "정현묵", "img": "/", "degree": "M.S."},
//     {"name": "정현묵", "img": "/", "degree": "M.S."},
// ]

//3명씩
// 프로필에 어떤것을 넣을지 이름, 관심분야
const person_infos = [
    {
      id :1,
      img_src: "img/Pro.png",
      alt: "류한철 교수님",
      name: "류한철 교수님",
      degree: "P"
    },
    {
      id :2,
      img_src: "img/kang.jpg",
      alt: "강경수 교수님",
      name: "강경수 교수님",
      degree: "P"
    },
    {
      id :3,
      img_src: "img/una.jpg",
      alt: "여운하",
      name: "여운하",
      degree: "D.S."
    },
    {
      id :4,
      img_src: "img/seunghwan.jpg",
      alt: "정승환",
      name: "정승환",
      degree: "M.S."
    },
    {
      id :5,
      img_src: "img/cat.jpg",
      alt: "김영일",
      name: "김영일",
      degree: "B.S."
    },
    {
      id :6,
      img_src: "img/oking.jpg",
      alt: "오왕택",
      name: "오왕택",
      degree: "B.S."
    },
    {
      id :7,
      img_src: "img/one.jpg",
      alt: "장원석",
      name: "장원석",
      degree: "B.S."
    },
    {
      id :8,
      img_src: "img/summer.jpg",
      alt: "이여름",
      name: "이여름",
      degree: "B.S."
    },
    {
      id :9,
      img_src: "img/woon.jpg",
      alt: "홍원진",
      name: "홍원진",
      degree: "B.S."
    },
    {
      id :10,
      img_src: "img/hun.jpg",
      alt: "김현수",
      name: "김현수",
      degree: "B.S."
    },
    {
      id :11,
      img_src: "img/mook.jpg",
      alt: "정현묵",
      name: "정현묵",
      degree: "B.S."
    },
    {
      id :12,
      img_src: "img/cat.jpg",
      alt: "손수민",
      name: "손수민",
      degree: "B.S."
    },
  ];

const bachelorMembers = person_infos.filter((person) => person.degree === "B.S.");
const masterMembers = person_infos.filter((person) => person.degree === "M.S.");
const doctorateMembers = person_infos.filter((person) => person.degree === "D.S.");
const professorMembers = person_infos.filter((person) => person.degree === "P");
const alumniMembers = person_infos.filter((person) => person.degree === "A");

// const Members = () => {
//     return (<div>
//       <h2>Professor</h2>
//       <Avatar person_infos={professorMembers}/>
//       <h2>Doctorate</h2>
//       <Avatar person_infos={doctorateMembers}/>
//       <h2>Master</h2>
//       <Avatar person_infos={masterMembers}/>
//       <h2>Bachelor</h2>
//       <Avatar person_infos={bachelorMembers}/>
//     </div>
//     );
// };
// export default Members;

const Members = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "20px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "20px" }}>
        <div>
          <h2>Professor</h2>
          <Avatar person_infos={professorMembers} />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateRows: "repeat(2, 1fr)", gridGap: "20px" }}>
        <div>
          <h2>Doctorate</h2>
          <Avatar person_infos={doctorateMembers} />
        </div>
        <div>
          <h2>Master</h2>
          <Avatar person_infos={masterMembers} />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "20px" }}>
        <div>
          <h2>Bachelor</h2>
          <Avatar person_infos={bachelorMembers} />
        </div>
      </div>
      <div>
          <h2>Alumni</h2>
          <Avatar person_infos={alumniMembers} />
        </div>
    </div>
  );
};

export default Members;
