import React from 'react'
import banner from '../assets/contact.jpg'
import submit from '../assets/SUBMIT.png'
import bg from '../assets/15.webp'
const Contact = () => {
    return (
        <div style={{ display: 'flex', flexDirection: "column" }} className='blue'>
            <div style={{ position: "relative" }}>
                <img src={banner} className='banner_image' alt="" />
                <h1 style={{ margin: "0", position: "absolute", top: '50%', left: "50%", transform: "translate(-50%,-50%)" }} className='white header-padding'>CONTACT US</h1>
            </div>
            <div style={{ position: "relative", overflow: "hidden" }}>
                <img src={bg} style={{ position: 'absolute', width: "100%", right: "0", zIndex: "-1", height: "100%", objectFit: "cover" }} alt="" />
                <div className="padded">
                    <h2 className='white'>Fill the form below to get in touch</h2>
                    <form action="https://formsubmit.co/customercare@tc1ems.com" method="POST" className='dealership_form'>
                        <div className="flex" style={{ flexDirection: 'column', maxWidth: "600px" }}>
                            <div className="flex" style={{ justifyContent: "space-between", marginBottom: "1rem" }}>
                                <input type="text" name="Company Name" style={{ backdropFilter: "blur(2px)", background: '#ffffffd0', width: "43%", borderRadius: "5px", padding: "1rem", border: "1px solid #00000040", fontSize: "1rem", marginRight: "1rem" }} required placeholder='First Name' className='heading' />
                                <input type="text" name="Contact Person" style={{ backdropFilter: "blur(2px)", background: '#ffffffd0', width: "43%", borderRadius: "5px", padding: "1rem", border: "1px solid #00000040", fontSize: "1rem" }} placeholder='Last Name' className='heading' />
                            </div>
                            <div className="flex" style={{ justifyContent: "space-between", marginBottom: "1rem" }}>
                                <input type="Email" name="email" style={{ backdropFilter: "blur(2px)", background: '#ffffffd0', width: "43%", borderRadius: "5px", padding: "1rem", border: "1px solid #00000040", fontSize: "1rem" }} required placeholder='Email address' className='heading' />
                                <input type="Phone Number" name="phone" style={{ backdropFilter: "blur(2px)", background: '#ffffffd0', width: "43%", borderRadius: "5px", padding: "1rem", border: "1px solid #00000040", fontSize: "1rem" }} required placeholder='Mobile No' className='heading' />
                            </div>
                            <textarea style={{ backdropFilter: "blur(2px)", background: '#ffffffd0', borderRadius: "5px", padding: "1rem", border: "1px solid #00000040", fontSize: "1rem" }} name="Message" id="" cols="50" rows="10" placeholder='Message' className='heading'></textarea>
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_next" value="http://localhost:5173/thanks" />
                            <input type="hidden" name="_autoresponse" value="Thanks for getting in touch. We will reply shortly." />
                            <div>
                                <button type="submit" className='button heading' style={{ marginTop: "2rem", border: "none", backgroundColor: "#00000000", alignItems: 'center', flexDirection: "column", display: 'flex' }}><img src={submit} width="50%" /></button>
                            </div>
                        </div>
                    </form>
                    <div className='center-desktop' style={{ width: "100%", display: "flex", flexDirection: "column", marginTop: "10px" }}>
                        <p style={{ display: "flex", alignItems: "center" }} className='white'><svg width={"30px"} style={{ padding: "2px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="map-pin"><rect width="256" height="256" fill="none"></rect><path fill='#fff' d="M127.99414,15.9971a88.1046,88.1046,0,0,0-88,88c0,75.29688,80,132.17188,83.40625,134.55469a8.023,8.023,0,0,0,9.1875,0c3.40625-2.38281,83.40625-59.25781,83.40625-134.55469A88.10459,88.10459,0,0,0,127.99414,15.9971ZM128,72a32,32,0,1,1-32,32A31.99909,31.99909,0,0,1,128,72Z"></path></svg>&nbsp;&nbsp;Mumbai, India</p>
                        <p style={{ display: "flex", alignItems: "center" }} className='white'><svg xmlns="http://www.w3.org/2000/svg" style={{ margin: "0 3px" }} width="20px" height="20px" viewBox="0 0 24 24" id="phone"><path fill="none" d="M0 0h24v24H0V0z"></path><path fill='#fff' d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path></svg>&nbsp;&nbsp;+919820181888</p>
                        <p style={{ display: "flex", alignItems: "center" }} className='white'><svg xmlns="http://www.w3.org/2000/svg" width={"30px"} viewBox="0 0 32 32" id="mail"><path fill="#fff" d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z"></path><path fill="#fff" d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z"></path></svg>&nbsp;&nbsp;customercare@tc1ems.com</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact
