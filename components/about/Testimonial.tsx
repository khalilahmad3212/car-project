import React, { useState } from "react";

import first from "/public/images/about/first.png";
import second from "/public/images/about/second.png";
import third from "/public/images/about/third.png";
import forth from "/public/images/about/forth.png";

import TestimonialCard from "./TestimonialCard";

const testimonial_data = [
  {
    image: first,
    name: "Andre Haddad",
    role: "Chief Executive Officer",
  },
  {
    image: second,
    name: "Julie Weingardt",
    role: "Chief Executive Officer",
  },
  {
    image: third,
    name: "Andre Haddad",
    role: "Chief Executive Officer",
  },
  {
    image: forth,
    name: "Andre Haddad",
    role: "Chief Executive Officer",
  },
];
function Testimonial() {


  return (
    <div className=" max-w-[1440px] mx-auto mb-32 mt-10">
      <h1 className=" text-center font-[500] text-3xl mb-14">Leadership</h1>

      <div className="flex flex-col gap-8 md:flex-row justify-evenly px-10 sm:px-32">
        {testimonial_data.map(({ image, name, role }) => (
          <TestimonialCard key={name + role + (new Date().toString())} image={image} name={name} role={role}/> 
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
