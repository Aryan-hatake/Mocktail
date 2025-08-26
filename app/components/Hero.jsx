import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Glass from './Glass';
import Cocktails from './Cocktails';
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        let tl = gsap.timeline();
        tl.from(".leaf1", {
            x: -120,
            scale: 0.6,
            duration: 1,
            scrollTrigger: {
                trigger: "leaf1",

                scrub: 2,
                start: "7% 5%",
                end: "-20% top"
            }


        })
        tl.fromTo(".leaf2", {
            x: 60,
            scale: 0.6,

        }, {

            scale: 1,
            x: 0,
            scrollTrigger: {
                trigger: "leaf1",

                scrub: 2,
                start: "3% 2%",
                end: "-5% top"
            }
        })
        tl.fromTo(".leaf1", {
            y: 100,
            duration: 1
        }, {
            y: -200,
            scrollTrigger: {
                trigger: ".leaf1",
                scrub: 2
            }
        })
        tl.fromTo(".leaf2", {
            y: 0,
            duration: 1
        }, {
            y: 400,
            scrollTrigger: {

                scrub: 2
            }
        }, "-=5")
        const mojitoSPlit = new SplitText('.title', { type: 'chars, words' })


        const paraSPlit = new SplitText('.para', { type: 'words' })
        mojitoSPlit.chars.forEach((e) => {
            e.classList.add('bg-gradient-to-b', 'from-white', 'to-gray-600', 'bg-clip-text', 'text-transparent')
        })
        gsap.from(mojitoSPlit.chars, {
            y: 200,
            opacity: 0.3,
            duration: 1.8,
            stagger: 0.08,
            ease: 'expo.out'

        })
        gsap.from(paraSPlit.words, {
            opacity: 0,
            y: 50,
            stagger: 0.06,
            duration: 1,
            delay: 1


        })
        gsap.from(".cockleft", {
            y: 500,
            scale: 3,
            x: -400,
            scrollTrigger: {
                trigger: "cocktail",
                start: "70% center",
                end: "bottom 98%",
                scrub: 2,
                
            }
        })
        gsap.from(".cockright", {
            y: 500,
            scale: 3,
            x: 400,
            scrollTrigger: {
                trigger: "cocktail",
                start: "70% center",
                end: "bottom 98%",
                scrub: 2,
             
            }
        })
    }, [])
    return (
        <div className=' flex overflow-hidden flex-col justify-center  relative parent  z-1 w-full '>


            <Glass />

            <div className=' w-full flex items-center bg-[url("/noise.png")]  flex-col h-full relative z-3 top-0'>

                <h1 className=' Negra absolute  top-60 text-8xl  md:text-9xl lg:text-[20vh] z-2 title overflow-y-hidden '>
                    <span>
                        MOJITO
                    </span></h1>
                <div className="leafscont   flex w-full relative z-1 justify-between">
                    <img src="/hero-left-leaf.png" className='leaf1 relative md:bottom-10 top-10 right-0' alt="" />
                    <img src="/hero-right-leaf.png" className='leaf2 relative md:bottom-40 top-40 sm:right-2 right-10 md:right-0' alt="" />
                </div>
                <div className="body relative pt-14 gap-8  z-2  w-full bottom-[60px] pl-10 flex flex-wrap  whitespace-normal justify-between">
                    <div className="content">
                        <div className='space-y-4  '>
                            <p className='text-white text-md md:text-xl para'>Cool. Crisp. Classic. </p>
                            <p className='text-amber-300 Negra text-4xl md:text-6xl para'>
                                Sip the Spirit <br /> of Summer
                            </p>
                        </div>
                    </div>
                    <div className='text-white pr-8    text-md md:text-xl w-[80vw] md:w-[30vw] space-y-4'>
                        <p className='para'>

                            Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses.
                        </p>
                        <a href="#" className='para'>View Cocktails</a>
                    </div>
                </div>
                <div className='w-[95vw] cocktail pb-24 md:pb-60 md:pt-68 flex justify-between'>

                    <Cocktails />
                </div>
            </div>

            
               
                    <div className="w-[100vw] h-[186px] md:h-[300px]  absolute bottom-0 z-3 flex justify-between ">
                        <img src="/cocktail-left-leaf.png" className="cockleft" alt="" />
                        <img src="/cocktail-right-leaf.png" className="cockright" alt="" />
                    </div>
               

            {/* <div className='w-[100vw] absolute bottom-0 z-3 flex justify-between'>
        <img src="/cocktail-left-leaf.png" className='cockleft' alt="" />
        <img src="/cocktail-right-leaf.png" className='cockright' alt="" />

       </div> */}
        </div>
    )
}

export default Hero
