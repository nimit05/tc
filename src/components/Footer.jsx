import React from 'react'
import logo from "../assets/logo.png"
import fb from '../assets/icons/FACEBOOK.png'
import insta from '../assets/icons/INSTAGRAM.png'
import yt from '../assets/icons/YOUTUBE.png'
import callback from '../assets/callback.png'
const Footer = () => {
    return (
        <div className='footer'>
            {/* <div className="contact padded" style={{ paddingBottom: "0" }}>
                <div className="buttons">
                    <a href="tel:+" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <img src={callback} alt="" />
                    </a>
                    <button className='button_1'>CALL US</button>
                    <button className='button_2'>GET IN TOUCH</button>
                </div>
            </div> */}
            <div className="menu padded-footer flex" style={{ paddingBottom: "10px" }}>
                <div className='row-desktop' style={{ display: "flex", flexDirection: "column", justifyContent: 'space-evenly', fontWeight: 600, fontSize: "0.8rem", alignSelf: "end" }}>
                    <div><a href="/">Home</a></div>
                    <div><a href="/about">About</a></div>
                    <div><a href="/dealership">EMS</a></div>
                    <div><a href="/franchise">Franchise</a></div>
                    <div><a href="/faqs">FAQs</a></div>
                    <div><a href="/contact">Contact Us</a></div>
                </div>
                <div style={{ paddingBottom: "60px" }}>
                    <div className="social flex" style={{ alignItems: "center" }}>
                        <a href="mailto:customercare@tc1ems.com" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="mail"><path fill="#0a6cb6" d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z"></path><path fill="#0a6cb6" d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z"></path></svg>
                        </a>
                        <img src={fb} alt="facebook" style={{ width: "40px", padding: "0 0px" }} />
                        <img src={insta} alt="facebook" style={{ width: "40px" }} />
                        <img src={yt} alt="facebook" style={{ width: "40px", paddingLeft: "7px" }} />
                    </div>
                </div>
            </div>
            <div className='footer_design' style={{ position: "relative" }}>
                <div className="parallelogram" style={{ height: "10px", width: "70%", marginLeft: "-2rem" }}></div>
                <div className="parallelogram" style={{ width: "60%", position: "absolute", bottom: "0", right: "-3rem" }}></div>
            </div>
            <img src={logo} alt="" style={{ height: "70px", position: "absolute", right: "35px", bottom: "0" }} />
        </div>
    )
}

export default Footer