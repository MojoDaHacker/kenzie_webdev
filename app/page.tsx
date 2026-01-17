"use client"

import Image from "next/image"
import Contact from "../components/forms/Contact"
import StackedCards from "../components/animations/StackedCards"
import clsx from "clsx"
import localFont from "next/font/local"
import { useEffect, useState } from "react"
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

type Props = {}

const Page = (props: Props) => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 4000);
    }, [])
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
            <section className="relative mb-24">
                <div className="hidden md:block">
                    <div className="absolute top-40">
                        <h2 className={clsx(BLACK.className, "-rotate-90 uppercase text-6xl")}>Services</h2>
                    </div>
                    <StackedCards />
                </div>
                <div className="md:hidden block">
                    <div className="m-4">
                        <h2 className={clsx(BLACK.className, "uppercase text-4xl")}>Services</h2>
                    </div>
                    <div className="flex flex-col justify-center p-4 gap-12">
                        <div className={clsx(show ? "translate-x-0" : "translate-x-full", "transition-all duration-1250")}>
                            <div className=" h-18 w-4/5 ml-auto rounded-lg p-2 box-content flex gap-4 items-center">
                                <div style={{ backgroundImage: `url(${bg1.src})` }} className="w-full h-24 rounded-xl border bg-cover overflow-hidden">
                                    <div className="relative top-full -left-2 bg-black border border-orange-300 skew-x-24 w-fit px-4 -translate-y-full">
                                        <p className="text-sm -skew-x-24">Studio Photography</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={clsx(show ? "translate-x-0" : "-translate-x-full", "transition-all duration-1250")}>
                            <div className=" h-18 w-4/5 rounded-lg p-2 box-content flex gap-4 items-center">
                                <div style={{ backgroundImage: `url(${bg2.src})` }} className="w-full h-24 rounded-xl border bg-cover overflow-hidden">
                                    <div className="relative top-full -left-2 bg-black border border-orange-300 skew-x-24 w-fit px-4 -translate-y-full">
                                        <p className="text-sm -skew-x-24">Video & Audio Production</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={clsx(show ? "translate-x-0" : "translate-x-full", "transition-all duration-1250")}>
                            <div className="h-18 w-4/5 ml-auto rounded-lg p-2 box-content flex gap-4 items-center">
                                <div style={{ backgroundImage: `url(${bg3.src})` }} className="w-full h-24 rounded-xl border bg-cover overflow-hidden">
                                    <div className="relative top-full -left-2 bg-black border border-orange-300 skew-x-24 w-fit px-4 -translate-y-full">
                                        <p className="text-sm -skew-x-24">Aerial Photography & Videography</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={clsx(show ? "translate-x-0" : "-translate-x-full", "transition-all duration-1250")}>
                            <div className=" h-18 w-4/5 rounded-lg p-2 box-content flex gap-4 items-center">
                                <div style={{ backgroundImage: `url(${bg4.src})` }} className="w-full h-24 rounded-xl border bg-cover overflow-hidden">
                                    <div className="relative top-full -left-2 bg-black border border-orange-300 skew-x-24 w-fit px-4 -translate-y-full">
                                        <p className="text-sm -skew-x-24">Mobile & Web Development</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="h-full flex flex-col justify-center items-center">
                <div className="relative w-3/4 h-3/4">
                    <div style={{ top: "25%", left: "85%" }} className="rounded-lg overflow-hidden absolute transition-transform z-1 -translate-1/2 w-72  bg-black">
                        <div className="p-4 h-full flex items-center justify-center">
                            <h2>Services</h2>
                        </div>
                    </div>
                    <div style={{ top: "50%", left: "80%" }} className="rounded-lg overflow-hidden absolute transition-transform z-2 -translate-1/2 w-115 bg-black aspect-video border border-zinc-400">
                        <div className="flex justify-center items-center h-full p-4">
                            <p className="text-center italic">Great service, and innovative delivery to accommodate our operations. Definitely a long term partner for our media needs.</p>
                        </div>
                    </div>
                    <div style={{ top: "65%", left: "47%" }} className="rounded-lg overflow-hidden absolute transition-transform z-5 -translate-1/2 w-72 bg-black aspect-square border border-zinc-400">
                        <Image src="/drone.jpg" alt="drone" width="1080" height="1080" />
                    </div>
                    <div style={{ top: "75%", left: "75%" }} className="rounded-lg object-cover overflow-hidden absolute transition-transform z-6 -translate-1/2 w-86 bg-black aspect-4/3 border border-zinc-400">
                        <Image src="/coding.jpg" alt="coding" className="object-cover. h-full" width="1080" height="1080" />
                    </div>
                    <div style={{ top: "25%", left: "50%" }} className="rounded-lg overflow-hidden absolute transition-transform z-3 -translate-x-1/2 -translate-y-1/2 w-115 bg-black aspect-video border-2 border-zinc-400">
                        <div className="size-full">
                            <video width="320" src="/realestatepromo.mp4" height="240" controls preload="none" autoPlay muted className="w-full h-full object-cover">
                                <source src="/realestatepromo.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div style={{ top: "50%", left: "16%" }} className="rounded-lg overflow-hidden absolute transition-transform z-4 -translate-1/2 w-96 bg-black aspect-4/5 border-2 border-zinc-200">
                        <Image src="/podcast.jpg" alt="Podcast" width="1080" height="1080" />
                    </div>
                </div>
            </div> */}
            </section>
            <section className="min-h-full md:h-full flex mb-24 flex-col overflow-hidden p-2">
                <div className="flex flex-1 justify-end">
                    <h2 className={clsx(BLACK.className, "uppercase text-6xl px-4")}>About</h2>
                </div>
                <div className="hidden md:flex h-full justify-around gap-8 px-8 overflow-hidden">
                    <div className={clsx(show ? " translate-y-0 opacity-100" : " translate-y-full opacity-0", "border flex-4 h-full relative overflow-hidden transition-all duration-1500 ease-in-out")}>
                        <Image className=" h-full" src="/work.jpg" alt={""} width={1080} height={1080} />
                    </div>
                    <div className="flex-3 flex flex-col h-full overflow-hidden">
                        <div className="border-r border-b border-orange-300 flex-1 p-2 text-center overflow-hidden flex flex-col gap-4 justify-center items-center" >
                            <p className={clsx(show ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0", "transition-all duration-1500 ease-in-out  text-xl")}>The Playground is a Phoenix-based digital video production and website development firm, focused on providing an honest and higher quality of service.</p>
                            <button className="p-2 bg-orange-300 text-black rounded-lg">Learn More</button>
                        </div>
                        <div className="border-l border-orange-300 flex-1 p-2 text-center overflow-hidden flex flex-col gap-4 justify-center items-center">
                            <p className={clsx(show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0", "transition-all duration-1500 ease-in-out  text-xl")}>The real estate and construction industries are just a few of the industries we service to generate quality videos and imaging for logistical and marketing needs.</p>
                            <button className="p-2 bg-orange-300 text-black rounded-lg">Learn More</button>
                        </div>
                    </div>
                    <div className={clsx(show ? " translate-y-0 opacity-100" : " translate-y-full opacity-0", "border flex-4 h-full relative overflow-hidden transition-all duration-1500 ease-in-out")}>
                        <Image className="" src="/lens.jpg" alt={""} width={1080} height={1080} />
                    </div>
                </div>
                <div className="md:hidden">
                    <div>
                        <Image className="" src="/work.jpg" alt={""} width={1080} height={1080} />
                        <div className="md:border-r md:border-b border-orange-300 flex-1 p-2 text-center overflow-hidden flex flex-col gap-4 justify-center items-center" >
                            <p className={clsx(show ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0", "transition-all duration-1500 ease-in-out  text-xl")}>The Playground is a Phoenix-based digital video production and website development firm, focused on providing an honest and higher quality of service.</p>
                            <button className="p-2 bg-orange-300 text-black rounded-lg">Learn More</button>
                        </div>
                    </div>
                    <div>
                        <div className="p-4 md:p-0">
                            <Image className="" src="/lens.jpg" alt={""} width={1080} height={1080} />
                        </div>
                        <div className="md:border-l border-orange-300 flex-1 p-2 text-center overflow-hidden flex flex-col gap-4 justify-center items-center">
                            <p className={clsx(show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0", "transition-all duration-1500 ease-in-out  text-xl")}>The real estate and construction industries are just a few of the industries we service to generate quality videos and imaging for logistical and marketing needs.</p>
                            <button className="p-2 bg-orange-300 text-black rounded-lg">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="h-full mb-24">
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
            </section>
        </div>
    )
}


export default Page