import React, { useState, useEffect, useRef } from 'react'
import { Troopers, Marquee, Faq, AssetPreloader } from '../components'
import bannerDesktop from '../assets/banner_desktop.mp4'
import bannerMobile from '../assets/banner_mobile.mp4'
import emsBreak from '../assets/ems-break.mp4'
import aboutVideo from '../assets/about.mp4'
import emsBg from '../assets/ems_bg.webp'
import logo from "../assets/logo.png"
import celebs from "../assets/celebs"
import menuBg from "../assets/menu-bg.jpg"

const Home = ({ setLoading,loading }) => {
  const [mobile, setMobile] = useState(true);
  const [slides, setSlides] = useState(1);
  const celebsAssets = celebs.map(({ img }) => {
    return { src: img, type: 'IMAGE' }
  })
  const assets = [
    { src: logo, type: 'IMAGE' },
    { src: menuBg, type: 'IMAGE' },
    { src: emsBg, type: 'IMAGE' },
    { src: emsBreak, type: "VIDEO" },
    { src: aboutVideo, type: "VIDEO" },
  ]
  const [assetsToPreload, setAssetsToPreload] = useState(assets);
  useEffect(() => {
    if (screen.width > 750) {
      setMobile(false);
      assets.push({ src: bannerDesktop, type: "VIDEO" })
      setSlides(3);
    }
    else {
      assets.push({ src: bannerMobile, type: "VIDEO" })
    }
    setAssetsToPreload(assets)
  }, []);
  document.querySelector('body').addEventListener('click touchstart', () => {
    const videoElements = document.querySelectorAll('video');
    videoElements.forEach(video => {
      if (!video.playing) video.play();
    });
  })
  const unmute = () => {
    const videos = document.querySelectorAll(".hero_video");
    const mute = document.querySelector(".mute");
    const unmute = document.querySelector(".unmute");
    videos.forEach(video => {
      video.muted = !video.muted;
    });
    mute.style.display = mute.style.display == 'none' ? 'block' : 'none';
    unmute.style.display = unmute.style.display == 'none' ? 'block' : 'none';
  }

  const [faqs, setfaqs] = useState([{
    question: "Is EMS more efficient than conventional exercise in the gym?",
    answer: "A 30-minute EMS workout Is equivalent to 3 hours of a conventional workout! It activates the whole muscular system of the body stimulating 10 muscle groups with agonist, antagonist and deeper- lying muscles around 150 times in 4 - second Intervals.",
    open: true
  }, {
    question: "How long do the sessions last?",
    answer: "The EMS sessions last 30 minutes including suiting up and a short relaxation part after the workout. If It Is your first time, we will include a brief introduction of EMS and our equipment.",
    open: false
  }, {
    question: "Can the EMS session be longer than 30 minutes?",
    answer: "Yes, depending on your threshold and performance.",
    open: false
  }
  ]);
  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }
      return faq;
    }))
  }

  return (
    <div className='home'>
      <AssetPreloader assets={assetsToPreload} setLoadingGlobal={setLoading} loading={loading}>
        <div className="hero">
          {mobile
            ? <video src={bannerMobile} autoPlay playsInline loop muted className='hero_video mobile_only' preload='true' data-speed="0.2"></video>
            : <video src={bannerDesktop} autoPlay playsInline loop muted className='hero_video desktop_only' data-speed='0.4'></video>
          }
          <div className="music" onClick={unmute}>
            <svg className='mute' style={{ display: "block" }} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" id="volume"><path fill="#fff" d="M5.00304 11.7155C5.04093 9.87326 5.05988 8.95215 5.68099 8.16363C5.79436 8.0197 5.9607 7.8487 6.10011 7.73274C6.86393 7.09741 7.8724 7.09741 9.88932 7.09741C10.6099 7.09741 10.9702 7.09741 11.3137 7.00452C11.385 6.98522 11.4556 6.96296 11.5253 6.93781C11.8608 6.81674 12.1616 6.60837 12.7632 6.19161C15.137 4.54738 16.3239 3.72527 17.3201 4.08241C17.5111 4.15088 17.6959 4.24972 17.8611 4.37162C18.7222 5.00744 18.7877 6.48675 18.9185 9.44538C18.967 10.5409 19 11.4785 19 12C19 12.5215 18.967 13.4591 18.9185 14.5546C18.7877 17.5132 18.7222 18.9926 17.8611 19.6284C17.6959 19.7503 17.5111 19.8491 17.3201 19.9176C16.3239 20.2747 15.137 19.4526 12.7632 17.8084C12.1616 17.3916 11.8608 17.1833 11.5253 17.0622C11.4556 17.037 11.385 17.0148 11.3137 16.9955C10.9702 16.9026 10.6099 16.9026 9.88932 16.9026C7.8724 16.9026 6.86393 16.9026 6.10011 16.2673C5.9607 16.1513 5.79436 15.9803 5.68099 15.8364C5.05988 15.0478 5.04093 14.1267 5.00304 12.2845C5.00104 12.1878 5 12.0928 5 12C5 11.9072 5.00104 11.8122 5.00304 11.7155Z"></path></svg>
            <svg className='unmute' style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" id="volume-loud"><path fill="#fff" d="M2.00299 11.7155C2.04033 9.87326 2.059 8.95215 2.67093 8.16363C2.78262 8.0197 2.9465 7.8487 3.08385 7.73274C3.83639 7.09741 4.82995 7.09741 6.81706 7.09741C7.527 7.09741 7.88197 7.09741 8.22035 7.00452C8.29067 6.98522 8.36024 6.96296 8.4289 6.93781C8.75936 6.81674 9.05574 6.60837 9.64851 6.19161C11.9872 4.54738 13.1565 3.72527 14.138 4.08241C14.3261 4.15088 14.5083 4.24972 14.671 4.37162C15.5194 5.00744 15.5839 6.48675 15.7128 9.44537C15.7606 10.5409 15.7931 11.4785 15.7931 12C15.7931 12.5215 15.7606 13.4591 15.7128 14.5546C15.5839 17.5132 15.5194 18.9926 14.671 19.6284C14.5083 19.7503 14.3261 19.8491 14.138 19.9176C13.1565 20.2747 11.9872 19.4526 9.64851 17.8084C9.05574 17.3916 8.75936 17.1833 8.4289 17.0622C8.36024 17.037 8.29067 17.0148 8.22035 16.9955C7.88197 16.9026 7.527 16.9026 6.81706 16.9026C4.82995 16.9026 3.83639 16.9026 3.08385 16.2673C2.9465 16.1513 2.78262 15.9803 2.67093 15.8364C2.059 15.0478 2.04033 14.1267 2.00299 12.2845C2.00103 12.1878 2 12.0928 2 12C2 11.9072 2.00103 11.8122 2.00299 11.7155Z"></path><path fill="#fff" fillRule="evenodd" d="M19.4895 5.55219C19.7821 5.29218 20.217 5.33434 20.4608 5.64635L19.931 6.11713C20.4608 5.64635 20.4606 5.64602 20.4608 5.64635L20.4619 5.6477 20.4631 5.64921 20.4658 5.65275 20.4727 5.66184C20.4779 5.6688 20.4844 5.67756 20.4921 5.68814 20.5075 5.70929 20.5275 5.73772 20.5515 5.77358 20.5995 5.84529 20.6635 5.94667 20.7379 6.07889 20.8868 6.34345 21.077 6.73092 21.2644 7.25038 21.6397 8.29107 22 9.85136 22 12.0002 22 14.1491 21.6397 15.7094 21.2644 16.7501 21.077 17.2695 20.8868 17.657 20.7379 17.9216 20.6635 18.0538 20.5995 18.1552 20.5515 18.2269 20.5275 18.2627 20.5075 18.2912 20.4921 18.3123 20.4844 18.3229 20.4779 18.3317 20.4727 18.3386L20.4658 18.3477 20.4631 18.3513 20.4619 18.3528C20.4616 18.3531 20.4608 18.3541 19.931 17.8833L20.4608 18.3541C20.217 18.6661 19.7821 18.7083 19.4895 18.4483 19.1983 18.1895 19.1578 17.729 19.3977 17.417 19.3983 17.4163 19.3994 17.4148 19.4009 17.4127 19.4058 17.406 19.4154 17.3925 19.4291 17.372 19.4565 17.3311 19.5003 17.2625 19.5552 17.1649 19.6649 16.9698 19.8195 16.6587 19.977 16.2221 20.2913 15.3508 20.6207 13.9695 20.6207 12.0002 20.6207 10.0309 20.2913 8.64968 19.977 7.77836 19.8195 7.34181 19.6649 7.03066 19.5552 6.8356 19.5003 6.73802 19.4565 6.66934 19.4291 6.62845 19.4154 6.608 19.4058 6.59449 19.4009 6.58778 19.3994 6.58561 19.3983 6.58416 19.3977 6.5834 19.3977 6.5834 19.3977 6.58341 19.3977 6.5834M17.7571 8.41595C18.0901 8.21871 18.51 8.34663 18.6949 8.70166L18.0921 9.0588C18.6949 8.70166 18.6948 8.70134 18.6949 8.70166L18.6956 8.70295 18.6963 8.70432 18.6978 8.7073 18.7014 8.71428 18.7102 8.73227C18.7169 8.74607 18.7251 8.76348 18.7345 8.78457 18.7533 8.82676 18.7772 8.88363 18.8042 8.95574 18.8584 9.10004 18.9251 9.3049 18.99 9.57476 19.1199 10.115 19.2415 10.9119 19.2415 12.0003 19.2415 13.0888 19.1199 13.8857 18.99 14.4259 18.9251 14.6958 18.8584 14.9007 18.8042 15.045 18.7772 15.1171 18.7533 15.1739 18.7345 15.2161 18.7251 15.2372 18.7169 15.2546 18.7102 15.2684L18.7014 15.2864 18.6978 15.2934 18.6963 15.2964 18.6956 15.2978C18.6954 15.2981 18.6949 15.299 18.0921 14.9419L18.6949 15.299C18.51 15.6541 18.0901 15.782 17.7571 15.5847 17.427 15.3892 17.3063 14.9474 17.4846 14.5938L17.4892 14.5838C17.4955 14.5697 17.5075 14.5415 17.5236 14.4987 17.5557 14.4132 17.6039 14.2688 17.6539 14.0606 17.7539 13.6448 17.8622 12.9709 17.8622 12.0003 17.8622 11.0298 17.7539 10.3559 17.6539 9.94007 17.6039 9.73193 17.5557 9.58748 17.5236 9.50197 17.5075 9.45918 17.4955 9.43102 17.4892 9.41691L17.4846 9.40687C17.3063 9.05332 17.427 8.61152 17.7571 8.41595z" clipRule="evenodd"></path></svg>
          </div>
          <div className="rev">
            <div className="flex" style={{ justifyContent: "flex-end", position: "relative" }}>
              <img src={logo} className='rev_logo' />
              <div className="parallelogram smol"></div>
              <div className="parallelogram big"></div>
            </div>
            <div className="flex rev-bottom">
              <div className="parallelogram bottom"></div>
              <div className="parallelogram" style={{ height: "1rem", width: "40%" }}></div>
            </div>
            <h1 className='about_heading desktop_only white'><p className='revolutionizing' style={{ fontSize: "2.5rem", marginLeft: "15px" }}>REVOLUTIONIZING </p><p className='fitness blue' style={{ fontSize: "4rem", lineHeight: "100%" }}> FITNESS</p></h1>
            <h1 className='about_heading mobile_only white'><p className='revolutionizing' style={{ fontSize: "1.2rem", marginLeft: "8px" }}>REVOLUTIONIZING </p><p className='fitness blue' style={{ fontSize: "2.2rem", lineHeight: "100%", fontWeight: "bold" }}> FITNESS</p></h1>
          </div>
        </div>
        <div className="what-ems">
          <img src={emsBg} className='ems_bg' alt="" data-speed="0.7" loading='lazy' />
          <div className='flex' style={{ alignItems: "center" }}>
            <div>
              <div className='white' style={{ display: "flex", justifyContent: "center" }}>
                <h1 className='fade-in left '>WHAT IS</h1>
                <h1 style={{ color: "", marginLeft: "1rem" }} className='fade-in right'>EMS</h1>
              </div>
              <p className='fade-in bottom white padded' style={{}}>
                EMS (<span className="" style={{ fontWeight: "bold" }}>Electrical Muscle Stimulation</span>) is a comprehensive form of fitness training rooted in rehabilitation. <br /><br /> In our everyday lives, our brain cells, as part of the central nervous system, constantly emit electrical impulses to control both voluntary and involuntary muscle contractions. EMS harnesses this natural principle to effectively stimulate, shape, and strengthen all major muscle groups at once. In essence, EMS entails the activation of major muscles through external means, utilizing low-frequency electrical impulses to achieve maximum results in minimal time.
              </p>
            </div>
            {mobile ? '' : <video src={aboutVideo} autoPlay playsInline loop muted className='about_video desktop_only' style={{ width: "35vw", objectFit: "contain", maxHeight: "720px" }}></video>}
          </div>
          <div className="flex">
            <div className="flex" style={{ position: "relative" }}>
              {mobile ? '' : <video src={emsBreak} autoPlay playsInline loop muted className='ems_suit_video desktop_only' style={{ width: "100vw", height: "100%", objectFit: "cover" }}></video>}
            </div>
          </div>
          {mobile ? <video src={emsBreak} autoPlay playsInline loop muted className='ems_suit_video mobile_only'></video> : ''}
        </div>
        <Marquee content="Burn upto 1500 Calories in just one Session // 30 mins x 2 Times a Week //" speed='10' />
        <div style={{ position: "relative", lineHeight: "0" }}>
          {mobile ? <video src={aboutVideo} autoPlay playsInline loop muted className='about_video mobile_only'></video> : ""}
        </div>
        <Troopers celebs={celebs} />
        <div className="faq padded" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <h1 style={{}}>FAQs</h1>
          <div className="faqs">
            {faqs.map((faq, i) => (
              <Faq faq={faq} index={i} key={i} toggleFAQ={toggleFAQ} />
            ))}
          </div>
          <div className="faqs" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <a href="/faqs" style={{ paddingBottom: "5px", color: '#fff', borderBottom: "2px solid #fff" }}>View More {`>`}</a>
          </div>
        </div>
      </AssetPreloader>
    </div>
  )
}

export default Home