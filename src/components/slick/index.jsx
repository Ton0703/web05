import React, { useEffect, useState } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './index.scss'

const items = [
    { id: 0, url: '/image/1.jpg' },
    { id: 1, url: '/image/2.jpg' },
    { id: 2, url: '/image/3.jpg' }
]

function Slick() {
    const [index, setIndex] = useState(0)
    const transitions = useTransition(items[index], item => item.id, {
        from: {opacity: 0},
        enter: {opacity:1},
        leave: {opacity: 0},
        config: config.molasses
    })
    useEffect(() => {
        setInterval(() => {
            setIndex(index => (index + 1) % 3)
        }, 3000)
    }, [])
    return transitions.map(({item, props, key}) => (
        <animated.div
            key={key}
            className='bg'
            style={{...props, backgroundImage: `url(${item.url})`}}
        />
    ))
}

export default Slick
