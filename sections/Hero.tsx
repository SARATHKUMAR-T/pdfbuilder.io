import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen max-w-full bg-transparent text-slate-200 flex flex-col gap-3 items-center   pt-24  relative">
      <div className="absolute -z-10 brightness-50  inset-0 bg-[url('/assets/hero1.jpg')] bg-cover bg-center" />
      <h1 className="text-3xl  sm:text-5xl md:text-7xl mt-16 sm:mt-36 text-center font-bold">
        Your PDFs, Your Way
      </h1>
      <h3 className=" text-sm sm:text-lg md:text-xl text-center">
        Effortlessly Edit, Store, and Enhance Your PDFs.
      </h3>
      <Button className="text-black mt-4" asChild>
        <Link href="/signup">
          Start a new journey
          <ArrowRightCircle className="ml-2" />
        </Link>
      </Button>
    </section>
  );
};

export default Hero;
