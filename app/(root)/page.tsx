"use client";
import NavBar from "@/components/NavBar";
import About from "@/sections/About";
import Footer from "@/sections/Contact";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import { useEffect } from "react";

export default function Home() {
  // clearing already exsisting tokens
  useEffect(() => {
    function clearToken() {
      localStorage.removeItem("token");
    }
    clearToken();
  }, []);
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Footer />
    </main>
  );
}
