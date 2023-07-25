import React from 'react'
import tree1 from "@/assets/tree1.png"
import tree2 from "@/assets/tree2.png"
import bu from "@/assets/bu.png"
import fox from "@/assets/fox.png"
import apple from "@/assets/apple.png"
import tri from '@/assets/tri.png';
import Image from 'next/image';
const Tablet =() =>{
    return(
        <>
              {/**************************** Tablat video part start **************************************/}
<div className="bg-white h-[722px] lg:block md:hidden sm:hidden xs:hidden ">
  <div className="relative">
    <Image className="absolute 3xl:top-[376px] 3xl:left-[842px] 2xl:top-[376px] 2xl:left-[742px] 2xl:w-[208px] 2xl:h-[301px]  xl:top-[396px] xl:left-[582px] xl:w-[140px] xl:h-[201px] lg:top-[396px] lg:left-[482px] lg:w-[120px] lg:h-[195px]" src={fox} alt="" />
    <Image className="absolute 3xl:top-[155px] 3xl:left-[1556px] 2xl:top-[155px] 2xl:left-[1406px] 2xl:w-[132px] xl:top-[105px] xl:left-[1123px] xl:w-[132px] lg:top-[105px] lg:left-[1123px] lg:w-[132px]" src={bu} alt="" />
    <Image className="absolute top-0 left-0" src={tree1} alt="" />
    <Image className="absolute top-[558px] left-0" src={tree2} alt="" />
  </div>

  <div className="flex justify-center items-center">
    <div>
      <div className="">
        <p className="text-[#2A2E36] text-center font-poppins 3xl:text-6xl 2xl:text-5xl xl:text-4xl lg:text-3xl font-extrabold leading-[95px] pt-44 lg:pt-72">Try Endless Stories <br />for Free!</p>
      </div>
      <div className="">
        <p className="text-[#525D73] text-center font-poppins 3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs font-normal leading-[30px]">
          Download Endless Stories today and try it for free. <br />
          Unlock a world of imagination and learning for your child.
        </p>
      </div>
      <div className="flex pt-10 justify-center items-center">
        <div className="pl-9 pr-4">
          <div className="w-[190px] h-[62px] flex-shrink-0 rounded-md bg-black bg-opacity-75 shadow-md pr-2">
            <div className="flex justify-center items-center pt-3">
              <div className="pr-1.5"><Image src={apple} alt="" /></div>
              <div className="pl-1.5">
                <p className='pb-[7px] text-white font-semibold text-sm leading-4'>
                  Download on the 
                </p>
                <p className='text-white text-center font-semibold text-lg leading-4'>
                  App Store
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[202px] h-[62px] justify-center items-center gap-4 flex-shrink-0">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center relative"><div className='w-[62px] h-[62px] bg-black bg-opacity-75 shadow-md rounded-full '><Image src={tri} alt='' className='ml-6 mt-6'/></div></div>
            <div className="pl-4">
              <p className='text-black text-center font-poppins text-xs font-semibold leading-[14px]'>
                See How it works!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="2xl:pl-[328px] 3xl:pl-[318px] xl:pl-[130px] lg:pl-[100px] pt-[50px]">
      <div className="rounded-3xl 3xl:w-[498px] 3xl:h-[637px] 2xl:w-[478px] 2xl:h-[637px] xl:w-[410px] xl:h-[537px] lg:w-[410px] lg:h-[537px] border-[22px] border-solid border-black bg-[#c5c8ca]"></div>
    </div>
  </div>
</div>
      {/**************************** Tablat video part start **************************************/}






{/**************************** Tablat video Mobile part start **************************************/}
<div className="bg-white md:h-[1422px] sm:h-[1422px] xs:h-[800px] lg:hidden md:block sm:block xs:block ">
  <div className="relative">
    <Image className="absolute md:w-[90px] md:h-[128px] md:top-[914px] md:left-[65px] sm:w-[90px] sm:h-[128px] sm:top-[814px] sm:left-[60px] xs:w-[50px] xs:h-[72px] xs:top-[458px] xs:left-[40px]" src={fox} alt="" />
    <Image className="absolute xs:top-[292px] xs:left-[309px] xs:w-[64px] xs:h-[70px] sm:top-[460px] sm:left-[519px] sm:w-[113px] sm:h-[124px] md:top-[460px] md:left-[625px] md:w-[113px] md:h-[124px]" src={bu} alt="" />
    <Image className="absolute xs:top-[705px] xs:w-[202px] xs:h-[95px] sm:w-[359px] sm:h-[168px] sm:top-[1253px] md:w-[359px] md:h-[168px] md:top-[1258px] left-0 " src={tree2} alt="" />
  </div>

  <div className="flex justify-center items-center">
    <div>
      <div className="">
        <p className="text-[#2A2E36] text-center font-poppins md:text-4xl sm:text-4xl xs:text-xl font-extrabold leading-[95px] sm:pt-44 xs:pt-[70px] ">Try Endless Stories <br />for Free!</p>
      </div>
      <div className="xs:pt-3">
        <p className="text-[#525D73] text-center font-poppins md:text-lg sm:text-base xs:text-[10px] xs:leading-normal lg:text-xs font-normal leading-[30px]">
          Download Endless Stories today and try it for free. <br />
          Unlock a world of imagination and learning for your child.
        </p>
      </div>
      <div className="flex justify-center items-center md:pt-14 sm:pt-20 xs:pt-20" >
        <div className="rounded-3xl md:w-[480px] md:h-[612px] sm:w-[380px] sm:h-[512px] xs:w-[212px] xs:h-[288px] xs:border-[10px] xs:border-solid xs:border-black border-[22px] border-solid border-black bg-[#c5c8ca]"></div>
      </div>

      <div className='flex items-center justify-center md:pt-8 sm:pt-10 xs:pt-6'>
      <div className="flex w-[202px] h-[62px] justify-center items-center gap-4 flex-shrink-0">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center relative"><div className='w-[62px] h-[62px] bg-black bg-opacity-75 shadow-md rounded-full '><Image src={tri} alt='' className='ml-6 mt-6'/></div></div>
            <div className="pl-4">
              <p className='text-black text-center font-poppins text-xs font-semibold leading-[14px]'>
                See How it works!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex pt-[82px] xs:pt-8 justify-center items-center">
        <div className="pl-9 pr-4">
          <div className="w-[190px] h-[62px] flex-shrink-0 rounded-md bg-black bg-opacity-75 shadow-md pr-2">
            <div className="flex justify-center items-center pt-3">
              <div className="pr-1.5"><Image src={apple} alt="" /></div>
              <div className="pl-1.5">
                <p className='pb-[7px] text-white font-semibold text-sm leading-4'>
                  Download on the 
                </p>
                <p className='text-white text-center font-semibold text-lg leading-4'>
                  App Store
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      {/**************************** Tablat video Mobile part start **************************************/}

        </>
    )
}
export default Tablet 