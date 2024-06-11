import React from "react";
import Image from "next/image";
import Link from 'next/link';



const carddata = [
  {
    id: 1,
    imageurl: "/image/Photo.png",
    title: "Marley Rosario",
    description: "Chief Executive Officer",
  },
  {
    id: 2,
    imageurl: "/image/Photo.png",
    title: "Marley Rosario",
    description: "Chief Executive Officer",
  },
  {
    id: 3,
    imageurl: "/image/Photo.png",
    title: "Marley Rosario",
    description: "Chief Executive Officer",
  },
  {
    id: 4,
    imageurl: "/image/Photo.png",
    title: "Marley Rosario",
    description: "Chief Executive Officer",
  },
  {
    id: 5,
    imageurl: "/image/Photo.png",
    title: "Marley Rosario",
    description: "Chief Executive Officer",
  },
];

function team() {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center mt-10">
        <h5 className='tracking-[5px]'>– OUR TEAM –</h5>
        <h1 className="font-[600] lg:text-5xl md:text-3xl text-xl py-3 ">
          MEET THE MJV TEAM
        </h1>
        <p className="text-[15px] font-[400]">
          Our team has spent years building software products for political
          campaigns and non-profits.{" "}
        </p>
        <p className="text-[15px] font-[400]">
          {" "}
          We’ve learned, sometimes the hard way, that small orgs need to build
          smarter tech to stay competitive.
        </p>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 lg:gap-8 md:gap-8 mt-10">
       {carddata.map((item:any , id:number) =>(
         <div key={id} className='text-center'>
            <Image
              src={item.imageurl}
              width={500}
              height={500}
              alt=""
              className="pb-3"
            />
            <h3 className="text-[15px] font-[600]" >{item.title}</h3>
            <p className="text-[14px]">{item.description}</p>
         </div>
       ))}
      </div>
   <div className="text-center mx-auto justify-center bg-[#292929] rounded-[8px] py-3 px-3 max-w-44 mt-10 hover:bg-black hover:border-white border border-[#292929] ">
      <Link href='/' className=" py-10">Get in Touch</Link>
   </div>
    </section>
  );
}

export default team;
