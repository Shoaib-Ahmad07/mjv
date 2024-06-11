import Link from "next/link";
import { client } from "../../../../sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

async function getData(slug: any) {
  const fetchData = await client.fetch(`*[_type == 'servicess' && slug.current == '${slug}'][0] {
    content,
    mainImage {
      asset->{
        url
      }
    },
  }`);
  console.log("🚀 ~ getData ~ fetchData:", fetchData);
  return {
    servicess: fetchData,
  };
}

export default async function InsightArticle(props: any) {
  const { servicess } = await getData(props.params.slug);
  console.log("🚀 ~ InsightArticle ~ servicess", servicess);

  return (
    <>
      <section className="container mx-auto px-4 py-4 ">
        <div>
          
          <div className="card1">
            <PortableText value={servicess.content} />
          </div>
        </div>
      </section>
    </>
  );
}
