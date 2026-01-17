'use client'

import { animated, useSprings } from "@react-spring/web"
import clsx from "clsx"
import { useState } from "react"
import { } from "react-icons"
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa"

import bg1 from "@/public/studio.jpg"
import bg2 from "@/public/podcast.jpg"
import bg3 from "@/public/drone.jpg"
import bg4 from "@/public/code.jpg"
import localFont from "next/font/local"

const LIGHT = localFont({
    src: '../../public/fonts/Lato-LightItalic.ttf',
})

type Props = {}

const StackedCards = (props: Props) => {
    const [active, setActive] = useState(0)
    const [trails, api] = useSprings(4, (i) => {
        return {
            from: { x: i * 20, rotate: 0, y: -(i * 20), zIndex: i },
        }
    })

    const next = () => {
        const steps = [0, 20, 40, 60]
        api.start((i) => {
            const z = trails[i].zIndex.get()
            const zStep = z === 3 ? 0 : z + 1
            const step = steps[zStep]
            return {
                to: z === 3 ? [{ rotate: 60, x: 475, y: -340, zIndex: 0 }, { x: steps[0], rotate: steps[0], y: steps[0] }] :
                    [{ x: step, y: -(step), zIndex: zStep }],
                delay: z === 3 ? 0 : 250,
                // config: config.slow
            }
        })
        setActive(active === 3 ? 0 : active + 1)
    }
    const prev = () => { }

    const bgImages = [
        { image: bg1, title: "Studio Photography" },
        { image: bg2, title: "Video & Audio Production" },
        { image: bg3, title: "Aerial Photography & Videography" },
        { image: bg4, title: "Mobile & Web Application Development" },
    ]

    return (
        <div className="h-full w-full flex flex-col overflow-hidden">
            <div className="flex-5 flex justify-center items-center">
                <div className="relative">
                    {trails.map((styles, i) => (
                        <animated.div key={i} style={{ ...styles, top: 120, left: -40, backgroundImage: `url(${bgImages[i]?.image.src})` }} className={clsx("absolute w-xl -translate-1/2 aspect-video border bg-cover bg-center border-orange-300 rounded-3xl overflow-hidden flex flex-col justify-end")}>
                            <div className={clsx(LIGHT.className, "bg-black inline-block skew-x-24 min-w-1/2 max-w-max text-orange-300 border px-8 py-1 relative -left-2")}>
                                <p className="-skew-x-24">{bgImages[i]?.title}</p>
                            </div>
                        </animated.div>
                    ))}
                </div>
            </div>
            <div>
                <div className="flex justify-center gap-4 m-4">
                    {trails.map((_, i) => (
                        <div key={i} className={clsx(active === i ? "bg-orange-300" : "bg-gray-700", "skew-x-24 w-4 h-1")} />
                    ))}
                </div>
                <div className="flex gap-12 flex-1 justify-center items-center">
                    <button><FaChevronCircleLeft className="size-8" onClick={prev} /></button>
                    <button><FaChevronCircleRight className="size-8" onClick={next} /></button>
                </div>
            </div>
        </div>
    )
}

export default StackedCards