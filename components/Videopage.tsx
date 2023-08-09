import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Step from '@/assets/Step.gif'
import phone from '@/assets/phone.gif';
import Step2 from '@/assets/Step2.gif';
import Step4 from '@/assets/Step4.gif';
import book from "@/assets/book.png"
import cloud from "@/assets/cloud.png"
import butterfly from "@/assets/butterfly.png"
import wave from "@/assets/wave.png"
import mobilewave from '@/assets/mobilewave.png'
import cloudmob from '@/assets/cloudmob.png'
import boy1 from '@/assets/boy1.png';
import girl from '@/assets/girl.png';
import girl1 from '@/assets/girl1.png';
import boy from "@/assets/boy.png"

import AdventureStep from './Adventurestep';
import Adventurepart from './Adventurepart';

const steps = [Step, Step2, phone, Step4];

export default function Home() {
  const [text, setText] = useState(1);
  const [gif, setGif] = useState('/gif1.gif');
  const [step, setStep] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => {
        const nextText = prevText === 4 ? 1 : prevText + 1;
        setGif(`/gif${nextText}.gif`);
        setStep(nextText - 1);
        return nextText;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center ">

      <div className=" 3xl:h-[1110px] 2xl:h-[1110px] xl:h-[720px] lg:h-[620px] bg-[#F8F7FF]  xl:pt-4 relative w-full md:hidden sm:hidden xs:hidden lg:block">
      {/* ... Other content ... */}

      <div className="relative  ">
          <Image src={cloud} className=" xl:h-[190px] 2xl:h-[210px] w-full" alt=""/>
          <div id='how' className="flex items-center justify-center"> <p className="absolute 3xl:top-14 2xl:top-16 xl:top-10  lg:top-10 items-center text-black 3xl:text-7xl 2xl:text-6xl xl:text-5xl lg:text-4xl font-bold leading-normal;">How it works</p></div>
          <Image src={wave} className="absolute w-full 3xl:top-[757px] 3xl:left-0 2xl:top-[907px] 2xl:left-0 2xl:h-[214px] xl:top-[523px] xl:left-0 xl:h-[193px] lg:top-[423px] lg:left-0 lg:h-[193px]" alt="" />
          <Image className="absolute 3xl:top-[857px] 3xl:left-[1058px] 3xl:w-[163px] 3xl:h-[104px] 2xl:top-[857px] 2xl:left-[943.01px] 2xl:w-[153px] 2xl:h-[93px] xl:top-[580px] xl:left-[743px] xl:w-[75px] xl:h-[48px] lg:top-[480px] lg:left-[643px] lg:w-[75px] lg:h-[48px]" src={book} alt=""/>
          <Image className="absolute 3xl:top-[643px] 3xl:left-[83.01px] 2xl:top-[693px] 2xl:left-[103.01px] 2xl:w-[253px] xl:top-[303px] xl:left-[93.01px] xl:w-[243px] lg:top-[343px] lg:left-[43.01px] lg:w-[203px] " src={butterfly} alt=""/>
      </div>  
      <div className="flex items-center justify-center pb-4 z-50 relative">
  {[1, 2, 3, 4].map((num, index) => (
    <div key={num} className="pl-28 z-50 ">
      <button
        key={num}
        onClick={() => setStep(num - 1)}
        className={
          num === step + 1
            ? " w-14 h-14 rounded-full lg:w-12 lg:h-12 bg-[#6470D7] text-white font-bold lg:text-sm text-lg border-solid border-[8px] border-indigo-300"
            : num < step + 1
            ? " w-8 h-8 rounded-full bg-[#6470D7] text-white font-bold text-lg"
            : " w-8 h-8 rounded-full bg-[#DBDBDB] text-white font-bold text-lg"
        }
      >
        {num}
      </button>
    </div>
  ))}
  <div className={`absolute top-[] xl:left-[480px] xl:right-[360px] 2xl:left-[590px] 2xl:right-[480px] 3xl:left-[680px] 3xl:right-[590px] gl:left-[580px] gl:right-[460px] lg:left-[340px] lg:right-[240px] h-1 ${
          step - 0 ? 'bg-[#6470D7]' : 'bg-[#DBDBDB]'
        }`}></div>
</div>

      <div className="flex justify-center items-center  ">
      <Image
          className='z-50 rounded-3xl border-4 border-solid border-black 3xl:w-[280px] 3xl:h-[517px] 2xl:w-[280px] 2xl:h-[517px] xl:w-[185px] xl:h-[336px] lg:w-[155px] lg:h-[296px]'
          src={steps[step]}
          alt=""
        />
        <div className='z-50'>
        {step === 0 && <Adventurepart  imageSrc={girl1}  imageClassName="xl:w-[147px] xl:h-[110px] lg:w-[147px] lg:h-[110px] 2xl:w-[300px] 2xl:h-[227px] 3xl:w-[320px] 3xl:h-[237px]" divClassName="2xl:mt-[420px] 3xl:mt-[340px] xl:mt-[260px] lg:mt-[160px]"  />}
        {step === 1 && <Adventurepart  imageSrc={boy1}  imageClassName=" xl:w-[171px] xl:h-[96px] lg:w-[167px] lg:h-[96px] 2xl:w-[250px] 2xl:h-[137px] 3xl:w-[355px] 3xl:h-[197px]" divClassName="xl:mt-[280px] 2xl:mt-[480px] 3xl:mt-[380px] lg:mt-[60px]" />}
        {step === 2 && <Adventurepart  imageSrc={girl}  imageClassName="xl:w-[154px] xl:h-[124px] lg:w-[134px] lg:h-[104px] 2xl:w-[219px] 2xl:h-[174px] 3xl:w-[319px] 3xl:h-[225px]" divClassName="xl:mt-[280px] 2xl:mt-[480px] 3xl:mt-[380px] lg:mt-[100px]"/>}
        {step === 3 && <Adventurepart  imageSrc={boy}  imageClassName=" xl:w-[114px] xl-[154px] lg:w-[104px] lg:h-[134px] 2xl:w-[150px] 2xl:h-[200px] 3xl:w-[188px] 3xl:h-[253px]" divClassName="xl:mt-[280px] 2xl:mt-[380px] 3xl:mt-[380px] lg:mt-[90px]"/>}
        </div>
         <div className='z-50 ' >{step === 0 && <AdventureStep stepNumber={1} title="Start your adventure" description="Speak out your story idea or plot"  />}
        {step === 1 && <AdventureStep stepNumber={2} title="Pick your picture" description="Select an image that captures your imagination"  />}
        {step === 2 && <AdventureStep stepNumber={3} title="​Enjoy the tale" description="Sit back and listen as the story unfolds"  />}
        {step === 3 && <AdventureStep stepNumber={4} title="Keep the magic alive" description="Add another page to continue your story" />}
        </div>
      </div>
      </div>
    </div>


  );
}
