import React from 'react'
import './index.scss'

function Card({url, name}) {
    return (
        <div className='card'>
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
