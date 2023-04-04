import React from 'react'
import SocialMedia from '../components/SocialMedia'

const Footer = () => {
    return (
        <footer className='h-64 bg-red pt-10'>
            <div className="w-5/6 mx-auto flex flex-col items-center">
                <p className='font-playfair font-semibold text-2xl text-yellow'>TINA MESAROS</p>
                <SocialMedia />
                <p className='font-playfair text-md text-yellow'>&copy; 2023 TINA. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer