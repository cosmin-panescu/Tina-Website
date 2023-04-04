// React
import { motion } from 'framer-motion'
// Framer Motion
import React from 'react'
// Components
import LineGradient from '../components/LineGradient'

const About = () => {
  return (
    <section id="about" className='py-10'>
      {/* Header */}
      <motion.div
        className="mt-32 md:flex md:justify-center md:flex-col md:items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }}
      >
        <p className='mb-5 text-4xl font-semibold font-playfair'>
          About <span className='text-red'>Me</span>
        </p>
        <LineGradient width='w-2/3 xs:w-1/3 sm:w-1/4' />
      </motion.div>
      {/* Content */}
      <div className="flex flex-col items-center">
        {/* Description */}
        <p className='mt-16 text-center xs:w-full sm:w-2/3 md:mt-24 md:w-1/2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloribus repudiandae at consequuntur. Accusamus illo mollitia sint? Rem, saepe et? Lorem ipsum, dolor sit amet consectetur adipisicing elit. At impedit ab, voluptatibus doloribus blanditiis placeat magni qui dolor voluptas molestiae. Impedit laboriosam veniam exercitationem eos, dolorem ipsum neque ad non. Autem, ea quas in sed quasi quibusdam nam ipsam cum corporis vel aliquam? Ipsam veniam, eius quasi modi vero impedit?</p>
        {/* Download CV button */}
        <button
          type='submit'
          className='mt-16 custom-btn'
        >
          <span className="text">Download CV</span>
          <span className="blob"></span>
          <span className="blob"></span>
          <span className="blob"></span>
          <span className="blob"></span>
        </button>
      </div>
    </section>
  )
}

export default About