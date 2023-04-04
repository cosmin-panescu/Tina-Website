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
                className="md:flex md:justify-center md:flex-col md:items-center mt-32"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.75 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <p className='font-playfair font-semibold text-4xl mb-5'>
                    My <span className='text-red'>Skills</span>
                </p>
                <LineGradient width='w-2/3 xs:w-1/3 sm:w-1/4' />
            </motion.div>

            {/* Skills */}
            <div className="md:flex md:justify-evenly mt-16 gap-32">
                <motion.div
                    className='md:w-1/3 mt-10'
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
                            <p className='font-playfair font-semibold text-5xl'>01</p>
                            <p className='font-playfair font-semibold text-4xl mt-3'>Graphic Design</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 rounded-full bg-blue absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className='mt-5'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, ab amet. Quas et exercitationem libero commodi facilis cupiditate architecto!
                    </p>
                </motion.div>
                <motion.div
                    className='md:w-1/3 mt-10'
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
                            <p className='font-playfair font-semibold text-5xl'>02</p>
                            <p className='font-playfair font-semibold text-4xl mt-3'>Management</p>
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