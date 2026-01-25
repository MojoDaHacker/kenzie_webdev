"use client"

import Image from "../components/Image"
import Contact from "../components/forms/Contact"
import StackedCards from "../components/animations/StackedCards"
import clsx from "clsx"
import localFont from "next/font/local"
import { MouseEventHandler, useEffect, useRef, useState } from "react"
import { FaEnvelope, FaInstagram, FaPhone } from "react-icons/fa6"

export const BLACK = localFont({
    src: '../public/fonts/Lato-Black.ttf',
})
export const REG = localFont({
    src: '../public/fonts/Lato-Bold.ttf',
})

import bg1 from "@/public/studio.jpg"
import bg2 from "@/public/podcast.jpg"
import bg3 from "@/public/drone.jpg"
import bg4 from "@/public/code.jpg"

import work from "@/public/work.jpg"
import lens from "@/public/lens.jpg"

import { useInView } from "@react-spring/web"

type Props = {}

const Page = (props: Props) => {
    const [active, setActive] = useState(null)
    const [expanedStyle, setExpanedStyle] = useState({ marginLeft: 78 })

    const expand = "w-full h-[85vh] fixed top-0 p-4"

    const services = [
        { title: "Studio Photography", img: bg1.src },
        { title: "Video & Audio Production", img: bg2.src },
        { title: "Aerial Photography & Videography", img: bg3.src },
        { title: "Mobile & Web Development", img: bg4.src }
    ]

    const handleCardExpansion: MouseEventHandler = (e) => {
        const ele = e.currentTarget
        const id = Number(ele.id)
        const eleScreenPosition = e.currentTarget.getBoundingClientRect()

        console.log(window.getComputedStyle(ele))
        console.log(eleScreenPosition)

        setActive((prev: number | null) => prev !== null ? null : id)
        setExpanedStyle(active !== id ? {
            // marginLeft: 2,
            transform: `translateY(-${eleScreenPosition.top}px)`
        } : {})
    }


    return (
        <div className="h-full">
            <section className={clsx("h-full mb-24 flex flex-col-reverse md:flex-row items-end border-b")}>
                <h1 className=""><span className={clsx(BLACK.className, "uppercase text-7xl md:text-9xl")}>The<br />Play<br />Ground</span> media</h1>
                <div className="md:self-start justify-self-end m-8 flex-1 text-right h-full">
                    <div className="ml-auto p-8 relative h-1/4">
                        <div className="absolute w-1/2 h-full border-r-2 border-t-2 right-0 top-0" />
                        <p className={clsx(REG.className, "md:text-5xl text-4xl italic text-right")}>“ Where Ideas<br /> Come To Life ”</p>
                    </div>
                </div>
                {/* <p className="justify-self-end w-full">A bit cliche, we know...</p> */}
            </section>
            <Section className="relative md:h-full mb-24">
                {(inView: boolean) => (
                    <>
                        <div className="hidden md:block h-full">
                            <div className="absolute top-40">
                                <h2 className={clsx(BLACK.className, "-rotate-90 uppercase text-6xl")}>Services</h2>
                            </div>
                            <StackedCards />
                        </div>
                        <div className="md:hidden block">
                            <div className="m-4">
                                <h2 className={clsx(BLACK.className, "uppercase text-4xl")}>Services</h2>
                            </div>
                            <div className={clsx("flex flex-col justify-center gap-4")}>
                                {services.map(({ title, img }, i) => (
                                    <div className="overflow-x-clip" key={title}>
                                        <div
                                            id={String(i)}
                                            onClick={handleCardExpansion}
                                            style={{
                                                transform: inView ? "translateX(0px)" : i % 2 ? "translateX(100%)" : "translateX(-100%)",
                                            }}
                                            className={clsx(
                                                "transition-all duration-1250 h-25 w-full ease-in-out relative",
                                                active === i ? "z-10 relative" : "z-0"
                                            )}
                                        >
                                            <div
                                                style={
                                                    active === i ?
                                                        { ...expanedStyle, marginLeft: 0 } :
                                                        { marginLeft: i % 2 ? 0 : 78 }
                                                }
                                                className={clsx(
                                                    "transition-all duration-1250 ease-in-out",
                                                    active == i ? expand : "p-2 w-4/5 h-full"
                                                )}
                                            >
                                                <div style={{ backgroundImage: `url(${img})` }} className="w-full h-full rounded-xl border bg-cover overflow-hidden bg-center flex flex-col justify-end">
                                                    <div className="flex flex-col">
                                                        <div className={clsx(
                                                            "relative z-20",
                                                            "transition-all duration-1250",
                                                            active === i ? "left-1/2 -translate-x-1/4" : "-left-2"
                                                        )}>
                                                            <div className="text-sm text-nowrap skew-x-24 border border-b-0 border-orange-300 w-fit bg-black px-2">
                                                                <p className="p-2 -skew-x-24">{title}</p>
                                                            </div>
                                                        </div>
                                                        {active === i && <div className="border-t p-2 border-orange-300 bg-[rgba(0,0,0,.5)]">Hell thereHell thereHell thereHell thereHell thereHell thereHell thereHell thereHell thereHell thereHell there  </div>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </Section>
            <Section className="min-h-screen md:h-full flex mb-24 flex-col p-2">
                {(inView: boolean) => (
                    <>
                        <div className="flex flex-1 justify-end">
                            <h2 className={clsx(BLACK.className, "uppercase text-6xl px-4")}>About</h2>
                        </div>
                        <div className="hidden md:flex h-full justify-around gap-8 px-8 overflow-hidden">
                            <div className={clsx(inView ? " translate-y-0 opacity-100" : " translate-y-full opacity-0", "border flex-4 h-full relative overflow-hidden transition-all duration-1500 ease-in-out")}>
                                <Image className=" h-full" src={work} alt={""} width={1080} height={1080} />
                            </div>
                            <div className="flex-3 flex flex-col h-full overflow-hidden">
                                <div className="border-r border-b border-orange-300 flex-1 p-2 text-center overflow-hidden flex flex-col gap-4 justify-center items-center" >
                                    <p className={clsx(inView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0", "transition-all duration-1500 ease-in-out  text-xl")}>The Playground is a Phoenix-based digital video production and website development firm, focused on providing an honest and higher quality of service.</p>
                                    <button className="p-2 bg-orange-300 text-black rounded-lg">Learn More</button>
                                </div>
                                <div className="border-l border-orange-300 flex-1 p-2 text-center overflow-hidden flex flex-col gap-4 justify-center items-center">
                                    <p className={clsx(inView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0", "transition-all duration-1500 ease-in-out  text-xl")}>The real estate and construction industries are just a few of the industries we service to generate quality videos and imaging for logistical and marketing needs.</p>
                                    <button className="p-2 bg-orange-300 text-black rounded-lg">Learn More</button>
                                </div>
                            </div>
                            <div className={clsx(inView ? " translate-y-0 opacity-100" : " translate-y-full opacity-0", "border flex-4 h-full relative overflow-hidden transition-all duration-1500 ease-in-out")}>
                                <Image className="" src={lens} alt={""} width={1080} height={1080} />
                            </div>
                        </div>
                        <div className="md:hidden">
                            <div>
                                <Image className="z-0" src={work} alt={""} width={1080} height={1080} placeholder="blur" />
                                <div className="md:border-r md:border-b border-orange-300 flex-1 p-2 text-center overflow-hidden flex flex-col gap-4 justify-center items-center" >
                                    <p className={clsx(inView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0", "transition-all duration-1500 ease-in-out  text-xl")}>The Playground is a Phoenix-based digital video production and website development firm, focused on providing an honest and higher quality of service.</p>
                                    {/* <button className="p-2 bg-orange-300 text-black rounded-lg">Learn More</button> */}
                                </div>
                            </div>
                            <div>
                                <div className="p-8 md:p-0">
                                    <Image className="z-0" src={lens} alt={""} width={1080} height={1080} placeholder="blur" />
                                </div>
                                <div className="md:border-l border-orange-300 flex-1 p-2 text-center overflow-hidden flex flex-col gap-4 justify-center items-center">
                                    <p className={clsx(inView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0", "transition-all duration-1500 ease-in-out  text-xl")}>The real estate and construction industries are just a few of the industries we service to generate quality videos and imaging for logistical and marketing needs.</p>
                                    {/* <button className="p-2 bg-orange-300 text-black rounded-lg">Learn More</button> */}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Section>
            <Section className="h-full mb-24">
                <div className="flex justify-center">
                    <h2 className={clsx(BLACK.className, "uppercase text-6xl")}>Contact</h2>
                </div>
                <div className="flex flex-col md:flex-row h-full">
                    <div className="flex flex-3 flex-col items-center md:items-end justify-center">
                        <div className="flex gap-2 items-center">
                            <FaPhone />
                            <p className={clsx(BLACK.className)}>786-868-8452</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaEnvelope />
                            <p className={clsx(BLACK.className)}>theplaygroundmedia@outlook.com</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaInstagram />
                            <p className={clsx(BLACK.className)}>theplaygroundmedia</p>
                        </div>
                    </div>
                    <div className="p-4 flex-4 flex items-center justify-start">
                        <div className="">
                            <Contact />
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

const Section = ({ children, ...props }) => {
    const body = useRef<HTMLElement>()
    const [ref, inView] = useInView({ once: true, amount: .4, root: body })

    useEffect(() => {
        body.current = document.body
    }, [])
    return (
        <section ref={ref} {...props}>
            {typeof children === "function" ? children(inView) : children}
        </section>
    )
}


export default Page