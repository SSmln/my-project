import React from 'react';
import styles from './Papers.module.css';
// import PhotoWithText from './PhotoWithText';


const Papers = () => {
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
      {papers.map(paper => (
        <div className={styles.paper} key={paper.id}>
          <div className={styles.year}>{paper.year}</div>
          <div className={styles.paperContent}>
            <h3 className={styles.title}>
              <a href={paper.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {paper.title}
                <span className={styles.underline}></span>
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
};

// 2022
// {papers year id:2022}
// 2023
// {papers year id:2023}

export default Papers;
