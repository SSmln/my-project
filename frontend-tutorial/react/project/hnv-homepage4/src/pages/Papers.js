import React from 'react';
import styles from 'styled-components';

function Papers() {
  const papers = [
    {
      id: 1,
      year: 2022,
      title: 'CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal',
      authors: 'Yeo, W. H., Oh, W. T., Kang, K. S., Kim, Y. I., & Ryu, H. C. (2022, October).',
      publication: 'European Conference on Computer Vision (pp. 714-728).',
      url: 'https://github.com/hnvlab-syu/CAIR',
    },
    {
      id: 2,
      // year: 2022,
      title: 'CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal',
      authors: 'Yeo, Woon-Ha, author.',
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
      authors: 'Yeo, Woon-Ha, et author.',
      publication: 'arXiv preprint arXiv:2208.14039 (2022)',
      url: 'https://github.com/hnvlab-syu/CAIR',
    },
    {
      id: 7,
      // year: 2022,
      title: 'CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal',
      authors: 'Yeo, Woon-Ha, et author.',
      publication: 'arXiv preprint arXiv:2208.14039 (2022)',
      url: 'https://github.com/hnvlab-syu/CAIR',
    },
    // 다른 논문 데이터 추가
  ];

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="img/papercut.jpg" alt="Paper Header" className={styles.image} />
      </div>
      <h2 className={styles.articleTitle}>Article</h2>
      {papers.map((paper) => (
        <div className={styles.paper} key={paper.id}>
          <div className={styles.year}>{paper.year}</div>
          <div className={styles.paperContent}>
            <h3 className={styles.title}>
              <a href={paper.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {paper.title}
                <span className={styles.underline} />
              </a>
            </h3>
            <div className={styles.info}>
              <div className={styles.author}>{paper.authors}</div>
              <div className={styles.publication}>{paper.publication}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// 2022
// {papers year id:2022}
// 2023
// {papers year id:2023}

export default Papers;


// paper modulecss
// .container {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   margin-top: -130px;
// }

// /* 상단 이미지 */
// .imageContainer {
//   width: 100%;
//   text-align: center;
//   margin-bottom: 20px; /* 이미지와 논문 목록 사이의 간격 조절을 위해 추가 */
// }

// .image {
//   width: 100%;
//   height: 100%;
//   object-fit: cover; /* 이미지가 컨테이너에 가득 차도록 설정 */
// }

// .paper {
//   margin-bottom: 20px;
// }

// .year {
//   font-size: 24px;
//   margin-bottom: 1em;
//   text-align: left;
// }

// /* 논문 제목부분 */
// .title {
//   font-size: 1.2em;
//   color: green;
//   position: relative;
//   text-decoration: none;
// }

// .title:hover {
//   text-decoration: none;
// }

// .title:hover .underline {
//   display: block;
// }

// .underline {
//   display: none;
//   position: absolute;
//   bottom: -2px;
//   left: 0;
//   width: 100%;
//   height: 1px;
//   background-color: green;
// }


// .author {
//   font-size: 14px;
//   color: gray;
// }

// .publication {
//   font-size: 14px;
//   color: gray;
// }
// .info {
//   text-align: left;
// }
// .title {
//   color: black;
//   text-decoration: none;
// }

// .title a:hover {
//   color: purple;
// }
// .link {
//   color: black;
//   text-decoration: none;
// }

// .link:hover {
//   color: purple;
// }
// /* article 제목부분 */
// .articleTitle {
//   font-size: 48px;
//   color: green; /* 원하는 색상으로 변경 */
// }