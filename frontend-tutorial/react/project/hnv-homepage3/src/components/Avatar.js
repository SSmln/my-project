import React from 'react';
import styles from './Avatar.module.css';

// json 형식으로 img file path

function Avatar({ person_infos }) {
  return (
    <div className={styles.Avatar}>
      {person_infos.map((info) => (
        <div key={info.id} className={styles.ImageWrapper}>
          <img className={styles.Image} src={info.img_src} alt={info.alt} />
          <div className={styles.TextWrapper}>
            <a href=''>{info.name}</a>
            <div className={styles.Text}> <br /> </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Avatar;
