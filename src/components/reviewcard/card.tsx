"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const cardData = [
  {
    id: 1,
    imageSrc: "/image/phone.jpg",
    title: "Artem - Digital Marketing campaign",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras",
  },
  {
    id: 1,
    imageSrc: "/image/phone.jpg",
    title: "Artem - Digital Marketing campaign",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras",
  },
  {
    id: 1,
    imageSrc: "/image/phone.jpg",
    title: "Artem - Digital Marketing campaign",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras Lorem ipsum dolor sit amet consectetur. Cras leo ornare eget augue. Lacus eget enim cras",
  },
  
];

function Card() {
  const [showButtons, setShowButtons] = useState(false);

  const handleLinkHover = () => {
    setShowButtons(true);
  };

  const handleLinkLeave = () => {
    setShowButtons(false);
  };

  return (
    <section className="container mx-auto px-4">
      <div className="grid grid-cols-3 gap-4">
        {cardData.map((card) => (
          <div key={card.id} className="border p-4"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
          >
            <Image
              src={card.imageSrc}
              width={500}
              height={500}
              alt=""
              className="w-full pb-3"
            />
            <h2>{card.title}</h2>
            <p className="text-[12px] py-3">{card.description}</p>
            <Link
              href="/"
              className=""
              
            >
              hello
            </Link>
            {showButtons && (
              <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Button 1
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Button 2
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Button 3
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Button 4
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
export default Card







