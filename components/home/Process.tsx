import React from "react";
import Image from "next/image";

// svgs
import why_us_icon_1 from "/public/images/why_us_icon1.svg";
import why_us_icon_2 from "/public/images/why_us_icon2.svg";
import why_us_icon_3 from "/public/images/why_us_icon3.svg";


const cards_data = [
  {
    image: why_us_icon_1,
    title: "Verified vehicles",
    description:
      "Maecenas posuere lectus etiam dictumst tempus justo ultrices a. Ullamcorper non.",
    button: "Give us a message",
    margin: '0px'
  },
  {
    image: why_us_icon_2,
    title: "Big network",
    description:
      "Neque velit urna nisl enim sed sed ornare accumsan elementum. Quis vitae tellus.",
    margin: '40px'
    },
  {
    image: why_us_icon_3,
    title: "Available 24/7",
    description:
      "Curabitur maecenas ornare est et est tortor vel pretium. Consequat sed neque posuere.",
      margin: '80px'
    },
];



import bg from './holiday_pattern.png';

function Process() {
  return (
    <div style={{
      backgroundImage: `url(${bg.src})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }} className="mb-7 py-14 pb-32">

      <h4 className="text-center uppercase">How we work</h4>
      <h3 className="text-center text-3xl">How does it work</h3>
      
      <div className=" mt-16 grid grid-cols-1 md:lg:xl:grid-cols-3 group gap-5 px-4 md:px-24">

        {cards_data.map(({ image, title, description, button, margin }, index) => (
          <div
            key={title}
            className={`${!button && 'pb-14'} py-5 rounded-xl  relative px-6 flex flex-col shadow-2xl cursor-pointer bg-white hover:bg-primary`}
            style={{top: margin}}
          >
            <span className="text-6xl absolute left-36 -z-10 -top-10 text-gray-500 hover:text-black font-bold">{'0' + (index + 1)}</span>
            <Image src={image} alt="icon" width={50} height={10} />
            <p className="text-xl font-medium text-slate-700 mt-3">{title}</p>
            <p className="mt-2 text-sm text-slate-500 max-w-[200px]">
              {description}
            </p>
            {button && (
              <button className="bg-primary hover:bg-white text-white hover:text-black py-2 w-40 mt-4 text-sm flex items-center justify-center rounded-full">
                {button}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Process;
