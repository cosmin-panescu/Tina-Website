// React
import React from 'react'
// Icons
import { SlSocialInstagram, SlSocialLinkedin, SlSocialFacebook } from 'react-icons/sl';

const SocialMedia = () => {
  return (
    <div className="flex justify-center md:justify-start my-5 xs:my-10 gap-7">
      <a
        className='social hover:text-[#0a66c2]'
        target='_blank'
        href="https://www.linkedin.com"
        rel='norefference'
      >
        <SlSocialLinkedin />
      </a>
      <a
        className='social hover:text-[#e1306c]'
        target='_blank'
        href="https://www.linkedin.com"
        rel='norefference'
      >
        <SlSocialInstagram />
      </a>
      <a
        className='social hover:text-[#1877f2]'
        target='_blank'
        href="https://www.linkedin.com"
        rel='norefference'
      >
        <SlSocialFacebook />
      </a>
    </div>
  )
}

export default SocialMedia