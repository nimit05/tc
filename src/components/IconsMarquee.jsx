import React from 'react'

export default function IconsMarquee(props) {
    return (
        <div className=''>
            {/* <div className="marquee_wrapper" style={{ animationDuration: `${props.speed}s` }}>
                {props.icons.map((icon) => (
                    <div className="marquee-item flex" style={{ flexDirection: "column", justifyContent: "flex-start", padding: "0 15px" }}>
                        <img src={icon.img} alt="" style={{ padding: '5px', height: "35%" }} />
                        <p className='blue' style={{ textAlign: "center" }}>
                            {icon.heading}
                        </p>
                    </div>
                    style="display:flex;width: 100%;max-width:100%;"
                ))}
            </div> */}
            <div className="icons_container flex mobile_only">
                <div className='flex' style={{width:"100%",maxWidth:"100%"}}>
                    <ul className="icons_wrapper" style={{ animationDuration: `${props.speed}s` }}>
                        {props.icons.map((icon) => (
                            <li>
                                <div className="icon-item" style={{ padding: "0 15px" }}>
                                    <img src={icon.img} alt="" style={{ padding: '5px', height: "35%" }} />
                                    <p className='blue' style={{ textAlign: "center", margin: "0" }}>
                                        {icon.heading}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul className="icons_wrapper" style={{ animationDuration: `${props.speed}s` }}>
                        {props.icons.map((icon) => (
                            <li>
                                <div className="icon-item" style={{ padding: "0 15px" }}>
                                    <img src={icon.img} alt="" style={{ padding: '5px', height: "35%" }} />
                                    <p className='blue' style={{ textAlign: "center", margin: "0" }}>
                                        {icon.heading}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul className="icons_wrapper" style={{ animationDuration: `${props.speed}s` }}>
                        {props.icons.map((icon) => (
                            <li>
                                <div className="icon-item" style={{ padding: "0 15px" }}>
                                    <img src={icon.img} alt="" style={{ padding: '5px', height: "35%" }} />
                                    <p className='blue' style={{ textAlign: "center", margin: "0" }}>
                                        {icon.heading}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul className="icons_wrapper" style={{ animationDuration: `${props.speed}s` }}>
                        {props.icons.map((icon) => (
                            <li>
                                <div className="icon-item" style={{ padding: "0 15px" }}>
                                    <img src={icon.img} alt="" style={{ padding: '5px', height: "35%" }} />
                                    <p className='blue' style={{ textAlign: "center", margin: "0" }}>
                                        {icon.heading}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="desktop_only" style={{display:"flex",width:"100%",alignItems:"baseline",justifyContent:"space-evenly",flexWrap:"nowrap"}}>
                {props.icons.map((icon) => (
                    <div className='icon-item' style={{display:"flex",flexDirection:"column",textAlign:"center",width:"20%",margin:"0 2%"}}>
                        <img src={icon.img} alt="" className='' style={{}} />
                        <h2>{icon.heading}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}
