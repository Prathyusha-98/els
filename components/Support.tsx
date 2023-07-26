'use client'
  import React, { useRef, useState } from 'react';
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
const Support = () => {
    return(
        <>
        
        <div>
            <div className='bg-[#F8F7FF] h-[1224px]'>
                {/***********************************  Header start ********************************** */}
        <div className="flex absolute top-0">
                  <p className="text-black text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-normal leading-normal 3xl:mt-[53px] 3xl:mr-[513px] 3xl:ml-[126px]  2xl:mt-[53px] 2xl:mr-[413px] 2xl:ml-[126px] xl:mt-[43px] xl:mr-[370px] xl:ml-[66px] lg:mt-[33px] lg:mr-[270px] lg:ml-[66px] md:mt-[23px] md:mr-[200px] md:ml-[46px]" >Endless Stories</p>
              
              <ul className="flex 3xl:mt-[63px] 3xl:mr-[15px] 2xl:mt-[63px] 2xl:mr-[100px] xl:mt-[43px] xl:mr-[1px] lg:mt-[33px] lg:mr-[15px]">
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
                <Image src={subu} alt='' className='absolute xl:top-[149px] 2xl:top-[168px] 3xl:top-[213px] xl:left-[939px] 2xl:left-[1209px] 3xl:left-[1399px]'/>
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
    {/**************************** Ask us anything start **************************************/}

      <div id='support' className="bg-[#7A85DE] w-full h-[652px] section-six">
          <div className="relative">
            <Image className="absolute 3xl:top-[82px] 2xl:left-0 2xl:top-[82px] xl:top-[62px] xl:left-[9px]  3xl:left-0  xl:w-[308px] 3xl:w-[418px]" src={cloud2} alt=""/>
            <Image className="absolute 3xl:top-[100px] 3xl:left-[1324px] 2xl:top-[100px] 2xl:left-[1224px] xl:top-[100px] xl:left-[1024px]" src={Vector7} alt=""/>
            <Image className="absolute 3xl:top-[135.15px] 3xl:left-[1420px] 2xl:top-[185.15px] 2xl:left-[1220px] 2xl:w-[280px] xl:top-[160px] xl:left-[1060px] xl:w-[200px]" src={Vector6} alt=""/>
          </div>
          <div className="pt-[88px]">
            <p className="text-white text-center text-4xl font-semibold">Ask us anything</p>
          </div>
          <div className="flex items-center justify-center">
            <form action="" method="post">
              <div className="pt-12">
                <input className="bg-white border-white rounded-lg text-center w-[718px] h-14 outline-none" type="email" name="text" placeholder="Full Name" required title="Valid Email Format:example@example.com" />
              </div>
              <div className="pt-4">
                <input className="bg-white border-white rounded-lg text-center w-[718px] h-14 outline-none" type="email" name="Email" placeholder="email" required title="Valid Email Format:example@example.com" />
              </div>
              <div className="pt-4">
                <input className="bg-white border-white rounded-lg text-center w-[718px] h-36 outline-none" type="email" name="text" placeholder="Message" required title="Valid Email Format:example@example.com" />
              </div>
              <div className="pt-10">
                <button className="bg-[#6470D7] border-[#6470D7] rounded-md text-center w-[718px] h-14 outline-none">Submit</button>
              </div>
            </form>
          </div>
        </div>
        {/**************************** Ask us anything end **************************************/}

        <div id='connect' className='h-[351px] bg-white'>
        <p className="pt-[89px] text-[var(--dark,#0A142F)] text-center font-medium text-2xl leading-normal">Subscribe for the new updates !</p>
        <div className="flex items-center justify-center pr-[24px] pt-[29px]">
              <div className="w-[546px] h-[74px] bg-[#e8e8fd] rounded-full">
                <div className="pt-3 flex items-center justify-center">
                  
                  <div>
                    <form action="" className="flex items-center justify-center">
                      <input type="email" className="bg-[#e8e8fd] border-[#e8e8fd] text-center w-[189px] h-[26px] outline-none" name="Email" placeholder="Enter your email here *" required title="Valid Email Format:example@example.com" />
                    </form>
                  </div>
                  <div className='pl-[258px]'>
                    <div className="w-[50px] h-[50px] bg-[#6470d7] rounded-full">
                      <div className="flex items-center justify-center pt-4">
                        <Image alt='' src={path} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className='h-[61px] bg-[#D5DAFF]'>
          <p className="pt-[23px] text-[var(--dark,#0A142F)] text-center font-normal text-xs leading-normal">© Copyright 2023 - Endless Stories</p>
        </div>
        </div>
        </>
    )
}
export default Support