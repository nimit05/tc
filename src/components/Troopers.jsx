import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import troopersBg from '../assets/troopers_bg.webp'
const Troopers = ({ celebs }) => {
    const [slides, setSlides] = useState(3);
    useEffect(() => {
        if (window.screen.width < 750) setSlides(1);
    })
    const playVideo = (event) => {
        const parentDiv = event.currentTarget;
        const videoElement = parentDiv.querySelector('video');
        const svgElement = parentDiv.querySelector('svg');

        if (videoElement && svgElement) {
            if (videoElement.paused) {
                videoElement.play();
                svgElement.style.display = 'none';
            } else {
                videoElement.pause();
                svgElement.style.display = 'block';
            }
        }
    };
    return (
        <div className='troopers white'>
            <img src={troopersBg} alt="" className='bg' />
            <div className="overlay"></div>
            <h1 className='fade-in bottom padded' style={{ margin: "0", color: "#fff" }}>MEET OUR EMS <span className='' >TROOPERS</span></h1>
            <p>A Community of Dedicated Individuals who have Transformed their Fitness Journey with EMS Training</p>
            <Swiper
                effect={"coverflow"}
                loop={true}
                slidesPerView={slides}
                grabCursor={true}
                centeredSlides={true}
                // pagination={{
                //     clickable: true
                // }}
                spaceBetween={0}
                navigation={true}
                autoplay={{
                    delay: 2500
                }}
                modules={[EffectCoverflow, Autoplay, Navigation]}
                className=""
                style={{ paddingBottom: "4rem", textAlign: "center" }}
            >
                {celebs.map((celeb,i) => (
                    <SwiperSlide key={i}>
                        <div className='flex' style={{ position: "relative", alignItems: "center", flexDirection: "column" }}>
                            {celeb.video
                                ? <div className='celeb-img' onClick={playVideo}>
                                    <svg style={{ position: "absolute", inset: "50%", translate: "-50%", width: "50px", height: "50px", zIndex: "3" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" id="play"><path fill='#0a6cb6' d="M4 0C1.79 0 0 1.79 0 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zM3 2l3 2-3 2V2z"></path></svg>
                                    <video src={celeb.video} poster={celeb.img} playsInline loop style={{ width: "100%" }} className='celeb-img' preload='true'></video>
                                </div>
                                : <img src={celeb.img} alt="" className='celeb-img' />
                            }
                            <div onClick={() => window.open(celeb.insta, "_blank")} className='flex' style={{ borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px", position: "absolute", bottom: "0", left: "50%", transform: "translateX(-50%)", backgroundColor: "#00000050", width: "75%", padding: "10px", alignItems: "center", justifyContent: "center" }}>
                                <svg viewBox="584.199 190.011 157.2401 168.968" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#fff" d="M 697.611 190.067 C 716.36 190.067 608.515 190.067 627.27 190.067 L 697.611 190.067 Z M 627.576 207.491 L 698.063 207.491 C 713.033 207.491 725.173 220.53 725.173 236.623 L 725.173 312.367 C 725.173 328.454 713.033 341.5 698.063 341.5 L 627.576 341.5 C 612.6 341.5 600.465 328.454 600.465 312.367 L 600.465 236.623 C 600.465 220.53 612.6 207.491 627.576 207.491 Z M 627.576 190.011 C 603.616 190.011 584.199 210.876 584.199 236.623 L 584.199 312.367 C 584.199 338.109 603.616 358.979 627.576 358.979 L 698.063 358.979 C 722.017 358.979 741.439 338.109 741.439 312.367 L 741.439 236.623 C 741.439 210.876 722.017 190.011 698.063 190.011 L 627.576 190.011 Z M 662.819 315.281 C 692.033 315.281 710.295 281.289 695.688 254.103 C 688.905 241.482 676.374 233.71 662.819 233.71 C 633.6 233.71 615.338 267.696 629.945 294.888 C 636.728 307.502 649.259 315.281 662.819 315.281 Z M 662.819 297.801 C 646.119 297.801 635.687 278.376 644.032 262.842 C 647.909 255.629 655.066 251.189 662.819 251.189 C 679.514 251.189 689.946 270.609 681.601 286.148 C 677.725 293.356 670.567 297.801 662.819 297.801 Z M 703.485 242.45 C 711.829 242.45 717.045 232.737 712.876 224.97 C 710.935 221.364 707.356 219.144 703.485 219.144 C 695.135 219.144 689.919 228.851 694.094 236.623 C 696.029 240.224 699.608 242.45 703.485 242.45 Z" transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -7.105427357601002e-15, 7.105427357601002e-15)" />
                                </svg>                                {/* <img src={insta} style={{ width: "25px" }} alt="" />     */}
                                <h2 style={{ margin: "0", marginLeft: "5px", maxWidth: "70%" }}>{celeb.name}</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Troopers