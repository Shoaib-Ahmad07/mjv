import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import { IoArrowForwardSharp } from "react-icons/io5";
import { client } from "../../sanity/lib/client";

// const servicesData = [
//   {
//     id: 1,
//     title: "Generative AI Solutions",
//     description: "Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras.",
//     imageSrc: "/image/u_lightbulb-alt.svg",
//     imageAlt: "Generative AI Solutions",
//     link: "/",
//   },
//   {
//     id: 2,
//     title: "Software Development",
//     description: "Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras.",
//     imageSrc: "/image/Vector (7).svg",
//     imageAlt: "Software Development",
//     link: "/",
//   },
//   {
//     id: 3,
//     title: "UX/UI Design",
//     description: "Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras.",
//     imageSrc: "/image/fi_pen-tool.svg",
//     imageAlt: "UX/UI Design",
//     link: "/",
//   },
//   {
//     id: 4,
//     title: "Product Strategy",
//     description: "Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras.",
//     imageSrc: "/image/u_layer-group.svg",
//     imageAlt: "Product Strategy",
//     link: "/",
//   },
//   {
//     id: 5,
//     title: "SEO",
//     description: "Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras.",
//     imageSrc: "/image/fi_search.svg",
//     imageAlt: "SEO",
//     link: "/",
//   },
//   {
//     id: 6,
//     title: "Mobile App Development",
//     description: "Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras.",
//     imageSrc: "/image/u_mobile-android-alt.svg",
//     imageAlt: "Mobile App Development",
//     link: "/",
//   },

// ];

async function getData() {
    const fetchData = await client.fetch(`*[_type == 'servicess']{
      title,
      short_info,
      mainImage{
        asset->{
          url
        }
      },
      Content,
      slug,
    }`);
    console.log("🚀 ~ getData ~ fetchData:", fetchData);
    return fetchData;
  }
  export default async function Home() {
    const data = await getData();
    console.log("servicess", data);
  return (
    <>
    <section className='container mx-auto px-4 py-10'>
      <div>
        <h4 className='text-[16px] font-[500] mt-10 tracking-[5px]'>– OUR SERVICES</h4>
        <h1 className='lg:text-5xl md:text-3xl text-xl  font-[600] lg:max-w-[30%] py-4'>HOW WE CAN HELP YOU</h1>
        <p className='text-[18px] font-[400] max-w-[85%]'>Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras sollicitudin. Viverra pharetra lorem sit nulla ultrices integer risus. Massa placerat leo vitae accumsan.</p>
        <div className="mt-10">
          <Link
            href="/"
            className="bg-[#292929] px-6 py-4 rounded-[8px] text-[14px] font-[500] hover:bg-black hover:border-white border border-[#292929]">
            Get a Free Consultation!
          </Link>
        </div>
      </div>

      <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 py-5'>
        {data &&
          data.map((item: any, i: number) => (
          <div key={i} className='border border-[#484847] p-6 rounded-sm'>
            <div className='mb-4 border-[#484847] border w-12 h-12 flex items-center justify-center rounded-sm'>
              <Image
                src={item?.mainImage.asset.url}
                alt='Main image'
                width={28}
                height={28}
                className='w-[32px] h-[32px]'
              />
            </div>
            <h3 className='text-xl font-semibold '>{item?.title}</h3>
            <p className='text-[16px] mb-6 text-[#EAEAEB]'>{item?.short_info}</p>
            <Link href={`/servicess/${item?.slug?.current}`} className='text-[#F7F7F7] flex items-center gap-3 hover:text-blue-700'>Get Started <IoArrowForwardSharp /> </Link>
          </div>
        ))}
      </div>

    </section>
     <div className="border border-[#262626] mt-20"></div>
    </>
  )
}
