import React from 'react'
import Link from "next/link";
import { FaInstagram } from "react-icons/fa"
type Props = {
    onClick?: () => void
}

const Navs = ({ onClick }: Props) => {
    return (
        <nav>
            <ul className='gap-6' style={{ display: "flex", alignItems: "center", flexWrap: "initial", listStyleType: "none" }}>
                <li><Link href='/about' className="button px-1">About</Link></li>
                {/* <li><Link href='/work' className="button px-1">Work</Link></li> */}
                <li><Link href='/contact' className="button px-1">Contact</Link></li>
                {/* <li><Link href='/blog' className="button px-1">Blog</Link></li> */}
                <li><Link href='https://instagram.com/theplaygroundmedia' target='_blank' className="button px-1"><FaInstagram /></Link></li>
            </ul>
        </nav>
    )
}

export default Navs