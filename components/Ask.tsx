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

      <div className="bg-[#7A85DE] w-full h-[652px] section-six">
          <div className="relative">
            <Image className="absolute 3xl:top-[82px] 2xl:left-0 2xl:top-[82px] xl:top-[62px] xl:left-[9px] xl:w-[308px] lg:top-[62px] lg:left-[9px] lg:w-[308px] 3xl:left-0 3xl:w-[418px]" src={cloud2} alt=""/>
            <Image className="absolute 3xl:top-[100px] 3xl:left-[1324px] 2xl:top-[100px] 2xl:left-[1224px] xl:top-[100px] xl:left-[1024px] lg:top-[100px] lg:left-[824px]" src={Vector7} alt=""/>
            <Image className="absolute 3xl:top-[135.15px] 3xl:left-[1420px] 2xl:top-[185.15px] 2xl:left-[1220px] 2xl:w-[280px] xl:top-[160px] xl:left-[1060px] xl:w-[200px] lg:top-[160px] lg:left-[760px] lg:w-[200px]" src={Vector6} alt=""/>
          </div>
          <div className="pt-[88px]">
            <p className="text-white text-center text-4xl font-semibold">Ask us anything</p>
          </div>
          <div className="flex items-center justify-center">
            <form action="" method="post" onSubmit={handleSubmit}>
              <div className="pt-12">
                <input onBlur={handleBlur("Full Name")} onFocus={handleFocus} className="p-8 placeholder:float-left  bg-white border-white rounded-lg w-[718px] lg:w-[480px] h-14 outline-none"             type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required />
              </div>
              <div className="pt-4">
                <input onBlur={handleBlur("Email")} onFocus={handleFocus} className="p-8 placeholder:float-left  bg-white border-white rounded-lg  w-[718px] lg:w-[480px] h-14 outline-none"             
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email" required title="Valid Email Format:example@example.com" />
              </div>
              <div className="pt-4">
                <input onBlur={handleBlur("Message")} onFocus={handleFocus} className="p-8 placeholder:float-left placeholder:pb-24 bg-white border-white rounded-lg  w-[718px] lg:w-[480px] h-36 outline-none"            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required />
              </div>
              <div className="pt-10">
                <button className="bg-[#6470D7] border-[#6470D7] rounded-md text-center w-[718px] lg:w-[480px] h-14 outline-none">Submit</button>
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
                      <input onBlur={handleBlur("Enter your email here *")} onFocus={handleFocus} type="email" className=" bg-[#e8e8fd] border-[#e8e8fd] w-[189px] h-[26px] outline-none" name="Email" placeholder="Enter your email here *" required title="Valid Email Format:example@example.com" />
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
        </>
    )
}

export default Ask