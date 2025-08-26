import React from 'react'
import { features1 } from '@/constants'
import { features2 } from '@/constants'
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'  

gsap.registerPlugin(ScrollTrigger)
const Art = () => {
 const isMobile = useMediaQuery({ maxWidth: 768 });
  useGSAP(()=>{
    const start =   isMobile?"30% center":"40% center"
    const end=   isMobile?"top 16%":"top -30%"
    let tl = gsap.timeline({
      scrollTrigger:{
        trigger:".artcont",
        start,
        end,
       
        pin:true,
        scrub:2,
    
      }
    });
    tl.to(".will-fade",{
      opacity:0,
      stagger:0.5
    })
    if(isMobile){

      tl.to(".mask",{
        maskSize:"800%",
        duration:1,
        height:"40vh",
        width:"90vw",
        objectFit:"cover"
      })
    }
    else{
       tl.to(".mask",{
        maskSize:"400%",
        duration:1,
        height:"80vh",
        width:"80vw",
        objectFit:"cover"
      })
    }
    if(isMobile){

      tl.to(".maskimg",{
         y:0,
        
      })
    }
    else{
        tl.to(".maskimg",{
         y:100,
        
      })
    }
    if(isMobile){

      tl.to(".masked-content",{
        opacity:1,
        duration:1,
        y:-100
      })
    }
    else{
        tl.to(".masked-content",{
        opacity:1,
        duration:1,
        y:-80
       
      })
    }
  },[isMobile])

  return (
    <>
     <div id='art'  className='  flex items-center md:items-start justify-center w-[100vw] text-white relative'>
      <div className="artcont h-full  w-[95%] flex flex-col bg-[radial-gradient(farthest-side,#2e3837,black)] items-center gap-[100px] lg:gap-[357px] ">
           <div className=" sm:text-9xl text-7xl md:text-[200px] z-1   text-neutral-600 Negra will-fade w-fit pt-8 md:pt-24  ">The ART</div>
             <div className="maskimg rounded-4xl absolute  z-10  mask-img">
            <img src="/under-img.jpg" className='mask rounded-4xl' alt="" />
          </div>
          <div className="niche w-full flex flex-col items-center ">

            <div className='features relative z-12 md:text-xl text-xs  flex flex-wrap gap-8 w-[90%] justify-between   '>
                       <div className='f1 will-fade'>
                         {features1.map((e,i)=>(
                           <div key={i} className='space-x-2'>
                            <span><i className="ri-checkbox-circle-fill"></i></span>
                            <span>{e.content}</span>
                          </div>
                         ))}
                       </div>
                       <div className='f2 will-fade'>
                         {features2.map((e,i)=>(
                           <div key={i} className='pl-40 md:pl-0 space-x-2 '>
                            <span><i className="ri-checkbox-circle-fill"></i></span>
                            <span>{e.content}</span>
                          </div>
                         ))}
                       </div>
                         </div>
                           <div className='Negra text-4xl sm:text-6xl md:text-7xl   flex flex-col items-center   z-10  pt-24'>
                            <h1 className='will-fade'>Sip-Worthy Perfection</h1>
                            <div className='masked-content opacity-0  relative z-100'>
                              <h1>Made with Craft Poured with Passion</h1> 
                              <p className='text-xl font-sans mx-auto w-fit'>This isn’t just a drink It’s a carefully crafted moment made just for you.</p>
                              </div>
                            </div>
                         </div>
   
      </div>
     </div>
    </>

  )
}

export default Art
