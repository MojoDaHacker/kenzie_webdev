import Image from "next/image"
import Link from "next/link"
import StaggeredDrop from "../../components/animations/StaggeredDrop"

type Props = {}

const page = (props: Props) => {
    return (
        <div className="text-2xl h-full">
            <div className="h-full">
                <div className="p-4 min-h-[75vh] flex flex-col justify-around">
                    <h1 className="text-6xl md:text-center">Are your first impressions a bit <span className="italic">off</span> ?</h1>
                    {/* <Image width={1080} height={1080} src={"/headshots/1-.png"} alt="" className="w-1/2 mx-auto"/> */}
                    <div className="p-2 overflow-hidden flex flex-col md:flex-row">
                        <StaggeredDrop items={[
                            <Image width={1080} height={1080} src={"/headshots/7-.png"} alt="" className="w-1/2 mx-auto" />,
                            <Image width={1080} height={1080} src={"/headshots/8-.png"} alt="" className="w-1/2 mx-auto" />,
                            <Image width={1080} height={1080} src={"/headshots/9-.png"} alt="" className="w-1/2 mx-auto" />,
                        ]} />
                    </div>
                </div>
            </div>

            <div className="h-124 flex items-center justify-center relative mb-36">
                <Image src="/quotes.png" width={250} height={250} alt="" className="absolute top-0 left-0 size-12 m-4" />
                <Image src="/quotes.png" width={250} height={250} alt="" className="absolute bottom-0 right-0 rotate-180 size-12 m-4" />
                <p className="text-3xl text-center p-3 md:w-3/4 font-semibold">
                    Professional headshots create a powerful first impression,
                    boosting credibility, and strengthening your personal brand
                    by projecting confidence, competence, and approachability.
                </p>
            </div>

            <div>
                <h2 className="text-3xl w-3/4 mx-auto font-semibold">For the moments you need to be</h2>

                <div className="p-4 text-center flex flex-col gap-4">
                    <Image width={1080} height={1080} src={"/headshots/4-.png"} alt="" className="w-1/2 md:w-1/3 mx-auto" />
                    <p>Charismatic and Charming</p>
                </div>

                <div className="p-4 text-center flex flex-col gap-4">
                    <Image width={1080} height={1080} src={"/headshots/3-.png"} alt="" className="w-1/2 md:w-1/3 mx-auto" />
                    <p>Serious and Determined</p>
                </div>

                <div className="p-4 text-center flex flex-col gap-4">
                    <Image width={1080} height={1080} src={"/headshots/5-.png"} alt="" className="w-1/2 md:w-1/3 mx-auto" />
                    <p>Fresh and Aspiring</p>
                </div>
            </div>

            <div className="bg-orange-300 text-black h-[75vh] flex justify-center items-center font-bold">
                <h2 className="text-4xl p-4 bg-[url(/speckle.jpg)] bg-clip-text text-transparent md:w-3/4 md:text-center">
                    A professional headshot is a vital tool
                    for modern career development, helping
                    you make that crucial connection before
                    a single word is spoken.
                </h2>
            </div>
            <div>
                <Image width={1296} height={1296} src={"/studio.jpg"} alt="" className="h-100 md:h-148 object-cover" />
                <div className="p-4">
                    <p className="my-2">
                        At The Playground we offer video production and digital services to small businesses in and around phoenix.
                    </p>
                    <p className="my-2">
                        In a time where the best place to engage with your target audience is through a screen, we tailor our services to
                        be seamlessly integrated into your business’s workflow, to build a foundation that will yield consistent and stable results.
                    </p>
                </div>
            </div>
            <div className="p-4">
                <p className="text-center">Contact us today and receive a headshot that best represents you.</p>

                <div className="text-center p-2 mt-2">
                    <Link href="/contact"><button className='p-2 bg-orange-300 text-white rounded-lg'>Contact Us</button></Link>
                </div>
            </div>

        </div>
    )
}

export default page