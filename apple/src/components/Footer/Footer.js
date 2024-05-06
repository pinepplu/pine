import React from 'react'
import './Footer.css'
import Logo from '../../logos/caramelized-apple-svgrepo-com.png'
// import { StarFour, Sparkle, ShootingStar, StarHalf, MoonStars, Star } from '@phosphor-icons/react';
import { FacebookLogo, DiscordLogo, XLogo, InstagramLogo } from '@phosphor-icons/react'

function Footer() {
    return (
        <div className='footer-container'>
            {/* <button className='star-btn'>
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
                </button> */}
            <div>
                <img src={Logo} alt='logo' className='footer-logo' />
                <strong className='logo-text'>PINE</strong>
            </div>
            <ul className='socials'>FIND US ON SOCIAL MEDIA
                <li><FacebookLogo size={32} /></li>
                <li><DiscordLogo size={32} /></li>
                <li><XLogo size={32} /></li>
                <li><InstagramLogo size={32} /></li>
            </ul>

            <ul className='contact'>
                <li>OPEN Monday - Friday</li>
                <li>10 A.M. - 5 P.M.</li>
            </ul>
        </div>
    )
}

export default Footer