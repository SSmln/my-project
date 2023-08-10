import Avatarphoto from '../components/Avatarphoto';

const photo_infos = [
  {
    id :1,
    img_src: "img/1.jpg",
    alt: "드론 챌린지",
    name: "드론 챌린지"
  },
  {
    id :2,
    img_src: "img/2.jpg",
    alt: "드론 챌린지",
    name: "드론 챌린지"
  },
  {
    id :3,
    img_src: "img/univ.jpg",
    alt: "삼육대",
    name: "삼육대"
  },
  {
    id :4,
    img_src: "img/3.jpg",
    alt: "연구실 내부",
    name: "연구실 사진"
  },
];

function Photo() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
      <div>
        <h4></h4>
        <a href="https://www.syu.ac.kr/blog/%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C-%EC%82%BC%EC%9C%A1%EB%8C%80-%EC%97%B0%ED%95%A9%EC%97%B0%EA%B5%AC%ED%8C%80-%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5-%EB%93%9C%EB%A1%A0%EC%B1%8C%EB%A6%B0%EC%A7%80/">
          <img src="img/1.jpg" width="600" alt="사진 1" />
          <h4>&lt;DNA DRONE 챌린지 2022 시상식 2023년 11월 29일&gt;</h4>
        </a>
      </div>
      <div>
        <h4></h4>
        <img src="img/2.jpg" width="600" alt="사진 2" />
        <h4></h4>
      </div>
      <div>
        <img src="img/univ.jpg" width="600" alt="사진 3" />
        <h4>삼육대학교</h4>
      </div>
      <div>
        <img src="img/cat.jpg" width="400" alt="사진 4" />
        <h4>연구실 사진</h4>
      </div>
    </div>
  );
}
export default Photo;

{/* <Avatarphoto photo_infos={photo_infos}/> */}