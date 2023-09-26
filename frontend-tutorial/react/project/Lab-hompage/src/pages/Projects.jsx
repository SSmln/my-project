import React from "react";

const papers = [
  {
    id: 1,

    title:
      "Development of robust detector using the weather deep generative model for outdoor monitoring system",
    authors:
      "Kyo-Hoon Jin, Kyung-Su Kang, Baek-Kyun Shin, June-Hyoung Kwon, Soo-Jin Jang, Young-Bin Kim, Han-Guk Ryu* (2023).",
    publication: "Expert Systems with Applications.",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0957417423014860?via%3Dihub",
    impact_Factor: "8.5 (Q1/10%)",
  },
  {
    id: 2,

    title: "딥러닝 기반 픽셀 단위 콘크리트 벽체 균열 검출 방법",
    authors: "강경수, 류한국* (2023-04). 한국건축시공학회지, 23(2), 197-207.",
    publication: "",
    url: "https://koreascience.kr/article/JAKO202315154883208.page",
    impact_Factor: "8.5 (Q1/10%)",
  },
  {
    id: 3,

    title:
      "Deep Learning-based Framework for Monitoring wearing Personal Protective Equipment on Construction Sites",
    authors:
      "Yeo-Reum Lee, Seung-Hwan Jung, Kyung-Su Kang, Han-Cheol Ryu*, Han-Guk Ryu* (2023-03). Journal of Computational",
    publication: "Design and Engineering, 10(2), 905-917.",
    url: "https://academic.oup.com/jcde/article/10/2/905/7069329?login=true",
    impact_Factor: "Impact Factor: 6.1 (Q1)",
  },
  {
    id: 4,

    title:
      "CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal",
    authors:
      "Woon-Ha Yeo, Wang-Taek Oh, Kyung-Su Kang, Young-Il Kim, Han-Cheol Ryu* (2023-02-13). ECCV 2022 Workshops. ECCV",
    publication: "arXiv preprint arXiv:2208.14039 (2022)",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-25063-7_45",
    impact_Factor: "8.5 (Q1/10%)",
  },
  {
    id: 5,
    year: 2023,
    title:
      "CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal",
    authors: "Yeo, Woon-Ha, et al.",
    publication: "arXiv preprint arXiv:2208.14039 (2022)",
    url: "https://github.com/hnvlab-syu/CAIR",
    impact_Factor: "8.5 (Q1/10%)",
  },
  {
    id: 6,
    // year: 2022,
    title:
      "CAIR: Fast and Lightweight Multi-Scale Color Attention Network for Instagram Filter Removal",
    authors: "Yeo, Woon-Ha, et author.",
    publication: "arXiv preprint arXiv:2208.14039 (2022)",
    url: "https://github.com/hnvlab-syu/CAIR",
    impact_Factor: "8.5 (Q1/10%)",
  },
];

function paper() {
  return papers.map((item) => {
    return (
      <div key={item.id}>
        <div className=" h-[515px] mt-[40px] border-4  ">
          <div className="w-[620px] h-[283px] ">
            <img src="img/hun.jpg" alt="" className="h-[100%] overflow   " />
            <div className="  m-[35px]">
              <li className="">asd</li>
              <br />
              <h4>azxczxc</h4>
              <p>zxnmcjncjk</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

const Projects = () => {
  return (
    <div class="grid grid-cols-3 gap-40 border-5 items-stretch mt-[400px]">
      {paper()}
    </div>
  );
};

export default Projects;
