import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap'
import loadingVideo from '../assets/loading.mp4'
const AssetPreloader = ({ assets, setLoadingGlobal, children }) => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    console.log(assets)
    useEffect(() => {
        console.log('sh')
        console.log(loading)
        const totalAssets = assets.length;
        let assetsLoaded = 0;
        const preloadAssets = async () => {
            await assets.forEach((asset) => {
                if (asset.type === 'IMAGE') {
                    const imageLoader = new Image();
                    imageLoader.src = asset.src;
                    imageLoader.onload = () => {
                        assetsLoaded++;
                        setProgress((assetsLoaded / totalAssets) * 100);
                        if (assetsLoaded === totalAssets) {
                            // Add a slight delay before hiding the loading container
                            setLoading(false);
                            setLoadingGlobal()
                        }
                    };
                } else if (asset.type === 'VIDEO') {
                    const videoLoader = document.createElement('video');
                    videoLoader.src = asset.src;
                    videoLoader.preload = 'auto';
                    const isVideoLoaded = localStorage.getItem(`video_loaded_${asset.src}`);
                    if (!isVideoLoaded) {
                        videoLoader.autoplay = true; // Autoplay the video
                    }
                    videoLoader.onloadeddata = () => {
                        assetsLoaded++;
                        setProgress((assetsLoaded / totalAssets) * 100);
                        if (!isVideoLoaded) {
                            localStorage.setItem(`video_loaded_${asset.src}`, 'true');
                        }
                        if (assetsLoaded === totalAssets) {
                            setLoading(false);
                            setLoadingGlobal();
                        }
                    };
                }
            });
        };
        preloadAssets();
    }, [loading]);
    useEffect(() => {
        if (!loading) {
            const appearOptions = {
                threshold: 0
            };
            const faders = document.querySelectorAll('.fade-in');
            const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    else {
                        entry.target.classList.add("appear");
                        appearOnScroll.unobserve(entry.target)
                    }
                })
            }, appearOptions);
            faders.forEach(fader => {
                appearOnScroll.observe(fader);
            });
            gsap.from(".about_heading.mobile_only .revolutionizing", {
                fontSize: "2.2rem",
                y: "-240%",
                scrollTrigger: {
                    trigger: ".hero",
                    start: "top top",
                    end: "bottom center",
                    scrub: 1
                }
            });
            gsap.from(".about_heading.mobile_only .fitness", {
                fontSize: "3rem",
                y: "-270%",
                scrollTrigger: {
                    trigger: ".hero",
                    start: "top top",
                    end: "bottom center",
                    scrub: 1
                }
            });
        }
    }, [loading]);
    return (
        <div>
            {loading ? (
                <div style={{ backgroundColor: "#000", position: "relative", zIndex: "1000000000", height: "100vh" }}>
                    <video src={loadingVideo} autoPlay playsInline muted style={{ height: "100%", width: "100%", objectFit: "cover", inset: "50%", translate: "-50%,-50%" }} />
                </div>
                // <div className="loading-container wrapper">
                //     <div className="loading wave-btn" style={{ height: `${progress / 100 * 500}px` }}>
                //         <img src={logo} alt="" style={{ height: '500px' }} />
                //     </div>
                // </div>
            ) : (
                children
            )}
        </div>
    );
};

export default AssetPreloader;