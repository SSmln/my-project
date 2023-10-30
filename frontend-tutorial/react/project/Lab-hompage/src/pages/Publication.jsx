import React from "react";
import SubNavbar from "./SubNavbar";
import Baner from "./Baner";

const papers = [
  {
    id: 1,
    title:
      "Development of robust detector using the weather deep generative model for outdoor monitoring system",
    authors:
      "Kyo-Hoon Jin, Kyung-Su Kang, Baek-Kyun Shin, June-Hyoung Kwon, Soo-Jin Jang, Young-Bin Kim, Han-Guk Ryu*",
    journal: "(2023). Expert Systems with Applications.",
    Imfact: " 8.5 (Q1/10%)",
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  {
    id: 2,
    title: "딥러닝 기반 픽셀 단위 콘크리트 벽체 균열 검출 방법",
    authors: "강경수, 류한국*",
    journal: "(2023-04). 한국건축시공학회지, 23(2), 197-207.",
    Imfact: null,
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  {
    id: 3,
    title:
      "Deep Learning-based Framework for Monitoring wearing Personal Protective Equipment on Construction Sites",
    authors:
      "Yeo-Reum Lee, Seung-Hwan Jung, Kyung-Su Kang, Han-Cheol Ryu*, Han-Guk Ryu*",
    journal:
      "(2023-03). Journal of Computational Design and Engineering, 10(2), 905-917.",
    Imfact: "6.1 (Q1)",
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  {
    id: 4,
    title:
      "CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal ",
    authors:
      "Woon-Ha Yeo, Wang-Taek Oh, Kyung-Su Kang, Young-Il Kim, Han-Cheol Ryu* ",
    journal:
      "2023-02-13). ECCV 2022 Workshops. ECCV 2022. Lecture Notes in Computer Science, 13802.",
    Imfact: null,
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  {
    id: 5,
    title:
      "An interpretable machine learning approach for evaluating the feature importance affecting lost workdays at construction sites",
    authors: "Kyung-Su Kang, Choongwan Koo, Han-Guk Ryu*",
    journal: "(2022-08). Journal of Building Engineering, 53, 104534.",
    Imfact: " 7.1 (Q1/10%)",
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  {
    id: 6,
    title: " DEA 모형을 이용한 소재 분야 R&D 프로젝트 효율성 분석에 관한 연구",
    authors:
      "Kyo-Hoon Jin, Kyung-Su Kang, Baek-Kyun Shin, June-Hyoung Kwon, Soo-Jin Jang, Young-Bin Kim, Han-Guk Ryu*",
    journal: "(2023). Expert Systems with Applications.",
    Imfact: " 8.5 (Q1/10%)",
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  {
    id: 7,
    title:
      "Development of robust detector using the weather deep generative model for outdoor monitoring system",
    authors:
      "Kyo-Hoon Jin, Kyung-Su Kang, Baek-Kyun Shin, June-Hyoung Kwon, Soo-Jin Jang, Young-Bin Kim, Han-Guk Ryu*",
    journal: "(2023). Expert Systems with Applications.",
    Imfact: " 8.5 (Q1/10%)",
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  {
    id: 8,
    title:
      "Development of robust detector using the weather deep generative model for outdoor monitoring system",
    authors:
      "Kyo-Hoon Jin, Kyung-Su Kang, Baek-Kyun Shin, June-Hyoung Kwon, Soo-Jin Jang, Young-Bin Kim, Han-Guk Ryu*",
    journal: "(2023). Expert Systems with Applications.",
    Imfact: " 8.5 (Q1/10%)",
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  {
    id: 9,
    title:
      "Development of robust detector using the weather deep generative model for outdoor monitoring system",
    authors:
      "Kyo-Hoon Jin, Kyung-Su Kang, Baek-Kyun Shin, June-Hyoung Kwon, Soo-Jin Jang, Young-Bin Kim, Han-Guk Ryu*",
    journal: "(2023). Expert Systems with Applications.",
    Imfact: " 8.5 (Q1/10%)",
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  {
    id: 10,
    title:
      "Development of robust detector using the weather deep generative model for outdoor monitoring system",
    authors:
      "Kyo-Hoon Jin, Kyung-Su Kang, Baek-Kyun Shin, June-Hyoung Kwon, Soo-Jin Jang, Young-Bin Kim, Han-Guk Ryu*",
    journal: "(2023). Expert Systems with Applications.",
    Imfact: " 8.5 (Q1/10%)",
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  {
    id: 11,
    title:
      "Development of robust detector using the weather deep generative model for outdoor monitoring system",
    authors:
      "Kyo-Hoon Jin, Kyung-Su Kang, Baek-Kyun Shin, June-Hyoung Kwon, Soo-Jin Jang, Young-Bin Kim, Han-Guk Ryu*",
    journal: "(2023). Expert Systems with Applications.",
    Imfact: " 8.5 (Q1/10%)",
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  {
    id: 12,
    title:
      "Development of robust detector using the weather deep generative model for outdoor monitoring system",
    authors:
      "Kyo-Hoon Jin, Kyung-Su Kang, Baek-Kyun Shin, June-Hyoung Kwon, Soo-Jin Jang, Young-Bin Kim, Han-Guk Ryu*",
    journal: "(2023). Expert Systems with Applications.",
    Imfact: " 8.5 (Q1/10%)",
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  {
    id: 13,
    title:
      "Development of robust detector using the weather deep generative model for outdoor monitoring system",
    authors:
      "Kyo-Hoon Jin, Kyung-Su Kang, Baek-Kyun Shin, June-Hyoung Kwon, Soo-Jin Jang, Young-Bin Kim, Han-Guk Ryu*",
    journal: "(2023). Expert Systems with Applications.",
    Imfact: " 8.5 (Q1/10%)",
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  {
    id: 14,
    title:
      "Development of robust detector using the weather deep generative model for outdoor monitoring system",
    authors:
      "Kyo-Hoon Jin, Kyung-Su Kang, Baek-Kyun Shin, June-Hyoung Kwon, Soo-Jin Jang, Young-Bin Kim, Han-Guk Ryu*",
    journal: "(2023). Expert Systems with Applications.",
    Imfact: " 8.5 (Q1/10%)",
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  {
    id: 15,
    title:
      "Development of robust detector using the weather deep generative model for outdoor monitoring system",
    authors:
      "Kyo-Hoon Jin, Kyung-Su Kang, Baek-Kyun Shin, June-Hyoung Kwon, Soo-Jin Jang, Young-Bin Kim, Han-Guk Ryu*",
    journal: "(2023). Expert Systems with Applications.",
    Imfact: " 8.5 (Q1/10%)",
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  {
    id: 16,
    title:
      "Development of robust detector using the weather deep generative model for outdoor monitoring system",
    authors:
      "Kyo-Hoon Jin, Kyung-Su Kang, Baek-Kyun Shin, June-Hyoung Kwon, Soo-Jin Jang, Young-Bin Kim, Han-Guk Ryu*",
    journal: "(2023). Expert Systems with Applications.",
    Imfact: " 8.5 (Q1/10%)",
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  {
    id: 17,
    title:
      "Development of robust detector using the weather deep generative model for outdoor monitoring system",
    authors:
      "Kyo-Hoon Jin, Kyung-Su Kang, Baek-Kyun Shin, June-Hyoung Kwon, Soo-Jin Jang, Young-Bin Kim, Han-Guk Ryu*",
    journal: "(2023). Expert Systems with Applications.",
    Imfact: " 8.5 (Q1/10%)",
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  {
    id: 18,
    title:
      "Development of robust detector using the weather deep generative model for outdoor monitoring system",
    authors:
      "Kyo-Hoon Jin, Kyung-Su Kang, Baek-Kyun Shin, June-Hyoung Kwon, Soo-Jin Jang, Young-Bin Kim, Han-Guk Ryu*",
    journal: "(2023). Expert Systems with Applications.",
    Imfact: " 8.5 (Q1/10%)",
    url: "https://github.com/hnvlab-syu/CAIR",
  },
  // 다른 논문 데이터 추가
];

function paper() {
  return papers.map((item) => {
    return (
      <div key={item.id}>
        <div className=" h-[200px]  justify-center items-center rounded-2xl border-4 mt-[40px] shadow-xl hover:scale-105 duration-300 bg-white ">
          <div className="  p-7">
            <li className=" list-none font-bold text-red-700 text-xl">
              {item.title}
            </li>
            <p className=" text-sm text-gray-500">{item.authors}</p>
            <p className="italic text-sm text-gray-500"> {item.journal}</p>
            <br />
            <p className="text-red-700 text-sm">
              {item.Imfact !== null ? (
                <p className="font-bold ">Imfact Factor : {item.Imfact}</p>
              ) : (
                <p>
                  <br />
                </p>
              )}
            </p>
            <p className="float-right text-gray-500">#computer science</p>
          </div>
        </div>
      </div>
    );
  });
}

const Publication = () => {
  const baner = {
    name: "Publication",
  };
  return (
    <>
      <Baner name={baner.name} />
      <div className="w-[96%] m-auto">
        {/* <SubNavbar /> */}
        {paper()}
      </div>
    </>
  );
};

export default Publication;
