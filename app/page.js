"use client"
import Image from "next/image";
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
import {ScrollTrigger ,SplitText} from 'gsap/all'
import Navbar from "./components/Navbar";
import Noisy from './components/HeroCover.jsx'
import Hero from './components/Hero.jsx'
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Footer from "./components/Footer";


export default function Home() {
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger,SplitText)
  })
  
  return (
    <>
    <main className="all overflow-hidden  w-[100vw] bg-black">
      <Navbar/>
      <Hero/>
       <About/>
       <Art/>
       <Menu/>
       <Footer/>
      </main>
    </>
  );
}
