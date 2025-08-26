"use client"
import React from 'react'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMediaQuery } from 'react-responsive'


const Glass = () => {
    let vidRef = useRef()
     const isMobile = useMediaQuery({ maxWidth: 768 });
    useEffect(() => {


        const canvas = vidRef.current
        const context = canvas.getContext("2d")

        let storeImg = []
        let value = {
            currentIndex: 0,
            endIndex: 310,
        }
        let loaded = 0;
        const PreloadImages = () => {
            for (let i = 1; i <= value.endIndex; i++) {
                let srcc = `/frame_${i.toString().padStart(4, "0")}.jpeg`
                let img = new Image();
                img.src = srcc
                img.onload = () => {
                    loaded++
                    if (loaded == value.endIndex) {
                        console.log("all images loaded successfully")
                        loadImage(1)
                        startAnimation()
                    }

                }
                storeImg.push(img)
            }
        }
        const loadImage = (index) => {
            let arrayIndex = index - 1
            if (arrayIndex >= 0 && arrayIndex <= value.endIndex) {
                let img = storeImg[arrayIndex];
                if (!img) {
                    console.error(img + " not found")
                }
                canvas.width = window.innerWidth
             
                canvas.height = window.innerHeight;
           
                const scaleX = canvas.width / img.width
                const scaleY = canvas.height / img.height

                const scale = Math.max(scaleX, scaleY)

                const newWidth = img.width * scale;
                const newHeight = img.height * scale

                const offsetX = (canvas.width - newWidth) / 2;
                const offsetY = (canvas.height - newHeight) / 2;


                context.imageSmoothingQuality = "high";
                context.imageSmoothingEnabled = true
                context.clearRect(0, 0, canvas.width, canvas.height)
                context.drawImage(img, offsetX, offsetY, newWidth, newHeight)
                canvas.style.objectFit = "contain";
                value.currentIndex = index
            }
        }
        const startAnimation = () => {
            gsap.registerPlugin(ScrollTrigger)
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".temp",

                    start: "top top",
                    end: "bottom bottom",
                    scrub: 2,
                    pin: true

                }
            })
            tl.to(value, {
                currentIndex: value.endIndex,

                onUpdate: () => { loadImage(Math.floor(value.currentIndex)) }
            })
            if(isMobile){
                tl.to(".glass", {

                y: 150,
            
            }, "<")
            }
            else{

                tl.to(".glass", {
    
                    y: 269,
                    width: "70vw",
                    height: "70vh"
                }, "<")
            }
            gsap.to(".glass", {
                opacity: 1,
                duration: 1,
                y: 50,
                delay: 2.5

            })

        }
        PreloadImages()

    }, [])
    return (
        <div className='temp h-[200vh] w-[100vw] absolute z-0 flex justify-center '>

            <div className=' flex h-[100vh] opacity-0 glass md:w-[100vw] w-[100vw]   justify-center items-center'>

                <canvas className='h-full w-full' ref={vidRef} ></canvas>
            </div>
        </div>

    )
}

export default Glass
