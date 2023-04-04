// Hooks
import React, { useRef } from 'react'
// Components
import LineGradient from '../components/LineGradient'
// Framer Motion
import { motion } from 'framer-motion'
// Email send
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    // Contact - send emails
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bj06yay', 'template_kl6tg1s', form.current, 'V43Qov6xkddVFF9UY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id="contact" className='pt-10'>
            {/* Header */}
            <motion.div
                className="md:flex md:justify-center md:flex-col md:items-center mt-32 mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.55 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <p className='font-playfair font-semibold text-4xl mb-5'>
                    Contact <span className='text-red'>Me</span>
                </p>
                <LineGradient width='w-2/3 xs:w-1/3 sm:w-1/4' />
            </motion.div>

            {/* Form */}
            <div className="flex justify-center items-center gap-16 mb-16">
                <motion.div
                    className='w-full xs:w-4/5 md:w-3/5 mt-10 md:mt-0'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className='flex flex-col justify-center items-center'
                    >
                        {/* NAME */}
                        <input
                            className='input'
                            type="text"
                            placeholder='Name'
                            name='name'
                        />
                        {/* EMAIL */}
                        <input
                            className='input'
                            type="text"
                            placeholder='Email'
                            name='email'
                        />
                        {/* MESSAGE */}
                        <textarea
                            className='input'
                            type="text"
                            rows="4"
                            cols="50"
                            name="message"
                            placeholder='Enter you message ^^'
                        />
                        {/* SUBMIT BUTTON */}
                        <button
                            type='submit'
                            className='custom-btn mt-5'
                        >
                            <span className="text">Send Message</span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact