"use client"
import React from 'react'
import { menu } from '@/constants'
import { useState, useRef, useEffect } from 'react'
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'
import SplitText from 'gsap/SplitText'


const Menu = () => {

    gsap.registerPlugin(ScrollTrigger, SplitText)

    const isMobile = useMediaQuery({ maxWidth: 768 });

    const drinksLength = menu.length
    const [Active, setActive] = useState(0)
    const [Previous, setPrevious] = useState(drinksLength - 1)
    const [Next, setNext] = useState(Active+1)
    

    const isActive = (e, i) => {
        setActive(i)
        i==0?setPrevious(drinksLength-1):setPrevious(i-1)
        setNext((i+1)%drinksLength)
    
    }

    const goRight = (i) => {

        let showPrev = i - 1;
       
        let newActive = i
        if (showPrev == 0) {
            showPrev = drinksLength - 1 //length is 4
            setPrevious(showPrev)
            setActive(newActive-1)
            setNext(newActive) 
            console.log(newActive,"1st")
            return

            
        }
        if (newActive == 0) {
            newActive = drinksLength - 1
            showPrev = drinksLength - 2
            setPrevious(showPrev)
            setActive(newActive)
            setNext(0)
            console.log(newActive+1%drinksLength,"2nd")
           

            return
        }
        else {
            newActive = i - 1
            showPrev = showPrev - 1
            setPrevious(showPrev)
            setActive(newActive)
            setNext(newActive+1%drinksLength)
            console.log(newActive+1%drinksLength,"3rd")

        }




    }
    const goLeft = (i) => {
        let newActive = i + 1
        let newnext = newActive+1
        let remnext = newnext % drinksLength
        let rem = newActive % drinksLength
        console.log(rem)
        setActive(rem)
        setNext(remnext)
        rem==0 ? setPrevious(drinksLength-1) : setPrevious(rem-1)
    }
    let tl = gsap.timeline({

    })
    useGSAP(() => {
        let start = isMobile ? "30% center" : "40% center"
        let end = isMobile ? "20%  20%" : "top top"
        gsap.from(".slider-right", {
            y: -100,
            x: 150,
            scale: 0,
            scrollTrigger: {
                trigger: ".menu-cont",
                start,
                end,
                scrub: 2,

            }
        })
        gsap.from(".slider-left", {
            y: 100,
            x: -150,
            scale: 0,
            scrollTrigger: {
                trigger: ".menu-cont",
                start,
                end,
                scrub: 2,
              
            }
        })

    })
    useGSAP(() => {
        let HeadChars = SplitText.create(".menu-title", { type: "chars" })
        let descChars = SplitText.create(".desc", { type: "words" })
        tl.from(".tabs", {
            y: 10,

        })
        tl.from(".cockimg", {
            x: -200,
            opacity: 0.2,
            scale: 0.8,
            duration: 1
        })
        tl.from(".prevtext nexttext",{
            opacity:0
        })
        tl.from(".menu-drink", {
            opacity: 0,
            y: 20
        })
        tl.from(HeadChars.chars, {
            opacity: 0,
            stagger: 0.04,
            ease: 'circ.inOut'
        })
        tl.from(descChars.words, {
            opacity: 0,
            y: 10,
            stagger: 0.04,
            ease: 'expo.inOut'
        })
    }, [Active, isMobile])

    return (


        <div className=' w-[100vw] h-[110vh] menu-cont  md:mt-50'>
            <div className=" h-full w-full relative hoja top-20  bg-[radial-gradient(farthest-side,#2e3837,black)] pt-20">
                <div className="absolute bottom-20 slider-left">
                    <img src="/slider-left-leaf.png" alt="" />
                </div>
                <div className="absolute right-0 top-12 slider-right">
                    <img src="/slider-right-leaf.png" alt="" />
                </div>
                <div className="tabs flex justify-evenly  Negra text-sm md:text-2xl">
                    {menu.map((e, i) => (
                        <div key={i} className={`${Active == i ? "text-white " : "text-neutral-500 decoration-gray-500 "} underline underline-offset-4  cursor-pointer`} onClick={(event) => { isActive(event, i) }}>
                            {e.drink}
                        </div>
                    ))}
                </div>
                {menu.map((e, i) => (
                    Active == i && (
                        <div key={i}>
                            <div className='w-full h-[60vh] mt-10 flex items-center relative py-4 justify-center'>
                                    <div className='text-amber-400 prevtext md:text-2xl  top-50 left-4  md:top-45 absolute md:left-20 lg:left-45 lg:top-40 Negra'>{menu[Previous].drink}</div>
                                <div className="slide-right absolute z-20 left-10 md:left-30 md:top-30 lg:top-50 lg:left-50  cursor-pointer" onClick={() => { goRight(i) }}>
                                    <img src="/right-arrow.png" alt="" /> 
                                </div>
                                <img src={e.img} className='cockimg' alt="img" />
                                    <div className='text-amber-400 nexttext md:text-2xl top-50  right-4  md:top-45 absolute md:right-20 lg:right-38 lg:top-40  Negra'>{menu[Next].drink}</div>
                                <div className="slide-left absolute z-20 md:right-30 right-10 md:top-30 lg:top-50 lg:right-50 cursor-pointer" onClick={() => { goLeft(i) }}>
                                    <img src="/left-arrow.png" alt="" />
                                </div>
                            </div>

                        </div>
                    )

                ))}
                <div className='w-full relative md:bottom-40 bottom-26  flex justify-center '>

                    <div className='menuitems  flex justify-between w-[95%]  md:w-[80%]  '>
                        {menu.map((e, i) => (
                            Active == i && (
                                <div key={i} className='w-full flex flex-col items-end  md:flex-row gap-4 justify-between '>
                                    <div className=' menu-drink  '>
                                        <div className='text-white'>
                                            Recipe for:
                                        </div>
                                        <div className='text-amber-400 Negra text-3xl  md:text-7xl'>

                                            {e.drink}
                                        </div>
                                    </div>
                                    <div className='text-white w-[50vw] md:w-[30vw]'>
                                        <div className='md:text-6xl text-2xl menu-title wrap-normal whitespace-normal  Negra'>
                                            {e.title}

                                        </div>
                                        <div className='desc text-sm w-full  md:w-fit'>
                                            {e.desc}
                                        </div>
                                    </div>
                                </div>

                            )

                        ))}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Menu
