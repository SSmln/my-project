import React from 'react';
import styles from './Avatarphoto.module.css';

function Avatarphoto({ photo_infos }) { 
  return (
    <div className={styles.Avatar}>
      {photo_infos.map((info) => (
        <div key={info.id} className={styles.ImageWrapper}>
          <a href=''>{info.name}</a>
          <img className={styles.Image} src={info.img_src} alt={info.alt} />
          <div className={styles.Text}> <br /> </div>
        </div>
      ))}
    </div>
  );
}

export default Avatarphoto;