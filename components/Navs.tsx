import React from 'react'
import Link from "next/link";
import { FaInstagram } from "react-icons/fa"
import clsx from 'clsx';
import localFont from 'next/font/local';
type Props = {
    onClick?: () => void
}

const BLACK = localFont({
    src: '..//public/fonts/Lato-Black.ttf',
})

const Navs = ({ onClick }: Props) => {
    return (
        <nav>
            <ul className='gap-6' style={{ display: "flex", alignItems: "center", flexWrap: "initial", listStyleType: "none" }}>
                <li className={BLACK.className}><Link href='/' className={clsx("px-1 text-orange-300 text-xs ")}>THE PLAYGROUND</Link></li>
                <li><Link href='/about' className=" px-1">About</Link></li>
                {/* <li><Link href='/work' className="button px-1">Work</Link></li> */}
                <li><Link href='/contact' className=" px-1">Contact</Link></li>
                {/* <li><Link href='/blog' className="button px-1">Blog</Link></li> */}
                <li><Link href='https://instagram.com/theplaygroundmedia' target='_blank' className=" px-1"><FaInstagram /></Link></li>
            </ul>
        </nav>
    )
}

export default Navs