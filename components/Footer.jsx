import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='bg-primaryBlue h-[366px]  text-white relative'>
        <div className='flex justify-center md:justify-between  '>
          <div className='pt-[71px] md:px-[300px]'>
            <p className='font-[600] text-[20px] md:text-[28px] leading-8 w-[207px]'>
              Are you excited for{' '}
              <img
                src='./images/logo.png'
                alt='prompay logo'
                className='w-[91.67px] h-[50px] inline'
              />{' '}
              ?{' '}
            </p>
            <p className='font-[400] text-[14px] mt-[8px] mb-[44px]'>
              Start earning while learning
            </p>
            <Link
              href='/signup'
              className='bg-transparent hover:bg-primaryGreen py-[16px] px-[24px] w-[207px] h-[56px] rounded-lg border hover:border-none text-[16px] font-[900] leading-5 text-center mt-[20px] '
            >
              Get Started
            </Link>
          </div>
          <img
            src='images/phoneside.png'
            alt='mockup'
            className='absolute top-[-70px] md:right-[300px] z-[1] hidden md:block'
          />
        </div>
      </div>
      <div
        className='pt-10 z-10 relative md:px-[150px] lg:px-[300px] text-white flex flex-col items-center md:items-stretch justify-center'
        style={{
          background:
            'linear-gradient(92.56deg, #060720 47.49%, rgba(7, 7, 32, 0.96) 68.74%)',
        }}
      >
        <div className='md:flex px-[20px] md:px-0'>
          <div className='flex justify-between flex-wrap mt-[20px] md:mt-0 gap-8 md:gap-x-[100px]'>
            <div className=''>
              <p className='font-[600] leading-4'>Company</p>
              <ul>
                <li className='font-[400] text-[13px] leading-3 mt-[16px]'>
                  <Link href={'/about'}>About US</Link>
                </li>
                <li className='font-[400] text-[13px] leading-3 mt-[16px]'>
                  <Link href={'/our-process'}>Our process</Link>
                </li>
                <li className='font-[400] text-[13px] leading-3 mt-[16px]'>
                  <Link href={'/faq'}>FAQ</Link>
                </li>
              </ul>
            </div>
            <div className=''>
              <p className='font-[600] leading-4'>Support</p>
              <ul>
                <li className='font-[400] text-[13px] leading-3 mt-[16px]'>
                  <Link href={'/contact'}>Contact us</Link>
                </li>
                <li className='font-[400] text-[13px] leading-3 mt-[16px]'>
                  <Link href={'mailto: support@theprompay.com'}>
                    Our support
                  </Link>
                </li>
              </ul>
            </div>
            <div className=''>
              <p className='font-[600] leading-4'>Others</p>
              <ul>
                <li className='font-[400] text-[13px] leading-3 mt-[16px]'>
                  <a href={'/terms'} target={'_blank'} rel={'noreferrer'}>
                    Terms
                  </a>
                </li>
                <li className='font-[400] text-[13px] leading-3 mt-[16px]'>
                  <a href={'/privacy'} target={'_blank'} rel={'noreferrer'}>Privacy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-14 mb-4 text-[13px]'>
          <span>Copyright 2023 promPay</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
