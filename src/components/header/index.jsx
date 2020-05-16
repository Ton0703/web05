import React from 'react'
import './index.scss'

function Header() {
    return (
        <div className='header'>
            <div className="logo">Logo</div>
            <div className="menu">
                <ul>
                    <li>news</li>
                    <li>about</li>
                    <li>repair</li>
                    <li>collection</li>
                    <li>conatct</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
