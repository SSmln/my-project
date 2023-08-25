import React from 'react';
import styles from './Papers.module.css';

function Papers() {
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
      // year: 2022,
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

  return (
    <div className={styles.container}>
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

export default Papers;
