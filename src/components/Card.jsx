import gsap from "gsap"
import logo from "../assets/logo.png"
import logo2 from "../assets/logo2.png"
import imgspin from "../assets/imgspin.png"
import ornamen from "../assets/ornamen.png"
import { useEffect, useRef, useState } from "react"
import { TextPlugin } from "gsap/all"
import Aos from "aos"
import "aos/dist/aos.css"
import "./card.css"
import { useMediaQuery } from "react-responsive"

gsap.registerPlugin(TextPlugin)

function Card() {
    const isDesktop = useMediaQuery({minWidth: 1280})
    const textRef = useRef(null)
    useEffect(() => {

        Aos.init({ duration: 2000, once: true });
        Aos.refresh()

        gsap.to(textRef.current, {
            duration: 2,
            text: "PT SOVAA KARYA INDONESIA",
            ease: "none"
        })

        const preventScroll = (e) => e.preventDefault()
        document.addEventListener("touchmove", preventScroll, { passive: false })
        return () => document.removeEventListener("touchmove", preventScroll);
    }, [])

    return (
        <div className='frame'>
            <div className='container'>
                <div className='containerFlex'>
                    <img src={isDesktop ? logo2 : logo} alt="" className="logo" data-aos="fade-down" loading="lazy" />
                    <p className="deskripsi" data-aos="flip-down" >Selamat menunaikan ibadah puasa Ramadhan 1446 H</p>
                    <hr className="hr1" />
                    <hr className="hr2" />
                    <p className="inc" ref={textRef}></p>
                    <img src={ornamen} className="ornamen" alt="" loading="lazy" />
                    <img src={imgspin} alt="imagespin" className="imgspin" loading="lazy"/>
                    <img src={imgspin} alt="imagespin2" className="imgspin2" loading="lazy"/>
                </div>
            </div>
        </div>
    )
}

export default Card