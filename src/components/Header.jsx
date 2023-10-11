import React, { useEffect, useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from "../assets/logo.png"
import menuBg from "../assets/menu-bg.jpg"

const Menu = () => (
  <>
    <p><a href="/">Home</a></p>
    <p><a href="/about">About Us</a></p>
    <p><a href="/ems">EMS</a></p>
    <p><a href="/franchise">Franchise</a></p>
    <p><a href="/faqs">FAQs</a></p>
    <p><a href="/contact">Contact us</a></p>
  </>
)
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  useEffect(() => {
    const header = document.getElementById('header');
    document.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 15) header.classList.add('scrolled-past-header');
      else {
        if (header.classList.contains('scrolled-past-header')) header.classList.remove('scrolled-past-header')
      }
    })
  })

  return (
    <div>

      <div className='header pin' id="header" style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
        <a href='/'><img src={logo} alt="Louverline Blinds" className='header_logo' /></a>
        <div className='desktop_only' style={{ display: "flex", justifyContent: 'space-evenly', width: "70%", alignItems: "center", fontWeight: 600 }}>
          <div><a href="/">Home</a></div>
          <div><a href="/about">About</a></div>
          <div><a href="/ems">EMS</a></div>
          <div><a href="/franchise">Franchise</a></div>
          <div><a href="/faqs">FAQs</a></div>
          <div><a href="/contact">Contact Us</a></div>
        </div>
        <div className='header__navbar-menu mobile_only'>
          {toggleMenu
            ? <RiCloseLine color="#fff" size={50} onClick={() => setToggleMenu(false)} style={{ zIndex: "5000", position: "absolute", top: "3rem", right: "1rem" }} />
            : <RiMenu3Line color="#fff" size={26} onClick={() => setToggleMenu(true)} />
          }
          <div className='navbar-menu_container scale-up-center' style={{ display: `${toggleMenu ? 'flex' : 'none'}` }}>
            <img src={menuBg} alt="" style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", top: "0", left: "0" }} loading='eager' />
            {/* <div className="overlay"></div> */}
            <div className='navbar-menu_container-links' style={{ position: "relative", zIndex: '4' }}>
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header