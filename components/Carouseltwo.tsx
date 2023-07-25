'use client'
import React from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import cloud2 from "@/assets/cloud2.png"
import co from "@/assets/co.png"
import butterfly2 from "@/assets/butterfly2.png"
import giraf from "@/assets/giraf.png"
import Vector7 from "@/assets/Vector7.png"


const Carouseltwo = () => {

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
  return (

    <>
    {/**************************** carousel two start **************************************/}

    <div className="bg-[#7A85DE] w-full 3xl:h-[722px] 2xl:h-[722px] xl:h-[722px] lg:h-[722px] md:h-[852px] sm:h-[842px] xs:h-[447px]">
        <div className='relative'>
          <Image className="absolute top-[69px] left-[146px] lg:top-[69px] lg:left-[120px] lg:w-[270px] lg:h-[107px] xl:top-[69px] xl:left-[120px] xl:w-[270px] xl:h-[107px] 2xl:w-[404px] 2xl:h-[127px] md:w-[197px] md:h-[62px] md:top-[81px] md:left-[364px] sm:w-[197px] sm:h-[62px] sm:top-[81px] sm:left-[364px] xs:w-[111px] xs:h-[34px] xs:top-[46px] xs:left-[205px] " src={cloud2} alt=''/>
          <Image className="absolute 3xl:top-[264px] 3xl:left-[677px] 3xl:w-[300px] 3xl:h-[234px] 2xl:top-[264px] 2xl:left-[657px] 2xl:w-[300px] 2xl:h-[234px] xl:top-[264px] xl:left-[477px] lg:top-[264px] lg:left-[400px] md:left-64 md:top-[371px] md:w-[243px] md:h-[190px] sm:left-52 sm:top-[371px] sm:w-[243px] sm:h-[190px] xs:top-[189px] xs:left-32 xs:w-[137px] xs:h-[107px] "  src={co} alt=''/>
          <Image className="absolute 3xl:top-[438px] 3xl:left-[1359px] 2xl:top-[438px] 2xl:left-[1159px] xl:top-[438px] xl:left-[894px] lg:top-[438px] lg:left-[794px] lg:w-[310px] lg:h-[210px] xs:w-[124px] xs:h-[75px] xs:top-[368px] xs:left-[266px] sm:w-[220px] sm:h-[133px] sm:top-[654px] sm:left-[419px] md:w-[220px] md:h-[133px] md:top-[654px] md:left-[549px]" src={butterfly2} alt=''/>
          <Image className="absolute top-[285px] left-0 lg:top-[500px] lg:w-[150px] lg:h-[200px] xs:w-[78px] xs:h-[137px] xs:top-[300px] sm:w-[138px] sm:h-[243px] sm:top-[586px] md:w-[138px] md:h-[243px] md:top-[586px]" src={giraf} alt=''/>
          <Image className="absolute top-[129px] left-[1359px] xl:top-[97px] xl:left-[1029px] 2xl:top-[197px] 2xl:left-[1229px] xl:w-[110px] xl:h-[42px] 2xl:w-[135px] 2xl:h-[52px] md:hidden sm:hiddem xs:hidden lg:block" src={Vector7} alt=''/>
        </div>
        <div className='w-full 3xl:pt-28 2xl:pt-28 xl:pt-28 lg:pt-32 xs:pt-20 md:pt-24 sm:pt-60'>
          <p className=" text-white text-center font-poppins 3xl:text-5xl 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl sm:text-4xl xs:text-lg font-semibold leading-normal my-auto 3xl:pt-12 2xl:pt-12 xl:pt-12 lg:pt-12 md:pt-36">What Parents and Teachers Say <br/>About Endless Stories</p>
        </div>
        <div>
              <Carousel responsive={responsive}>
                <div>
                  <div className='flex items-center justify-center pt-[46px] xs:pt-[35px]'>
                  <div className="3xl:w-[932px] 3xl:h-[192px] 2xl:w-[932px] 2xl:h-[192px] xl:w-[932px] xl:h-[192px] lg:w-[932px] lg:h-[192px] px-28">
                    <p className="text-[#EDFBFF] text-center font-poppins 3xl:text-2xl 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-3xl sm:text-3xl xs:text-xs font-normal leading-normal">“As a preschool teacher, I have seen the positive impact Endless Stories has had on my students. It has helped them develop their creativity and language skills. I highly recommend it to parents and teachers.”</p>
                  </div>
                  </div>
                </div>
                <div>
                  <div className='flex items-center justify-center pt-[46px] xs:pt-[37px]'>
                  <div className="w-[932px] h-[192px] px-28">
                    <p className="text-[#EDFBFF] text-center font-poppins 3xl:text-2xl 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl xs:text-xs font-normal leading-normal">“As a preschool teacher, I have seen the positive impact Endless Stories has had on my students. It has helped them develop their creativity and language skills. I highly recommend it to parents and teachers.”</p>
                  </div>
                  </div>
                </div>
                <div>
                  <div className='flex items-center justify-center pt-[46px] xs:pt-[37px]'>
                  <div className="w-[932px] h-[192px] px-28">
                    <p className="text-[#EDFBFF] text-center font-poppins 3xl:text-2xl 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl xs:text-xs font-normal leading-normal">“As a preschool teacher, I have seen the positive impact Endless Stories has had on my students. It has helped them develop their creativity and language skills. I highly recommend it to parents and teachers.”</p>
                  </div>
                  </div>
                </div>
              </Carousel>

              <div className='3xl:pt-10 2xl:pt-10 xl:pt-10 lg:pt-10 md:pt-10 sm:pt-10 xs:pt-0 flex items-center justify-center'>
                <p  className="text-[#1C2F70] text-center font-poppins 3xl:text-3xl 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl 3xl:w-[545px] 3xl:h-[51px] 2xl:w-[545px] 2xl:h-[51px] xl:w-[545px] xl:h-[51px] lg:w-[545px] lg:h-[51px] md:w-[229px] md:h-[64px] sm:w-[229px] sm:h-[64px] xs:w-[162px] xs:h-[96px] font-medium leading-normal">Ms. Johnson, Preschool Teacher</p>
              </div>
        </div>
      </div>


      {/**************************** carousel two end **************************************/}

    </>

  );
};

export default Carouseltwo;
