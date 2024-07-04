"use client";
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import Link from 'next/link'
import { motion } from 'framer-motion'
// @ts-ignore
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa'
import { GoogleGeminiEffect } from './ui/google-gemini-effect';
import { LampContainer } from './ui/lamp';


const Hero = () => {
  return (
    <div className='pb-20 pt-36' id='home'>
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill='white' />
      <Spotlight
        className="h-[80vh] w-[50vw] top-10 left-full"
        fill="purple"
      />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
              <span className="text-sky-600 bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Hello, I&apos;m{" "}
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  "Patel Het",
                  1000,
                  "Software Engineer",
                  1000,
                  "Web Developer",
                  1000,
                  "App Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-lg">
              Welcome to my portfolio! I'm a passionate software engineer eager to collaborate on exciting projects. Get to know my work, and let's connect to bring innovative ideas to life!
            </p>
            <div className='flex sm:justify-start my-1 justify-center'>
              <div className='w-3/5 grid-cols-3 px-auto'>
                <a href="#project" >
                  <MagicButton
                    title="Show my work"
                    icon={<FaLocationArrow />}
                    position="right"

                  />
                </a>
              </div>
            </div>

          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
          </motion.div>
        </div>
      </section>


    </div>
  )
}

export default Hero
