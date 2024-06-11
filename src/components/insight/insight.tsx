
import Image from "next/image";
import React from "react";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

async function getData() {
  const fetchData = await client.fetch(`*[_type == 'insight']{
    title,
    short_info,
    mainImage{
      asset->{ 
        url
      }
    },
    category[]->{
      title,
      slug,
    },
    Content,
    slug,
  }`);
  console.log("🚀 ~ getData ~ fetchData:", fetchData);
  return fetchData;
}

export default async function Home() {
  const data = await getData();
  console.log("insight", data);
  return (
    <section className="container mx-auto px-4 card1">
      <div className="px-4 flex justify-between items-center flex-wrap mt-10">
        <div>
          <h5 className="font-medium text-[16px] py-2 tracking-[4px]">
            – OUR CASE STUDIES
          </h5>
          <h1 className="font-semibold lg:text-4xl text-2xl pb-2">
            GET INSIGHT INTO THE MANY POSSIBILITIES!
          </h1>
          <p className="text-[16px] font-[400]">
            Our team has spent years building software products for political
            campaigns and non-profits.
          </p>
          <p className="text-[16px] font-[400]">
            We’ve learned, sometimes the hard way, that small orgs need to build
            smarter tech to stay competitive.
          </p>
        </div>
        <div className="lg:mt-28 mt-5 flex gap-3 text-xl">
          <FaArrowLeft className="text-gray-500" />
          <FaArrowRight />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {data &&
          data.map((tab:any, i:number) => (
            <div
              key={i}
              className="group bg-[#151515] p-4 h-auto border border-[#484847] rounded-[2px] hover:shadow-lg transition duration-300 relative"
            >
              <Image
                src={tab?.mainImage?.asset?.url}
                alt="Main image"
                width={200}
                height={220}
                className="w-full h-[220px] object-cover rounded-[2px]"
              />
              <div className="py-3">
                <h2 className="font-[700] text-xl">{tab?.title}</h2>
                <p className="py-2 text-[14px]">{tab?.short_info}</p>

                {tab.category && tab.category.length > 0 && (
                  <ul className="flex flex-wrap gap-2 text-[12px]">
                    {tab.category.map((category:any, i:number) => (
                      <li
                        key={i}
                        className=" text-white px-3 py-2 rounded border "
                      >
                        <Link href={`/category/${category.slug.current}`}>
                          {category.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}


                <Link
                  href={`/insight/${tab?.slug?.current}`}
                  className="text-sm font-[400] hover:text-blue-700 mt-5 text-white flex gap-2 items-center"
                >
                  Continue Reading <IoMdArrowForward className="text-lg" />
                </Link>
              </div>
            </div>
          ))}
      </div>
      <div className='py-10 flex justify-center pb-14'>
          <Link href='/' className="bg-[#292929] border border-[#292929] hover:bg-black hover:border-white py-4 px-6 text-[14px] font-[400] rounded-[8px] text-center mx-auto">
            View all Case Studies
          </Link>
        </div>
    </section>
  );
}














// "use client"
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { IoMdArrowForward } from "react-icons/io";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import { client } from "../../../sanity/lib/client";
// const cardData = [
//   {
//     id: 1,
//     title: "Generative AI Solutions",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras",
//     imageUrl: "/image/phone.jpg",
//     tags: ["Analysis", "Solutions", "Solutions", "AI Development"],
//   },
//   {
//     id: 2,
//     title: "Smart Money AI",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras",
//     imageUrl: "/image/phone.jpg",
//     tags: ["Campaign", "Management", "AI Development"],
//   },
//   {
//     id: 3,
//     title: "Photo Manipulator AI",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras",
//     imageUrl: "/image/phone.jpg",
//     tags: ["Non-Profit", "Solutions", "AI Development"],
//   },
// ];

// async function getData() {
//   const fetchData = await client.fetch(`*[_type == 'insight']{
//     title,
//     short_info,
//     mainImage{
//       asset->{
//         url
//       }
//     },
//     Content,
//     slug,
//   }`);
//   console.log("🚀 ~ getData ~ fetchData:", fetchData);
//   return fetchData;
// }

// export default async function Home() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const data = await getData();
//   console.log("insight", data);
//   return (
//     <section className="container mx-auto py-6">
//       <div className="">
//         <div className="px-4 flex justify-between items-center flex-wrap">
//           <div>
//             <h5 className="font-medium text-[16px] py-2 tracking-[4px]">– OUR CASE STUDIES</h5>
//             <h1 className="font-semibold lg:text-4xl text-2xl pb-2">
//               GET INSIGHT INTO THE MANY POSSIBILITIES!
//             </h1>
//             <p className="text-[16px] font-[400]">
//               Our team has spent years building software products for political
//               campaigns and non-profits.
//             </p>
//             <p className="text-[16px] font-[400]">
//               We’ve learned, sometimes the hard way, that small orgs need to
//               build smarter tech to stay competitive.
//             </p>
//           </div>
//           <div className="lg:mt-28 mt-5 flex gap-3 text-xl">
//             <FaArrowLeft className="text-gray-500" />
//             <FaArrowRight />
//           </div>
//         </div>

//         <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
//         {data &&
//           data.map((item: any, id: number) => (
//             <div
//               key={id}
//               className="group bg-[#151515] p-4 h-auto border border-[#484847] rounded-[2px] hover:shadow-lg transition duration-300 relative"
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <Image
//                 src={item?.mainImage.asset.url}
//                 width={500}
//                 height={500}
//                 alt={item.title}
//                 className="w-full rounded-[2px] "
//               />
//               <h2 className="font-medium text-2xl pt-3 text-white group-hover:cursor-pointer">
//                 {item?.title}
//               </h2>
//               <p className="font-normal text-sm pb-4 text-gray-300">
//                 {item?.short_info}
//               </p>
//               <div
//                 className={`flex flex-wrap ${
//                   hoveredIndex === index ? "mb-4" : "opacity-0"
//                 } gap-5 transition-opacity duration-300`}
//               >
//                 {item.tags?.map((tag, index) => (
//                   <Link key={index} href="/">
//                     <span className=" text-sm font-medium text-white border border-[#EAEAEB] py-2 px-3 rounded-2 m-0">
//                       {tag}
//                     </span>
//                   </Link>
//                 ))}
//               </div>
//               <Link
//                 href="/"
//                 className="text-sm font-normal  flex items-center gap-2 hover:text-blue-500"
//               >
//                 See Case Study <IoMdArrowForward />
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>

//        <div className="text-center mx-auto justify-center mt-10">
//        <Link href={`/insight/${item?.slug?.current}`} className="border px-5 py-3 rounded-[8px] text-[14px] ">View all Case Studies</Link>
//        </div>
//     </section>
//   );
// }
