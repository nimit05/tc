import React, { useState, useEffect } from 'react'
import { AssetPreloader } from '../components'
import benefits from '../assets/benefits.mp4'
import ems from '../assets/pod.jpg'
import emsSuit from '../assets/ems_suit.mp4'
import suit from '../assets/suit.jpg'
import emsbg from '../assets/ems_bg.webp'
import emsHeading from '../assets/ems-heading.webp'
import rehabBg from "../assets/rehab_bg.jpg"
import rehabBgMobile from "../assets/rehab_bg_mobile.webp"
import rehab from "../assets/rehab.jpg"
import integrated from '../assets/icons/Can be integrated with all workouts.png'
import injuries from '../assets/icons/Excellent for Rehabilitation of Injuries.png'
import sideEffects from '../assets/icons/No side effects & Injuries.png'
import suitable from '../assets/icons/Suitable for all age groups.png'
import calories from '../assets/icons/up to 1500 Cals per session.png'
import session from '../assets/icons/only 30 mins per session.png'
import aboutMobileBg from '../assets/about_mobile.webp'
import aboutBg from '../assets/about.webp'
const Ems = ({setLoading}) => {
    const [slides, setSlides] = useState(1);
    const [mobile, setMobile] = useState(true);
    useEffect(() => {
        if (screen.width > 750) {
            setMobile(false);
            setSlides(3);
        }
    });
    const assetsToPreload = [
        { src: benefits, type: 'VIDEO' },
        { src: emsSuit, type: 'VIDEO' },
        { src: ems, type: 'IMAGE' },
        { src: suit, type: 'IMAGE' },
        { src: emsbg, type: 'IMAGE' },
        { src: emsHeading, type: 'IMAGE' },
        { src: mobile ? rehabBgMobile : rehabBg, type: 'IMAGE' },
        { src: rehab, type: 'IMAGE' },
        { src: integrated, type: 'IMAGE' },
        { src: injuries, type: 'IMAGE' },
        { src: sideEffects, type: 'IMAGE' },
        { src: suitable, type: 'IMAGE' },
        { src: calories, type: 'IMAGE' },
        { src: session, type: 'IMAGE' },
        { src: mobile ? aboutMobileBg : aboutBg, type: 'IMAGE' },
    ];
    return (
        <AssetPreloader assets={assetsToPreload} setLoadingGlobal={setLoading}>
            <div className='ems' style={{ display: 'flex', flexDirection: "column" }}>
                <div>
                    <div style={{ position: "relative" }}>
                        <img src={emsHeading} className='banner_image' alt="" />
                        <div style={{ position: "absolute", zIndex: "2", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
                            <h1 style={{ lineHeight: "50px", margin: "0", fontSize: "3rem" }} className='white header-padding'>EMS v/s Conventional Training </h1>
                            <h2 style={{ paddingTop: "2rem", margin: "0" }} className='white'>Transforming Fitness Beyond Conventional Limit</h2>
                            <h2 className="white">Activating major muscles through external means, utilizing low-frequency electrical impulses to achieve maximum results in minimal time.</h2>
                        </div>
                    </div>
                    <table className="vs-table">
                        <thead>
                            <th>Aspect</th>
                            <th>EMS Training</th>
                            <th>Conventional Training</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Muscle Activation</td>
                                <td>Stimulates multiple muscle groups simultaneously</td>
                                <td>Focuses on specific muscle groups one at a time</td>
                            </tr>
                            <tr>
                                <td>Time Efficiency</td>
                                <td>Achieves maximum results in minimal time - only 2x a week for 30 mins</td>
                                <td>Requires longer training sessions for comparable results - 5 to 6x a week for 60-90 mins </td>
                            </tr>
                            <tr>
                                <td>Rehabilitation </td>
                                <td>Supports injury recovery and rehabilitation</td>
                                <td>Provides targeted exercises for recovery and rehab</td>
                            </tr>
                            <tr>
                                <td>Calories Burnt </td>
                                <td>Upto 1500 cal per session </td>
                                <td>Upto 400 cal</td>
                            </tr>
                            <tr>
                                <td>Variety</td>
                                <td>Offers diverse training programs and modes</td>
                                <td>Relies on traditional exercises and workout routines </td>
                            </tr>
                            <tr>
                                <td>Strengthening, Weight & Fat Loss Speed</td>
                                <td>Upto 3x faster </td>
                                <td>1x</td>
                            </tr>
                            <tr>
                                <td>Muscle Endurance </td>
                                <td>Enhances muscle endurance</td>
                                <td>Utilizes repetitive exercises for endurance training</td>
                            </tr>
                            {/* <tr>
                            <td>Rehabilitation </td>
                            <td>Supports injury recovery and rehabilitation</td>
                            <td>Only with physiotherapist </td>
                        </tr> */}
                            <tr>
                                <td>Gentle on Joints </td>
                                <td>Yes</td>
                                <td>Not always </td>
                            </tr>
                            {/* <tr>
                            <td>Facilitating the injury recovery process</td>
                            <td>Always </td>
                            <td>Mostly No</td>
                        </tr> */}
                        </tbody>
                    </table>
                </div>
                <video src={emsSuit} className="mobile_only ems_suit_video" autoPlay playsInline loop muted ></video>
                <div className="features">
                    <video src={emsSuit} style={{ height: "40vw" }} className="desktop_only ems_suit_video" autoPlay playsInline loop muted ></video>
                    <div className="about" style={{ alignItems: "center" }}>
                        <img src={aboutMobileBg} alt="" className="bg mobile_only" data-speed="0.5" />
                        <img src={aboutBg} alt="" className="bg desktop_only" style={{ height: "150%" }} data-speed="0.5" />
                        <div className="overlay"></div>
                        <h2 style={{ marginBottom: "5px", fontSize: "3rem", fontWeight: "100" }} className='white extra-bold'>FEATURES</h2>
                        <ul className='checklist fade-in right white ' style={{ listStyle: 'none' }}>
                            <li className="attributes fade-in left">
                                <img src={suitable} width={"100vw"} height={"auto"} />
                                <span>
                                    Suitable for all age groups <br /> (16 to 85+)
                                </span>
                            </li>
                            <li className="attributes fade-in left">
                                <img src={integrated} width="100vw" height={"auto"} />
                                <span>
                                    Can be integrated with <br /> all workouts
                                </span>
                            </li>
                            <li className="attributes fade-in left">
                                <img src={sideEffects} />
                                <span>
                                    No side effects & Injuries
                                </span>
                            </li>
                            <li className="attributes fade-in left">
                                <img src={injuries} />
                                <span>
                                    Excellent for Rehabilitation <br /> of Injuries
                                </span>
                            </li>
                            <li className="attributes fade-in left">
                                <img src={calories} />
                                <span>
                                    Burn up to 1500 calories per <br /> session
                                </span>
                            </li>
                            <li className="attributes fade-in left">
                                <img src={session} />
                                <span>
                                    Only 30 mins per session
                                </span>
                            </li>
                        </ul>
                    </div>
                    <video src={benefits} className="desktop_only" autoPlay playsInline loop muted style={{ height: "40vw" }}></video>
                    <div style={{ lineHeight: "0" }}>
                        <video src={benefits} className="mobile_only" autoPlay playsInline loop muted style={{ width: "100%" }}></video>
                    </div>
                </div>
                <div className="ems-suit" >
                    <div className='ems-suit_wrapper padded'>
                        <img src={emsbg} className='bg' alt="" loading="lazy" />
                        <div>
                            <div className='fade-in left'>
                                <h2 style={{ textAlign: "left" }}>SAFETY OF TECHNOLOGY</h2>
                                <h1 style={{ textAlign: "left", marginTop: "0" }}>EMS SUIT</h1>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <img src={ems} className='ems-suit_img mobile_only fade-in right' loading="lazy" />
                            </div>
                            <p className='fade-in left' style={{ position: "relative", zIndex: "1", maxWidth: "500px" }}>Elevate Your Fitness Journey with Cutting-Edge EMS Technology for Extraordinary Results.</p>
                            <p className='fade-in left' style={{ position: "relative", zIndex: "1", maxWidth: "500px" }}>We employ state-of-the-art portable technology trusted by top athletes, cricketers, and fitness enthusiasts in India and around the globe.</p>
                            {/* <div style={{ display: "flex" }}>
                            <img src={pod} className='pod mobile_only' alt="" />
                            <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column" }}>
                                <img src={emscollage1} alt="" style={{ width: "100%", height: "50%", objectFit: "cover" }} loading="lazy" />
                                <img src={emscollage2} alt="" style={{ width: "100%", height: "50%", objectFit: "cover" }} loading="lazy" />
                            </div>
                        </div> */}
                        </div>
                        <img src={suit} className='mobile_only' style={{ width: "100%", position: "relative", zIndex: "2", objectFit: "contain", borderRadius: "15px" }} alt="" />
                        <div style={{ position: 'relative', display: "flex", width: "50%" }}>
                            <img src={suit} className='desktop_only' style={{ borderTopLeftRadius: "15px", borderBottomLeftRadius: "15px", width: "65%", position: "relative", zIndex: "2", objectFit: "contain" }} alt="" />
                            <img src={ems} alt="" className='ems-suit_img desktop_only fade-in right' loading="lazy" style={{ borderTopRightRadius: "15px", borderBottomRightRadius: "15px", width: "65%", objectFit: "contain" }} />
                        </div>
                    </div>
                </div>
                <div className="rehabilitation">
                    <img src={rehabBg} data-speed="0.7" className='desktop_only' />
                    <img src={rehabBgMobile} alt="" className='mobile_only' data-speed="0.7" />
                    <div className="overlay"></div>
                    <div className="container padded" style={{ position: "relative" }}>
                        <div>
                            <h1 className='white mobile_only' style={{ textAlign: "center" }}>EMS x REHABILITATION</h1>
                            <img className="mobile_only" src={rehab} style={{ borderRadius: "15px" }} loading="lazy" />
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
                                <img className="desktop_only" src={rehab} loading="lazy" style={{ height: "600px", objectFit: "cover", width: "40%", borderRadius: "15px" }} />
                                <div className='margin-left-desktop'>
                                    <h1 className='white desktop_only'>EMS x REHABILITATION</h1>
                                    <p>At TC1, we're passionate about harnessing the potential of EMS to expedite your rehabilitation journey.</p>
                                    <h2 style={{ textAlign: "left", fontSize: "2rem" }}>Understanding How EMS Helps In Rehabilitation</h2>
                                    <p>EMS is a comprehensive form of fitness training rooted in rehabilitation. It involves strategically placing adhesive pads on target muscles. These pads are connected to an EMS machine that emits controlled electrical impulses, mimicking the brain's signals to trigger muscle contractions. This unique approach offers a range of benefits that can significantly contribute to your recovery process.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AssetPreloader>
    )
}

export default Ems