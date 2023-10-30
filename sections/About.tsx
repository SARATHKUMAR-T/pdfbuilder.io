import { Card } from "@/components/ui/card";
import React from "react";

const about = [
  {
    heading: "Who Am I..?",
    desec:
      "im a software dveleoper skilled in mernstack.proficent in mongodb,expressjs,nodejs,reactjs.very enthisatic person.",
  },
  {
    heading: "What I Do..?",
    desec:
      "i make websites ofcourse beautiful and robust too. Skilled in nextjs and express js. can create very user intuitive websites and maintain consisten codes.",
  },
  {
    heading: "What You Can Expect..?",
    desec: "Good and robust work from me. trustable and hord working person.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex  justify-center flex-col max-w-full py-20 "
    >
      <div className="flex items-center mt-24 mx-auto ">
        <div className="w-24 h-1 bg-green-500" />
        <h3 className="text-lg">About Us</h3>
      </div>
      <div className="w-full max-w-full sm:max-w-5xl flex flex-col md:flex-row mx-auto h-full mt-10">
        <div className="w-full mx-auto md:max-w-[50%] justify-center  items-center p-14  flex space-x-1  ">
          <div className="w-[50%]  flex flex-col justify-end p-2  h-full ">
            <Card className=" border-0 h-56 mb-4  grayscale  bg-[url('/assets/github.jpg')]  w-full bg-cover bg-top " />
            <Card className=" border-0  h-56  grayscale  bg-[url('/assets/github.jpg')]  w-full bg-cover bg-top " />
          </div>
          <div className="w-[50%]  flex flex-col justify-start  p-2  h-full ">
            <Card className=" border-0 h-56 mb-4  grayscale  bg-[url('/assets/github.jpg')]  w-full bg-cover bg-top " />
            <Card className=" border-0  h-56  grayscale  bg-[url('/assets/github.jpg')]  w-full bg-cover bg-top " />
          </div>
        </div>
        <div className="w-full md:w-[50%] p-5  flex items-center justify-center">
          <div className="  mx-auto flex p-2 flex-col gap-14">
            {about.map((item, i) => (
              <div key={i}>
                <h3 className="font-bold text-center md:text-start">
                  {item.heading}
                </h3>
                <p className="max-w-full text-center md:text-start">
                  {item.desec}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
