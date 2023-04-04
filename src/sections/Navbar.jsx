// Hooks
import React, { useState } from 'react'
import useMediaQuery from '../hooks/useMediaQuery';
// Link scroll
import AnchorLink from 'react-anchor-link-smooth-scroll';
// Assets
import MenuIcon from '../assets/menu-icon.svg'
import CloseIcon from '../assets/close-icon.svg'

const Link = ({ page }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className="hover:opacity-80 transition duration-300"
            href={`#${lowerCasePage}`}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({ isTop }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTop ? "" : "bg-red";

    return (
        <nav className={`${navbarBackground} transition duration-700 z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">TM</h4>

                {/* Desktop navbar */}
                {isAboveSmallScreen ? (
                    <div className="flex justify-between gap-12 font-opensans text-md font-semibold">
                        <Link page="Home" />
                        <Link page="Skills" />
                        <Link page="Projects" />
                        <Link page="Contact" />
                    </div>
                ) : (
                    <button
                        className='rounded-full bg-red p-2'
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                            <img alt="menu-icon" src={MenuIcon} />
                    </button>
                )}

                {/* Mobile navbar */}
                {(!isAboveSmallScreen && isMenuToggled) && (
                    <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                        {/* Close menu */}
                        <div className="flex justify-end p-12">
                            <button
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <img src={CloseIcon} alt="close" />
                            </button>
                        </div>
                        {/* Menu links */}
                        <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                            <Link page="Home" />
                            <Link page="Skills" />
                            <Link page="Projects" />
                            <Link page="Contact" />
                        </div>
                    </div>
                )}

            </div>
        </nav >
    )
}

export default Navbar