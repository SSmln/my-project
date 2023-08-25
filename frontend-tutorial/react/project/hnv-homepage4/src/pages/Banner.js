import React from 'react'
import mainscreen from './image/univ.jpg'
import styled from '@emotion/styled';

const Mainscreen = styled.img`
position: absolute; top:0; left: 0;
width: 100%;
height: 100%;

`;
const Banner = () => {
  return (
    <div>
        <Mainscreen src={mainscreen} alt="" />

    </div>
  )
}

export default Banner