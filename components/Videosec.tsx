import React, { useRef, useState } from 'react';
import buter from "@/assets/buter.png"
import clouds4 from "@/assets/clouds4.png"
import boy from "@/assets/boy.png"
import Vector4 from "@/assets/Vector4.png"
import {BsPlayCircleFill} from 'react-icons/bs'
import Image from 'next/image';
import buter2 from '@/assets/butter2.png'
import cloudmob1 from '@/assets/cloudmob1.png'
const Videosec = ()=>{

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
    return(
        <>

              {/**************************** Video start **************************************/}
      <div className="bg-white w-full h-[795px] lg:block md:hidden sm:hidden xs:hidden  ">
        <div className='relative '>
          <Image className="absolute top-[0] 3xl:left-[1508px] 2xl:left-[1318px] xl:left-[1055px] lg:left-[800px]"  src={buter} alt='' />
          <Image className="absolute top-[82px] left-[98px]" src={clouds4} alt='' />
          <Image className="absolute top-[130px] left-[631px]" src={Vector4} alt='' />
          <Image className="absolute top-[459px] lg:top-[509px] left-0" src={boy} alt='' />
        </div>
        <div className='flex items-center justify-center'>
          <div className='pt-32 xl:pt-40 lg:pt-28 3xl:mr-[198px] 2xl:mr-[168px] xl:mr-[138px] lg:mr-[108px]'>
            <p className="text-[#2a2e36] 3xl:text-7xl 2xl:text-6xl xl:text-5xl lg:text-[34px] font-extrabold leading-snug tracking-wider text-center ">See it in action</p>
            <p className="text-[#2a2e36] 3xl:w-[630px] 3xl:h-[108px] 3xl:text-3xl 3xl:pt-[23px] 2xl:w-[566px] 2xl:h-[108px] 2xl:text-2xl 2xl:pt-[23px] xl:w-[456px] xl:h-[108px] xl:text-2xl xl:pt-[23px] xl:pl-10 lg:w-[426px] lg:h-[108px] lg:text-xl lg:pt-[13px] lg:pl-[75px] ">Watch this video to see how Endless Stories transforms your child&apos;s voice input into a captivating story.</p>
          </div>
          <div className="relative mt-56">
            <div>
            <video
                ref={videoRef}
                onClick={handlePlayPause} className='2xl:pt-8 xl:pt-8 lg:pt-8  3xl:w-[503px] 3xl:h-[501px] 2xl:w-[495px] 2xl:h-[495px] xl:w-[475px] xl:h-[475px] lg:w-[475px] lg:h-[475px] lg:pr-8' >
                <source src="/kin.mp4" type="video/mp4" />
              </video>
              <button className="absolute 3xl:top-[280px] 3xl:left-[250px] 2xl:top-[280px] 2xl:left-[250px]  xl:top-[280px] xl:left-[230px] lg:top-[280px] lg:left-[220px] transform -translate-x-1/2 -translate-y-1/2" onClick={handlePlayPause}>
                {isPlaying ? '' : <BsPlayCircleFill className='w-24 h-24 fill-white'/>}
              </button>
              </div>
          </div>
        </div>
      </div>
      {/**************************** Video end **************************************/}


                    {/**************************** Video Mobile start **************************************/}
       <div className="bg-white w-full md:h-[1047px] sm:h-[1047px] xs:h-[589px] lg:hidden md:block sm:block xs:block  ">
        <div className='relative '>
          <Image className="absolute top-[55px] left-[0px] "  src={buter2} alt='' />
          <Image className="absolute top-[55px] sm:left-[464px] sm:w-[142px] sm:h-[53px] md:left-[464px] md:w-[142px] md:h-[53px] xs:left-[261px] xs:w-[80px] xs:h-[30px] "  src={cloudmob1} alt='' />
          <Image className="absolute md:top-[917px] md:w-[149px] md:h-[200px] sm:top-[917px] sm:w-[149px] sm:h-[200px] xs:top-[517px] xs:w-[84px] xs:h-[112px] left-0" src={boy} alt='' />
        </div>

          <div className='md:pt-40 sm:pt-40 xs:pt-24 flex items-center justify-center'>
            <p className="text-[#2a2e36] md:text-4xl sm:text-4xl xs:text-xl font-extrabold leading-snug tracking-wider text-center ">See it in action</p>
          </div>

          <div className='flex items-center justify-center'>
          <p className="text-[#2a2e36] text-center md:w-[500px] md:h-[54px] md:text-base md:pt-[23px] sm:w-[500px] sm:h-[54px] sm:text-2xl sm:pt-[23px] xs:w-[281px] xs:h-[30px] xs:text-[10px] xs:pt-[23px] ">Watch this video to see how Endless Stories transforms your child&apos;s voice input into a captivating story.</p>
          </div>

        <div className='flex items-center justify-center'> 
        <div className="relative mt-[67px] sm:pt-[47px]">
            <div>
            <video
                ref={videoRef}
                onClick={handlePlayPause} className='md:w-[583px] md:h-[559px] sm:w-[531px] sm:h-[529px]  xs:w-[300px] xs:h-[298px]  ' >
                <source src="/kin.mp4" type="video/mp4" />
              </video>
              <button className="absolute md:top-[300px] md:left-[280px] sm:top-[280px] sm:left-[250px]  xs:top-[140px] xs:left-[160px] lg:top-[280px] lg:left-[220px] transform -translate-x-1/2 -translate-y-1/2" onClick={handlePlayPause}>
                {isPlaying ? '' : <BsPlayCircleFill className='w-24 h-24 fill-white'/>}
              </button>
              </div>
          </div>
        </div>
      </div>
      {/**************************** Video Mobile end **************************************/}
        </>
    )
}

export default Videosec