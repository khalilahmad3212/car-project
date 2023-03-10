import Image from "next/image";
import React, { useState } from "react";

function TestimonialCard({ image, name, role }) {
  const [bio, setbio] = useState(false);

  function handleClick() {
    setbio(!bio);
  }

  return (
    <div key={name + role} className="relative group">
      <div className="flex flex-col cursor-pointer justify-center items-center px-8 py-14 rounded-xl border-[1px] border-gray-500 group-hover:border-primary">
        <Image src={image} alt="man" width={100} height={20} className="mb-5" />
        <h3 className="font-bold">{name}</h3>
        <p className="text-sm">{role}</p>
      </div>
      <div
        className="absolute hidden inset-0 cursor-pointer group-hover:flex items-center justify-center"
        onClick={handleClick}
      >
        <div className="h-full w-full bg-primary bg-opacity-5 rounded-lg flex items-center justify-center text-white">
          <p className="text-lg font-sm relative -top-6">Read Bio</p>
        </div>
      </div>
      {bio && (
        <div className="absolute z-10 bg-white shadow-2xl -top-20 left-5 w-96 h-96 rounded-lg overflow-hidden">
          <div className="absolute top-0 right-3 p-2">
            <i
              className="fas fa-times text-gray-900 cursor-pointer"
              onClick={handleClick}
            ></i>
          </div>
          <div className="flex items-center px-8 pt-6">
            {/* text */}
            <div className="w-1/2 pt-5">
              <div>
                <div className="text-gray-600 font-medium">Developer</div>
              </div>
              <div className="flex items-center mb-3">
                <div className="text-gray-600 font-medium">John Doe</div>
              </div>
            </div>

            {/* Image */}
            <div className="flex items-center justify-end w-1/2">
              <Image
                src={image}
                alt="Person"
                className="h-20 w-20 rounded-full"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="p-5">
            <p className="text-gray-600 text-justify font-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              viverra nisl vel justo euismod, id commodo velit tincidunt. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra
              nisl vel justo euismod, id commodo velit tincidunt. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Aliquam viverra nisl
              vel justo euismod, id commodo velit tincidunt.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TestimonialCard;
