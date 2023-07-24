'use client'
  import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Image from 'next/image';
import heroboy from '@/assets/heroboy.png';
import star from '@/assets/star.gif';
import Link from 'next/link';
import book from "@/assets/book.png"
import cloud from "@/assets/cloud.png"
import butterfly from "@/assets/butterfly.png"
import wave from "@/assets/wave.png"
import vector1 from "@/assets/Vector1.png" 
import vector2 from "@/assets/Vector2.png" 
import vector3 from "@/assets/Vector3.png" 
import sun from "@/assets/sun.png"
import animal from "@/assets/animal.png"
import mail from "@/assets/mail.png"
import buter from "@/assets/buter.png"
import clouds4 from "@/assets/clouds4.png"
import boy from "@/assets/boy.png"
import Vector4 from "@/assets/Vector4.png"
import tv from "@/assets/tv.png"
import { BsFillPauseCircleFill, BsFillPlayCircleFill} from 'react-icons/bs';
import {BsPlayCircleFill} from 'react-icons/bs'
import tri from '@/assets/tri.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import cloud2 from "@/assets/cloud2.png"
import co from "@/assets/co.png"
import butterfly2 from "@/assets/butterfly2.png"
import giraf from "@/assets/giraf.png"
import Vector7 from "@/assets/Vector7.png"
import connection from "@/assets/connection.png"
import easytouse from "@/assets/easytouse.png"
import network1 from "@/assets/network1.png"
import designthinking from "@/assets/designthinking.png"
import tree1 from "@/assets/tree1.png"
import tree2 from "@/assets/tree2.png"
import bu from "@/assets/bu.png"
import fox from "@/assets/fox.png"
import play1 from "@/assets/play1.png"
import apple from "@/assets/apple.png"
import Vector6 from "@/assets/Vector6.png"
import path from "@/assets/Path.png"
import Step from '@/assets/Step.gif';
import girl1 from '@/assets/girl1.png';
import Step2 from '@/assets/Step2.gif';
import Step3 from '@/assets/Step3.gif';
import Step4 from '@/assets/Step4.gif';
import boy1 from '@/assets/boy1.png';
import girl from '@/assets/girl.png';
import elements from '@/assets/elements.gif';
import { useInView } from 'react-intersection-observer'
import { url } from 'inspector';
import Stars from './Stars';
import Caruselpage from './Carouselpage';
import Ask from './Ask';
import Carouseltwo from './Carouseltwo';
const Landing = () => {


  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (imgRef.current && imgRef.current.firstChild instanceof Element) {
      imgRef.current.firstChild.classList.add('animate-custom-bounce')
    }
  }, [])






  return (
    <div className='bg-uni'>
      <Header />
      <Caruselpage />


      {/**************************** section3 start **************************************/}

      <div className='bg-[#7A85DE] w-100% h-[722px]'>
        <div className='relative'>
          <Image className='absolute top-[92px] 2xl:left-[147px] 3xl:left-[147px] xl:left-[137px] lg:left-[137px]' src={vector1} alt=''/>
          <Image className='absolute top-[595px] 2xl:left-[287px] 3xl:left-[382px] xl:left-[200px] lg:left-[200px]' src={vector2} alt=''/>
          <Image className='absolute top-[210px] 2xl:left-[767px] 3xl:left-[899px] xl:left-[721px] lg:left-[721px]' src={vector3} alt=''/>
          <Image className='absolute top-[50px] 2xl:left-[1215px] 3xl:left-[1407px] xl:left-[959px] lg:left-[759px]' src={sun} alt=''/>
        </div>
        <div className='flex items-center justify-center 3xl:pt-[55px] 3xl:pl-[87px]  2xl:pt-[55px] 2xl:pl-[87px] xl:pt-[155px] xl:pl-[87px] lg:pt-[255px] lg:pl-[87px]'>
          <div>
            <div>
              <p className='text-[#F8F7FF] text-shadow-md 3xl:text-7xl 2xl:text-6xl xl:text-5xl lg:text-4xl font-poppins font-semibold leading-normal'>Coming soon...</p>
              <p className="text-white font-poppins text-xl font-medium leading-normal w-[410px]">Get ready to join the community Share your creation and discover stories crafted by others.</p>
            </div>
            <div className="flex items-center justify-center pr-[24px] pt-[29px]">
              <div className="w-[546px] h-[74px] lg:w-[466px] lg:h-[74px] bg-[#e8e8fd] rounded-full">
                <div className="pt-3 flex items-center justify-center">
                  <div className="w-[129px] h-[50px] lg:w-[109px] lg:h-[50px] bg-white rounded-full">
                    <p className="text-center pt-3 text-[#6470d7] font-poppins text-base font-semibold leading-normal">Notify Me</p>
                  </div>
                  <div>
                    <form action="" className="flex items-center justify-center">
                      <input type="email" className="bg-[#e8e8fd] border-[#e8e8fd] text-center w-[189px] h-[26px] outline-none" name="Email" placeholder="Enter your email here *" required title="Valid Email Format:example@example.com" />
                    </form>
                  </div>
                  <div className='pl-[152px] lg:pl-[80px]'>
                    <div className="w-[50px] h-[50px] bg-[#6470d7] rounded-full">
                      <div className="flex items-center justify-center pt-2">
                        <Image alt='' src={mail} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[830px]'><Image src={animal} alt='' /></div>
        </div>
      </div>
      {/**************************** section3 end **************************************/}

      {/**************************** Video start **************************************/}
      <div className="bg-white w-full h-[795px]">
        <div className='relative '>
          <Image className="absolute top-[0] 3xl:left-[1508px] 2xl:left-[1318px] xl:left-[1055px] lg:left-[1055px]"  src={buter} alt='' />
          <Image className="absolute top-[82px] left-[98px]" src={clouds4} alt='' />
          <Image className="absolute top-[130px] left-[631px]" src={Vector4} alt='' />
          <Image className="absolute top-[459px] lg:top-[509px] left-0" src={boy} alt='' />
        </div>
        <div className='flex items-center justify-center'>
          <div className='pt-32 lg:pt-52'>
            <p className="text-[#2a2e36] font-poppins 3xl:text-7xl 2xl:text-6xl xl:text-5xl lg:text-[34px] font-extrabold leading-snug tracking-wider text-center ">See it in action</p>
            <p className="text-[#2a2e36] font-poppins text-xl lg:text-base font-medium leading-normal w-[756px] lg:w-[656px] 3xl:pr-56 3xl:pl-24 3xl:pt-[24px] 2xl:pr-56 2xl:pl-36 2xl:pt-[24px] xl:pr-48 xl:pl-48 xl:pt-[24px] lg:pr-28 lg:pl-48 lg:pt-[14px]">Watch this video to see how Endless Stories transforms your child&apos;s voice input into a captivating story.</p>
          </div>
          <div className="relative mt-56">
            <div>
            <video
                ref={videoRef}
                onClick={handlePlayPause} className='2xl:pt-8 xl:pt-8 lg:pt-8  3xl:w-[503px] 3xl:h-[501px] 2xl:w-[495px] 2xl:h-[495px] xl:w-[475px] xl:h-[475px] lg:w-[475px] lg:h-[475px] lg:pr-8' >
                <source src="/kin.mp4" type="video/mp4" />
              </video>
              <button className="absolute 3xl:top-[280px] 3xl:left-[250px] 2xl:top-[280px] 2xl:left-[250px]  xl:top-[280px] xl:left-[230px] lg:top-[280px] lg:left-[130px] transform -translate-x-1/2 -translate-y-1/2" onClick={handlePlayPause}>
                {isPlaying ? '' : <BsPlayCircleFill className='w-24 h-24 fill-white'/>}
              </button>
              </div>
          </div>
        </div>
      </div>
      {/**************************** Video end **************************************/}


      {/**************************** carousel two start **************************************/}
      <Carouseltwo />

      {/**************************** cards  start **************************************/}
      <div className='bg-[#D9DEFF] w-full h-[721px]'>
        <div >
          <div className='flex justify-center items-center'>
            <p className="text-[#2A2E36] text-center font-poppins text-5xl font-semibold leading-normal pt-14">Awesome Apps Features</p>
          </div>

          <div className="flex justify-center items-center pt-[84px]">
            <div className="flex 3xl:w-[340px] 3xl:h-[400px] 2xl:w-[300px] 2xl:h-[380px] xl:w-[240px] xl:h-[320px] lg:w-[200px] lg:h-[300px] flex-col justify-center items-center flex-shrink-0 rounded-[47px] bg-white bg-opacity-60 m-6">
              <div className="text-[#1E1E1E] text-center font-poppins text-lg font-medium leading-normal">
                <Image src={designthinking} alt='' />
                <p className='pt-8'>Encourages <br/>Creativity and <br/> Learning</p>
              </div>
            </div>
            <div className="flex 3xl:w-[340px] 3xl:h-[400px] 2xl:w-[300px] 2xl:h-[380px] xl:w-[240px] xl:h-[320px] lg:w-[200px] lg:h-[300px] flex-col justify-center items-center flex-shrink-0 rounded-[47px] bg-white bg-opacity-60 m-6">
              <div className="text-[#1E1E1E] text-center font-poppins text-lg font-medium leading-normal">
                <Image src={easytouse} alt='' />
                <p className='pt-8'>User-Friendly <br/>Experience</p>
              </div>
            </div>
            <div className="flex 3xl:w-[340px] 3xl:h-[400px] 2xl:w-[300px] 2xl:h-[380px] xl:w-[240px] xl:h-[320px] lg:w-[200px] lg:h-[300px] flex-col justify-center items-center flex-shrink-0 rounded-[47px] bg-white bg-opacity-60 m-6">
              <div className="text-[#1E1E1E] text-center font-poppins text-lg font-medium leading-normal">
                <Image src={connection} alt='' />
                <p className='pt-8' >Connect with <br/>others via stories</p>
              </div>
            </div>
            <div className="flex 3xl:w-[340px] 3xl:h-[400px] 2xl:w-[300px] 2xl:h-[380px] xl:w-[240px] xl:h-[320px] lg:w-[200px] lg:h-[300px] flex-col justify-center items-center flex-shrink-0 rounded-[47px] bg-white bg-opacity-60 m-6">
              <div className="text-[#1E1E1E] text-center font-poppins text-lg font-medium leading-normal">
                <Image src={network1} alt='' />
                <p className='pt-8'>Share your creation <br/>with others</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**************************** cards  end **************************************/}

      {/**************************** Tablat video part start **************************************/}
      <div className="bg-white h-[722px]">
  <div className="relative">
    <Image className="absolute 3xl:top-[376px] 3xl:left-[842px] 2xl:top-[376px] 2xl:left-[742px] 2xl:w-[208px] 2xl:h-[301px]  xl:top-[396px] xl:left-[582px] xl:w-[140px] xl:h-[201px] lg:top-[396px] lg:left-[482px] lg:w-[120px] lg:h-[195px]" src={fox} alt="" />
    <Image className="absolute 3xl:top-[155px] 3xl:left-[1556px] 2xl:top-[155px] 2xl:left-[1406px] 2xl:w-[132px] xl:top-[105px] xl:left-[1123px] xl:w-[132px] lg:top-[105px] lg:left-[1123px] lg:w-[132px]" src={bu} alt="" />
    <Image className="absolute top-0 left-0" src={tree1} alt="" />
    <Image className="absolute top-[558px] left-0" src={tree2} alt="" />
  </div>

  <div className="flex justify-center items-center">
    <div>
      <div className="">
        <p className="text-[#2A2E36] text-center font-poppins 3xl:text-6xl 2xl:text-5xl xl:text-4xl lg:text-3xl font-extrabold leading-[95px] pt-44 lg:pt-72">Try Endless Stories <br />for Free!</p>
      </div>
      <div className="">
        <p className="text-[#525D73] text-center font-poppins 3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs font-normal leading-[30px]">
          Download Endless Stories today and try it for free. <br />
          Unlock a world of imagination and learning for your child.
        </p>
      </div>
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
            <div className="flex justify-center items-center relative"><div className='w-[62px] h-[62px] bg-black bg-opacity-75 shadow-md rounded-full '><Image src={tri} alt='' className='ml-6 mt-6'/></div></div>
            <div className="pl-4">
              <p className='text-black text-center font-poppins text-xs font-semibold leading-[14px]'>
                See How it works!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="2xl:pl-[328px] 3xl:pl-[318px] xl:pl-[130px] lg:pl-[100px] pt-[50px]">
      <div className="rounded-3xl 3xl:w-[498px] 3xl:h-[637px] 2xl:w-[478px] 2xl:h-[637px] xl:w-[410px] xl:h-[537px] lg:w-[410px] lg:h-[537px] border-[22px] border-solid border-black bg-[#c5c8ca]"></div>
    </div>
  </div>
</div>

      {/**************************** Tablat video part start **************************************/}

      <Ask />
    </div>
  );
}

export default Landing;