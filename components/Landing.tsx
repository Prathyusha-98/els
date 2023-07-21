'use client'
  import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Image from 'next/image';
import Hero from '@/assets/Hero.png';
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
import VideoPage from './Videopage';
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
import play from "@/assets/play.png"
import apple from "@/assets/apple.png"
import Vector6 from "@/assets/Vector6.png"
import path from "@/assets/Path.png"
import phone1 from '@/assets/phone1.png';
import girl1 from '@/assets/girl1.png';
import phone3 from '@/assets/phone3.png';
import phone4 from '@/assets/phone4.png';
import phone2 from '@/assets/phone2.png';
import boy1 from '@/assets/boy1.png';
import girl from '@/assets/girl.png';
import { url } from 'inspector';
const Landing = () => {


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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

  return (
    <div>
      <div className='relative'>
      <Image className='w-full' src={Hero} alt="hero"/>
      <div className='absolute 3xl:top-[361px] 3xl:left-[130px] 2xl:top-[261px] 2xl:left-[130px] xl:top-[211px] xl:left-[30px]'>
          <p className="pl-[48px] text-white font-extrabold xl:text-[65px] 2xl:text-[85px] 3xl:text-[85px] leading-[90px]">Endless <br /> Stories</p>
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
        {/***********************************  Header start ********************************** */}
        <div className="flex absolute top-0">
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
      {/**************************** carousel start **************************************/}

      <div className='3xl:h-[1110px] xl:h-[999px] 2xl:h-[1110px] bg-[#F8F7FF] relative'>
      <div className="relative">
            <Image src={cloud} className="mt-[46px] xl:mt-[46px] xl:h-[190px] 2xl:h-[210px] w-100%" alt=""/>
            <div className="flex items-center justify-center"> <p className="absolute items-center text-black text-7xl font-bold leading-normal;">How it works</p></div>
            <Image src={wave} className="absolute 3xl:top-[897px] 3xl:left-0 2xl:top-[897px] 2xl:left-0 xl:top-[797px] xl:left-0 xl:h-[204px] 2xl:h-[214px]" alt="" />
            <Image className="absolute 3xl:top-[957px] 3xl:left-[1058px] 2xl:top-[917px] 2xl:left-[843.01px] xl:top-[827px] xl:left-[743px] xl:w-[133px] 2xl:w-[153px]" src={book} alt=""/>
            <Image className="absolute 3xl:top-[643px] 3xl:left-[173.01px] 2xl:top-[693px] 2xl:left-[103.01px] xl:top-[593px] xl:left-[93.01px] xl:w-[243px] 2xl:w-[253px]" src={butterfly} alt=""/>
        </div>  
        <div>
        <Carousel responsive={responsive} className='h-[1080px] top-[-190px]'>
          <div>
          <div className="flex justify-center items-center pt-20">
            <div className="pl-52 pt-52">
              <Image className='3xl:w-[280px] 3xl:h-[517px] 2xl:w-[280px] 2xl:h-[517px] xl:w-[300px] xl:h-[517px] mb-14' src={phone1} alt="" />
            </div>
            <div className="mt-[580px]">
              <Image className="xl:w-[220px] xl:h-[137px]" src={girl1} alt=""/>
            </div>
            <div className="pl-[31px]">
              <div className="3xl:w-[645px] 3xl:h-[223px] 2xl:w-[545px] 2xl:h-[193px] xl:w-[445px] xl:h-[123px]  flex-shrink-0 rounded-lg bg-[#FCFCFC]">
                <div className="3xl:pt-[65px] 2xl:pt-[65px] xl:pt-[25px] flex items-center justify-center">
                  <div className="w-[62px] h-[62px] rounded-full bg-[#D68294]">
                    <p className="text-white 3xl:text-4xl 2xl:text-3xl xl:text-2xl font-extrabold flex items-center justify-center pt-3.5">1</p>
                  </div>
                  <div className="pl-6">
                    <p className="text-[#2A2E36] 3xl:text-4xl 2xl:text-3xl xl:text-2xl font-extrabold">Start your adventure</p>
                    <p className="text-[#2A2E36] 3xl:text-2xl 2xl:text-xl xl:text-lg font-normal">Speak out your story idea or plot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className="flex justify-center items-center pt-20">
            <div className="pl-52 pt-52">
              <Image className='3xl:w-[280px] 3xl:h-[517px] 2xl:w-[280px] 2xl:h-[517px] xl:w-[300px] xl:h-[517px] mb-14' src={phone2} alt="" />
            </div>
            <div className="mt-[500px]">
              <Image className="xl:w-[155px] xl:h-[131px]" src={boy1} alt=""/>
            </div>
            <div className="pl-[31px]">
              <div className="3xl:w-[645px] 3xl:h-[223px] 2xl:w-[545px] 2xl:h-[193px] xl:w-[445px] xl:h-[123px]  flex-shrink-0 rounded-lg bg-[#FCFCFC]">
                <div className="3xl:pt-[65px] 2xl:pt-[65px] xl:pt-[25px] flex items-center justify-center">
                  <div className="w-[62px] h-[62px] rounded-full bg-[#D68294]">
                    <p className="text-white 3xl:text-4xl 2xl:text-3xl xl:text-2xl font-extrabold flex items-center justify-center pt-3.5">2</p>
                  </div>
                  <div className="pl-6">
                    <p className="text-[#2A2E36] 3xl:text-4xl 2xl:text-3xl xl:text-2xl font-extrabold">Start your adventure</p>
                    <p className="text-[#2A2E36] 3xl:text-2xl 2xl:text-xl xl:text-lg font-normal">Speak out your story idea or plot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>


          <div>
          <div className="flex justify-center items-center pt-20">
            <div className="pl-52 pt-52">
              <Image className='3xl:w-[280px] 3xl:h-[517px] 2xl:w-[280px] 2xl:h-[517px] xl:w-[300px] xl:h-[517px] mb-14' src={phone2} alt="" />
            </div>
            <div className="mt-[580px]">
              <Image className="" src={girl} alt=""/>
            </div>
            <div className="pl-[31px]">
              <div className="3xl:w-[645px] 3xl:h-[223px] 2xl:w-[545px] 2xl:h-[193px] xl:w-[445px] xl:h-[123px]  flex-shrink-0 rounded-lg bg-[#FCFCFC]">
                <div className="3xl:pt-[65px] 2xl:pt-[65px] xl:pt-[25px] flex items-center justify-center">
                  <div className="w-[62px] h-[62px] rounded-full bg-[#D68294]">
                    <p className="text-white 3xl:text-4xl 2xl:text-3xl xl:text-2xl font-extrabold flex items-center justify-center pt-3.5">3</p>
                  </div>
                  <div className="pl-6">
                    <p className="text-[#2A2E36] 3xl:text-4xl 2xl:text-3xl xl:text-2xl font-extrabold">Start your adventure</p>
                    <p className="text-[#2A2E36] 3xl:text-2xl 2xl:text-xl xl:text-lg font-normal">Speak out your story idea or plot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>


          <div>
          <div className="flex justify-center items-center pt-20">
            <div className="pl-52 pt-52">
              <Image className='3xl:w-[280px] 3xl:h-[517px] 2xl:w-[280px] 2xl:h-[517px] xl:w-[300px] xl:h-[517px] mb-14' src={phone4} alt="" />
            </div>
            <div className="mt-[580px]">
              <Image className="xl:w-[96px] xl-[96px]" src={boy} alt=""/>
            </div>
            <div className="pl-[31px]">
              <div className="3xl:w-[645px] 3xl:h-[223px] 2xl:w-[545px] 2xl:h-[193px] xl:w-[445px] xl:h-[123px]  flex-shrink-0 rounded-lg bg-[#FCFCFC]">
                <div className="3xl:pt-[65px] 2xl:pt-[65px] xl:pt-[25px] flex items-center justify-center">
                  <div className="w-[62px] h-[62px] rounded-full bg-[#D68294]">
                    <p className="text-white 3xl:text-4xl 2xl:text-3xl xl:text-2xl font-extrabold flex items-center justify-center pt-3.5">4</p>
                  </div>
                  <div className="pl-6">
                    <p className="text-[#2A2E36] 3xl:text-4xl 2xl:text-3xl xl:text-2xl font-extrabold">Start your adventure</p>
                    <p className="text-[#2A2E36] 3xl:text-2xl 2xl:text-xl xl:text-lg font-normal">Speak out your story idea or plot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </Carousel>;
        </div>
      </div>


      {/**************************** carousel end **************************************/}

      {/**************************** section3 start **************************************/}

      <div className='bg-[#7A85DE] w-100% h-[722px]'>
        <div className='relative'>
          <Image className='absolute top-[92px] 2xl:left-[147px] 3xl:left-[147px] xl:left-[137px]' src={vector1} alt=''/>
          <Image className='absolute top-[595px] 2xl:left-[287px] 3xl:left-[382px] xl:left-[200px]' src={vector2} alt=''/>
          <Image className='absolute top-[210px] 2xl:left-[767px] 3xl:left-[899px] xl:left-[721px]' src={vector3} alt=''/>
          <Image className='absolute top-[50px] 2xl:left-[1215px] 3xl:left-[1407px] xl:left-[959px] lg:left-[703px]' src={sun} alt=''/>
        </div>
        <div className='flex items-center justify-center 3xl:pt-[55px] 3xl:pl-[87px]  2xl:pt-[55px] 2xl:pl-[87px] xl:pt-[155px] xl:pl-[87px]'>
          <div>
            <div>
              <p className='text-[#F8F7FF] text-shadow-md text-7xl font-poppins font-semibold leading-normal'>Coming soon...</p>
              <p className="text-white font-poppins text-xl font-medium leading-normal w-[410px]">Get ready to join the community Share your creation and discover stories crafted by others.</p>
            </div>
            <div className="flex items-center justify-center pr-[24px] pt-[29px]">
              <div className="w-[546px] h-[74px] bg-[#e8e8fd] rounded-full">
                <div className="pt-3 flex items-center justify-center">
                  <div className="w-[129px] h-[50px] bg-white rounded-full">
                    <p className="text-center pt-3 text-[#6470d7] font-poppins text-base font-semibold leading-normal">Notify Me</p>
                  </div>
                  <div>
                    <form action="" className="flex items-center justify-center">
                      <input type="email" className="bg-[#e8e8fd] border-[#e8e8fd] text-center w-[189px] h-[26px] outline-none" name="Email" placeholder="Enter your email here *" required title="Valid Email Format:example@example.com" />
                    </form>
                  </div>
                  <div className='pl-[132px]'>
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
          <Image className="absolute top-[0] 3xl:left-[1508px] 2xl:left-[1318px] xl:left-[1055px]"  src={buter} alt='' />
          <Image className="absolute top-[82px] left-[98px]" src={clouds4} alt='' />
          <Image className="absolute top-[130px] left-[631px]" src={Vector4} alt='' />
          <Image className="absolute top-[459px] left-0" src={boy} alt='' />
        </div>
        <div className='flex items-center justify-center'>
          <div>
            <p className="text-[#2a2e36] font-poppins 3xl:text-7xl 2xl:text-6xl xl:text-5xl font-extrabold leading-snug tracking-wider text-center xl:pt-[198px] 2xl:pt-[98px] 3xl:pt-[98px] xl:pl-[200px] 2xl:pl-[254px] 3xl:pl-[254px]">See it in action</p>
            <p className="text-[#2a2e36] font-poppins text-xl font-medium leading-normal w-[756px] xl:pl-[290px] 2xl:pl-[262px] 3xl:pl-[254px] pt-[23px]">Watch this video to see how Endless Stories transforms your child&apos;s voice input into a captivating story.</p>
          </div>
          <div className="relative 3xl:pt-[65px]  2xl:pt-[85px] xl:pt-[175px] pl-[181px] xl:pl-[61px]">
            <div>
              <Image className='3xl:w-[620px] 3xl:h-[737px]  2xl:w-[600px] 2xl:h-[700px]' src={tv} alt='' />
            </div>
            <div className='relative'>
              <video
                width="320"
                height="240"
                ref={videoRef}
                onClick={handlePlayPause} className='3xl:w-[560px] 3xl:h-[410px] 2xl:w-[435px] 2xl:h-[400px] xl:w-[329px] xl:h-[310px] 3xl:top-[-575px] 3xl:left-[10px]  2xl:top-[-556px] 2xl:left-[58px] xl:top-[-426px] xl:left-[47px] absolute rounded-[48px]' >
                <source src="/file.mp4" type="video/mp4" />
              </video>
              <button className="absolute top-[-370px] left-[280px] xl:top-[-270px] xl:left-[230px] transform -translate-x-1/2 -translate-y-1/2" onClick={handlePlayPause}>
                {isPlaying ? <BsFillPauseCircleFill className='w-24 h-24 fill-white' /> : <BsPlayCircleFill className='w-24 h-24 fill-white'/>}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/**************************** Video end **************************************/}

      {/**************************** carousel two start **************************************/}

      <div className="bg-[#7A85DE] w-full h-[722px]">
        <div className='relative'>
          <Image className="absolute top-[69px] left-[146px] xl:w-[270px] xl:h-[107px] 2xl:w-[404px] 2xl:h-[127px] " src={cloud2} alt=''/>
          <Image className="absolute top-[264px] left-[677px]"  src={co} alt=''/>
          <Image className="absolute 3xl:top-[438px] 3xl:left-[1359px] 2xl:top-[438px] 2xl:left-[1159px] xl:top-[438px] xl:left-[894px] " src={butterfly2} alt=''/>
          <Image className="absolute top-[285px] left-0" src={giraf} alt=''/>
          <Image className="absolute top-[129px] left-[1359px] xl:top-[97px] xl:left-[1029px] 2xl:top-[197px] 2xl:left-[1229px] xl:w-[110px] xl:h-[42px] 2xl:w-[135px] 2xl:h-[52px]" src={Vector7} alt=''/>
        </div>
        <div className='w-full pt-12'>
          <p className="text-white text-center font-poppins text-5xl font-semibold leading-normal my-auto pt-12">What Parents and Teachers Say <br/>About Endless Stories</p>
        </div>
        <div>
              <Carousel responsive={responsive}>
                <div>
                  <div className='flex items-center justify-center pt-[46px]'>
                  <div className="w-[932px] h-[192px] px-28">
                  <p className="text-[#EDFBFF] text-center font-poppins text-2xl font-normal leading-normal">“As a preschool teacher, I have seen the positive impact Endless Stories has had on my students. It has helped them develop their creativity and language skills. I highly recommend it to parents and teachers.”</p>
                  </div>
                  </div>
                </div>
                <div>
                  <div className='flex items-center justify-center pt-[46px]'>
                  <div className="w-[932px] h-[192px] px-28">
                  <p className="text-[#EDFBFF] text-center font-poppins text-2xl font-normal leading-normal">“As a preschool teacher, I have seen the positive impact Endless Stories has had on my students. It has helped them develop their creativity and language skills. I highly recommend it to parents and teachers.”</p>
                  </div>
                  </div>
                </div>
                <div>
                  <div className='flex items-center justify-center pt-[46px]'>
                  <div className="w-[932px] h-[192px] px-28">
                  <p className="text-[#EDFBFF] text-center font-poppins text-2xl font-normal leading-normal">“As a preschool teacher, I have seen the positive impact Endless Stories has had on my students. It has helped them develop their creativity and language skills. I highly recommend it to parents and teachers.”</p>
                  </div>
                  </div>
                </div>
              </Carousel>

              <div className='pt-10'>
                <p  className="text-[#1C2F70] text-center font-poppins text-3xl font-medium leading-normal">Ms. Johnson, Preschool Teacher</p>
              </div>
        </div>
      </div>


      {/**************************** carousel two start **************************************/}

      {/**************************** cards  start **************************************/}
      <div className='bg-[#D9DEFF] w-full h-[721px]'>
        <div >
          <div className='flex justify-center items-center'>
            <p className="text-[#2A2E36] text-center font-poppins text-5xl font-semibold leading-normal pt-14">Awesome Apps Features</p>
          </div>

          <div className="flex justify-center items-center pt-[84px]">
            <div className="flex 3xl:w-[340px] 3xl:h-[400px] 2xl:w-[300px] 2xl:h-[380px] xl:w-[240px] xl:h-[320px] flex-col justify-center items-center flex-shrink-0 rounded-[47px] bg-white bg-opacity-60 m-6">
              <div className="text-[#1E1E1E] text-center font-poppins text-lg font-medium leading-normal">
                <Image src={designthinking} alt='' />
                <p>Encourages <br/>Creativity and <br/> Learning</p>
              </div>
            </div>
            <div className="flex 3xl:w-[340px] 3xl:h-[400px] 2xl:w-[300px] 2xl:h-[380px] xl:w-[240px] xl:h-[320px] flex-col justify-center items-center flex-shrink-0 rounded-[47px] bg-white bg-opacity-60 m-6">
              <div className="text-[#1E1E1E] text-center font-poppins text-lg font-medium leading-normal">
                <Image src={easytouse} alt='' />
                <p>User-Friendly <br/>Experience</p>
              </div>
            </div>
            <div className="flex 3xl:w-[340px] 3xl:h-[400px] 2xl:w-[300px] 2xl:h-[380px] xl:w-[240px] xl:h-[320px] flex-col justify-center items-center flex-shrink-0 rounded-[47px] bg-white bg-opacity-60 m-6">
              <div className="text-[#1E1E1E] text-center font-poppins text-lg font-medium leading-normal">
                <Image src={connection} alt='' />
                <p>Connect with <br/>others via stories</p>
              </div>
            </div>
            <div className="flex 3xl:w-[340px] 3xl:h-[400px] 2xl:w-[300px] 2xl:h-[380px] xl:w-[240px] xl:h-[320px] flex-col justify-center items-center flex-shrink-0 rounded-[47px] bg-white bg-opacity-60 m-6">
              <div className="text-[#1E1E1E] text-center font-poppins text-lg font-medium leading-normal">
                <Image src={network1} alt='' />
                <p>Share your creation <br/>with others</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**************************** cards  end **************************************/}

      {/**************************** Tablat video part start **************************************/}
      <div className="bg-white h-[722px]">
  <div className="relative">
    <Image className="absolute 3xl:top-[376px] 3xl:left-[842px] 2xl:top-[376px] 2xl:left-[742px] 2xl:w-[208px] 2xl:h-[301px]  xl:top-[396px] xl:left-[582px] xl:w-[140px] xl:h-[201px]" src={fox} alt="" />
    <Image className="absolute 3xl:top-[155px] 3xl:left-[1556px] 2xl:top-[155px] 2xl:left-[1406px] 2xl:w-[132px] xl:top-[105px] xl:left-[1123px] xl:w-[132px]" src={bu} alt="" />
    <Image className="absolute top-0 left-0" src={tree1} alt="" />
    <Image className="absolute top-[558px] left-0" src={tree2} alt="" />
  </div>

  <div className="flex justify-center items-center">
    <div>
      <div className="">
        <p className="text-[#2A2E36] text-center font-poppins 3xl:text-6xl 2xl:text-5xl xl:text-4xl font-extrabold leading-[95px] pt-44">Try Endless Stories <br />for Free!</p>
      </div>
      <div className="">
        <p className="text-[#525D73] text-center font-poppins 3xl:text-lg 2xl:text-base xl:text-sm font-normal leading-[30px]">
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
            <div><Image src={play} alt="" className='w-[62px] h-[62px]'/></div>
            <div className="pl-4">
              <p className='text-black text-center font-poppins text-xs font-semibold leading-[14px]'>
                See How it works!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="2xl:pl-[328px] 3xl:pl-[318px] xl:pl-[130px] pt-[50px]">
      <div className="rounded-3xl 3xl:w-[498px] 3xl:h-[637px] 2xl:w-[478px] 2xl:h-[637px] xl:w-[410px] xl:h-[537px] border-[22px] border-black bg-[#c5c8ca]"></div>
    </div>
  </div>
</div>

      {/**************************** Tablat video part start **************************************/}




      {/**************************** Ask us anything start **************************************/}

      <div className="bg-[#7A85DE] w-full h-[652px] section-six">
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

        <div className='h-[351px] bg-white'>
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
  );
}

export default Landing;
