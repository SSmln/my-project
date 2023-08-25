import React from 'react';
import styled from '@emotion/styled';

const Footer__class = styled.div`
  display: block;
  width: 100%;
  font-size: 80%;
  color: #6c757d;
  padding: .75rem 1.25rem;
  background-color: rgba(0,0,0,.03);
  border-top: 1px solid rgba(0,0,0,.125);
  position : bottom;
  bottom : 0;
  z-index: 1;
  `;

function Footer() {
  return (
    <div>
      <Footer__class>
        ©️ Copyright 2023, 건축, sahmyook university All Rights Reserved.
        <br />
        815, Hwarang-ro, Nowon-gu, Seoul, 01795 Rep. of KOREA | Prof.Rue Han-Cheol/ Student Office: 목공실습실
      </Footer__class>
    </div>
  );
}

export default Footer;

// footer module css

// .Footer {
//   display: block;
//   font-size: 80%;
//   color: #6c757d
// }

// .Footer {
//   padding: .75rem 1.25rem;
//   background-color: rgba(0,0,0,.03);
//   border-top: 1px solid rgba(0,0,0,.125)
// }

// /* .Footer {
//   text-align: left;
// } */