import React from 'react'
import { popular } from '@/constants'
import { loved } from '@/constants'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(ScrollTrigger,SplitText)
const Cocktails = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    
    let tl = gsap.timeline();
    useGSAP(()=>{
        let popularSplit = new SplitText(".ps",{type:"words"})
        let lovedSplit = SplitText.create(".ls",{type:'words'})
       

        if(isMobile){
            tl.from(popularSplit.words,{
                y:50,
                duration:2,
                opacity:0,
                stagger:0.08,
     
            
                scrollTrigger:{
                    trigger:".cocktail",
                    start:"top center",
                    end:"bottom 80%",
                
                    scrub:2
                }
              })
              tl.from(lovedSplit.words,{
                y:50,
                duration:2,
                opacity:0,
                stagger:0.08,
           
                scrollTrigger:{
                    trigger:".most-loved-cocktails",
                    
                    start:"top center",
                    end:"120% 90%",
                    scrub:2
                }
            })
        }
        else{

            tl.from(popularSplit.words,{
                y:50,
                duration:2,
                opacity:0,
                stagger:0.02,
            
                scrollTrigger:{
                    trigger:".cocktail",
                    start:"top center",
                    end:"bottom 80%",
                   
                    scrub:2
                }
              })
              tl.from(lovedSplit.words,{
                y:50,
                duration:2,
                opacity:0,
                stagger:0.02,
           
                scrollTrigger:{
                    trigger:".cocktail",
                 
                    start:"top center",
                    end:"bottom 80%",
                    scrub:2
                }
            },0)
        }
        gsap.from(".pop",{
          x:-50,
          duration:1,
          opacity:0,
         
          scrollTrigger:{
              trigger:".cocktail",
        
              start:"top 64%",
              end:"bottom bottom",
              scrub:2
          }
        })
        gsap.from(".lov",{
          x:50,
          duration:1,
          opacity:0,
         
          scrollTrigger:{
              trigger:".cocktail",
            
              start:"top 64%",
              end:"bottom bottom",
              scrub:2,
             
          }
        })
     },[isMobile])
        
        
        return (
            <div id='cocktails' className='flex flex-col overflow-hidden  md:flex-row w-full justify-between items-center'>
      <div className="most-popular-cocktails ">
         <div className='text-white text-xl md:text-2xl pb-4 md:pb-16 pop'>Most popular cocktails:</div>
       { popular.map((e,i)=>(
        <div className='flex flex-col md:gap-2  pb-10' key={i}>
          
          <div className='flex gap-5 '>
            <div className='text-amber-200 text-3xl md:text-5xl Negra ps'>
                {e.name}
                </div>  
            <h1 className='md:text-2xl text-xl text-white ps'>{e.price}</h1>
            </div>
            <div className='text-white text-sm md:text-md ps'>{e.type}</div>
        </div>
        ))}
      </div>
      <div className="most-loved-cocktails">
           <div className='text-white text-xl md:text-2xl pb-4 md:pb-16 lov'>Most loved cocktails:</div>
       { loved.map((e,i)=>(
        <div className='flex flex-col md:gap-2 pb-10' key={i}>
          
          <div className='flex gap-5'>
            <h1 className='text-amber-200 text-3xl md:text-5xl Negra ls'>{e.name}</h1>  <h1 className='md:text-2xl text-xl text-white ls'>{e.price}</h1>
            </div>
            <div className='text-white text-sm md:text-md ls'>{e.type}</div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Cocktails
