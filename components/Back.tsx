'use client'

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { IconContext } from 'react-icons';
import { MdOutlineArrowBack } from 'react-icons/md';

type Props = {}

const Back = (props: Props) => {
    const path = usePathname()
    const router = useRouter();
    return path != "/" && <Link href="/"><button className='p-4'><MdOutlineArrowBack size={24} /></button></Link>
}

export default Back