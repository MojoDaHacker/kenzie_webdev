'use client'

import { usePathname, useRouter } from 'next/navigation';
import { IconContext } from 'react-icons';
import { MdOutlineArrowBack } from 'react-icons/md';

type Props = {}

const Back = (props: Props) => {
    const path = usePathname()
    const router = useRouter();
    return (
        <IconContext.Provider value={{ size : "36" }}>
            {path != "/" && <div style={{ position: "absolute", zIndex: 10, margin: "16px" }}><button onClick={router.back}><MdOutlineArrowBack /></button></div>}
        </IconContext.Provider>
    )
}

export default Back