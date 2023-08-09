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
    autoplaySpeed: 3000,
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

      <div className="relative">
          <Image src={cloud} className=" xl:h-[190px] 2xl:h-[210px] w-full" alt=""/>
          <div id='how' className="flex items-center justify-center"> <p className="absolute top-20 2xl:top-36 lg:top-10 items-center text-black 3xl:text-7xl 2xl:text-6xl xl:text-5xl lg:text-4xl font-bold leading-normal;">How it works</p></div>
          <Image src={wave} className="absolute w-full 3xl:top-[897px] 3xl:left-0 2xl:top-[897px] 2xl:left-0 2xl:h-[214px] xl:top-[513px] xl:left-0 xl:h-[193px] lg:top-[413px] lg:left-0 lg:h-[193px]" alt="" />
          <Image className="absolute 3xl:top-[957px] 3xl:left-[1058px] 3xl:w-[163px] 3xl:h-[104px] 2xl:top-[917px] 2xl:left-[943.01px] 2xl:w-[153px] 2xl:h-[93px] xl:top-[580px] xl:left-[743px] xl:w-[75px] xl:h-[48px] lg:top-[480px] lg:left-[643px] lg:w-[75px] lg:h-[48px]" src={book} alt=""/>
          <Image className="absolute 3xl:top-[643px] 3xl:left-[173.01px] 2xl:top-[693px] 2xl:left-[103.01px] 2xl:w-[253px] xl:top-[403px] xl:left-[93.01px] xl:w-[243px] lg:top-[343px] lg:left-[43.01px] lg:w-[203px] " src={butterfly} alt=""/>
      </div>  

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
          <div key={index} >
            {/* Render your slide content here */}
            {/* For example: */}
            {index === 0 && (
            <div>
                <div className="flex justify-center items-center pt-20 lg:pt-8 ">
                <div className="3xl:pl-52 2xl:pl-52 xl:pl-14">
                  <Image className='rounded-3xl border-4 border-solid border-black 3xl:w-[280px] 3xl:h-[517px] 2xl:w-[280px] 2xl:h-[517px] xl:w-[185px] xl:h-[336px] lg:w-[155px] lg:h-[296px]' src={Step} alt="" />
                </div>
                <div className="2xl:mt-[420px] 3xl:mt-[340px] xl:mt-[160px] lg:mt-[160px]">
                  <Image className="xl:w-[147px] xl:h-[110px] lg:w-[147px] lg:h-[110px] 2xl:w-[300px] 2xl:h-[227px] 3xl:w-[320px] 3xl:h-[237px]" src={girl1} alt=""/>
                </div>
                <div className="pl-[31px] xl:pb-24 ">
                  <div className="3xl:w-[645px] 3xl:h-[223px] 2xl:w-[545px] 2xl:h-[193px] xl:w-[477px] xl:h-[166px] lg:w-[377px] lg:h-[126px] flex-shrink-0 rounded-lg bg-[#FCFCFC]">
                    <div className="3xl:pt-[65px] 2xl:pt-[65px] xl:pt-[48px] lg:pt-[36px] flex items-center justify-center">
                      <div className="w-[62px] h-[62px] rounded-full bg-[#D68294]">
                        <p className="text-white 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-xl font-extrabold flex items-center justify-center pt-3.5">1</p>
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
            )}
            {index === 1 && (
              <div>
              <div className="flex justify-center items-center pt-20">
                <div className="2xl:pl-36 3xl:pl-56 xl:pl-28">
                <Image className='rounded-3xl border-4 border-solid border-black 3xl:w-[280px] 3xl:h-[517px] 2xl:w-[280px] 2xl:h-[517px] xl:w-[185px] xl:h-[336px] lg:w-[120px] lg:h-[236px] mb-14' src={Step2} alt="" />            </div>
                <div className="xl:mt-[80px] 2xl:mt-[380px] 3xl:mt-[380px] lg:mt-[60px]">
                  <Image className="xl:w-[171px] xl:h-[96px] lg:w-[167px] lg:h-[96px] 2xl:w-[250px] 2xl:h-[137px] 3xl:w-[355px] 3xl:h-[197px]" src={boy1} alt=""/>
                </div>
                <div className="pl-[31px] xl:pb-24 lg:pb-24 ">
                  <div className="3xl:w-[645px] 3xl:h-[223px] 2xl:w-[545px] 2xl:h-[193px] xl:w-[477px] xl:h-[166px] lg:w-[377px] lg:h-[126px] flex-shrink-0 rounded-lg bg-[#FCFCFC]">
                    <div className="3xl:pt-[65px] 2xl:pt-[65px] xl:pt-[25px] lg:pt-[36px] flex items-center justify-center">
                      <div className="w-[62px] h-[62px] rounded-full bg-[#DE976F]">
                        <p className="text-white 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-xl font-extrabold flex items-center justify-center pt-3.5">2</p>
                      </div>
                      <div className="pl-6">
                        <p className="text-[#2A2E36] 3xl:text-4xl 2xl:text-3xl xl:text-2xl font-extrabold">Pick your picture</p>
                        <p className="text-[#2A2E36] 3xl:text-2xl 2xl:text-xl xl:text-lg font-normal">Sit back and listen as the story <br /> unfolds</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            )}
            {index === 2 && (
              <div>
              <div className="flex justify-center items-center pt-20">
                <div className="3xl:pl-56 2xl:pl-56 xl:pl-28">
                <Image className='rounded-3xl border-4 border-solid border-black 3xl:w-[280px] 3xl:h-[517px] 2xl:w-[280px] 2xl:h-[517px] xl:w-[185px] xl:h-[336px] lg:w-[120px] lg:h-[236px] mb-14' src={phone} alt="" />            </div>
                <div className="xl:mt-[80px] 2xl:mt-[380px] 3xl:mt-[380px] lg:mt-[100px]">
                  <Image className="xl:w-[154px] xl:h-[124px] lg:w-[134px] lg:h-[104px] 2xl:w-[219px] 2xl:h-[174px] 3xl:w-[319px] 3xl:h-[225px]" src={girl} alt=""/>
                </div>
                <div className="pl-[31px] xl:pb-24 lg:pb-24 ">
                  <div className="3xl:w-[645px] 3xl:h-[223px] 2xl:w-[545px] 2xl:h-[193px] xl:w-[477px] xl:h-[166px] lg:w-[377px] lg:h-[126px] flex-shrink-0 rounded-lg bg-[#FCFCFC]">
                    <div className="3xl:pt-[65px] 2xl:pt-[65px] xl:pt-[25px] lg:pt-[36px] flex items-center justify-center">
                      <div className="w-[62px] h-[62px] rounded-full bg-[#7AA0CD]">
                        <p  className="text-white 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-xl font-extrabold flex items-center justify-center pt-3.5">3</p>
                      </div>
                      <div className="pl-6">
                        <p className="text-[#2A2E36] 3xl:text-4xl 2xl:text-3xl xl:text-2xl font-extrabold">​Enjoy the tale</p>
                        <p className="text-[#2A2E36] 3xl:text-2xl 2xl:text-xl xl:text-lg font-normal">Sit back and listen as the story <br /> unfolds</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            )}
            {index === 3 && (
              <div>
              <div  className="flex justify-center items-center pt-20">
                <div className="3xl:pl-56 2xl:pl-36 xl:pl-28">
                <Image className='rounded-3xl border-4 border-solid border-black 3xl:w-[280px] 3xl:h-[517px] 2xl:w-[280px] 2xl:h-[517px] xl:w-[185px] xl:h-[336px] lg:w-[120px] lg:h-[236px] mb-14' src={Step4} alt="" />            </div>
                <div className="xl:mt-[80px] 2xl:mt-[380px] 3xl:mt-[380px] lg:mt-[90px]">
                  <Image className="xl:w-[114px] xl-[154px] lg:w-[104px] lg:h-[134px] 2xl:w-[150px] 2xl:h-[200px] 3xl:w-[188px] 3xl:h-[253px]" src={boy} alt=""/>
                </div>
                <div className="pl-[100px] xl:pb-24 lg:pb-24 ">
                  <div className="3xl:w-[645px] 3xl:h-[223px] 2xl:w-[545px] 2xl:h-[193px] xl:w-[477px] xl:h-[166px] lg:w-[377px] lg:h-[126px] flex-shrink-0 rounded-lg bg-[#FCFCFC]">
                    <div className="3xl:pt-[65px] 2xl:pt-[65px] xl:pt-[25px] lg:pt-[36px] flex items-center justify-center">
                      <div className="w-[62px] h-[62px] rounded-full bg-[#98D575]">
                        <p className="text-white 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-xl font-extrabold flex items-center justify-center pt-3.5">4</p>
                      </div>
                      <div className="pl-6">
                        <p className="text-[#2A2E36] 3xl:text-4xl 2xl:text-3xl xl:text-2xl font-extrabold">Keep the magic alive</p>
                        <p className="text-[#2A2E36] 3xl:text-2xl 2xl:text-xl xl:text-lg font-normal">Add another page to continue <br />your story</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
