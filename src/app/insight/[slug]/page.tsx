import Link from "next/link";
import { client } from "../../../../sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

async function getData(slug: any) {
  const fetchData = await client.fetch(`*[_type == 'insight' && slug.current == '${slug}'][0] {
    content,
    mainImage {
      asset->{
        url
      }
    },
  }`);
  console.log("🚀 ~ getData ~ fetchData:", fetchData);
  return {
    insight: fetchData,
  };
}

export default async function InsightArticle(props: any) {
  const { insight } = await getData(props.params.slug);
  console.log("🚀 ~ InsightArticle ~ insight", insight);

  return (
    <>
      <section className="container mx-auto px-4 py-4 ">
        <div>
          {insight?.mainImage?.asset?.url && (
            <Image
              src={insight?.mainImage?.asset?.url}
              alt="Main image"
              width={500}
              height={500}
              className="w-full h-[220px] object-cover"
            />
          )}
          <div className="card1">
            <PortableText value={insight.content} />
          </div>
        </div>
      </section>
    </>
  );
}
