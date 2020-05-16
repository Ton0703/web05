import React from 'react'
import useOnScreen from '../../hook/useOnScreen'
import './index.scss'

function Card({url, name}) {
    const [ref, visible] = useOnScreen({ threshold: 0.5 });
    return (
        <div className={`card ${visible? 'active': ''}`} ref={ref}>
            <div className="left">
                <img src={url} alt='' />
            </div>
            <div className="right">
                <div className="name">
                    <span>
                        {name}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card
