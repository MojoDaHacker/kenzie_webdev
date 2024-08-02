'use client'

//@ts-nocheck
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Loader } from "rsuite";

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ children, playbackId }: any): JSX.Element => {
    const [isVideoLoading, setVideoLoading] = useState(true)
    const ref = useRef<HTMLVideoElement>()
    const path = usePathname()
    const isPathHome = path == "/"
    const blurActive = isPathHome ? "" : "backdrop-blur"
    const brightnessActive = isPathHome ? "" : "brightness-50"

    const handleVideoLoad = (video: HTMLVideoElement) => { video.play(); setVideoLoading(false) };

    useEffect(() => {
        const video = ref.current

        if (!video || video.currentTime > 0) return
        if (video.readyState !== 4) video.onloadeddata = () => handleVideoLoad(video);
        else handleVideoLoad(video)
    }, [ref])

    return (
        <section
            // className="px-12"
            style={{ height: "100vh", backgroundColor: "black" }}
        >
            <div style={{ width: "100%", height: "100%", position: "relative" }}>
                <div className={`z-0 ${brightnessActive}`} style={{ width: "100%", height: "100%", position: "absolute" }}>
                    <video ref={ref} playsInline loop muted style={{ zIndex: 100, objectFit: "cover", display: "block", width: "100%", height: "100%", padding: 0, margin: 0 }}>
                        <source src={`https://stream.mux.com/${playbackId}/capped-1080p.mp4`} type="video/mp4"/>
                    </video>
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
