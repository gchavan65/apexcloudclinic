import React from 'react';
import { motion } from 'framer-motion';

const LogoFramer = ({ isOpen, isMobile }) => {
  const logotype = {
    hidden: {
      opacity: 0,
      transition: { ease: 'easeInOut', duration: 0.25 },
    },
    show: {
      opacity: 1,
      transition: { ease: 'easeInOut', delay: 0.1 },
    },
  };

  const cloud = {
    hidden: { x: '-75%', transition: { ease: 'easeInOut', delay: 0.05 } },
    show: { x: '0%', transition: { ease: 'easeInOut' } },
  };

  const rectStyle = {
    fill: isMobile ? '#f9fafc' : '#ffffff',
  };

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 188.51 26.6">
        <defs></defs>
        <motion.g
          id="CloudClini"
          variants={logotype}
          initial="hidden"
          animate={isOpen ? 'show' : 'hidden'}
        >
          
          {/* <path
            className="cls-1"
            d="M23.6,4.92H20.08V26.37H23.6Z"
            transform="translate(-0.67 -0.22)"
          />
          <path
            className="cls-1"
            d="M33.81,10.35c-4.47,0-7.56,3.33-7.56,8.23s3.09,8.23,7.56,8.23,7.58-3.32,7.58-8.22S38.31,10.35,33.81,10.35Zm0,13.23c-2.5,0-4-1.85-4-5s1.53-5,4-5,4.06,1.91,4.06,5-1.51,5-4.06,5Z"
            transform="translate(-0.67 -0.22)"
          />
          <path
            className="cls-1"
            d="M53.57,20.26a3.07,3.07,0,0,1-3.18,3.32c-2.09,0-3.12-1.12-3.12-3.32V10.79H43.75V21c0,3.68,2.06,5.82,5.59,5.82A5.51,5.51,0,0,0,53.63,25h.06v1.38H57.1V10.79H53.57Z"
            transform="translate(-0.67 -0.22)"
          />
          <path
            className="cls-1"
            d="M71,11.94h-.06a5.82,5.82,0,0,0-4.17-1.59c-4.06,0-7,3.47-7,8.23s2.94,8.23,7,8.23a5.68,5.68,0,0,0,4.44-1.88h.06v1.43H74.5V4.91H71Zm0,7.88a3.65,3.65,0,0,1-1.06,2.7,3.42,3.42,0,0,1-1.19.8,3.65,3.65,0,0,1-1.42.26c-2.5,0-4-1.91-4-5s1.5-5,4-5a3.41,3.41,0,0,1,1.44.26,3.54,3.54,0,0,1,2,2A3.41,3.41,0,0,1,71,17.32Z"
            transform="translate(-0.67 -0.22)"
          /> */}
          
          <path
            className="cls-1"
            d="M86.09,23.43c-3.29,0-5.26-2.76-5.26-7.34s2-7.35,5.26-7.35c2.38,0,3.94,1.59,4.44,4.49l3.62-.59a7.91,7.91,0,0,0-8.06-7.29c-5.38,0-8.94,4.29-8.94,10.73s3.53,10.73,8.94,10.73c4.47,0,7.64-3,8.11-7.67l-3.64-.58C90.18,21.76,88.59,23.43,86.09,23.43Z"
            transform="translate(-0.67 -0.22)"
          />
          <path
            className="cls-1"
            d="M100.08,4.92H96.56V26.37h3.52Z"
            transform="translate(-0.67 -0.22)"
          />
          <path
            className="cls-1"
            d="M106.94,4.59h-3.71V8.15h3.71Z"
            transform="translate(-0.67 -0.22)"
          />
          <path
            className="cls-1"
            d="M106.85,10.79h-3.53V26.37h3.53Z"
            transform="translate(-0.67 -0.22)"
          />
          <path
            className="cls-1"
            d="M117.82,10.35a5.78,5.78,0,0,0-4.29,1.83h-.06V10.79h-3.39V26.37h3.53V16.94a3.07,3.07,0,0,1,3.29-3.29,3,3,0,0,1,3.21,3.29v9.43h3.53v-10C123.64,12.74,121.35,10.35,117.82,10.35Z"
            transform="translate(-0.67 -0.22)"
          />
          <path
            className="cls-1"
            d="M130.34,4.59h-3.7V8.15h3.7Z"
            transform="translate(-0.67 -0.22)"
          />
          <path
            className="cls-1"
            d="M130.25,10.79h-3.53V26.37h3.53Z"
            transform="translate(-0.67 -0.22)"
          />
        </motion.g>
        <motion.g
          id="Cloud"
          variants={cloud}
          initial="hidden"
          animate={isOpen ? 'show' : 'hidden'}
        >
          <rect x="132.2" style={rectStyle} width="56.3" height="26.6" />
          <path
            className="cls-1"
            d="M179.52,10.74l-.93,0c-1.66-3.27-5.43-5.22-10.52-5.22-.47,0-.92,0-1.36,0C164.28,2.21,159.79.22,154,.22c-7.14,0-12.28,3-14.06,7.9h.44a10.49,10.49,0,0,1,2.73.35,7.64,7.64,0,0,1,2.08-2.61c2.08-1.68,5.12-2.57,8.81-2.57s6.74.89,8.81,2.57c.16.13.3.26.45.4a7.48,7.48,0,0,1,1.84,2.67,14.44,14.44,0,0,1,3-.31h.12a10.08,10.08,0,0,1,6.29,1.84,5.7,5.7,0,0,1,.88.89,5.37,5.37,0,0,1,1.07,2.88,10.44,10.44,0,0,1,3-.43h.05a8.16,8.16,0,0,1,5.1,1.45,4,4,0,0,1,1.5,3.32,4,4,0,0,1-1.49,3.29,8.22,8.22,0,0,1-5.11,1.45H149a8.87,8.87,0,0,1-1.91,3.06h32.42c5.87,0,9.66-3.06,9.66-7.8S185.39,10.74,179.52,10.74Z"
            transform="translate(-0.67 -0.22)"
          />
          <path
            className="cls-1"
            d="M143.9,20.47a3.39,3.39,0,0,1-3.56,3.11c-2.38,0-3.91-1.94-3.91-5s1.53-5,3.91-5a3.42,3.42,0,0,1,3.56,3.11l3.38-.64a6.64,6.64,0,0,0-6.94-5.71c-4.38,0-7.44,3.36-7.44,8.23s3.06,8.23,7.44,8.23a6.64,6.64,0,0,0,6.94-5.7Z"
            transform="translate(-0.67 -0.22)"
          />
        </motion.g>
      </svg>
    </div>
  );
};

export default LogoFramer;
