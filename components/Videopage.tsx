import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Step from '@/assets/Step.gif';
import girl1 from '@/assets/girl1.png';
import Step2 from '@/assets/Step2.gif';
import Step4 from '@/assets/Step4.gif';
import boy1 from '@/assets/boy1.png';
import girl from '@/assets/girl.png';
import phone from '@/assets/phone.gif';
import boy from "@/assets/boy.png"
import star from '@/assets/star.gif';
import Link from 'next/link';
import book from "@/assets/book.png"
import cloud from "@/assets/cloud.png"
import butterfly from "@/assets/butterfly.png"
import wave from "@/assets/wave.png"
import mobilewave from '@/assets/mobilewave.png'
import cloudmob from '@/assets/cloudmob.png'

const Caruselpage = () => {
  const carouselItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  // State to keep track of the active index
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  // Callback function to handle the carousel slide change
  const handleSlideChange = (currentIndex: number) => {
    setActiveIndex(currentIndex);
  };

  const settings = {
    // Add your desired settings here, such as dots, infinite, autoplay, etc.
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i: number) => (
      <div
        className={
          i === currentSlide
            ? "dot active"
            : i < currentSlide
            ? "dot completed"
            : "dot"
        }
      >
        {i + 1}
      </div>
    ),
    beforeChange: (oldIndex: any, newIndex: React.SetStateAction<number>) => setCurrentSlide(newIndex),
  };
  const sliderRef = useRef<Slider>(null);
  

  return (
    <>

<div className=" 3xl:h-[1110px] 2xl:h-[1110px] xl:h-[720px] lg:h-[620px] bg-[#F8F7FF] pt-8 xl:pt-4 relative w-full md:hidden sm:hidden xs:hidden lg:block">
      {/* ... Other content ... */}


      <div className="flex justify-center items-center 3xl:mt-24 2xl:mt-24 ">
  {carouselItems.map((_, index) => (
    <>
      <span
        key={index}
        className={`rounded-full flex justify-center items-center  z-50 ${
          index <= currentSlide ? "border border-black" : ""
        } ${
          index === currentSlide
            ? "w-14 h-14 lg:w-12 lg:h-12 bg-[#6470D7] text-white font-bold lg:text-sm text-lg border-solid border-[8px] border-indigo-300 "
            : index < currentSlide
            ? "w-8 h-8 bg-[#6470D7] text-white font-bold text-lg"
            : "w-8 h-8 bg-[#DBDBDB] text-white font-bold text-lg"
        }`}
        onClick={() => sliderRef.current?.slickGoTo(index)}
      >
        {index + 1}

        {index === currentSlide && (
          <span className="" />
        )}
      </span>
      {index < carouselItems.length - 1 && (
        <div
          className={`w-24 h-1 ${
            index < currentSlide - 0 ? "bg-[#6470D7]" : "bg-[#DBDBDB]"
          }`}
        />
      )}
    </>
  ))}
</div>

      <div className="">
      <Slider {...settings} ref={sliderRef}>
        {carouselItems.map((_, index) => (
          <div key={index} style={{ display: index === currentSlide ? 'block' : 'none' }}>
            {/* Render your slide content here */}
            {/* For example: */}
            {index === 0 && (
            <div>
              1
            </div>
            )}
            {index === 1 && (
              <div>
                2
              </div>
            )}
            {index === 2 && (
              <div>
                3
              </div>
            )}
            {index === 3 && (
              <div>
                4
              </div>
            )}
            {/* Add more conditions for other slides */}
          </div>
        ))}
      </Slider>
      </div>
    </div>











{/*************************************** Mobile Part start ****************************************/}

    <div className='bg-[#F8F7FF] sm:h-[1170px] md:h-[1270px] xs:h-[658px] lg:hidden md:block sm:block xs:block'>
      <div className='relative'>
          <Image className='absolute w-full md:top-[974px] sm:top-[924px] xs:top-[506px]' src={mobilewave} alt='' />
          <Image className='sm:left-[450px] sm:top-[34px] md:left-[450px] md:top-[34px] xs:left-[243px] xs:top-[19px] absolute' src={cloudmob} alt='' />
      </div> 
      <div className='flex items-center justify-center md:pt-[129px] sm:pt-[129px] xs:pt-[73px]'>
        <p className='xs:w-[130px] xs:h-[30px] xs:text-xl sm:w-[230px] sm:h-[53px] sm:text-4xl md:w-[240px] md:h-[63px] md:text-4xl font-bold text-[#2A2E36]'>How it works</p>
      </div>
      <div className="flex justify-center items-center md:pb-[126px] sm:pb-[126px] xs:pb-[57px]">
        {carouselItems.map((item, index) => (
          <>
            <span
              key={index}
              className={`rounded-full flex justify-center items-center  z-50 ${
                index <= currentSlide ? "border border-black" : ""
              } ${
                index === currentSlide
                  ? "w-14 h-14 bg-[#6470D7] text-white font-bold lg:text-sm text-lg border-solid border-[8px] border-indigo-300 "
                  : index < currentSlide
                  ? "w-8 h-8 bg-[#6470D7] text-white font-bold text-lg"
                  : "w-8 h-8 bg-[#DBDBDB] text-white font-bold text-lg"
              }`}
            >
              {index + 1}

              {index === currentSlide && (
                <span className="" />
              )}
            </span>
            {index < carouselItems.length - 1 && (
              <div
                className={`md:w-24 sm:w-24 xs:w-14 h-1 ${
                  index < currentSlide - 0 ? "bg-[#6470D7]" : "bg-[#DBDBDB]"
                }`}
              />
            )}
          </>
        ))}
      </div>
      <div>
      <Slider {...settings}>
          {/* Your carousel slides here */}
          <div>
          <div className="flex justify-center items-center md:pb-[126px] sm:pb-[126px] xs:pb-[70px]">
          <div className="">
              <div className="rounded-lg bg-[#FCFCFC] md:w-[488px] md:h-[151px] sm:w-[488px] sm:h-[151px] xs:w-[275px] xs:h-[84px]">
                <div className="flex items-center justify-center xs:pt-5 sm:pt-10 md:pt-11">
                  <div className="md:w-[62px] md:h-[62px] sm:w-[62px] sm:h-[62px] xs:w-[33px] xs:h-[33px] rounded-full bg-[#D68294]">
                    <p className="text-white font-extrabold flex items-center justify-center md:pt-3.5 sm:pt-3.5 xs:pt-1">1</p>
                  </div>
                  <div className="pl-6">
                    <p className="font-extrabold xs:text-base sm:text-lg md:text-xl text-[#2A2E36]">Start your adventure</p>
                    <p className="font-normal xs:text-[10px] sm:text-sm md:text-base text-[#2A2E36]">Speak out your story idea or plot</p>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className="flex justify-center items-center">
            <div className="">
              <Image className="md:w-[104px] md:h-[70px] md:mt-[356px] sm:w-[94px] sm:h-[60px] sm:mt-[276px] xs:w-[53px] xs:h-[34px] xs:mt-[156px]" src={book} alt=""/>
            </div>
            <div className="md:w-[224px] md:h-[460px] sm:w-[213px] sm:h-[430px] xs:w-[120px] xs:h-[240px]">
              <Image className='rounded-3xl border-4 border-solid border-black ' src={Step} alt="" />
            </div>
            <div className="">
              <Image className="md:w-[179px] md:h-[104px] md:mt-[366px]  sm:w-[169px] sm:h-[94px] sm:mt-[346px]  xs:w-[84px] xs:h-[64px] xs:mt-[156px]" src={girl1} alt=""/>
            </div>
          </div>
          </div>
          <div>
          <div className="flex justify-center items-center md:pb-[126px] sm:pb-[126px] xs:pb-[78px]">
          <div className="">
              <div className="rounded-lg bg-[#FCFCFC] md:w-[488px] md:h-[151px] sm:w-[488px] sm:h-[151px] xs:w-[275px] xs:h-[84px]">
                <div className="flex items-center justify-center xs:pt-5 sm:pt-10 md:pt-11">
                  <div className="md:w-[62px] md:h-[62px] sm:w-[62px] sm:h-[62px] xs:w-[33px] xs:h-[33px] rounded-full bg-[#DE976F]">
                    <p  className="text-white font-extrabold flex items-center justify-center md:pt-3.5 sm:pt-3.5 xs:pt-1">2</p>
                  </div>
                  <div className="pl-6">
                    <p className="font-extrabold xs:text-base sm:text-lg md:text-xl text-[#2A2E36]">Pick your picture</p>
                    <p className="font-normal xs:text-[10px] sm:text-sm md:text-base text-[#2A2E36]">Sit back and listen as the story <br /> unfolds</p>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className="flex justify-center items-center md:pb-[126px] sm:pb-[126px] xs:pb-[78px]">
            <div className="">
              <Image className="md:w-[104px] md:h-[70px] md:mt-[356px] sm:w-[94px] sm:h-[60px] sm:mt-[276px] xs:w-[53px] xs:h-[34px] xs:mt-[156px]" src={book} alt=""/>
            </div>
            <div className="md:w-[224px] md:h-[460px] sm:w-[213px] sm:h-[430px] xs:w-[120px] xs:h-[240px]">
            <Image className='rounded-3xl border-4 border-solid border-black ' src={Step2} alt="" />            </div>
            <div className="">
              <Image className="md:w-[164px] md:h-[123px] md:mt-[366px]  sm:w-[154px] sm:h-[113px] sm:mt-[306px] xs:w-[94px] xs:h-[53px] xs:mt-[156px]" src={boy1} alt=""/>
            </div>
          </div>
          </div>


          <div>
          <div className="flex justify-center items-center md:pb-[126px] sm:pb-[126px] xs:pb-[78px]">
          <div className="">
              <div className="rounded-lg bg-[#FCFCFC] md:w-[488px] md:h-[151px] sm:w-[488px] sm:h-[151px] xs:w-[275px] xs:h-[84px]">
                <div className="flex items-center justify-center xs:pt-5 sm:pt-10 md:pt-11">
                  <div className="md:w-[62px] md:h-[62px] sm:w-[62px] sm:h-[62px] xs:w-[33px] xs:h-[33px] rounded-full bg-[#7AA0CD]">
                    <p className="text-white font-extrabold flex items-center justify-center md:pt-3.5 sm:pt-3.5 xs:pt-1">3</p>
                  </div>
                  <div className="pl-6">
                    <p className=" font-extrabold xs:text-base sm:text-lg md:text-xl text-[#2A2E36]">Enjoy the tale</p>
                    <p className="font-normal xs:text-[10px] sm:text-sm md:text-base text-[#2A2E36]">Sit back and listen as the story <br /> unfolds</p>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className="flex justify-center items-center">
            <div className="">
              <Image className="md:w-[104px] md:h-[70px] md:mt-[356px] sm:w-[94px] sm:h-[60px] sm:mt-[276px] xs:w-[53px] xs:h-[34px] xs:mt-[156px]" src={book} alt=""/>
            </div>
            <div className="md:w-[224px] md:h-[460px] sm:w-[213px] sm:h-[430px] xs:w-[120px] xs:h-[240px]">
            <Image className='rounded-3xl border-4 border-solid border-black' src={phone} alt="" />            </div>
            <div className="">
              <Image className="md:w-[164px] md:h-[123px] md:mt-[366px]  sm:w-[154px] sm:h-[113px] sm:mt-[306px]  xs:w-[100px] xs:h-[80px] xs:mt-[156px]" src={girl} alt=""/>
            </div>
          </div>
          </div>


          <div>
          <div className="flex justify-center items-center md:pb-[126px] sm:pb-[126px] xs:pb-[78px]">
          <div className="">
              <div className="rounded-lg bg-[#FCFCFC] md:w-[488px] md:h-[151px] sm:w-[488px] sm:h-[151px] xs:w-[275px] xs:h-[84px]">
                <div className="flex items-center justify-center xs:pt-5 sm:pt-10 md:pt-11">
                  <div className="md:w-[62px] md:h-[62px] sm:w-[62px] sm:h-[62px] xs:w-[33px] xs:h-[33px] rounded-full bg-[#98D575]">
                    <p className="text-white font-extrabold flex items-center justify-center md:pt-3.5 sm:pt-3.5 xs:pt-1">4</p>
                  </div>
                  <div className="pl-6">
                    <p className=" font-extrabold xs:text-base sm:text-lg md:text-xl text-[#2A2E36]">Keep the magic alive</p>
                    <p className="font-normal xs:text-[10px] sm:text-sm md:text-base text-[#2A2E36]">Add another page to continue <br />your story</p>
                  </div>
                </div>
              </div>
            </div>
          </div>  
          <div  className="flex justify-center items-center">
            <div className="">
              <Image className="md:w-[104px] md:h-[70px] md:mt-[356px] sm:w-[94px] sm:h-[60px] sm:mt-[276px] xs:w-[53px] xs:h-[34px] xs:mt-[156px]" src={book} alt=""/>
            </div>
            <div className="md:w-[224px] md:h-[460px] sm:w-[213px] sm:h-[430px] xs:w-[120px] xs:h-[240px]">
            <Image className='rounded-3xl border-4 border-solid border-black ' src={Step4} alt="" />            </div>
            <div className="">
              <Image className="md:w-[116px] md:h-[156px] md:mt-[326px] sm:w-[116px] sm:h-[156px] sm:mt-[306px] xs:w-[65px] xs:h-[88px] xs:mt-[156px]" src={boy} alt=""/>
            </div>
          </div>
          </div>

          {/* Add more slides as needed */}
        </Slider>
      </div>
    </div>
{/*************************************** Mobile Part end ****************************************/}










    </>
  );
};

export default Caruselpage;