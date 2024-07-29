'use client'

//@ts-nocheck
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Loader } from "rsuite";

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ children, href }: any): JSX.Element => {
    const [start, setStart] = useState(false)
    const [isVideoLoading, setVideoLoading] = useState(true)
    const ref = useRef();
    const path = usePathname()
    const isPathHome = path == "/"
    const blurActive = isPathHome ? "" : "backdrop-blur"
    const brightnessActive = isPathHome ? "" : "brightness-50"

    const handleVideoLoad = () => setVideoLoading(false);

    useEffect(() => { setStart(true) }, [])

    return (
        <section
            // className="px-12"
            style={{ height: "100vh", backgroundColor: "black" }}
        >
            <div style={{ width: "100%", height: "100%", position: "relative" }}>
                <div className={`z-0 ${brightnessActive}`} style={{ width: "100%", height: "100%", position: "absolute" }}>
                    {start && (
                        <video playsInline onPlay={handleVideoLoad} onLoadedData={handleVideoLoad} preload="none" muted autoPlay style={{ objectFit: "cover", display: "block", width: "100%", height: "100%", padding: 0, margin: 0 }} loop>
                            <source src="/exportedHeroVideo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>

                <div className={`h-full ${blurActive}  py-12`}>
                    <div className="container mx-auto h-full z-20 relative overflow-scroll">
                        {isVideoLoading ? (
                            <div className=" h-full flex justify-center items-center">
                                <Loader size="md" />
                            </div>
                        ) : children}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
