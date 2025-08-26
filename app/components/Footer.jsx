import React from 'react'
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive' 
import SplitText from 'gsap/SplitText'

const Footer = () => {
   
    const isMobile = useMediaQuery({ maxWidth: 768 });
   useGSAP(()=>{
    let tl = gsap.timeline({
      scrollTrigger:{
        trigger:"#contact",
        start:"-10% center",
        end:"70% 70%",
        scrub:2
      }
    })
    let TitleSplit = SplitText.create(".find-us",{type:"words"})
    let BacheSplit = SplitText.create(".bache",{type:"chars"})
    tl.from(".foot-right",{
      scale:0,
      y:-200,
      x:200,
      scrollTrigger:{
          trigger:".u",
       
          start:"-20% center",
          end:"-30% 30%",
          scrub:2
        }
      
    })
    if(!isMobile){

      tl.from(".foot-left",{
        scale:0,
        y:200,
        x:-100,
        duration:5,
        scrollTrigger:{
          trigger:".s",
        
          start:"-20% center",
          end:"-30% 30%",
          scrub:2
        }
        
      })
    }
    tl.from(".foot-drinks",{

      x:280,
      ease:"bounce.inOut",
      duration:3,
      scrollTrigger:{
          trigger:".u2",
        
          start:"-20% center",
          end:"-30% 30%",
          scrub:2
        }
    })
    tl.from(TitleSplit.words,{
      opacity:0,
      y:20,
      stagger:0.3
    })
    tl.from(".say",{
      opacity:0,
      stagger:0.3
    })
    tl.from(BacheSplit.chars,{
      opacity:0,
      stagger:0.01
    })
   },[isMobile])

  return (
    <div className='h-[110vh] w-[100vw] relative z-10 flex justify-center items-center bg-[radial-gradient(farthest-side,#2e3837,black)]   text-white'>
        <div className="absolute right-0 u top-0 foot-right">
            <img src="/footer-right-leaf.png" alt="" />
        </div>
      <div id='contact' className="cont relative z-1  text-white h-[80%] flex flex-col gap-8 lg:gap-12 lg:justify-center items-center w-[80%]">
          <div className="find-us text-amber-400 u2 Negra text-4xl md:text-5xl lg:text-8xl">
            Where to find us
          </div>
          <div className="visit flex flex-col justify-center gap-4  items-center ">
            <div className="say">

            VISIT OUR STORE
            </div>
            <div className="location md:text-2xl bache">456, Raq Blvd. #404, Los Angeles, CA 90210</div>
          </div>
          <div className="contact flex flex-col justify-center gap-2  items-center">
            <div className="con say">CONTACT US</div>
            <div className="num md:text-2xl bache">(555) 987-6543 </div>
            <div className="add md:text-2xl bache">hello@jsmcocktail.com</div>
          </div>
          <div className="timings">
            <div className="time say  flex flex-col justify-center   items-center">
                Open every day 
            </div>
            <div className="days flex flex-col justify-center gap-2 items-center">

            <div className="day md:text-2xl bache">
                Mon-Thu : 11:00am - 12am
            </div>
            <div className="day md:text-2xl bache">
               Fri : 11:00am - 2am
            </div>
            <div className="day md:text-2xl bache">
                Sat : 9:00am - 2am 
            </div>
            <div className="day  md:text-2xl bache">
               Sun : 9:00am - 1 am
            </div>
            </div>
               
          </div>
          <div className="socials  flex gap-4">
            <img src="/x.png" className='say' alt="" />
            <img src="/insta.png" className='say' alt="" />
            <img src="/fb.png" className='say' alt="" />
          </div>

      </div>
          <div className="footerimg s w-[100vw]  z-0 absolute bottom-0 ">
            <div className="flex justify-between items-center">
              <div className='foot-left hidden md:block bottom-[-100px] relative'>

                <img src="/footer-left-leaf.png"  alt="" />
              </div>
                <img src="/footer-drinks.png" className='foot-drinks' alt="" />
            </div>
          </div>
    </div>
  )
}

export default Footer
