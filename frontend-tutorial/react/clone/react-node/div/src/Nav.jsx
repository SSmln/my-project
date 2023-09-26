import { IoLogoTwitter, IoLogoFacebook } from "react-icons/io";

const Nav = () => {
  const menuitems = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Gallery",
    },
    {
      id: 3,
      title: "Weddings",
    },
    {
      id: 4,
      title: "FAQ",
    },
    {
      id: 5,
      title: "Bookings",
    },
  ];

  function menu() {
    return menuitems.map((items) => {
      return <div key={items.id}>{items.title}</div>;
    });
  }
  return (
    <div>
      <div className="bg-blue-900 flex justify-between text-white items-center ">
        <div className=" cursor-pointer">로고</div>
        <div className="flex cursor-pointer gap-24  text-black md: flex-col  ">
          {menu()}
        </div>
        <div className="flex cursor-pointer gap-4">
          <IoLogoTwitter />
          <IoLogoFacebook />
        </div>
      </div>
    </div>
  );
};

export default Nav;
