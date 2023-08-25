import React from 'react';
import styles from 'styled-components'
// json 형식으로 img file path



function Avatar({ person_infos }) {
  return (
    <div className={styles.Avatar}>
      {person_infos.map((info) => (
        <div key={info.id} className={styles.ImageWrapper}>
          <img className={styles.Image} src={info.img_src} alt={info.alt} />
          <div className={styles.TextWrapper}>
            <a href="">{info.name}</a>
            <div className={styles.Text}>
              {' '}
              <br />
              {' '}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}





export default Avatar;

//css import styles from './Avatar.module.css';
// .Image {
//   width: 120px;
//   border-radius: 70%;
//   margin-bottom: 10px;
// }

// .Text {
//   margin-top: 10px;
//   text-align: center;
// }

// .ImageWrapper {
//   text-align: center;
// }

// .TextWrapper {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
// }
