import React, { useState, useEffect } from 'react'
import { AssetPreloader } from '../components'
import aboutBg from '../assets/about.webp'
import map from '../assets/map.gif'
import mapbgDesktop from '../assets/map-bg.jpg'
import mapbgMobile from '../assets/map-bg-mobile.webp'
import mapGradient from '../assets/map-gradient.jpg'
import Banner from '../assets/about-banner.webp'

const About = ({ setLoading }) => {
  const assetsToPreload = [
    { src: aboutBg, type: 'IMAGE' },
    { src: map, type: 'IMAGE' },
    { src: mapbgDesktop, type: 'IMAGE' },
    { src: mapbgMobile, type: 'IMAGE' },
    { src: mapGradient, type: 'IMAGE' },
    { src: Banner, type: 'IMAGE' },
  ];
  const [mobile, setMobile] = useState(true);
  useEffect(() => {
    if (screen.width > 750) {
      setMobile(false);
    }
  });

  return (
    <div>
      <AssetPreloader assets={assetsToPreload} setLoadingGlobal={setLoading}>
        <div className='about'>
          <div className="" style={{ position: "relative", lineHeight: "0" }}>
            <img src={Banner} alt="" className='banner_image' />
            <h1 className='fade-in right white' style={{ lineHeight: "3rem", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", textAlign: "center" }}>ABOUT TC1</h1>
          </div>
          <div className="about">
            <img src={aboutBg} alt="" className="bg" />
            <div className='about-us_container'>
              <div className="overlay"></div>
              <p className='fade-in bottom'>Asia-Pacific's Pioneer in 3rd Generation EMS Fitness.<br />TC1 is a tech-driven fitness corporation that specializes in EMS training. While EMS acts as the central theme for a workout, we have integrated diverse forms of training to ensure a unique and highly effective experience that is unprecedented in the fitness space. <br /><br />TC1 is focused on revolutionizing conventional training methods by infusing tech and making the training highly effective while breaking the monotony of fitness training for a wide spectrum of people. <br /><br /> We employ state-of-the-art portable technology trusted by top athletes, cricketers, and fitness enthusiasts in India and around the globe.</p>
            </div>
          </div>
          <div className="about">
            <div style={{ position: "relative" }}>
              {mobile
                ? <img src={mapbgMobile} className='mobile_only' alt="" style={{ zIndex: "1", position: "absolute", width: "100%", height: "100%", objectFit: "cover" }} />
                : <img src={mapbgDesktop} className='desktop_only' alt="" style={{ zIndex: "1", position: "absolute", width: "100%", height: "100%", objectFit: "cover" }} />
              }
              <img src={mapGradient} alt="" style={{ zIndex: "2", position: "absolute", width: "100%", opacity: "0.5", height: "100%" }} />
              <div className="map_container">
                <h1 className='white' style={{ position: "relative", zIndex: "4" }}>OUR PRESENCE</h1>
                <img src={map} alt="" className='map' style={{ zIndex: "3", position: "relative" }} />
              </div>
            </div>
          </div>
        </div>
      </AssetPreloader>
    </div>
  )
}

export default About