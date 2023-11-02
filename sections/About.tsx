import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const about = [
  {
    heading: "Who We Are..?",
    desec:
      "We are a dedicated team of tech enthusiasts who believe in the power of simplicity and productivity. Our journey began with the aim of making your daily document management tasks easier.",
  },
  {
    heading: "What We Do..?",
    desec:
      " we offer a comprehensive PDF document management solution that combines the convenience of cloud storage with powerful PDF editing capabilities.",
  },
  {
    heading: "What You Can Expect..?",
    desec:
      " Experience the freedom to access your files from anywhere, on any device. With our user-friendly interface, you can navigate through your PDFs effortlessly.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[url('/assets/dr15.jpg')] dark:bg-[url('/dr17.jpg')] bg-cover bg-center  flex  justify-center flex-col max-w-full py-20 "
    >
      <div className="flex items-center mt-24 mx-auto ">
        <div className="w-24 h-1 bg-green-500" />
        <h3 className="text-lg">About Us</h3>
      </div>
      <div className="w-full max-w-full sm:max-w-5xl flex flex-col md:flex-row mx-auto h-full mt-10">
        <div className="w-full mx-auto md:max-w-[50%] justify-center  items-center p-14  flex space-x-1  ">
          <div className="w-[50%]  flex flex-col justify-end p-2  h-full ">
            <Card className="flex items-end  h-56 mb-4  grayscale  bg-[url('/assets/c1.jpg')]  w-full bg-cover bg-bottom ">
              <CardContent className="text-sm p-3 w-full backdrop-brightness-50 text-white">
                <p>Harper</p>
                <p>CEO & Founder</p>
              </CardContent>
            </Card>
            <Card className="flex items-end   h-56  grayscale  bg-[url('/assets/c2.jpg')]  w-full bg-cover bg-center ">
              <CardContent className="text-sm p-3 w-full backdrop-brightness-50 text-white">
                <p>Henry</p>
                <p>CFO</p>
              </CardContent>
            </Card>
          </div>
          <div className="w-[50%]  flex flex-col justify-start  p-2  h-full ">
            <Card className=" flex items-end h-56 mb-4  grayscale  bg-[url('/assets/c5.jpg')]  w-full bg-cover bg-center ">
              <CardContent className="text-sm p-3 w-full backdrop-brightness-50 text-white">
                <p>Mark</p>
                <p>Co-Founder</p>
              </CardContent>
            </Card>
            <Card className="flex  items-end   h-56  grayscale  bg-[url('/assets/c4.jpg')]  w-full bg-cover bg-center ">
              <CardContent className="text-sm p-3 w-full backdrop-brightness-50 text-white">
                <p>Olivia</p>
                <p>Co-Founder</p>
              </CardContent>
            </Card>
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
