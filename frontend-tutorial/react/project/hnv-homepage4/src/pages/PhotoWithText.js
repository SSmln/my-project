import React from 'react';

function PhotoWithText({ imageUrl, text }) {
  return (
    <div>
      <img src={imageUrl} alt="사진" />
      <p>{text}</p>
    </div>
  );
}

export default PhotoWithText;
