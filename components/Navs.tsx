import React from 'react'
import Link from "next/link";
import { FaInstagram } from "react-icons/fa"
type Props = {
    onClick?: () => void
}

const Navs = ({ onClick }: Props) => {
    return (
        <nav>
            <ul style={{ display: "flex", alignItems: "center", flexWrap: "initial", listStyleType: "none" }}>
                <li style={{ marginLeft: "8px" }}><Link href='/about' className="button">About</Link></li>
                <li style={{ marginLeft: "8px" }}><Link href='https://instagram.com/a_waitinggreatness' className="button"><FaInstagram /></Link></li>
            </ul>
        </nav>
    )
}

export default Navs