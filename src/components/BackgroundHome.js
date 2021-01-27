import React from 'react'
import src from '../assets/homeBackground.jpg'

export default function BackgroundHome() {
    return (
        <div className='background'>
            <img className='fit-cover' src={src} />
        </div>
    )
}
