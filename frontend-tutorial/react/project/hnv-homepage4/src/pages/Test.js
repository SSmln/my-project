
import React from 'react';
import styles from './Test.module.css';

const ImageWithText = () => {
  return (
    <div className={styles.container}>
      <img src="img/hnv.jpg" alt="Your Image" width="600"/>
      <div className={styles.text}>
        <h2>연구실 소개글 작성</h2>
      </div>
    </div>
  );
};

export default ImageWithText;
