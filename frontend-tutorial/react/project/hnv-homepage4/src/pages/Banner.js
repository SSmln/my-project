import React from 'react'
import styled from '@emotion/styled';
const BannerCss = styled.div`
background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
position: sticky;
/* height: 300px; */
width : 100%;
border:none;
background-size: cover;
height: 100vh;
z-index: -1;  
  `;


function Banner() {
  return (
    <div>
      <BannerCss>asdf</BannerCss>

    </div>
  )
}

export default Banner;