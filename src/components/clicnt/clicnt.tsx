// "use client";
// import React, { Component } from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// import { client } from "../../../sanity/lib/client";


// const data = [
//   {
//     id: 1,
//     feedback: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
//     name: "John Smith",
//     position: "Manager at Business Inc",
//     image: "/image/phone.jpg"
//   },
//   {
//     id: 2,
//     feedback: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
//     name: "John Smith",
//     position: "Manager at Business Inc",
//     image: "/image/phone.jpg"
//   },
//   {
//     id: 3,
//     feedback: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
//     name: "John Smith",
//     position: "Manager at Business Inc",
//     image: "/image/phone.jpg"
//   },
// ];

// async function getData() {
//   const fetchData = await client.fetch(`*[_type == 'clicnt']{
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

// export default  class AutoPlay extends Component {
//   render() {
//     const settings = {
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: false,
//       prevArrow: false,
//       nextArrow: false,
//       arrows: false,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 2,
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 1,
//           }
//         }
//       ]
//     };
   
//      return (
//       <section className="">
//         <div className=" mx-auto py-10 ">
//           <div className="container mx-auto px-4 text-center py-8">
//             <h5 className='text-[16px] font-[500] tracking-[5px]'>– Testimonials –</h5>
//             <h1 className='lg:text-5xl md:text-4xl text-3xl font-[600] py-4'>WHAT OUR CLIENTS SAY</h1>
//             <p className='text-[16px] font-[400]'>View some feeback below made from our esteemed clients</p>
//           </div>
//           <Slider {...settings}>
//             {data &&
//                data.map((item, i) => (
//               <div key={i} className="p-4 lg:mx-52">
//                 <div className="bg-[#151515]  shadow-md p-6">
//                   <Image
//                     src='/image/Vector.svg'
//                     width={20}
//                     height={20}
//                     alt=''
//                     className='w-5'
//                   />
//                   <p className='text-[14px] font-[400] py-6'>{item?.short_info}</p>
//                   <div className='flex py-3 items-center gap-3'>
//                     <div>
//                       <Image
//                         src={item?.mainImage?.asset?.url}
//                         width={500}
//                         height={500}
//                         alt='image'
//                         className='w-14 h-14 rounded-full'
//                       />
//                     </div>
//                     <div>
//                       <h4 className='font-[500]'>{item.name}</h4>
//                       <p className='text-[14px] font-[400]'>{item.position}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}      
//           </Slider>
//         </div>
//       </section>
//     );
//   }
//   }


"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { client } from "../../../sanity/lib/client";

const data = [
  {
    id: 1,
    feedback: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    name: "John Smith",
    position: "Manager at Business Inc",
    image: "/image/phone.jpg"
  },
  {
    id: 2,
    feedback: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    name: "John Smith",
    position: "Manager at Business Inc",
    image: "/image/phone.jpg"
  },
  {
    id: 3,
    feedback: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    name: "John Smith",
    position: "Manager at Business Inc",
    image: "/image/phone.jpg"
  },
];

async function getData() {
  const fetchData = await client.fetch(`*[_type == 'clicnt']{
    title,
    short_info,
    image{
      asset->{
        ref
      }
    },
    Content,
    slug,
  }`);
  console.log("🚀 ~ getData ~ fetchData:", fetchData);
  return fetchData;
}

export default class AutoPlay extends Component {
  render() {
    const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };

    return (
      <section className="">
        <div className="mx-auto py-10">
          <div className="container mx-auto px-4 text-center py-8">
            <h5 className='text-[16px] font-[500] tracking-[5px]'>– Testimonials –</h5>
            <h1 className='lg:text-5xl md:text-4xl text-3xl font-[600] py-4'>WHAT OUR CLIENTS SAY</h1>
            <p className='text-[16px] font-[400]'>View some feedback below made from our esteemed clients</p>
          </div>
          <Slider {...settings}>
            {data && data.map((item) => (
              <div key={item.id} className="p-4 lg:mx-52">
                <div className="bg-[#151515] shadow-md p-6">
                  <Image
                    src='/image/Vector.svg'
                    width={20}
                    height={20}
                    alt='quote'
                    className='w-5'
                  />
                  <p className='text-[14px] font-[400] py-6'>{item.feedback}</p>
                  <div className='flex py-3 items-center gap-3'>
                    <div>
                      <Image
                        src={item.image}
                        width={500}
                        height={500}
                        alt='client'
                        className='w-14 h-14 rounded-full'
                      />
                    </div>
                    <div>
                      <h4 className='font-[500]'>{item.name}</h4>
                      <p className='text-[14px] font-[400]'>{item.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  }
}
