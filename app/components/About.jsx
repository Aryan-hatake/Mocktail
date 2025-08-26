import React from 'react'
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(ScrollTrigger,SplitText)
const About = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    useGSAP(()=>{
        let tl = gsap.timeline({
            delay:1,
            scrollTrigger:{
    
                trigger:".cont",
                start:"top center",
                end:"top -100%",
                scrub:3,
              
             
            }
        })
        if(isMobile){

            let tl2 = gsap.timeline({
                scrollTrigger:{
                    scrub:2,
                    trigger:".grid",
                    start:"10% center",
                    end:"top -50%",
                  
     
                }
            })
              tl2.from(".abt1",{
        x:-100,
        opacity:0,
        stagger:1,
        duration:0.8,
        
       })
       tl2.from(".abt2",{
        x:100,
        opacity:0,
        stagger:1,
        duration:0.4
       })
       tl2.from(".abt3",{
        x:-100,
        opacity:0,
        stagger:1,
        duration:0.4
       })
       tl2.from(".abt4",{
        x:100,
        opacity:0,
        stagger:1,
        duration:0.4
       })
       tl2.from(".abt5",{
        x:-100,
        opacity:0,
        stagger:1,
        duration:0.4
       })
        }
        else{
               let tl2 = gsap.timeline({
                scrollTrigger:{
        
                    trigger:".grid",
                    start:"10% center",
                    end:"top 10%",
                    scrub:3,
          
                }
            })
              tl2.from(".abt1,.abt4",{
               x:-100,
               opacity:0,
               stagger:5,
               duration:10,
               
            })
            tl2.from(".abt3,.abt5",{
                x:100,
                opacity:0,
                stagger:5,
                duration:10
            })
            tl2.from(".abt2",{
                y:100,
                opacity:0,
                stagger:5,
                duration:10
            })
        }
    tl.fromTo("button", 
  {
    opacity: 0,
    y: -20,
    boxShadow: "1px 0px 15px 20px rgba(18, 205, 18, 1)"
  },
  {
    duration: 10,
    opacity: 1,
    y: 0,
    boxShadow: "-1px 0px 15px 2px rgba(18, 205, 18, 1)",
    ease: "power2.out"
  }
)
       let topHead = new SplitText(".tophead",{type:"chars"})
      
       tl.from(topHead.chars,{
        color:"green",
    
         stagger:0.1,
        ease:"power3.in",
        scrollTrigger:{
            trigger:".cont",
                start:"-10% center",
                end:"top 10%",
          
                scrub:3,
              
        }
       })
       tl.from(".top-right",{
        opacity:0,
        x:100,
        duration:10,
      
        ease: "power2.out"
    
       },0)
       tl.from(".ri-star-fill",{
        color:"green",
        stagger:0.1,
        ease:"power3.in",  
              scrollTrigger:{
    
                trigger:".cont",
                start:"top center",
                end:"top -20%",
                scrub:3,
              
             
            }

       },)

  
        },[isMobile])

    return (
        <div id='about' className='cont overflow-hidden mb-28 w-full flex justify-center relative z-10  '>
            <div className='w-[90vw] text-white h-full bg-black '>

                <div className="top flex flex-col lg:flex-row w-full justify-between relative mt-10">
                    <div className="top-left space-y-4">
                        <button className='bg-white button py-2 d px-4 w-fit text-black rounded-full'>Best Cocktails</button>
                        <div className='text-4xl tophead md:text-5xl Negra md:w-[400px] '>
                            Where every detail matters—from muddle to garnish
                        </div>
                    </div>
                    <div className="top-right h-fit">
                        <p className='md:w-[400px] mt-14'>Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.</p>
                        <div className='down h-fit flex gap-4  pt-10 items-center'>

                            <div className="rate-profile ">
                                <div className="star flex gap-[2px]">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                </div>
                                <div className="rate">
                                    <div className="num text-xl font-bold font-mono ">
                                        4.5/5
                                    </div>
                                    <div className="more">More than +12000 customers</div>
                                </div>
                            </div>
                            <div className="seperate self-stretch  w-[2px] bg-neutral-500">
                            </div>
                           <div className="prof w-fit py-8 bg-gradient-to-b from-gray-600 to-gray-800 h-13 rounded-full flex items-center relative pl-4 pr-8  md:pl-6 md:pr-8">
    <div className='w-full h-full absolute z-11 right-0 rounded-full bg-[url("/noise.png")]'></div>
    <img src="/profile1.png" className='relative z-10 w-10 h-10' alt="" />
    <img src="/profile2.png" className='relative z-10 w-10 h-10 -ml-4' alt="" />
    <img src="/profile3.png" className='relative z-10 w-10 h-10 -ml-4' alt="" />
    <img src="/profile4.png" className='relative z-10 w-10 h-10 -ml-4' alt="" />
</div>
                        </div>
                    </div>
                </div>
                <div className="bottom grid justify-center py-10 ">
                    <div className='grid md:grid-cols-3 h-auto md:h-[80vh] w-[80vw] grid-cols-1 gap-10 lg:grid-rows-2 auto-rows-fr '>
                       <div className="bg-[url('/noise.png')] rounded-4xl relative z-2 abt1">

                        <img src="/abt1.png" alt="" className="absolute mix-blend-multiply  col-start-1 h-full  w-full  rounded-4xl object-cover" /> 
                       </div>

                        <div className="bg-gradient-to-b abt2 rounded-4xl from-neutral-800 to-black z-2 ">

                        <div className="h-full w-full bg-[url('/noise.png')] rounded-4xl flex justify-center items-center relative z-10 " >
                            <div className="full  w-[80%] h-fit  py-4 flex  flex-col relative items-center gap-2    ">

                                <div className="head Negra text-3xl  xl:text-5xl relative text-center ">
                                    Crafted to Impress
                                </div>
                                <div className="sep h-[2px] w-[80%]  bg-neutral-100"></div>
                                <div className="list list-none text-sm xl:text-xl space-y-4 xl:pt-4 ">
                                    <li className='space-x-2'><span><i className="ri-checkbox-circle-fill"></i></span><span>Perfectly balanced blends</span></li>
                                    <li className='space-x-2'><span><i className="ri-checkbox-circle-fill"></i></span><span>Garnished to perfection</span></li>
                                    <li className='space-x-2'><span><i className="ri-checkbox-circle-fill"></i></span><span>Ice-cold every time</span></li>
                                    <li className='space-x-2'><span><i className="ri-checkbox-circle-fill"></i></span><span>Expertly shaken & stirred</span></li>


                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="bg-[url('/noise.png')] rounded-4xl abt3 relative z-2 ">

                        <img src="/abt2.png" alt="" className="absolute mix-blend-multiply  col-start-3 h-full  w-full  rounded-4xl object-cover" />
                        </div>
                        <div className="bg-[url('/noise.png')] rounded-4xl abt4 relative z-2 md:col-span-2  ">

                        <img src="/abt3.png" alt="" className="absolute mix-blend-multiply  col-span-2 h-full  w-full  rounded-4xl object-cover" />
                        </div>
                        <div className="bg-[url('/noise.png')] rounded-4xl relative abt5 z-2 ">

                        <img src="/abt4.png" alt="" className=" absolute mix-blend-multiply  col-start-1 h-full  w-full  rounded-4xl object-cover" />
                        </div> 



                     </div>
                </div>
            </div>
        </div>
    )
}

export default About
