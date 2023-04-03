import React from 'react'

const SocialMedia = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
      className='hover:opacity-50 transition duration-500'
        target='_blank'
        href="https://www.linkedin.com"
        rel='norefference'
      >
        <img src="/assets/linkedin.png" alt="LinkedIn" />
      </a>
      <a
      className='hover:opacity-50 transition duration-500'
        target='_blank'
        href="https://www.linkedin.com"
        rel='norefference'
      >
        <img src="/assets/instagram.png" alt="LinkedIn" />
      </a>
      <a
      className='hover:opacity-50 transition duration-500'
        target='_blank'
        href="https://www.linkedin.com"
        rel='norefference'
      >
        <img src="/assets/facebook.png" alt="LinkedIn" />
      </a>
      <a
      className='hover:opacity-50 transition duration-500'
        target='_blank'
        href="https://www.linkedin.com"
        rel='norefference'
      >
        <img src="/assets/twitter.png" alt="LinkedIn" />
      </a>
    </div>
  )
}

export default SocialMedia