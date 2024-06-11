import React from "react";
import Link from "next/link";

const cardData = [
  {
    title: "Visionary Planning",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dignissim dictum scelerisque dictumst integer purus pharetra felis. Mauris suspendisse molestie nisl mattis viverra eget tempus nunc sit. Maecenas augue pellentesque.",
  },
  {
    title: "INITIAL IMPACT",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dignissim dictum scelerisque dictumst integer purus pharetra felis. Mauris suspendisse molestie nisl mattis viverra eget tempus nunc sit. Maecenas augue pellentesque.",
  },
  {
    title: "RAPID VALUE CREATION",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dignissim dictum scelerisque dictumst integer purus pharetra felis. Mauris suspendisse molestie nisl mattis viverra eget tempus nunc sit. Maecenas augue pellentesque..",
  },
  {
    title: "SCALING INNOVATION",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dignissim dictum scelerisque dictumst integer purus pharetra felis. Mauris suspendisse molestie nisl mattis viverra eget tempus nunc sit. Maecenas augue pellentesque.",
  },
  // Add more objects as needed
];

function Collaborate() {
  return (
    <>
      <section className="container mx-auto px-4 py-10">
        <div>
          <div className="text-center">
            <h1 className="text-[20px] font-[500]">
              How We Collaborate with You
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-6">
            {cardData.map((card, index) => (
              <div key={index} className="bg-[#151515] p-5 rounded-[2px]">
                <h2 className="text-[20px] font-[500]">{card.title}</h2>
                <p className="text-[#A5A5A1] text-[14px] py-3">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mx-auto text-center mt-14">
            <Link
              href="/"
              className="bg-[#292929] px-6 py-4  rounded-[8px] text-[14px] font-[500] hover:bg-black hover:border-white border border-[#292929]"
            >
              Let’s Collaborate
            </Link>
          </div>
        </div>
      </section>
      <div className="border border-[#262626] "></div>
    </>
  );
}

export default Collaborate;
