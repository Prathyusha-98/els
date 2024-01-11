'use client'
  import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';
import cloud2 from "@/assets/cloud2.png"
import Vector7 from "@/assets/Vector7.png"
import Vector6 from "@/assets/Vector6.png"
import path from "@/assets/Path.png"
import Link from 'next/link';
import subu from '@/assets/subu.png'
import boy from '@/assets/boy.png'
import Faq from './Faq'
import { GiHamburgerMenu } from 'react-icons/gi';
import Ask from './Ask';
import logo from '@/assets/logo.png'
import HeaderMobile from '@/components/HeaderMobile';
const Support = () => {

  const [openmenu, setOpenmenu] = useState(false);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (openmenu) {
        setOpenmenu(false);
      }
    };
  
    document.addEventListener("click", handleClick);
  
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [openmenu]);
  
    return(
        <>
        
        <div>
      <div className='bg-[#F8F7FF] h-[1224px] md:hidden sm:hidden xs:hidden lg:block '>
          {/***********************************  Header start for screen size >768px ********************************** */}
          <div className="lg:flex absolute top-0 md:hidden">
              <div className="flex items-center"> {/* Add a containing div for the logo and text */}
              <Image src={logo} alt="Logo" className="rounded-full h-6 w-6 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-12 xl:w-12 2xl:h-20 2xl:w-20 xl:mr-3 2xl:mr-3 3xl:mr-3 3xl:mt-[53px] 3xl:ml-[126px] 2xl:mt-[53px] 2xl:ml-[126px] xl:mt-[43px] xl:ml-[16px] lg:mt-[33px] lg:ml-[66px]" />
              <p className="text-black text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-normal leading-normal 3xl:mt-[53px] 3xl:mr-[503px] 2xl:mt-[53px] 2xl:mr-[413px] xl:mt-[43px] xl:mr-[340px] lg:mt-[33px] lg:mr-[270px] gl:mr-[570px]" >Endless Stories</p>
              </div>
                <ul className="flex 3xl:mt-[73px] 3xl:mr-[15px] 2xl:mt-[63px] 2xl:mr-[100px] xl:mt-[53px] xl:mr-[1px] lg:mt-[33px] lg:mr-[15px] ">
                    <li><Link  className='p-[14px] lg:p-[10px] text-center 3xl:text-xl font-normal text-black leading-normal' href="/">Home</Link></li>
                    <li ><Link className='p-[14px] lg:p-[10px] text-center 3xl:text-xl font-normal text-black leading-normal' href={"/#how"}>How it works</Link></li>
                    <li ><Link className='p-[14px] lg:p-[10px] text-center 3xl:text-xl font-normal text-black leading-normal' href={"/#see"}>See it in action</Link></li>
                    <li ><Link className='p-[14px] lg:p-[10px] text-center 3xl:text-xl font-normal text-black leading-normal'  href={"/support"}>Support</Link></li>
                    <li ><Link className='p-[14px] lg:p-[10px] text-center 3xl:text-xl font-normal text-black leading-normal'  href={'/#contact'}>Contact</Link></li>
                    <li ><Link className='p-[14px] lg:p-[10px] text-center 3xl:text-xl font-normal text-black leading-normal'  href={'/privacy'}>PrivacyPolicy</Link></li>
                </ul>
          </div>
        {/********************************** Header end ******************************/}
        {/********************************** Header end ******************************/}

        <div className='relative'>
            <div>
                <Image src={subu} alt='' className='absolute xl:top-[149px] 2xl:top-[168px] 3xl:top-[213px] xl:left-[1049px] xl:w-[200px] xl:h-[200px] 2xl:left-[1209px] 3xl:left-[1399px] lg:top-[168px] lg:left-[700px] gl:left-[1150px] md:w-[94px] md:h-[74px] md:left-[668px] md:top-[168px]'/>
                <Image src={boy} alt='' className='absolute top-[837px]'/>
            </div>
        </div>

        <div className='flex items-center justify-center'>
            <p className='text-black text-center font-semibold text-5xl leading-[90px] mt-[243px]'>FAQ&apos;s</p>
        </div>

        <div>
          <div id='support' className='mt-14'>
                <div className='flex items-center justify-center'>
                    <div className='pt-12'>
                    <section id="faq" className="container w-96">
                        <Faq questions={[{ title: 'What is an FAQ section?', text: 'An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?".' },
                        { title: 'Why do FAQs matter?', text: 'FAQs are a great way to help site visitors find quick answers to common questions about your business and create a better navigation experience.' },
                        { title: 'Where can I add my FAQs?', text: 'FAQs can be added to any page on your site or to your Wix mobile app, giving access to members on the go.' },
                        ]} />
                    </section>
                    </div>
                </div>
          </div>
        </div>
        <div className='relative bg-[#F8F7FF] lg:flex md:hidden sm:hidden xs:hidden'>
        <div><Image src={boy} alt='' className='absolute top-[837px]'/></div>
        </div>
      </div>

    {/**************************** Ask us mobile anything start **************************************/}
      <div id='service' className=' bg-[#F8F7FF] lg:hidden md:block sm:block xs:block'>
      <HeaderMobile/>

        <div className='relative'>
            <div>
                <Image src={subu} alt='' className='absolute w-[94px] h-[74px] top-[123px] xs:left-[280px] sm:left-[560px] md:left-[670px]'/>
            </div>
        </div>
        <div className='pt-36 lg:pt-0' ><p className='text-4xl text-[#053445] text-center font-semibold'>FAQs</p></div>

        <div className='flex md:pl-56 sm:pl-36 xs:pl-2 lg:pl-56 pl-0'>
          <div className='pt-12'>
            <section id="faq" className="container w-96">
              <Faq  questions={[{ title: 'What is an FAQ section?', text: 'An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?".' },
                { title: 'Why do FAQs matter?', text: 'sign-in then try our UNI-play' },
                { title: 'Where can I add my FAQs?', text: 'Click on the forget password page which will send an verification email and password regenrate link to your authorized email from there you can reset your password.' },
                { title: 'What is an FAQ section?', text: 'Click on the forget password page which will send an verification email and password regenrate link to your authorized email from there you can reset your password.' },
                { title: 'What if i have a query ?', text: 'Click on the contact page and fill out your name email and query and we will be happy to answer to your queries.' }]} />
            </section>
          </div>
        </div>
      </div>

      <div className='relative bg-[#F8F7FF] lg:hidden md:block sm:block xs:block h-28'>
        <div><Image src={boy} alt='' className='absolute w-[75px] h-[100px]'/></div>
      </div>

    {/**************************** Ask us anything start **************************************/}
    <Ask/>
        </div>
        </>
    )
}
export default Support