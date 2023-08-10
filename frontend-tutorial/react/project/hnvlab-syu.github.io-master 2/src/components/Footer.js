import React, { Component } from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
      <div>
          <footer className={styles.Footer}>
              ©️ Copyright 2023, Human and Vision, sahmyook university All Rights Reserved.<br />815, Hwarang-ro, Nowon-gu, Seoul, 01795 Rep. of KOREA | Prof.Rue Han-Cheol/ Student Office: 206호
          </footer>
      </div>
  )
}

export default Footer;