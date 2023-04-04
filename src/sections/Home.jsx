// Hooks
import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
// Framer Motion
import { motion } from 'framer-motion'
// Link scroll
import AnchorLink from 'react-anchor-link-smooth-scroll'
import SocialMedia from '../components/SocialMedia'
// Assets
import ProfileImage from '../assets/profile-image.png'

const Home = () => {
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="home" className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'>
            {/* IMAGE */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreen ? (
                    <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
                        <img
                            className='hover:filter hover:saturate-200 transition duration-300 z-10 w-full max-w-[300px] md:max-w-[400px]'
                            src={ProfileImage}
                            alt="profile picture"
                        />
                    </div>
                ) : (
                    <img
                            className='hover:filter hover:saturate-200 transition duration-300 z-10 w-full max-w-[200px] sm:max-w-[300px]'
                        src={ProfileImage}
                        alt="profile picture"
                    />
                )}
            </div>

            {/* CONTECT */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
                {/* text */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.75 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <h3 className='text-5xl md:text-6xl font-playfair z-10 text-center md:text-start'>
                        Tina Mesaros
                    </h3>
                    <p className='mt-4 sm:mt-10 mb-7 text-md text-center md:text-start'>
                        Lorem Possimus suscipit voluptatibus nisi? Sit voluptatem similique cumque sequi asperiores!
                    </p>
                </motion.div>

                {/* buttons */}
                <motion.div
                    className='flex mt-5 justify-center md:justify-start'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.75 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <AnchorLink
                        // className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-bue hover:text-white transition duration-500'
                        className='home-btn'
                        href='#contact'
                    >
                        <button className='custom-btn'>
                            <span className="text">Contact Me</span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                        </button>
                    </AnchorLink>
                </motion.div>

                {/* socials */}
                <motion.div
                    className='flex mt-5 justify-center md:justify-start'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.75 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <SocialMedia />
                </motion.div>
            </div>
        </section >
    )
}

export default Home