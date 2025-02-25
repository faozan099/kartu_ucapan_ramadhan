import gsap from "gsap"
import logo from "../assets/logo.png"
import imgspin from "../assets/imgspin.png"
import ornamen from "../assets/ornamen.png"
import { useEffect, useRef } from "react"
import { TextPlugin } from "gsap/all"
import Aos from "aos"
import "aos/dist/aos.css"
import "./mobile.css"


gsap.registerPlugin(TextPlugin)

function Mobile() {
    const textRef = useRef(null)
    useEffect(() => {
        gsap.to(textRef.current, {
            duration: 2,
            text: "PT SOVAA KARYA INDONESIA",
            ease: "none"
        }
        )
    }, [])

    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
        Aos.refresh()
    }, [])

    useEffect(() => {
        const test = (e) => e.preventDefault()
        document.addEventListener("touchmove", test, { passive: false })
        return () => document.removeEventListener("touchmove", preventScroll);
    }, [])

    return (
        <div className='frame'>
            <div className='container'>
                <div className='containerFlex'>
                    <img src={logo} alt="" className="logo" data-aos="fade-down" />
                    <p className="deskripsi" data-aos="fade-down" >Selamat menunaikan ibadah puasa Ramadhan 1446 H</p>
                    <hr className="hr1" />
                    <hr className="hr2" />
                    <p className="inc" ref={textRef}></p>
                    <img src={ornamen} className="ornamen" alt="" />
                    <img src={imgspin} alt="" className="imgspin" />
                    <img src={imgspin} alt="" className="imgspin2" />
                </div>
            </div>
        </div>
    )
}

export default Mobile