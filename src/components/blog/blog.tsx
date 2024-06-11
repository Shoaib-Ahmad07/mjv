import Image from "next/image";
import React from "react";
import { PortableText } from "@portabletext/react";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
async function getData() {
  const fetchData = await client.fetch(`*[_type == 'blog']{
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
  console.log("blog", data);
  return (
    <section className="container mx-auto px-4 card1">
      <div className="px-4 text-center mx-auto mt-10">
        <h5 className="font-[500] text-[16px] tracking-[5px] py-4">– BLOG –</h5>
        <h1 className="font-[600] lg:text-4xl text-2xl pb-2">
          OUR LATEST THOUGHTS
        </h1>
        <p>
          Our team has spent years building software products for political
          campaigns and non-profits.
        </p>
        <p className="py-1">
          We’ve learned, sometimes the hard way, that small orgs need to build
          smarter tech to stay competitive.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 py-10">
        {data &&
          data.map((item: any, i: number) => (
            <div key={i} className=" h-auto  ">
              <Image
                src={item?.mainImage.asset.url}
                alt="Main image"
                width={200}
                height={220}
                className="w-full h-[220px] object-cover rounded-[4px]"
              />
              <div className="py-3">
                <h2 className=" font-[700] text-xl">
                  {item?.title}
                </h2>
                <p className="py-2 text-[14px]">
                  {item?.short_info}
                </p>
                <p>{item?.Content}</p>

                <Link
                  href={`/blog/${item?.slug?.current}`}
                  className="text-sm font-[400] hover:text-blue-700 mt-5  text-white flex gap-2 items-center "
                >
                  Continue Reading <IoMdArrowForward className="text-lg" />
                </Link>
               
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
