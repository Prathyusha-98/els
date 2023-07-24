import React, { useState } from 'react';
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
    speed: 500,
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

  

  return (
    <div className=" 3xl:h-[1110px] xl:h-[999px] 2xl:h-[1110px] bg-[#F8F7FF] pt-8 relative w-full">
      {/* ... Other content ... */}

      <div className="relative">
          <Image src={cloud} className=" xl:h-[190px] 2xl:h-[210px] w-full" alt=""/>
          <div className="flex items-center justify-center"> <p className="absolute top-20 items-center text-black text-7xl font-bold leading-normal;">How it works</p></div>
          <Image src={wave} className="absolute 3xl:top-[897px] 3xl:left-0 2xl:top-[897px] 2xl:left-0 xl:top-[797px] xl:left-0 xl:h-[204px] 2xl:h-[214px]" alt="" />
          <Image className="absolute 3xl:top-[957px] 3xl:left-[1058px] 2xl:top-[917px] 2xl:left-[843.01px] xl:top-[827px] xl:left-[743px] xl:w-[133px] 2xl:w-[153px]" src={book} alt=""/>
          <Image className="absolute 3xl:top-[643px] 3xl:left-[173.01px] 2xl:top-[693px] 2xl:left-[103.01px] xl:top-[593px] xl:left-[93.01px] xl:w-[243px] 2xl:w-[253px]" src={butterfly} alt=""/>
      </div>  

      <div className="flex justify-center items-center 3xl:mt-24 2xl:mt-24 xl:mt-14">
  {carouselItems.map((item, index) => (
    <>
      <span
        key={index}
        className={`rounded-full flex justify-center items-center  z-50 ${
          index <= currentSlide ? "border border-black" : ""
        } ${
          index === currentSlide
            ? "w-14 h-14 bg-[#6470D7] text-white font-bold text-lg border-solid border-[8px] border-indigo-300 "
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
          className={`w-24 h-1 ${
            index < currentSlide - 0 ? "bg-[#6470D7]" : "bg-[#DBDBDB]"
          }`}
        />
      )}
    </>
  ))}
</div>

      <div className="border-8 border-black">
      <Slider {...settings}>
          {/* Your carousel slides here */}
          <div>
          <div className="flex justify-center items-center pt-20">
            <div className="pl-24 xl:pl-44">
              <Image className='rounded-3xl border-8 border-black 3xl:w-[280px] 3xl:h-[517px] 2xl:w-[280px] 2xl:h-[517px] xl:w-[280px] xl:h-[517px] mb-14' src={Step} alt="" />
            </div>
            <div className="2xl:mt-[420px] 3xl:mt-[420px] xl:mt-[380px]">
              <Image className="xl:w-[220px] xl:h-[137px]" src={girl1} alt=""/>
            </div>
            <div className="">
              <div className="3xl:w-[645px] 3xl:h-[223px] 2xl:w-[545px] 2xl:h-[193px] xl:w-[445px] xl:h-[123px]  flex-shrink-0 rounded-lg bg-[#FCFCFC]">
                <div className="3xl:pt-[65px] 2xl:pt-[65px] xl:pt-[25px] flex items-center justify-center">
                  <div className="w-[62px] h-[62px] rounded-full bg-[#D68294]">
                    <p  className="text-white 3xl:text-4xl 2xl:text-3xl xl:text-2xl font-extrabold flex items-center justify-center pt-3.5">1</p>
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
            <div className="2xl:pl-36 3xl:pl-56 xl:pl-48">
            <Image className='rounded-3xl border-8 border-black 3xl:w-[280px] 3xl:h-[517px] 2xl:w-[280px] 2xl:h-[517px] xl:w-[280px] xl:h-[517px]  mb-14' src={Step2} alt="" />            </div>
            <div className="mt-[380px]">
              <Image className="xl:w-[200px] xl-[120px] 2xl:w-[250px] 2xl:h-[137px] 3xl:w-[355px] 3xl:h-[197px]" src={boy1} alt=""/>
            </div>
            <div className="">
              <div className="3xl:w-[645px] 3xl:h-[223px] 2xl:w-[545px] 2xl:h-[193px] xl:w-[445px] xl:h-[123px]  flex-shrink-0 rounded-lg bg-[#FCFCFC]">
                <div className="3xl:pt-[65px] 2xl:pt-[65px] xl:pt-[25px] flex items-center justify-center">
                  <div className="w-[62px] h-[62px] rounded-full bg-[#D68294]">
                    <p className="text-white 3xl:text-4xl 2xl:text-3xl xl:text-2xl font-extrabold flex items-center justify-center pt-3.5">2</p>
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


          <div>
          <div className="flex justify-center items-center pt-20">
            <div className="pl-48  xl:pl-48">
            <Image className='rounded-3xl border-8 border-black 3xl:w-[280px] 3xl:h-[517px] 2xl:w-[280px] 2xl:h-[517px] xl:w-[280px] xl:h-[517px] mb-14' src={phone} alt="" />            </div>
            <div className="mt-[380px]">
              <Image className="xl:w-[180px] xl-[280px] " src={girl} alt=""/>
            </div>
            <div className="pl-[31px]">
              <div className="3xl:w-[645px] 3xl:h-[223px] 2xl:w-[545px] 2xl:h-[193px] xl:w-[445px] xl:h-[123px]  flex-shrink-0 rounded-lg bg-[#FCFCFC]">
                <div className="3xl:pt-[65px] 2xl:pt-[65px] xl:pt-[25px] flex items-center justify-center">
                  <div className="w-[62px] h-[62px] rounded-full bg-[#D68294]">
                    <p  className="text-white 3xl:text-4xl 2xl:text-3xl xl:text-2xl font-extrabold flex items-center justify-center pt-3.5">3</p>
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


          <div>
          <div  className="flex justify-center items-center pt-20">
            <div className="pl-32 xl:pl-48">
            <Image className='rounded-3xl border-8 border-black 3xl:w-[280px] 3xl:h-[517px] 2xl:w-[280px] 2xl:h-[517px] xl:w-[280px] xl:h-[517px] mb-14' src={Step4} alt="" />            </div>
            <div className="mt-[380px]">
              <Image className="xl:w-[100px] xl-[150px] 2xl:w-[150px] 2xl:h-[200px] 3xl:w-[188px] 3xl:h-[253px]" src={boy} alt=""/>
            </div>
            <div className="pl-[100px]">
              <div className="3xl:w-[645px] 3xl:h-[223px] 2xl:w-[545px] 2xl:h-[193px] xl:w-[445px] xl:h-[123px]  flex-shrink-0 rounded-lg bg-[#FCFCFC]">
                <div className="3xl:pt-[65px] 2xl:pt-[65px] xl:pt-[25px] flex items-center justify-center">
                  <div className="w-[62px] h-[62px] rounded-full bg-[#D68294]">
                    <p className="text-white 3xl:text-4xl 2xl:text-3xl xl:text-2xl font-extrabold flex items-center justify-center pt-3.5">4</p>
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

          {/* Add more slides as needed */}
        </Slider>
      </div>
    </div>
  );
};

export default Caruselpage;
