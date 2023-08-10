import React from 'react';
import styles from './Avatarpapers.module.css';

function Avatarpapers({ papers_infos }) { 
  return (
    <div className={styles.Avatar}>
      {papers_infos.map((info) => (
        <div key={info.id} className={styles.ImageWrapper}>
          <a href=''>{info.name}</a>
          <img className={styles.Image} src={info.img_src} alt={info.alt} />
          <div className={styles.Text}> <br /> </div>
        </div>
      ))}
    </div>
  );
}

export default Avatarpapers;