"use client"

import { animated, useSpring, useSprings } from '@react-spring/web'
import useWindowWidth from '../hooks/useWindowWidth'

type Props = {}

const StaggeredDrop = ({
    items
}) => {
    const windowWidth = useWindowWidth();

    const [springs, api] = useSprings(items.length, (i) => ({
        from: { y: -550 },
        to: { y: windowWidth < 768 ? (25 * i) * -1 : 0 },
        delay: 750 * i
    }), [windowWidth])

    return springs.map((props, i: number) => (
        <animated.div style={{ ...props }} className='relative' key={i}>{items[i]}</animated.div>
    ))
}

export default StaggeredDrop