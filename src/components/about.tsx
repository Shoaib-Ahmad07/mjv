import React from "react";

function About() {
  return (
    <section
      className="h-[500px] w-full bg-cover bg-center flex items-end"
      style={{ backgroundImage: "url('/image/image 1.svg')" }}
    >
      <div className="w-[68%]  mx-auto justify-center text-center mb-5 container px-4 ">
        <h4 className="tracking-[4px]"> – About US – </h4>
        <h2 className="lg:text-5xl md:text-3xl text-2xl font-[600] py-4">THE MJV STORY</h2>
        <p>Founded in 2023 by longtime friends and developers from Chicago, MJ Ventures brings over a decade of experience to our projects. Our passion for building impactful products has driven us to work on diverse projects, from political campaigns to non-profits.</p>
      </div>
    </section>
  );
}

export default About;
