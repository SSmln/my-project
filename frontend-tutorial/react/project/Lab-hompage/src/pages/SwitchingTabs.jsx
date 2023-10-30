import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const Tabstest = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ?"text-black bg-black-600"
                    : "text-black-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Profile
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-black bg-black-600"
                    : "text-black-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Settings
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-black bg-black-600"
                    : "text-black-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Options
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabstest

// export default function UnderlineTabs() {
//   const [activeTab, setActiveTab] = React.useState("MLA");
//   const data = [
//     {
//       label: "머신 러닝 Algorithms",
//       value: "MLA",
//       desc: `It really matters and then like it really doesn't matter.
//       What matters is the people who are sparked by it. And the people 
//       who are like offended by it, it doesn't matter.`,
//     },
//     {
//       label: "Smart Manufacturing",
//       value: "SM",
//       desc: `We're not always in the position that we want to be at.
//       We're constantly growing. We're constantly making mistakes. We're
//       constantly trying to express ourselves and actualize our dreams.`,
//     },
//     {
//       label: "NLP & Text Mining",
//       value: "nlp",
//       desc: `We're not always in the position that we want to be at.
//       We're constantly growing. We're constantly making mistakes. We're
//       constantly trying to express ourselves and actualize our dreams.`,
//     },
//     {
//       label: "Architecture Analysis",
//       value: "archi",
//       desc: `We're not always in the position that we want to be at.
//       We're constantly growing. We're constantly making mistakes. We're
//       constantly trying to express ourselves and actualize our dreams.`,
//     },
//     {
//       label: "Robotics",
//       value: "robo",
//       desc: `We're not always in the position that we want to be at.
//       We're constantly growing. We're constantly making mistakes. We're
//       constantly trying to express ourselves and actualize our dreams.`,
//     },
//   ];
//   return (
//     <Tabs value={activeTab}>
//       <TabsHeader
//         className=" rounded-none border-b-2 border-blue-gray-50 bg-transparent p-1  md:max-xl:flex-col "
//         indicatorProps={{
//           className:
//             "bg-transparent border-r-2 border-black shadow-none rounded-none",
//         }}
//       >
//         {data.map(({ label, value }) => (
//           <Tab
//             key={value}
//             value={value}
//             onClick={() => setActiveTab(value)}
//             className={activeTab === value ? " underline underline-offset-8 un md:max-xl:flex-col text-left " : ""}
//           >
//             {label}
//           </Tab>
//         ))}
//       </TabsHeader>
//       <TabsBody>
//         {data.map(({ value, desc }) => (
//           <TabPanel key={value} value={value} className="">
//             <div className=" md:max-xl:hidden">
//             {desc}
//             </div>
//             <div className="md:max-xl:flex hidden">
//             asd
//             </div>
          
//           </TabPanel>
//         ))}
//       </TabsBody>
//     </Tabs>
//   );
// }
