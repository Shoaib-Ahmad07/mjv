import Link from "next/link";
import { client } from "../../../../sanity/lib/client";
import Image from "next/image";


async function getData(slug:any) {
  const fetchData = await client.fetch(`*[_type == 'category' && slug.current == '${slug}'][0] {
    content,
    mainImage {
      asset->{
        url
      }
    },
    
  }`);
  console.log("🚀 ~ getData ~ fetchData:", fetchData);
  return {
    category: fetchData,
  };
}

export default async function categoryArticle(props:any) {
  const { category } = await getData(props.params.slug);
  console.log("🚀 ~ categoryArticle ~ category", category)

  return (
    <>
      <section className="container mx-auto px-4 py-4">
        <div>       
            <Image
              src={category?.mainImage?.asset?.url}
              alt="Main image"
              width={500}
              height={500}
              className="w-full h-[220px] object-cover"
            />            

        </div>
      </section>
    </>
  );
}


///////////////////ajsdhgjhasd////////////////


