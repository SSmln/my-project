import React from 'react';
import styled from '@emotion/styled';


function Papers() {
  const papers = [
    {
      id: 1,

      title: 'CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal',
      authors: 'Yeo, W. H., Oh, W. T., Kang, K. S., Kim, Y. I., & Ryu, H. C. (2022, October).',
      publication: 'European Conference on Computer Vision (pp. 714-728).',
      url: 'https://github.com/hnvlab-syu/CAIR',
    },
    {
      id: 2,
 
      title: 'CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal',
      authors: 'Yeo, Woon-Ha, author.',
      publication: 'arXiv preprint arXiv:2208.14039 (2022)',
      url: 'https://github.com/hnvlab-syu/CAIR',
    },
    {
      id: 3,

      title: 'CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal',
      authors: 'Yeo, Woon-Ha, et al.',
      publication: 'arXiv preprint arXiv:2208.14039 (2022)',
      url: 'https://github.com/hnvlab-syu/CAIR',
    },
    {
      id: 4,

      title: 'CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal',
      authors: 'Yeo, Woon-Ha, et al.',
      publication: 'arXiv preprint arXiv:2208.14039 (2022)',
      url: 'https://github.com/hnvlab-syu/CAIR',
    },
    {
      id: 5,
      year: 2023,
      title: 'CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal',
      authors: 'Yeo, Woon-Ha, et al.',
      publication: 'arXiv preprint arXiv:2208.14039 (2022)',
      url: 'https://github.com/hnvlab-syu/CAIR',
    },
    {
      id: 6,
      // year: 2022,
      title: 'CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal',
      authors: 'Yeo, Woon-Ha, et author.',
      publication: 'arXiv preprint arXiv:2208.14039 (2022)',
      url: 'https://github.com/hnvlab-syu/CAIR',
    },
    {
      id: 7,
      // year: 2022,
      title: 'CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal',
      authors: 'Yeo, Woon-Ha, et author.',
      publication: 'arXiv preprint arXiv:2208.14039 (2022)',
      url: 'https://github.com/hnvlab-syu/CAIR',
    },
    // 다른 논문 데이터 추가
  ];

function paperslist() {
  return papers.map((item) => {
    return <div key={item.id}>
      <br />  
        <h2>{item.title}</h2>
      <br />  
        <h3>{item.authors}</h3>
        <h3>{item.publication}</h3>
        <a href={item.url}> 몰라나도 ㅋㅋ</a> 
      <br />
    </div>
 })
}

    
    const Papers = styled.div`
    align-items: center;
    `
    const Article = styled.h1`
    margin-top: 320px;
    `
    const Year = styled.h2`
    
    `


  return (
    <div>
        <Article>  Article </Article>
      <hr />
        <Year> 2022 </Year>
      <hr />
        <Papers>{paperslist()} </Papers>
      <hr />
        <Year> 2023 </Year>
    </div>
    );
  }
  
  export default Papers;
  