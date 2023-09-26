import React from "react";

const profilelist = [
  {
    id: 1,
    img_src: (
      <img
        src="/img/korea.png"
        className="w-[110px] h-[120px] m-auto overflow-visible "
      />
    ),
    alt: "(류한국)",
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
    alt: "(강경수)",
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
    alt: "(이상민)",
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
    alt: "(윤성훈)",
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
          <div className=" text-center mt-[10px]">
            {item.name}
            {item.alt}
          </div>
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
  return (
    <div className="">
      <div className="mt-[400px] mb-[20px]">Current Member</div>
      <div className="grid grid-cols-4 gap-16 items-stretch justify-center  ">
        <div className="rounded-lg border-solid shadow-2xl border-radius-2 border-4 h-[300px]">
          {profilelist[0].img_src}
          <div>{profileInfo(1)}</div>
        </div>
        <div className="rounded-lg border-solid shadow-2xl border-radius-2 border-4 h-[300px]">
          {profilelist[1].img_src}
          <div>{profileInfo(2)}</div>
        </div>
        <div className="rounded-lg border-solid shadow-2xl border-radius-2 border-4 h-[300px] ">
          {profilelist[2].img_src}
          <div>{profileInfo(3)}</div>
        </div>
        <div className="rounded-lg border-solid shadow-2xl border-radius-2 border-4 h-[300px]">
          {profilelist[3].img_src}
          <div>{profileInfo(4)}</div>
        </div>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
      </div>
    </div>
  );
};

export default Member;
