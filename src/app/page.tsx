
import Blog from '../components/blog/blog'
import Clicnt from '../components/clicnt/clicnt'
import Insight from '../components/insight/insight'
import Team from '../components/team/team'
import Navbar from '../components/navbar/navbar'
import Hero from '../components/hero/hero'
import Logo from '../components/logo'
import About from '../components/about'
import Collaborate from '../components/Collaborate'
import Footer from '../components/footer'
import Servicess from '../components/servicess'
export default function Home() {
  return (
   <>
     <div >
     <Navbar/>
     <Hero/>
     <Insight/>
     <Logo/>
     <About/>
     <Collaborate />
     <Servicess/>
     <Blog/>
     <Clicnt/>
     <Team/>
     <Footer/>
     </div>
   </>
  )
}
















// import React from "react";
// import { PortableText } from "@portabletext/react";
// import { client } from "../../sanity/lib/client";
// import Image from "next/image";
// import Link from "next/link";

// async function getData() {
//   const fetchData = await client.fetch(`*[_type == 'blog']{
//     title,
//     short_info,
//     releaseDate,
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
//   const data = await getData();
//   console.log("blog", data);
//   return (
//     <section className="container mx-auto px-4 card1">
//       <h1 className="text-2xl font-[700] text-center">blog</h1>
//       <div className="grid grid-cols-3 gap-8">
//         {data &&
//           data.map((item: any, i: number) => (
//             <div key={i} className=" h-auto border ">
//               <Image
//                 src={item?.mainImage.asset.url}
//                 alt="Main image"
//                 width={200}
//                 height={220}
//                 className="w-full h-[220px] object-cover"
//               />
//               <div className="px-3 py-3">
//                 <h2 className="text-red-800 font-[700] text-xl">
//                   {item?.title}
//                 </h2>
//                 <p className="py-2 text-black line-clamp-4">
//                   {item?.short_info}
//                 </p>
//                 <p>{item?.Content}</p>

//                 <Link
//                   href={`/blog/${item?.slug?.current}`}
//                   className="text-sm font-normal mt-5 uppercase text-white bg-yellow-500 hover:bg-black Raleway block w-fit py-[13px] px-[34px] shadow-[0_2px_5px_0_rgba(0,0,0,0.16)]"
//                 >
//                   Read More
//                 </Link>          
//                 <p className="text-right">{item?.releaseDate}</p>
//               </div>
//             </div>
//           ))}
//       </div>   
//     </section>
//   );
// }



