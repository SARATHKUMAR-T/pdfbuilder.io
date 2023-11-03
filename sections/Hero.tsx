/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import { motion as m } from "framer-motion";
import { ArrowUpRightSquare, GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import TextAnimation from "@/components/HeadText";

export default function Hero() {
  return (
    <section
      id="hero"
      className="z-0 pb-24 relative max-w-full w-full   min-h-screen px-6"
    >
      <div>
        <TextAnimation />
        <p className="text-center mt-4 font-normal">
          Simplify Your Document Management
          <br />
          Store, Edit, and Access Your PDFs from Anywhere, Anytime
        </p>
        <Card className="max-w-[180px] mx-auto mt-6 p-2 bg-gray-200 dark:bg-slate-700">
          <CardHeader className="p-0">
            <div className="w-full">
              <Button className="w-full block " variant="default">
                <Link href="/signup">Try It Now</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className=" p-0 text-sm text-center mt-2">
            Free For Personal Use
          </CardContent>
        </Card>
      </div>

      <div className=" flex flex-col sm:flex-row sm:flex-wrap  sm:justify-center lg:justify-around  min-h-[40vh] h-full    mt-8 max-w-full w-full px-8 gap-2">
        <Card className="min-w-[14rem]  sm:w-max self-end   w-full text-center bg-green-200 dark:bg-slate-700">
          <CardHeader className="text-xl font-bold">
            Your Files
            <br />
            On Secured
            <br />
            Hands
          </CardHeader>
        </Card>
        <Card className="min-w-[16rem]  sm:w-max min-h-[40vh]  h-full grayscale  bg-[url('/assets/h1.jpg')]  w-full bg-cover bg-center " />
        <Card className="min-w-[14rem]  sm:w-max self-center   w-full text-center bg-green-300 dark:bg-slate-700">
          <CardHeader className="text-xl font-bold">
            Professional
            <br />
            Way To
            <br />
            Edit Pdf's
          </CardHeader>
        </Card>
        <Card className="min-w-[14rem]  sm:w-max  bg-[url('/assets/cloud.jpg')] w-full bg-cover bg-center overflow-hidden ">
          <CardHeader className="backdrop-brightness-75 text-2xl h-full text-slate-100 font-bold">
            Access Your Files
            <br />
            On The Go!
          </CardHeader>
        </Card>
        <Card className="min-w-[14rem]  sm:w-max self-start   w-full text-center bg-green-400 dark:bg-slate-700">
          <CardHeader className="text-xl font-bold">
            Customize PDFs
            <br />
            Seamlessly
            <br />
            Let's Start!
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
