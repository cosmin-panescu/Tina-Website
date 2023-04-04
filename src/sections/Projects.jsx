// React
import { motion } from 'framer-motion'
// Framer Motion
import React from 'react'
// Components
import LineGradient from '../components/LineGradient'
// data
import { projectsData } from '../utils/projectsData';

// framer motion animation for projects container
const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

// framer motion animation for each project
const projectsVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}

const Projects = () => {
    return (
        <section id="projects" className='pb-48 pt-10'>
            {/* Header */}
            <motion.div
                className="md:flex md:justify-center md:flex-col md:items-center mt-32 mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.75 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <p className='font-playfair font-semibold text-4xl mb-5'>
                    My <span className='text-red'>Projects</span>
                </p>
                <LineGradient width='w-2/3 xs:w-1/3 sm:w-1/4' />
            </motion.div>

            {/* Projects */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={container}
                >
                    <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                        BEAUTIFUL USER INTERFACES
                    </div>
                    {/* render each project */}
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            className='relative'
                            variants={projectsVariant}
                        >
                            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-6 sm:p-4 md:p-10 text-deep-blue">
                                <p className='text-xl xs:text-2xl sm:text-lg md:text-2xl font-playfair'>
                                    {project.title}
                                </p>
                                <p className='mt-4 text-md sm:text-sm md:text-lg'>
                                    {project.description}
                                </p>
                            </div>
                            <img src={project.img} alt={project.title} />
                        </motion.div>
                    ))}
                    <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                        SMOOTH USER EXPERIENCE
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects