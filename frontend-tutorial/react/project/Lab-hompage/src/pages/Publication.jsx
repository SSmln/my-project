import React from "react";

const papers = [
  {
    id: 1,
    title:
      "CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal",
    authors:
      "Yeo, W. H., Oh, W. T., Kang, K. S., Kim, Y. I., & Ryu, H. C. (2022, October).",
    publication: "European Conference on Computer Vision (pp. 714-728).",
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  {
    id: 2,
    title:
      "CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal",
    authors: "Yeo, Woon-Ha, author.",
    publication: "arXiv preprint arXiv:2208.14039 (2022)",
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  {
    id: 3,
    title:
      "CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal",
    authors: "Yeo, Woon-Ha, et al.",
    publication: "arXiv preprint arXiv:2208.14039 (2022)",
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  {
    id: 4,
    title:
      "CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal",
    authors: "Yeo, Woon-Ha, et al.",
    publication: "arXiv preprint arXiv:2208.14039 (2022)",
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  {
    id: 5,
    year: 2023,
    title:
      "CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal",
    authors: "Yeo, Woon-Ha, et al.",
    publication: "arXiv preprint arXiv:2208.14039 (2022)",
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  {
    id: 6,
    // year: 2022,
    title:
      "CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal",
    authors: "Yeo, Woon-Ha, et author.",
    publication: "arXiv preprint arXiv:2208.14039 (2022)",
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  {
    id: 7,
    // year: 2022,
    title:
      "CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal",
    authors: "Yeo, Woon-Ha, et author.",
    publication: "arXiv preprint arXiv:2208.14039 (2022)",
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  // 다른 논문 데이터 추가
];
function paper() {
  return papers.map((item) => {
    return (
      <div key={item.id}>
        <div className="w-[1240px] h-[200px] border-4 mt-[40px] ">
          <div className=" p-7">
            <li className="text-blue-600">{item.title}</li>
            <br />
            <p>{item.authors}</p>
            <br />
            <p>{item.publication}</p>
          </div>
        </div>
      </div>
    );
  });
}

const Publication = () => {
  return <div className="mt-[400px]">{paper()}</div>;
};

export default Publication;
