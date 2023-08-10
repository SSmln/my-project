// <<<<<<< HEAD
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import Popup from '../components/Popup';

import Modal from './Modal';
import Test from "../pages/Test";
import Papers from "../pages/Papers";

// =======
//1번째
// function Home() {
//     return (
//       <div>
//         {/* <img src="univ.jpg"/> */}
//         <h4>Hnv lab</h4>
//         <img src="img/1.jpg" width="800"/>
//         <h4>연구실 소개</h4>
//         <h4>연구분야</h4>
//         <h4>News</h4>
//         {/* <Papers2 /> */}
//       </div>
//     )
//   };
// export default Home;



// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

//2번째
// const papers = [
//   {
//     id: 1,
//     year: 2022,
//     title: 'CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal',
//     authors: 'Yeo, Woon-Ha, et al.',
//     publication: 'arXiv preprint arXiv:2208.14039 (2022)',
//     url: 'https://github.com/hnvlab-syu/CAIR',
//   },
//   {
//     id: 2,
//     // year: 2022,
//     title: 'CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal',
//     authors: 'Yeo, Woon-Ha, et al.',
//     publication: 'arXiv preprint arXiv:2208.14039 (2022)',
//     url: 'https://github.com/hnvlab-syu/CAIR',
//   },
//   {
//     id: 3,
//     // year: 2022,
//     title: 'CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal',
//     authors: 'Yeo, Woon-Ha, et al.',
//     publication: 'arXiv preprint arXiv:2208.14039 (2022)',
//     url: 'https://github.com/hnvlab-syu/CAIR',
//   },
//   {
//     id: 4,
//     // year: 2022,
//     title: 'CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal',
//     authors: 'Yeo, Woon-Ha, et al.',
//     publication: 'arXiv preprint arXiv:2208.14039 (2022)',
//     url: 'https://github.com/hnvlab-syu/CAIR',
//   },
//   {
//     id: 5,
//     year: 2023,
//     title: 'CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal',
//     authors: 'Yeo, Woon-Ha, et al.',
//     publication: 'arXiv preprint arXiv:2208.14039 (2022)',
//     url: 'https://github.com/hnvlab-syu/CAIR',
//   },
//   {
//     id: 6,
//     // year: 2022,
//     title: 'CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal',
//     authors: 'Yeo, Woon-Ha, et al.',
//     publication: 'arXiv preprint arXiv:2208.14039 (2022)',
//     url: 'https://github.com/hnvlab-syu/CAIR',
//   },
//   // 다른 논문 데이터 추가
// ];



// const Home = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   return (
//     <div className="home">
//       <h1>Welcome to the Lab</h1>
//       <Slider {...settings}>
//         <div>
//           <img src="img/cat.jpg" alt="Image 1" />
//         </div>
//         <div style={{ textAlign: 'center' }}>
//           <img src="img/2.jpg" alt="Image 2" width="600" />
//         </div>
//         <div>
//         <img src="img/paper.jpg" alt="Image 3" style={{ width: '10%', height: 'auto' }} />
//         </div>
//       </Slider>
//         {papers.map((paper) => (
//             <div key={paper.id}>
//               {/* <img src={paper.imageSrc} alt={`Image ${paper.id}`} /> */}
//               <div>
//                 <h3>{paper.title}</h3>
//                 <p>Authors: {paper.authors}</p>
//                 <p>Publication: {paper.publication}</p>
//                 {/* <a href={paper.url}>Read More</a> */}
//               </div>
//             </div>
//           ))}
      
//     </div>
//   );
// };

// export default Home;

//3번째
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import Popup from '../components/Popup';

import Modal from './Modal';
// >>>>>>> d0700c99b52bf1719971e213fed5c091f35d3865

const papers = [
  {
    id: 1,
    year: 2022,
    title: 'CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal',
    authors: 'Yeo, Woon-Ha, et al.',
    publication: 'arXiv preprint arXiv:2208.14039 (2022)',
    url: 'https://github.com/hnvlab-syu/CAIR',
  },
  {
    id: 2,
    // year: 2022,
    title: 'CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal',
    authors: 'Yeo, Woon-Ha, et al.',
    publication: 'arXiv preprint arXiv:2208.14039 (2022)',
    url: 'https://github.com/hnvlab-syu/CAIR',
  },
  {
    id: 3,
    // year: 2022,
    title: 'CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal',
    authors: 'Yeo, Woon-Ha, et al.',
    publication: 'arXiv preprint arXiv:2208.14039 (2022)',
    url: 'https://github.com/hnvlab-syu/CAIR',
  },
  {
    id: 4,
    // year: 2022,
    title: 'CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal',
    authors: 'Yeo, Woon-Ha, et al.',
    publication: 'arXiv preprint arXiv:2208.14039 (2022)',
    url: 'https://github.com/hnvlab-syu/CAIR',
  },
  {
    id: 5,
    year: 2023,
    title: 'CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal',
    authors: 'Yeo, Woon-Ha, et al.',
    publication: 'arXiv preprint arXiv:2208.14039 (2022)',
    url: 'https://github.com/hnvlab-syu/CAIR',
  },
  {
    id: 6,
    // year: 2022,
    title: 'CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal',
    authors: 'Yeo, Woon-Ha, et al.',
    publication: 'arXiv preprint arXiv:2208.14039 (2022)',
    url: 'https://github.com/hnvlab-syu/CAIR',
  },
  // 다른 논문 데이터 추가
];

const Home = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const closeModal = () => {
    setModalVisible(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home">
      <h1>Human and Vision Lab</h1>
      <h1>첫번째 실험</h1>
      <Slider {...settings}>
        <div>
          <img src="img/2.jpg" alt="Image 1" style={{ display: 'block', margin: '0 auto' }} width="600" />
        </div>
        <div style={{ textAlign: 'center' }}>
{/* <<<<<<< HEAD */}
          <img src="img/paper.jpg" alt="Image 2" style={{ display: 'block', margin: '0 auto' }} />
        </div>
        <div>
          <img src="img/cat.jpg" alt="Image 3" style={{ display: 'block', margin: '0 auto', width: '10%', height: 'auto' }} />
        </div>
      </Slider>

      {<Test />}
{/* ======= */}
          <img src="img/cat.jpg" alt="Image 2" style={{ display: 'block', margin: '0 auto' }} />
        </div>
        <div>
          <img src="img/paper.jpg" alt="Image 3" style={{ display: 'block', margin: '0 auto', width: '10%', height: 'auto' }} />
        </div>
      </Slider>


// >>>>>>> d0700c99b52bf1719971e213fed5c091f35d3865


        <div>
          <br />
          <h1>Article</h1>
{/* <<<<<<< HEAD
          
=======
>>>>>>> d0700c99b52bf1719971e213fed5c091f35d3865 */}
          <br />
          {papers.map((paper) => (
            <div key={paper.id}>
              <div>
                <h3>{paper.title}</h3>
                <p>Authors: {paper.authors}</p>
                <p>Publication: {paper.publication}</p>
              </div>
{/* <<<<<<< HEAD */}
            
            </div>
            
// =======
            </div>
// >>>>>>> d0700c99b52bf1719971e213fed5c091f35d3865
          ))}
          {modalVisible && (
            <Modal visible={modalVisible} closable={true} maskClosable={true} onClose={closeModal}></Modal>
          )}
      </div>
      {/* {<Papers />} */}
    </div>
  );
};

export default Home;
