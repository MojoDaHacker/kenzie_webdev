import React from 'react'
import Image from 'next/image'
import CallToAction from '../../components/CallToAction'

type Props = {}

const Page = (props: Props) => {
    return (
        <div className='w-full h-full p-12'>
            <div className='w-1/2 h-1/2 relative mx-auto'>
                <Image
                    className='w-full h-full'
                    src={"/headshot.png"}
                    alt="headshot of Matthew McKenzie"
                    fill
                    objectFit='contain'
                />
            </div>
            <article className='w-full md:w-3/4  mx-auto mt-12'>
                <div className='mb-4 text-center'>
                    <p>Welcome to my corner of the skies! I'm Matthew McKenzie, a passionate drone videographer dedicated to capturing the world from a unique perspective. My journey into drone videography began with a fascination for the art of storytelling and the boundless possibilities offered by aerial views. Today, I combine cutting-edge technology with a creative vision to bring you stunning, cinematic content.</p>
                </div>
                {/* <div className='mb-4'>
                    <h1>My Mission</h1>
                    <p>My mission is to transform ordinary moments into extraordinary visual experiences. Whether you're looking to showcase your property, capture the essence of an event, or create a breathtaking promotional video, I'm here to deliver high-quality, cinematic footage that will leave a lasting impression.</p>

                </div> */}
                {/* <div className='mb-4'>
                    <h1>What Sets Me Apart</h1>
                    <ol>
                        <li className=''><p>Creative Vision</p><p className='mb-2'>Every project is an opportunity to push the boundaries of creativity. I take pride in designing unique shots and sequences that highlight the beauty and narrative of your subject.</p></li>
                        <li className=''><p>Professional Equipment</p><p className='mb-2'>Equipped with the latest drone technology, I ensure that every frame is captured with impeccable clarity and precision. My drones are capable of shooting in 4K resolution and beyond, providing stunning visuals and smooth, cinematic footage.</p></li>
                        <li className=''><p>Attention to Detail</p> <p className='mb-2'>From pre-flight planning to post-production editing, I meticulously manage every aspect of the process. This ensures that your video is not only visually captivating but also perfectly aligned with your vision and goals.</p></li>
                        <li className=''><p>Experience & Expertise</p><p className='mb-2'>With years of experience in drone videography, I bring a deep understanding of aerial cinematography techniques and regulations. Your project is in safe hands, and you can trust me to deliver exceptional results.</p></li>
                    </ol>
                </div> */}
                <div className='mb-4 text-base'>
                    <h1 className=''>My Services</h1>
                    <ul className='w-4/5  mx-auto list-decimal'>
                        <li><p>Real Estate Videos</p> <p className='pl-2 italic antialiased mb-2'>Showcase properties from an aerial perspective, highlighting their features and surroundings.</p></li>
                        <li><p>Event Coverage</p> <p className='pl-2 italic antialiased mb-2'>Capture the excitement and scale of weddings, festivals, and corporate events with dynamic aerial shots.</p></li>
                        <li><p>Promotional Videos</p> <p className='pl-2 italic antialiased  mb-2'>Create compelling marketing content for businesses, products, or services that stands out and engages your audience.</p></li>
                        <li><p>Creative Projects</p> <p className='pl-2 italic antialiased  mb-2'>Collaborate on artistic and innovative projects that require a fresh, aerial approach.</p></li>
                    </ul>
                </div>
                <div className='mb-4'>
                    <div className='text-center mb-3'>
                        <h1>Let's Get Started</h1>
                        <p>I'm excited to work with you and bring your vision to life. Whether you have a specific idea in mind or need guidance to conceptualize your project, feel free to reach out. Let's elevate your content to new heights!</p>
                    </div>
                    {/* <div>
                        <p>[Your Contact Information]</p>
                        <p>[Social Media Links]</p>
                        <p>Thank you for visiting, and I look forward to creating something extraordinary together!</p>

                    </div> */}
                </div>


            </article>
            <CallToAction />
        </div>
    )
}

export default Page