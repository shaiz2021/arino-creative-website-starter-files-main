import React from 'react'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='lg:px-24 px-4 text-white' id='contact'>
            <div className='flex flex-col md:flex-row flex-wrap justify-between items-start gpa-12 '>
                <div className='space-y-4 lg:w-1/3'>
                    <a href="/" className='text-white text-5xl font-bold'><span className='text-orange'>A</span>rino</a>
                    <p className='text-gray-200'>Welcome to arino sed out perspiciae onmude omnis iste naus error sitort voluptatem accusantium</p>
                    <div className='flex gap-5 text-white'>
                        <a href="/" className='block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300'> <FaInstagram className='w-5 h-5' /></a>
                        <a href="/" className='block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300'> <FaLinkedinIn className='w-5 h-5' /></a>
                    </div>
                </div>
                <div className='space-y-4'>
                    <h1 className='text-3xl font-semibold'>Services</h1>
                    <div className='space-y-3'>
                        <a href="/" className=' block ' >Front End Development</a>
                        <a href="/" className=' block ' >UI/UX Design</a>
                        <a href="/" className=' block ' >Digital Marketing</a>
                        <a href="/" className=' block ' >Wordpress Development</a>
                    </div>
                </div>
                <div className='space-y-4'>
                    <h3 className='text-3xl font-semibold'>Contact Us</h3>
                    <div className='space-y-3 text-gray-300'>
                        <p>+44 454343 112</p>
                        <p>infotec@arino.com</p>
                        <p>Wall Street Suite, <br />78666, Unites Sates</p>
                    </div>
                </div>
            </div>
            <div className='h-12'></div>
            <hr className=' border-gray-300 '/>
            <div className='h-8'></div>

            <div className='flex flex-col sm:flex-row justify-between pb-7'>
                <p>Copyright @ 2022 Arino.</p>
                <p> Terms of Use | Privacy Policy </p>
            </div>
        </div>
    )
}

export default Footer
