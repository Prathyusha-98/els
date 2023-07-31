import React from 'react'
import connection from "@/assets/connection.png"
import easytouse from "@/assets/easytouse.png"
import network1 from "@/assets/network1.png"
import designthinking from "@/assets/designthinking.png"
import Image from 'next/image';
const Cards = () => {
    return(
        <>
              {/**************************** cards  start **************************************/}
      <div className='bg-[#D9DEFF] w-full h-[721px] lg:block md:hidden sm:hidden xs:hidden'>
        <div >
          <div className='flex justify-center items-center'>
            <p className="text-[#2A2E36] text-center font-poppins text-5xl font-semibold leading-normal pt-14">Awesome Apps Features</p>
          </div>

          <div className="flex justify-center items-center pt-[84px]">
            <div className="flex 3xl:w-[340px] 3xl:h-[400px] 2xl:w-[300px] 2xl:h-[380px] xl:w-[240px] xl:h-[320px] lg:w-[200px] lg:h-[300px] flex-col justify-center items-center flex-shrink-0 rounded-[47px] bg-white bg-opacity-60 m-6">
              <div className="text-[#1E1E1E] text-center font-poppins text-lg font-medium leading-normal">
                <Image src={designthinking} alt='' />
                <p className='pt-8'>Encourages <br/>Creativity and <br/> Learning</p>
              </div>
            </div>
            <div className="flex 3xl:w-[340px] 3xl:h-[400px] 2xl:w-[300px] 2xl:h-[380px] xl:w-[240px] xl:h-[320px] lg:w-[200px] lg:h-[300px] flex-col justify-center items-center flex-shrink-0 rounded-[47px] bg-white bg-opacity-60 m-6">
              <div className="text-[#1E1E1E] text-center font-poppins text-lg font-medium leading-normal">
                <Image src={easytouse} alt='' />
                <p className='pt-8'>User-Friendly <br/>Experience</p>
              </div>
            </div>
            <div className="flex 3xl:w-[340px] 3xl:h-[400px] 2xl:w-[300px] 2xl:h-[380px] xl:w-[240px] xl:h-[320px] lg:w-[200px] lg:h-[300px] flex-col justify-center items-center flex-shrink-0 rounded-[47px] bg-white bg-opacity-60 m-6">
              <div className="text-[#1E1E1E] text-center font-poppins text-lg font-medium leading-normal">
                <Image src={connection} alt='' />
                <p className='pt-8' >Connect with <br/>others via stories</p>
              </div>
            </div>
            <div className="flex 3xl:w-[340px] 3xl:h-[400px] 2xl:w-[300px] 2xl:h-[380px] xl:w-[240px] xl:h-[320px] lg:w-[200px] lg:h-[300px] flex-col justify-center items-center flex-shrink-0 rounded-[47px] bg-white bg-opacity-60 m-6">
              <div className="text-[#1E1E1E] text-center font-poppins text-lg font-medium leading-normal">
                <Image src={network1} alt='' />
                <p className='pt-8'>Share your creation <br/>with others</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**************************** cards  end **************************************/}





    {/**************************** cards Mobile start **************************************/}
    <div className='bg-[#D9DEFF] w-full xs:h-[477px] sm:h-[848px] md:h-[848px] lg:hidden md:block sm:block xs:block'>
        <div >
          <div className='flex justify-center items-center'>
            <p className="text-[#2A2E36] text-center font-poppins md:text-4xl sm:text-4xl xs:text-xl font-semibold leading-normal md:pt-14 sm:pt-14 xs:pt-4">Awesome Apps Features</p>
          </div>

          <div className="flex justify-center items-center md:pt-[24px] sm:pt-[24px] xs:pt-6 xs:px-16">
            <div className="flex md:w-[252px] md:h-[297px] sm:w-[252px] sm:h-[297px] xs:w-[142px] xs:h-[167px] flex-col justify-center items-center flex-shrink-0 xs:rounded-2xl sm:rounded-2xl md:rounded-3xl bg-white bg-opacity-60 m-3">
              <div className="text-[#1E1E1E] text-center font-poppins text-lg font-medium leading-normal">
                <div className="flex justify-center items-center xs:pt-6">
                <Image className='md:w-[96px] md:h-[96px] sm:w-[96px] sm:h-[96px] xs:w-[54px] xs:h-[54px] ' src={designthinking} alt='' />
                </div>
                 <p className='xs:pt-4 xs:text-[10px] sm:text-[20px] md:text[20px]'>Encourages <br/>Creativity and <br/> Learning</p>
              </div>
            </div>
            <div className="flex md:w-[252px] md:h-[297px] sm:w-[252px] sm:h-[297px] xs:w-[142px] xs:h-[167px] lg:w-[200px] lg:h-[300px] flex-col justify-center items-center flex-shrink-0 xs:rounded-2xl sm:rounded-2xl md:rounded-3xl bg-white bg-opacity-60 m-3">
              <div className="text-[#1E1E1E] text-center font-poppins text-lg font-medium leading-normal">
                <div className="flex justify-center items-center xs:pt-6">
                <Image className='md:w-[96px] md:h-[96px] sm:w-[96px] sm:h-[96px] xs:w-[54px] xs:h-[54px]' src={easytouse} alt='' />
                </div>
                <p className='xs:pt-4 xs:text-[10px] sm:text-[20px] md:text[20px]'>User-Friendly <br/>Experience</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center md:pt-[24px] sm:pt-[24px] xs:pt-0 ">
            <div className="flex md:w-[252px] md:h-[297px] sm:w-[252px] sm:h-[297px] xs:w-[142px] xs:h-[167px] flex-col justify-center items-center flex-shrink-0 xs:rounded-2xl sm:rounded-2xl md:rounded-3xl bg-white bg-opacity-60 m-3">
              <div className="text-[#1E1E1E] text-center font-poppins text-lg font-medium leading-normal">
                <div className="flex justify-center items-center xs:pt-6">
                <Image className='md:w-[96px] md:h-[96px] sm:w-[96px] sm:h-[96px] xs:w-[54px] xs:h-[54px]'  src={connection} alt='' />
                </div>
                <p className='xs:pt-4 xs:text-[10px] sm:text-[20px] md:text[20px]' >Connect with <br/>others via stories</p>
              </div>
            </div>
            <div className="flex md:w-[252px] md:h-[297px] sm:w-[252px] sm:h-[297px] xs:w-[142px] xs:h-[167px] flex-col justify-center items-center flex-shrink-0 xs:rounded-2xl sm:rounded-2xl md:rounded-3xl bg-white bg-opacity-60 m-3">
              <div className="text-[#1E1E1E] text-center font-poppins text-lg font-medium leading-normal">
                <div className="flex justify-center items-center xs:pt-6">
                <Image className='md:w-[96px] md:h-[96px] sm:w-[96px] sm:h-[96px] xs:w-[54px] xs:h-[54px] ' src={network1} alt='' />
                </div>
                <p className='xs:pt-4 xs:text-[10px] sm:text-[20px] md:text[20px]'>Share your creation <br/>with others</p>
              </div>
            </div>
          </div>
        </div>
    </div>
      {/**************************** cards  end **************************************/}
        </>
    )
}

export default Cards