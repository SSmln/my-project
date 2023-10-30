import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

// function CheckIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={2}
//       stroke="currentColor"
//       className="h-3 w-3"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M4.5 12.75l6 6 9-13.5"
//       />
//     </svg>
//   );
// }

export function PricingCard() {
  return (
    <Card
      shadow={true}
      className=" m-3 max-h-[30rem] max-w-[35rem] overflow-hidden rounded-2xl border-none hover:shadow-gray-900 shadow-lg hover:scale-[1.03] duration-300"
    >
      <CardHeader
        floated={false}
        shadow={true}
        color="transparent"
        className="m-[1px] rounded-t-2xl opacity-[0.8]"
      >
        <img src="img/dogrobo.jpg" alt="ui/ux review check" />
      </CardHeader>
      <CardBody className="m-4">
        <Typography variant="h4" color="blue-gray">
          First-Project
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire others.
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center -space-x-3">{/*  */}</div>
        <Typography className="font-normal m-4">January 10</Typography>
      </CardFooter>
    </Card>
  );
}

const ExampleComponent = () => {
  return <PricingCard />;
};

export default ExampleComponent;
