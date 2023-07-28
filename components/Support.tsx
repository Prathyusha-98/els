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
        {/***********************************  Header start ********************************** */}
        <div className="lg:flex md:hidden sm:hidden xs:hidden absolute top-0 ">
                  <p className="text-black text-center text-sm lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-normal leading-normal 3xl:mt-[53px] 3xl:mr-[513px] 3xl:ml-[126px]  2xl:mt-[53px] 2xl:mr-[413px] 2xl:ml-[126px] xl:mt-[43px] xl:mr-[370px] xl:ml-[66px] lg:mt-[33px] lg:mr-[270px] lg:ml-[66px] " >Endless Stories</p>
              
              <ul className="flex 3xl:mt-[63px] 3xl:mr-[15px] 2xl:mt-[63px] 2xl:mr-[100px] xl:mt-[43px] xl:mr-[1px] lg:mt-[33px] lg:mr-[15px] md:mt-[0px]">
                  <li><Link  className='3xl:p-[26px] 2xl:p-[20px] xl:p-[16px] lg:p-[10px] text-center 3xl:text-xl font-normal text-black leading-normal' href="/">Home</Link></li>
                  <li ><Link className='3xl:p-[26px] 2xl:p-[20px] xl:p-[16px] lg:p-[10px] text-center 3xl:text-xl font-normal text-black leading-normal' href={"/#how"}>How it works</Link></li>
                  <li ><Link className='3xl:p-[26px] 2xl:p-[20px] xl:p-[16px] lg:p-[10px] text-center 3xl:text-xl font-normal text-black leading-normal' href={"/#see"}>See it in action</Link></li>
                  <li ><Link className='3xl:p-[26px] 2xl:p-[20px] xl:p-[16px] lg:p-[10px] text-center 3xl:text-xl font-normal text-black leading-normal'  href={"/#support"}>Support</Link></li>
                  <li ><Link className='3xl:p-[26px] 2xl:p-[20px] xl:p-[16px] lg:p-[10px] text-center 3xl:text-xl font-normal text-black leading-normal'  href={"/#contact"}>contact</Link></li>
              </ul>
        </div>
        {/********************************** Header end ******************************/}

        <div className='relative'>
            <div>
                <Image src={subu} alt='' className='absolute xl:top-[149px] 2xl:top-[168px] 3xl:top-[213px] xl:left-[939px] 2xl:left-[1209px] 3xl:left-[1399px] lg:top-[168px] lg:left-[700px] gl:left-[1150px] md:w-[94px] md:h-[74px] md:left-[668px] md:top-[168px]'/>
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
                        { title: 'Why do FAQs matter?', text: 'sign-in then try our UNI-play' },
                        { title: 'Where can I add my FAQs?', text: 'Click on the forget password page which will send an verification email and password regenrate link to your authorized email from there you can reset your password.' },
                        { title: 'What is an FAQ section?', text: '' },
                        { title: 'What if i have a query ?', text: 'Click on the contact page and fill out your name email and query and we will be happy to answer to your queries.' }]} />
                    </section>
                    </div>
                </div>
          </div>
        </div>
      </div>


      <div id='service' className=' bg-[#F8F7FF] lg:hidden md:block sm:block xs:block'>
      <div className='z-50 w-full static'>
        <div className='items-center justify-between flex bg-transparent pt-4 px-2 pb-14'>
          <div className='font-bold sm:text-2xl cursor-pointer flex items-center text-white'>
            <Link href="/">
              <div className='flex items-center md:ml-64 sm:ml-64 xs:ml-24 mt-5'>
                <h1 className="font-semibold ml-2 md:text-4xl sm:text-4xl xs:text-3xl text-black">Endless Stories</h1>
              </div>
            </Link>
          </div>
          <div onClick={() => setOpenmenu(!openmenu)} className='text-3xl absolute  pl-8 top-10 cursor-pointer'>
            <GiHamburgerMenu className='fill-black  w-10 h-8' name={openmenu ? 'close' : 'menu'} />
          </div>

          <ul className={` items-center pb-12 absolute  bg-white z-[-1] left-0 md:w-[516px] md:h-[1423px] sm:w-[516px] sm:h-[1423px] xs:w-[291px] xs:h-[800px] pl-9 transition-all duration-500 ease-in ${openmenu ? 'top-0 ' : 'top-[-1680px]'}`}>
            <li className="mx-6 my-6 md:my-0">
              <Link href={'/'} className="text-black  hover:font-bold hover:underline underline-offset-8 block p-2 text-sm font-semibold pr-10   " >Home</Link>
            </li>
            <li className="mx-6 my-6 md:my-0">
              <Link href={"/#how"} className="text-black hover:font-bold hover:underline underline-offset-8 block p-2 text-sm font-semibold pr-10   " >How it works</Link>
            </li>
            <li className="mx-6 my-6 md:my-0">
              <Link href={'/#see'} className="text-black  hover:font-bold hover:underline underline-offset-8 block p-2 text-sm font-semibold pr-10   " >See it in action</Link>
            </li>
            <li className="mx-6 my-6 md:my-0">
              <Link href={'/support'} className="text-black hover:font-bold hover:underline underline-offset-8 block p-2 text-sm font-semibold pr-10   " >Support</Link>
            </li>
            <li className="mx-6 my-6 md:my-0">
              <Link href={'/#contact'} className="text-black hover:font-bold hover:underline underline-offset-8 block p-2 text-sm font-semibold pr-10   " >Contact</Link>
            </li>

          </ul>
        </div>
      </div>

        <div className='relative'>
            <div>
                <Image src={subu} alt='' className='absolute w-[94px] h-[74px] top-[123px] left-[270px] '/>
            </div>
        </div>
        <div  ><p className='text-4xl text-[#053445] text-center font-semibold'>FAQs</p></div>

        <div className='flex md:pl-56 sm:pl-36 xs:pl-8 lg:pl-56 pl-0'>
          <div className='pt-12'>
            <section id="faq" className="container w-96">
              <Faq  questions={[{ title: 'What is an FAQ section?', text: 'An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?".' },
                { title: 'Why do FAQs matter?', text: 'sign-in then try our UNI-play' },
                { title: 'Where can I add my FAQs?', text: 'Click on the forget password page which will send an verification email and password regenrate link to your authorized email from there you can reset your password.' },
                { title: 'What is an FAQ section?', text: '' },
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