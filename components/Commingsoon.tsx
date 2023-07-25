import React from 'react';
import vector1 from "@/assets/Vector1.png" 
import vector2 from "@/assets/Vector2.png" 
import vector3 from "@/assets/Vector3.png" 
import sun from "@/assets/sun.png"
import animal from "@/assets/animal.png"
import mail from "@/assets/mail.png"
import Image from 'next/image';
import animalgroup from '@/assets/animalgroup.png';
const Commingsoon = () => {
    return(
        <>
              {/**************************** section3 start **************************************/}

      <div className='bg-[#7A85DE] w-100% h-[722px] lg:block md:hidded sm:hidden xs:hidden'>
        <div className='relative'>
          <Image className='absolute top-[92px] 2xl:left-[147px] 3xl:left-[147px] xl:left-[137px] lg:left-[137px]' src={vector1} alt=''/>
          <Image className='absolute top-[595px] 2xl:left-[287px] 3xl:left-[382px] xl:left-[200px] lg:left-[200px]' src={vector2} alt=''/>
          <Image className='absolute top-[210px] 2xl:left-[767px] 3xl:left-[899px] xl:left-[721px] lg:left-[721px]' src={vector3} alt=''/>
          <Image className='absolute top-[50px] 2xl:left-[1215px] 3xl:left-[1407px] xl:left-[959px] lg:left-[759px]' src={sun} alt=''/>
        </div>
        <div className='flex items-center justify-center 3xl:pt-[55px] 3xl:pl-[87px]  2xl:pt-[55px] 2xl:pl-[87px] xl:pt-[155px] xl:pl-[87px] lg:pt-[255px] lg:pl-[87px]'>
          <div>
            <div>
              <p className='text-[#F8F7FF] text-shadow-md 3xl:text-7xl 2xl:text-6xl xl:text-5xl lg:text-4xl font-poppins font-semibold leading-normal'>Coming soon...</p>
              <p className="text-white font-poppins text-xl font-medium leading-normal w-[410px]">Get ready to join the community Share your creation and discover stories crafted by others.</p>
            </div>
            <div className="flex items-center justify-center pr-[24px] pt-[29px]">
              <div className="w-[546px] h-[74px] lg:w-[466px] lg:h-[74px] bg-[#e8e8fd] rounded-full">
                <div className="pt-3 flex items-center justify-center">
                  <div className="w-[129px] h-[50px] lg:w-[109px] lg:h-[50px] bg-white rounded-full">
                    <p className="text-center pt-3 text-[#6470d7] font-poppins text-base font-semibold leading-normal">Notify Me</p>
                  </div>
                  <div>
                    <form action="" className="flex items-center justify-center">
                      <input type="email" className="bg-[#e8e8fd] border-[#e8e8fd] text-center w-[189px] h-[26px] outline-none" name="Email" placeholder="Enter your email here *" required title="Valid Email Format:example@example.com" />
                    </form>
                  </div>
                  <div className='pl-[152px] lg:pl-[80px]'>
                    <div className="w-[50px] h-[50px] bg-[#6470d7] rounded-full">
                      <div className="flex items-center justify-center pt-2">
                        <Image alt='' src={mail} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[830px]'><Image src={animal} alt='' /></div>
        </div>
      </div>
      {/**************************** section3 end **************************************/}



                    {/**************************** section3 start **************************************/}

      <div className='bg-[#7A85DE] w-100% md:h-[1063px] sm:h-[1063px] xs:h-[597px] lg:hidden md:block sm:block xs:block'>
        <div className='relative'>
          <Image className='absolute sm:top-[101px] sm:left-[58px] md:top-[101px] md:left-[58px] xs:top-[57px] xs:left-[33px] sm:w-[84px] sm:h-[32px] md:w-[84px] md:h-[32px] xs:w-[84px] xs:h-[32px]  ' src={vector2} alt=''/>
        </div>
        <div className='flex items-center justify-center md:pt-[101px] sm:pt-[101px] xs:pt-[57px]'>
          <p className='text-[#F8F7FF] text-shadow-md xs:text-xl sm:text-4xl md:text-5xl font-poppins font-semibold leading-normal'>Coming soon...</p>
        </div>
        <div className='flex items-center justify-center md:pt-[24px] sm:pt-[21px] xs:pt-[12px]'>
          <p className="text-white font-poppins xs:text-[10px] sm:text-lg md:text-lg text-center font-medium leading-normal xs:w-[206px] sm:w-[366px] sm:h-[81px] md:w-[376px]">Get ready to join the community Share your creation and discover stories crafted by others.</p>
        </div>
        <div className='flex items-center justify-center md:pt-[38px] sm:pt-[23px] xs:pt-[14px]'>
          <div className='flex items-center justify-center'><Image className='md:w-[640px] md:h-[498px] sm:w-[640px] sm:h-[498px] ' src={animalgroup} alt='' /></div>
        </div>
        <div className=" flex items-center justify-center pt-8 ">
          <p className="text-center text-white font-poppins xs:text-base sm:text-3xl md:text-4xl font-semibold leading-normal">Notify Me</p>
        </div>
        <div className="flex items-center justify-center pt-6">
              <div className=" bg-[#e8e8fd] rounded-full xs:w-[282px] xs:h-[35px] sm:w-[501px] sm:h-[62px] md:w-[601px] md:h-[72px]">
                <div className="flex items-center justify-center">
                  <div>
                    <form action="" className="flex items-center justify-center xs:pt-[6px] xs:mr-32 sm:pt-[12px] sm:mr-56 md:pt-[22px] md:mr-80">
                      <input type="email" className="bg-[#e8e8fd] border-[#e8e8fd] xs:text-[9px] xs:w-[108px] xs:h-[15px] sm:text-[17px] sm:w-[191px] sm:h-[26px] md:text-[19px] md:w-[208px] md:h-[35px] text-center outline-none placeholder:text-center" name="Email" placeholder="Enter your email here *" required title="Valid Email Format:example@example.com" />
                    </form>
                  </div>
                    <div className=" bg-[#6470d7] rounded-full xs:pt-1 xs:w-[20px] xs:h-[20px] sm:pt-2 sm:w-[36px] sm:h-[36px] md:pt-2 md:w-[38px] md:h-[38px] xs:mt-[10px]">
                      <div className="flex items-center justify-center  ">
                        <Image className='xs:w-[10px] xs:h-[10px] sm:w-[17px] sm:h-[17px] md:w-[20px] md:h-[20px]' alt='' src={mail} />
                      </div>
                    </div>
                </div>
              </div>
            </div>
      </div>
      {/**************************** section3 end **************************************/}
        </>
    )
}
export default Commingsoon