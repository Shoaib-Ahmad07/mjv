import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <section className="bg-[#151515] h-[312px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-white mb-8">Partners in Innovation</p>
          <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 lg:gap-14 md:gap-8 gap-4">
            <div className="flex justify-center">
              <Image
                src="/image/Fictional company logo (1).svg"
                alt="Company logo 1"
                width={200}
                height={220}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/image/Fictional company logo (2).svg"
                alt="Company logo 2"
                width={200}
                height={220}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/image/Fictional company logo (3).svg"
                alt="Company logo 3"
                width={200}
                height={220}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/image/Fictional company logo (4).svg"
                alt="Company logo 4"
                width={200}
                height={220}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/image/Fictional company logo.svg"
                alt="Company logo 5"
                width={200}
                height={220}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Logo;
