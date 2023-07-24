'use client'
import React from 'react';
import Image from 'next/image';
import heroboy from '@/assets/heroboy.png';
import Link from 'next/link';
import { BsFillPlayCircleFill} from 'react-icons/bs';
import apple from "@/assets/apple.png"
import Stars from './Stars';


function Header () {
    return(
       
        
        <div className='relative bg-uni w-full xl:h-[675px] 3xl:h-[975px] 2xl:h-[875px] lg:h-[575px]'>
        <Stars />
        {/* image of animation*/}
        <div className='flex justify-center items-center'>
        <div className='absolute 3xl:top-[361px] 3xl:left-[130px] 2xl:top-[261px] 2xl:left-[130px] xl:top-[211px] xl:left-[30px] lg:top-[179px] lg:left-[15px] '>
            <p className="pl-[48px] text-white font-extrabold lg:text-[55px] lg:leading-[60px] xl:text-[65px] xl:leading-[70px] 2xl:text-[85px] 2xl:leading-[90px] 3xl:text-[85px] 3xl:leading-[90px] ">Endless <br /> Stories</p>
            <p className="pl-[48px] text-white font-medium text-[28px] leading-[30px] pt-3 w-[439px] h-[90px]">Transform your childs imagination into storybooks . </p>
  
          <div className="flex pt-10 justify-center items-center">
          <div className="pl-9 pr-4">
            <div className="w-[190px] h-[62px] flex-shrink-0 rounded-md bg-black bg-opacity-75 shadow-md pr-2">
              <div className="flex justify-center items-center pt-3">
                <div className="pr-1.5"><Image src={apple} alt="" /></div>
                <div className="pl-1.5">
                  <p className='pb-[7px] text-white font-semibold text-sm leading-4'>
                    Download on the 
                  </p>
                  <p className='text-white text-center font-semibold text-lg leading-4'>
                    App Store
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[202px] h-[62px] justify-center items-center gap-4 flex-shrink-0">
            <div className="flex justify-center items-center">
              <div><BsFillPlayCircleFill className='w-[62px] h-[62px] fill-white'/></div>
              <div className="pl-4">
                <p className='text-white text-center font-poppins text-xs font-semibold leading-[14px]'>
                  See How it works!
                </p>
              </div>
            </div>
          </div>
        </div>
          </div>
          <div className='animate-custom-bounce  absolute 3xl:top-[227px] 3xl:left-[788px] 3xl:w-[854px] 3xl:h-[752px] 2xl:top-[139px] 2xl:left-[550px] 2xl:w-[854px] 2xl:h-[652px] xl:top-[139px] xl:left-[550px] xl:w-[654px] xl:h-[552px] lg:top-[159px] lg:left-[500px] lg:w-[454px] lg:h-[352px]'>
          <Image className='animate-custom-bounce' src={heroboy} alt="heroboy"/>
          </div>
        </div>
          {/***********************************  Header start ********************************** */}
          <div className="flex absolute top-0 ">
                    <p className="text-white text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-normal leading-normal 3xl:mt-[53px] 3xl:mr-[513px] 3xl:ml-[126px]  2xl:mt-[53px] 2xl:mr-[413px] 2xl:ml-[126px] xl:mt-[43px] xl:mr-[370px] xl:ml-[66px] lg:mt-[33px] lg:mr-[270px] lg:ml-[66px] md:mt-[23px] md:mr-[200px] md:ml-[46px]" >Endless Stories</p>
                
                <ul className="flex 3xl:mt-[63px] 3xl:mr-[15px] 2xl:mt-[63px] 2xl:mr-[100px] xl:mt-[43px] xl:mr-[1px] lg:mt-[33px] lg:mr-[15px]">
                    <li><Link  className='3xl:p-[26px] 2xl:p-[20px] xl:p-[16px] lg:p-[10px] text-center 3xl:text-xl font-normal text-white leading-normal' href="/">Home</Link></li>
                    <li ><Link className='3xl:p-[26px] 2xl:p-[20px] xl:p-[16px] lg:p-[10px] text-center 3xl:text-xl font-normal text-white leading-normal' href="">How it works</Link></li>
                    <li ><Link className='3xl:p-[26px] 2xl:p-[20px] xl:p-[16px] lg:p-[10px] text-center 3xl:text-xl font-normal text-white leading-normal' href="">See it in action</Link></li>
                    <li ><Link className='3xl:p-[26px] 2xl:p-[20px] xl:p-[16px] lg:p-[10px] text-center 3xl:text-xl font-normal text-white leading-normal'  href="/support">Support</Link></li>
                    <li ><Link className='3xl:p-[26px] 2xl:p-[20px] xl:p-[16px] lg:p-[10px] text-center 3xl:text-xl font-normal text-white leading-normal'  href="">Contact</Link></li>
                </ul>
          </div>
          {/********************************** Header end ******************************/}
        </div>


    )
}

export default Header