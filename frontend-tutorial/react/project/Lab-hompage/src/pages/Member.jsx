import React from "react";
import SubNavbar from "./SubNavbar";
import Baner from "./Baner";

const profilelist = [
  {
    id: 1,
    img_src: (
      <img
        src="/img/korea.png"
        className="w-[110px] m-[5px] h-[120px] ml-auto mr-auto  rounded-full"
      />
    ),
    alt: "류한국",
    name: "Lyu, Hankook  ",
    degree: "공학박사",
    major: "건축 시공 및 경영",
    number: "02-3399-1853",
    email: "hryu@syu.ac.kr",
    cName: "members_name",
    //Academic & Professional Activities
    //Education
    //Employment History
  },
  {
    id: 2,
    img_src: (
      <img
        src="/img/kang.jpeg"
        className="w-[110px] m-[5px] h-[120px] ml-auto mr-auto rounded-full"
      />
    ),
    alt: "강경수",
    name: "Kang, Kyungsu  ",
    degree: " 공학박사",
    major: " 건축 시공 및 경영",
    number: "02-3399-1853",
    email: "hryu@syu.ac.kr",
    cName: "members_name",
  },
  {
    id: 3,
    img_src: (
      <img
        src="/img/ssmln.jpg"
        className="w-[110px] m-[5px] h-[120px] ml-auto mr-auto rounded-full"
      />
    ),
    alt: "이상민",
    name: "Lee, Sangmin  ",
    degree: "학부 연구생",
    major: "컴퓨터 공학부",
    number: "010-4342-7630",
    email: "lsm7630@gmail.com",
    cName: "members_name",
  },
  {
    id: 4,
    img_src: (
      <img
        src="/img/hun.jpg"
        className="w-[110px] m-[5px] h-[120px] ml-auto mr-auto rounded-full "
      />
    ),
    alt: "윤성훈",
    name: "Yun, Sunghun  ",
    degree: "학부 연구생",
    major: "컴퓨터 공학부",
    number: "02-3399-1853",
    email: "hryu@syu.ac.kr",
    cName: "members_name",
  },
  {
    id: 5,
    img_src: (
      <img
        src="/img/hun.jpg"
        className="w-[110px] m-[5px] h-[120px] ml-auto mr-auto rounded-full "
      />
    ),
    alt: "조영훈",
    name: "Yun, Sunghun  ",
    degree: "학부 연구생",
    major: "컴퓨터 공학부",
    number: "02-3399-1853",
    email: "hryu@syu.ac.kr",
    cName: "members_name",
  },
];

function profileInfo(props) {
  return profilelist.map((item) => {
    if (props === item.id) {
      return (
        <div key={item.id}>
          <div className=" text-center ">{item.alt}</div>
          <hr />
          <div className="flex">
            <div className="text-center m-auto">
              {item.degree} <br />
              {item.major} <br />
              {item.number} <br />
              {item.email} <br />
            </div>
          </div>
        </div>
      );
    }
  });
}

const Member = () => {
  const baner = {
    name: "Members",
  };
  return (
    <>
      <Baner name={baner.name} />

      <div class="container my-24 mx-auto  ">
        <section class="mb-32 text-center">
          <div class="grid grid-cols-4 gap-x-8 gap-y-[120px] items-stretch md:grid-cols-4 lg:gap-x-12 ">
            <div class="mb-24 md:mb-0 hover:scale-105 duration-300">
              <div class="block h-full rounded-lg bg-white ">
                <div class="flex justify-center">
                  <div class="flex justify-center -mt-[75px]">
                    {profilelist[0].img_src}
                  </div>
                </div>
                <div class="p-5">{profileInfo(1)}</div>
              </div>
            </div>
            <div class="mb-24 md:mb-0 hover:scale-105 duration-300">
              <div class="block h-full rounded-lg bg-white ">
                <div class="flex justify-center">
                  <div class="flex justify-center -mt-[75px]">
                    {profilelist[1].img_src}
                  </div>
                </div>
                <div class="p-5">{profileInfo(2)}</div>
              </div>
            </div>
            <div class="mb-24 md:mb-0 hover:scale-105 duration-300">
              <div class="block h-full rounded-lg bg-white ">
                <div class="flex justify-center">
                  <div class="flex justify-center -mt-[75px]">
                    {profilelist[2].img_src}
                  </div>
                </div>
                <div class="p-5">{profileInfo(3)}</div>
              </div>
            </div>
            <div class="mb-24 md:mb-0 hover:scale-105 duration-300">
              <div class="block h-full rounded-lg bg-white ">
                <div class="flex justify-center">
                  <div class="flex justify-center -mt-[75px]">
                    {profilelist[3].img_src}
                  </div>
                </div>
                <div class="p-5">{profileInfo(4)}</div>
              </div>
            </div>
            <div class="mb-24 md:mb-0 hover:scale-105 duration-300">
              <div class="block h-full rounded-lg bg-white ">
                <div class="flex justify-center">
                  <div class="flex justify-center -mt-[75px]">
                    {profilelist[3].img_src}
                  </div>
                </div>
                <div class="p-5">{profileInfo(5)}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Member;
