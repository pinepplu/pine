import React from 'react'
import './Footer.css'
import { StarFour, Sparkle, ShootingStar, StarHalf, MoonStars, Star } from '@phosphor-icons/react';

function Footer() {
    return (
        <div className='footer-container'>
                <button className='star-btn'>
                    Button
                    <div className='star-1'>
                        <StarFour />
                    </div>
                    <div className='star-2'>
                        <Sparkle />
                    </div>
                    <div className='star-3'>
                        <ShootingStar />
                    </div>
                    <div className='star-4'>
                        <StarHalf />
                    </div>
                    <div className='star-5'>
                        <MoonStars />
                    </div>
                    <div className='star-6'>
                        <Star />
                    </div>
                </button>

            <div className='content'>
                Footer content
            </div>
        </div>
    )
}

export default Footer