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

    <div className="bg-[#7A85DE] w-full h-[722px]">
        <div className='relative'>
          <Image className="absolute top-[69px] left-[146px] lg:top-[69px] lg:left-[120px] lg:w-[270px] lg:h-[107px] xl:top-[69px] xl:left-[120px] xl:w-[270px] xl:h-[107px] 2xl:w-[404px] 2xl:h-[127px]  " src={cloud2} alt=''/>
          <Image className="absolute top-[264px] left-[677px] xl:top-[264px] xl:left-[477px] lg:top-[264px] lg:left-[400px]"  src={co} alt=''/>
          <Image className="absolute 3xl:top-[438px] 3xl:left-[1359px] 2xl:top-[438px] 2xl:left-[1159px] xl:top-[438px] xl:left-[894px] lg:top-[438px] lg:left-[794px] lg:w-[310px] lg:h-[210px] " src={butterfly2} alt=''/>
          <Image className="absolute top-[285px] left-0 lg:top-[500px] lg:w-[150px] lg:h-[200px]" src={giraf} alt=''/>
          <Image className="absolute top-[129px] left-[1359px] xl:top-[97px] xl:left-[1029px] 2xl:top-[197px] 2xl:left-[1229px] xl:w-[110px] xl:h-[42px] 2xl:w-[135px] 2xl:h-[52px]" src={Vector7} alt=''/>
        </div>
        <div className='w-full pt-12 lg:pt-32'>
          <p className=" text-white text-center font-poppins text-5xl lg:text-3xl font-semibold leading-normal my-auto pt-12">What Parents and Teachers Say <br/>About Endless Stories</p>
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


      {/**************************** carousel two end **************************************/}

    </>

  );
};

export default Carouseltwo;
