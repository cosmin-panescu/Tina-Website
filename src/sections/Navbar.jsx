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
            className="w-full text-center transition duration-300 hover:opacity-70"
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
            <div className="flex items-center justify-between w-5/6 mx-auto">
                <h4 className="text-3xl font-bold font-playfair">TM</h4>

                {/* Desktop navbar */}
                {isAboveSmallScreen ? (
                    <div className="flex justify-between gap-12 font-semibold font-opensans text-md">
                        <Link page="Home" />
                        <Link page="About" />
                        <Link page="Skills" />
                        <Link page="Projects" />
                        <Link page="Contact" />
                    </div>
                ) : (
                    <button
                        className='p-2 transition duration-500 rounded-full bg-red hover:rotate-180'
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <img alt="menu-icon" src={MenuIcon} />
                    </button>
                )}

                {/* Mobile navbar */}
                {(!isAboveSmallScreen && isMenuToggled) && (
                    <div className="fixed right-0 bottom-0 h-full bg-red w-[300px]">
                        {/* Close menu */}
                        <div className="flex justify-end p-12">
                            <button
                                className='transition duration-500 hover:rotate-180'
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <img src={CloseIcon} alt="close" />
                            </button>
                        </div>
                        {/* Menu links */}
                        <div
                            className="flex flex-col gap-10 mt-24 text-2xl font-semibold"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Link page="Home" />
                            <Link page="About" />
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