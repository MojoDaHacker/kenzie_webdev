import Image from "next/image"
import Contact from "../components/forms/Contact"

type Props = {}

const Page = (props: Props) =>
    <div className="h-full">
        <section className="min-h-full flex items-end border-b">
            <h1 className="uppercase text-9xl">The<br />Play<br />Ground<br />Media</h1>
            {/* <p className="justify-self-end w-full">A bit cliche, we know...</p> */}
        </section>
        <section className="h-full">
            <div className="h-full flex flex-col justify-center items-center">
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
                        {/* <Image src="/drone.jpg" alt="drone" width="1080" height="1080" /> */}
                        <div className="size-full">
                            <video width="320" src="/realestatepromo.mp4" height="240" controls preload="none" autoPlay muted className="w-full h-full object-cover">
                                <source src="/realestatepromo.mp4" type="video/mp4" />
                                {/* <track
                                    src="/path/to/captions.vtt"
                                    kind="subtitles"
                                    srcLang="en"
                                    label="English"
                                /> */}
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div style={{ top: "50%", left: "16%" }} className="rounded-lg overflow-hidden absolute transition-transform z-4 -translate-1/2 w-96 bg-black aspect-4/5 border-2 border-zinc-200">
                        <Image src="/podcast.jpg" alt="Podcast" width="1080" height="1080" />
                    </div>
                </div>
            </div>
        </section>
        <section className="h-full">
            <div className="h-3/4 flex justify-around gap-8 px-8">
                <div className="border flex-4"></div>
                <div className="border flex-3"></div>
                <div className="border flex-4"></div>
            </div>
        </section>
        <section className="h-full">
            <div className="flex h-full">
                <div className="self-end">
                    <p className="text-9xl">
                        786<br />
                        868<br />
                        8452<br />
                    </p>
                </div>
                <div className="p-4 flex-1 flex items-center justify-center">
                    <div className="w-1/2">
                        <p>call us</p>
                        <Contact />

                    </div>
                </div>
            </div>
        </section>
    </div>


export default Page