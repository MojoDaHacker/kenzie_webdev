'use client'

//@ts-nocheck
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type JSX } from "react";
// import { Loader } from "rsuite";

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ children, playbackId }: any): JSX.Element => {
    const [isVideoLoading, setVideoLoading] = useState(true)
    const ref = useRef<HTMLVideoElement>(undefined)
    const path = usePathname()
    const isPathHome = path == "/"
    const blurActive = isPathHome ? "" : "backdrop-blur-sm"
    const brightnessActive = isPathHome ? "" : "brightness-50"

    const handleVideoLoad = (video: HTMLVideoElement) => { video.play(); setVideoLoading(false) };

    useEffect(() => {
        const video = ref.current

        video.play();

        if (!video || video.currentTime > 0) return
        if (video.readyState !== 4) video.onloadeddata = () => handleVideoLoad(video);
        else handleVideoLoad(video)
    }, [ref])

    return (
        <section
            className="h-svh bg-black"
        >
            <div style={{ width: "100%", height: "100%", position: "relative" }}>
                <div className={`z-0 ${brightnessActive}`} style={{ width: "100%", height: "100%", position: "absolute" }}>
                    <video ref={ref}  src={`https://stream.mux.com/${playbackId}/capped-1080p.mp4`} playsInline loop muted style={{ objectFit: "cover", display: "absolute", width: "100%", height: "100%", padding: 0, margin: 0 }}>
                        <source type="video/mp4"/>
                    </video>
                </div>

                <div className={`h-full ${blurActive}  py-12`}>
                    <div className="container mx-auto h-full z-20 relative overflow-scroll">
                        {isVideoLoading ? (
                            <div className=" h-full flex justify-center items-center">
                                {/* <Loader size="md" /> */}
                            </div>
                        ) : children}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
