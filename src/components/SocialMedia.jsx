// React
import React from 'react'
// Icons
import { SlSocialInstagram, SlSocialLinkedin, SlSocialFacebook } from 'react-icons/sl';

const SocialMedia = () => {
  return (
    <div className="flex justify-center my-5 md:justify-start xs:my-10 gap-7">
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
        href="https://www.instagram.com/m.tinna27/"
        rel='norefference'
      >
        <SlSocialInstagram />
      </a>
      <a
        className='social hover:text-[#1877f2]'
        target='_blank'
        href="https://www.facebook.com/tina.mesaros"
        rel='norefference'
      >
        <SlSocialFacebook />
      </a>
    </div>
  )
}

export default SocialMedia