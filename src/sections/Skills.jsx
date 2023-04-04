// React
import React from 'react'
// Hooks
import useMediaQuery from '../hooks/useMediaQuery'
// Framer Motion
import { motion } from 'framer-motion';
// Components
import LineGradient from '../components/LineGradient';

const Skills = () => {
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

    return (
        <section id='skills' className='pt-10 pb-24'>
            {/* Header */}
            <motion.div
                className="mt-32 md:flex md:justify-center md:flex-col md:items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.75 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <p className='mb-5 text-4xl font-semibold font-playfair'>
                    My <span className='text-red'>Skills</span>
                </p>
                <LineGradient width='w-2/3 xs:w-1/3 sm:w-1/4' />
            </motion.div>

            {/* Skills */}
            <div className="flex flex-col gap-12 mt-20 md:gap-0 md:flex-row md:justify-around">
                <motion.div
                    className='mt-10 md:w-1/3'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.75 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className='text-5xl font-semibold font-playfair'>01</p>
                            <p className='mt-3 text-4xl font-semibold font-playfair'>Graphic Design</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 rounded-full bg-blue absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className='mt-5'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, ab amet. Quas et exercitationem libero commodi facilis cupiditate architecto!
                    </p>
                </motion.div>
                <motion.div
                    className='mt-10 md:w-1/3'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.75 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className='text-5xl font-semibold font-playfair'>02</p>
                            <p className='mt-3 text-4xl font-semibold font-playfair'>Management</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 rounded-sm bg-red absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className='mt-5'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, ab amet. Quas et exercitationem libero commodi facilis cupiditate architecto!
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills