'use client'

//@ts-nocheck
import { usePathname } from "next/navigation";
import Navs from "./Navs";

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ children }: any): JSX.Element => {
    const path = usePathname()
    const isPathHome = path == "/"
    const blurActive = isPathHome ? "" : "backdrop-blur"
    const brightnessActive = isPathHome ? "" : "brightness-50"

    return (
        <section
            // className="px-12"
            style={{ height: "100vh" }}
        >
            <div style={{ width: "100%", height: "100%", position: "relative" }}>
                <div className={`z-0 ${brightnessActive}`} style={{ width: "100%", height: "100%", position: "absolute" }}>
                    <video muted autoPlay style={{ objectFit: "cover", display: "block", width: "100%", height: "100%", padding: 0, margin: 0 }} loop preload="none">
                        <source src="/exportedHeroVideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={`h-full ${blurActive}  py-12`}>
                    <div className="container mx-auto h-full z-20 relative overflow-scroll">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
