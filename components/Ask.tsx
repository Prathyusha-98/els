'use client'
  import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Image from 'next/image';
import cloud2 from "@/assets/cloud2.png"
import Vector7 from "@/assets/Vector7.png"
import Vector6 from "@/assets/Vector6.png"
import path from "@/assets/Path.png"

const Ask = () => {

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

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleFocus = (event: { target: { placeholder: string; }; }) => {
        event.target.placeholder = "";
      };
      const handleBlur =
      (placeholder: string) =>
      (event: React.FocusEvent<HTMLInputElement>) => {
        event.target.placeholder = placeholder;
      };

      const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: '',
      });
    
      const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
          const response = await fetch('/api/feedback', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            // Email sent successfully
            alert('Feedback submitted successfully!');
          } else {
            alert('Failed to submit feedback. Please try again later.');
          }
        } catch (error) {
          console.error('Error sending feedback:', error);
          alert('Failed to submit feedback. Please try again later.');
        }
      };
    return(
        <>
         {/**************************** Ask us anything start **************************************/}

      <div className="bg-[#7A85DE] w-full 3xl:h-[652px] 2xl:h-[652px] xl:h-[652px] lg:h-[652px] md:h-[824px] sm:h-[824px] xs:h-[464px] section-six">
          <div className="relative">
            <Image className="absolute 3xl:top-[82px] 2xl:left-0 2xl:top-[82px] xl:top-[62px] xl:left-[9px] xl:w-[308px] lg:top-[62px] lg:left-[9px] lg:w-[308px] 3xl:left-0 3xl:w-[418px] sm:w-[236px] sm:h-[78px] xs:w-[133px] xs:h-[43px] md:w-[236px] md:h-[78px]" src={cloud2} alt=""/>
            <Image className="absolute 3xl:top-[100px] 3xl:left-[1324px] 2xl:top-[100px] 2xl:left-[1224px] xl:top-[100px] xl:left-[1024px] lg:top-[100px] lg:left-[824px] sm:w-[115px] sm:h-[46px] sm:top-[629px] sm:left-[288px] md:w-[115px] md:h-[46px] md:top-[629px] md:left-[288px] xs:w-[65px] xs:h-[26px] xs:top-[354px] xs:left-[162px]" src={Vector7} alt=""/>
            <Image className="absolute 3xl:top-[135.15px] 3xl:left-[1420px] 2xl:top-[185.15px] 2xl:left-[1220px] 2xl:w-[280px] xl:top-[160px] xl:left-[1060px] xl:w-[200px] lg:top-[160px] lg:left-[760px] lg:w-[200px] gl:left-[1160px] sm:w-[231px] sm:h-[94px] sm:left-[373px] sm:top-[652px] md:w-[231px] md:h-[94px] md:left-[373px] md:top-[652px] xs:w-[130px] xs:h-[53px] xs:left-[210px] xs:top-[367px]" src={Vector6} alt=""/>
          </div>
          <div className="3xl:pt-[148px] 2xl:pt-[158px] xl:pt-[168px] lg:pt-[178px] gl:pt-[138px] md:pt-[188px] sm:pt-[198px] xs:pt-12">
            <p className="text-white text-center 3xl:text-4xl 2xl:text-4xl gl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl xs:text-xl font-semibold">Ask us anything</p>
          </div>
          <div className="flex items-center justify-center">
            <form action="" method="post" onSubmit={handleSubmit}>
              <div className="pt-12 xs:pt-4">
                <input onBlur={handleBlur("Full Name")} onFocus={handleFocus} className="p-8 xs:p-5 placeholder:float-left  bg-white border-white rounded-lg 3xl:w-[718px] 2xl:w-[718px] xl:w-[718px] lg:w-[480px] md:w-[430px] sm:w-[430px] xs:w-[282px] xs:h-6 h-14 outline-none" type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required />
              </div>
              <div className="pt-4 ">
                <input onBlur={handleBlur("Email")} onFocus={handleFocus} className="p-8 xs:p-5 placeholder:float-left  bg-white border-white rounded-lg 3xl:w-[718px] 2xl:w-[718px] xl:w-[718px] lg:w-[480px] md:w-[430px] sm:w-[430px] xs:w-[282px] xs:h-6 h-14 outline-none"  
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email" required title="Valid Email Format:example@example.com" />
              </div>
              <div className="pt-4">
                <input onBlur={handleBlur("Message")} onFocus={handleFocus} className="p-8 placeholder:float-left  bg-white border-white rounded-lg 3xl:w-[718px] 2xl:w-[718px] xl:w-[718px] lg:w-[480px] md:w-[430px] sm:w-[430px] xs:w-[282px] xs:h-[56px] h-36 outline-none"       name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required />
              </div>
              <div className="pt-10 ">
                <button className="bg-[#6470D7] border-[#6470D7] rounded-md text-center text-white 3xl:w-[718px] 2xl:w-[718px] xl:w-[718px] lg:w-[480px] md:w-[430px] sm:w-[430px] xs:w-[282px] xs:h-10 xs:py-2 h-14 outline-none">Submit</button>
              </div>
            </form>
          </div>
        </div>
        {/**************************** Ask us anything end **************************************/}

        <div className='3xl:h-[351px] 2xl:h-[351px] xl:h-[351px] lg:h-[351px] md:h-[330px] sm:h-[330px] xs:h-[186px] bg-white'>
          <div className='flex items-center justify-center'>
          <p className="3xl:pt-[89px] 2xl:pt-[89px] xl:pt-[89px] lg:pt-[89px] md:pt-[60px] sm:pt-[60px] xs:pt-[34px] text-[var(--dark,#0A142F)] text-center font-medium 3xl:text-2xl 2xl:text-2xl xl:text-2xl ld:text-2xl md:text-2xl sm:text-2xl xs:text-xl 3xl:w-[703px] xs:w-[221px] 2xl:w-[703px] xl:w-[703px] md:w-[703px] sm:w-[703px] leading-normal">Subscribe for the new updates !</p>
          </div>
        <div className="flex items-center justify-center pr-[24px] 3xl:pt-[29px] 2xl:pt-[29px] xl:pt-[29px] lg:pt-[29px] md:pt-[29px] sm:pt-[29px] xs:pt-[10px]">
              <div className="3xl:w-[546px] 3xl:h-[74px] 2xl:w-[546px] 2xl:h-[74px] xl:w-[546px] xl:h-[74px] lg:w-[546px] lg:h-[74px] md:w-[546px] md:h-[74px] sm:w-[546px] sm:h-[74px] xs:w-[282px] xs:h-[35px] bg-[#e8e8fd] rounded-full">
                <div className="3xl:pt-3 2xl:pt-3 xl:pt-3 lg:pt-3 md:pt-2 sm:pt-2 xs:pt-1.5 flex items-center justify-center">
                  
                  <div>
                    <form action="" className="flex items-center justify-center">
                      <input onBlur={handleBlur("Enter your email here *")} onFocus={handleFocus} type="email" className=" bg-[#e8e8fd] border-[#e8e8fd] 3xl:w-[189px] 3xl:h-[26px] 2xl:w-[189px] 2xl:h-[26px] xl:w-[189px] xl:h-[26px] lg:w-[189px] lg:h-[26px] md:w-[189px] md:h-[26px] sm:w-[189px] sm:h-[26px] xs:w-[111px] xs:h-[15px] outline-none" name="Email" placeholder="Enter your email here *" required title="Valid Email Format:example@example.com" />
                    </form>
                  </div>
                  <div className='3xl:pl-[258px] 2xl:pl-[258px] xl:pl-[258px] lg:pl-[258px] md:pl-[258px] sm:pl-[258px] xs:pl-[120px]'>
                    <div className="3xl:w-[50px] 3xl:h-[50px] 2xl:w-[50px] 2xl:h-[50px] xl:w-[50px] xl:h-[50px] lg:w-[50px] lg:h-[50px] md:w-[50px] md:h-[50px] sm:w-[50px] sm:h-[50px] xs:w-[24px] xs:h-[24px] bg-[#6470d7] rounded-full">
                      <div className="flex items-center justify-center 3xl:pt-4 2xl:pt-4 xl:pt-4 lg:pt-4 md:pt-4 sm:pt-4 xs:pt-2">
                        <Image className='3xl:w-[20px] 3xl:h-[20px] 2xl:w-[20px] 2xl:h-[20px] xl:w-[20px] xl:h-[20px] lg:w-[20px] lg:h-[20px] md:w-[20px] md:h-[20px]  xs:w-[9px] xs:h-[9px]xs:w-[9px] xs:h-[9px] ' alt='' src={path} />
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
        </>
    )
}

export default Ask