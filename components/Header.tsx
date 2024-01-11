'use client'
import React, {useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import heroboy from '@/assets/heroboy.png';
import Link from 'next/link';
import { BsFillPlayCircleFill} from 'react-icons/bs';
import apple from "@/assets/apple.png"
import Stars from './Stars';
import { GiHamburgerMenu } from 'react-icons/gi';
import boygroup from '@/assets/boygroup.png'
import logo from '@/assets/logo.png'
import HeaderMobile from '@/components/HeaderMobile';

function Header () {
  const [openmenu, setOpenmenu] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenmenu(false);
      }
    };

    const handleScroll = () => {
      setHideOnScroll(window.pageYOffset > 50);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (openmenu) {
        setOpenmenu(false);
      }
    };
  
    document.addEventListener("click", handleClick);
  
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [openmenu]);
  
  // ...
  
    return(
      <>
              
              <div className='relative bg-uni w-full xl:h-[675px] 3xl:h-[975px] 2xl:h-[875px] lg:h-[575px] lg:block md:hidden sm:hidden xs:hidden'>
        <Stars />
        {/* image of animation*/}
        <div className='flex justify-center items-center'>
        <div className='absolute 3xl:top-[361px] 3xl:left-[130px] 2xl:top-[261px] 2xl:left-[130px] xl:top-[211px] xl:left-[30px] lg:top-[179px] lg:left-[15px] '>
            <p className="pl-[48px] text-white font-extrabold lg:text-[55px] lg:leading-[60px] xl:text-[65px] xl:leading-[70px] 2xl:text-[85px] 2xl:leading-[90px] 3xl:text-[85px] 3xl:leading-[90px] gl:pl-16">Endless <br /> Stories</p>
            <p className="pl-[48px] gl:pl-16 text-white font-medium text-[28px] leading-[30px] pt-3 w-[439px] h-[90px]">Transform your childs imagination into storybooks . </p>
  
          <div className="flex pt-10 justify-center items-center">
          <div className="pl-9 gl:pl-16 pr-4">
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
              <Link href={'#how'}  > <BsFillPlayCircleFill className='sm:w-[59px] sm:h-[59px] md:w-[59px] md:h-[59px] xs:w-[33px] xs:h-[33px] fill-white'/></Link>
              <div className="pl-4">
                <p className='text-white text-center font-poppins text-xs font-semibold leading-[14px]'>
                  See How it works!
                </p>
              </div>
            </div>
          </div>
        </div>
          </div>
          <div className='animate-custom-bounce  absolute 3xl:top-[227px] 3xl:left-[788px] 3xl:w-[854px] 3xl:h-[752px] 2xl:top-[139px] 2xl:left-[550px] 2xl:w-[854px] 2xl:h-[652px] xl:top-[139px] xl:left-[550px] xl:w-[654px] xl:h-[552px] lg:top-[159px] lg:left-[500px] lg:w-[454px] lg:h-[352px] gl:left-[700px]'>
          <Image className='animate-custom-bounce' src={heroboy} alt="heroboy"/>
          </div>
        </div>
          {/***********************************  Header start for screen size >768px ********************************** */}
          <div className="lg:flex absolute top-0 md:hidden">
              <div className="flex items-center"> {/* Add a containing div for the logo and text */}
              <Image src={logo} alt="Logo" className="rounded-full h-6 w-6 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-12 xl:w-12 2xl:h-20 2xl:w-20 xl:mr-3 2xl:mr-3 3xl:mr-3 3xl:mt-[53px] 3xl:ml-[126px] 2xl:mt-[53px] 2xl:ml-[126px] xl:mt-[43px] xl:ml-[16px] lg:mt-[33px] lg:ml-[66px]" />
              <p className="text-white text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-normal leading-normal 3xl:mt-[53px] 3xl:mr-[503px] 2xl:mt-[53px] 2xl:mr-[413px] xl:mt-[43px] xl:mr-[340px] lg:mt-[33px] lg:mr-[270px] gl:mr-[570px]" >Endless Stories</p>
              </div>
                <ul className="flex 3xl:mt-[73px] 3xl:mr-[15px] 2xl:mt-[63px] 2xl:mr-[100px] xl:mt-[53px] xl:mr-[1px] lg:mt-[33px] lg:mr-[15px] ">
                    <li><Link  className='p-[14px] lg:p-[10px] text-center 3xl:text-xl font-normal text-white leading-normal' href="/">Home</Link></li>
                    <li ><Link className='p-[14px] lg:p-[10px] text-center 3xl:text-xl font-normal text-white leading-normal' href={"/#how"}>How it works</Link></li>
                    <li ><Link className='p-[14px] lg:p-[10px] text-center 3xl:text-xl font-normal text-white leading-normal' href={"/#see"}>See it in action</Link></li>
                    <li ><Link className='p-[14px] lg:p-[10px] text-center 3xl:text-xl font-normal text-white leading-normal'  href={"/support"}>Support</Link></li>
                    <li ><Link className='p-[14px] lg:p-[10px] text-center 3xl:text-xl font-normal text-white leading-normal'  href={'/#contact'}>Contact</Link></li>
                    <li ><Link className='p-[14px] lg:p-[10px] text-center 3xl:text-xl font-normal text-white leading-normal'  href={'/privacy'}>PrivacyPolicy</Link></li>
                </ul>
          </div>
        {/********************************** Header end ******************************/}
          
          {/********************************** Header end for screen size >768px******************************/}
        </div>







         {/********************************** Mobile screen size <=768px******************************/}

        <div className='relative bg-uni w-full md:h-[1423px] sm:h-[1423px] xs:h-[800px] lg:hidden md:block xs:block'>
          <div>
          <header ref={menuRef} className={`fixed top-0 left-0 right-0 lg:hidden sm:block ${openmenu ? 'z-20' : 'z-10'} ${hideOnScroll ? 'hidden' : ''}`}>
      <div className="flex justify-between items-center px-8 pt-3">
        <div className="flex items-center">
          <Link className="flex items-center" href="/">
            <button>
              <Image src={logo} alt="Logo" className="w-[38px] h-[38px] rounded-full" />
            </button>
            <h1 className="font-semibold ml-2 md:text-4xl sm:text-xl xs:text-xl text-white">Endless Stories</h1>
          </Link>
        </div>
        <div className="flex items-center">
          <button onClick={() => setOpenmenu(!openmenu)} className="text-3xl cursor-pointer">
            <GiHamburgerMenu className="fill-white w-[20px] h-[14px]" name={openmenu ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      {openmenu && (
        <ul className="fixed top-[0px] bg-white w-[80%] h-[calc(100vh-76px)] z-10 p-4 shadow-md overflow-y-auto">
            <li className="mx-6 my-6 md:my-0">
              <Link href={'/'} className="text-black  hover:font-bold hover:underline underline-offset-8 block p-2 text-sm font-semibold pr-10   " >Home</Link>
            </li>
            <li className="mx-6 my-6 md:my-0">
              <Link href={"/#how"} className="text-black hover:font-bold hover:underline underline-offset-8 block p-2 text-sm font-semibold pr-10   " >How it works</Link>
            </li>
            <li className="mx-6 my-6 md:my-0">
              <Link href={'/#see'} className="text-black  hover:font-bold hover:underline underline-offset-8 block p-2 text-sm font-semibold pr-10   " >See it in action</Link>
            </li>
            <li className="mx-6 my-6 md:my-0">
              <Link href={'/support'} className="text-black hover:font-bold hover:underline underline-offset-8 block p-2 text-sm font-semibold pr-10   " >Support</Link>
            </li>
            <li className="mx-6 my-6 md:my-0">
              <Link href={'/#contact'} className="text-black hover:font-bold hover:underline underline-offset-8 block p-2 text-sm font-semibold pr-10   " >Contact</Link>
            </li>
            <li className="mx-6 my-6 md:my-0">
              <Link href={'/privacy'} className="text-black hover:font-bold hover:underline underline-offset-8 block p-2 text-sm font-semibold pr-10   " >Privacy Policy</Link>
            </li>
        </ul>
      )}
    </header>

        <div className=' items-center justify-center sm:pt-24 md:pt-24 xs:pt-0'>
          <Image src={boygroup} alt='' />
          <div className='flex items-center justify-center sm:pt-28 lg:pt-28 xs:pt-10'>
          <p className='font-normal xs:text-2xl sm:text-3xl md:text-3xl text-white xs:w-[208px] xs:h-[42px] sm:w-[342px] sm:h-[67px] md:w-[352px] md:h-[77px] text-center '>Endless Stories</p>
          </div>
          <div className='flex items-center justify-center'>
          <p className='font-normal xs:text-sm sm:text-lg md:text-xl text-white xs:w-[208px] xs:h-[42px] sm:w-[369px] sm:h-[74px] md:w-[369px] md:h-[74px]  text-center'>Transform your childs imagination into storybooks . </p>
          </div>

          <div>
            <div className="flex pt-6 justify-center items-center">
              <div className="flex sm:w-[202px] sm:h-[62px] md:w-[202px] md:h-[62px] xs:w-[146px] xs:h-[45px] justify-center items-center gap-4 flex-shrink-0">
                <div className="flex justify-center items-center">
                  <Link href={"/#how"} > <BsFillPlayCircleFill className='sm:w-[59px] sm:h-[59px] md:w-[59px] md:h-[59px] xs:w-[33px] xs:h-[33px] fill-white'/></Link>
                  <div className="pl-4 xs:pl-2">
                    <p className='text-white text-center font-poppins text-xs xs:text-[10px] font-semibold leading-[14px]'>
                      See How it works!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pt-10 justify-center items-center">
              <div className="pl-9 pr-4">
                <div className="sm:w-[190px] sm:h-[62px] md:w-[190px] md:h-[62px] xs:w-[146px] xs:h-[48px] flex-shrink-0 rounded-md bg-black bg-opacity-75 shadow-md pr-2">
                  <div className="flex justify-center items-center sm:pt-3 md:pt-3 xs:pt-1">
                    <div className="pr-1.5 xs:w-[22px] xs:h-[27px] " ><Image src={apple} alt="" /></div>
                    <div className="pl-1.5">
                      <p className='pb-[7px] xs:pb-[2px] text-white font-semibold text-sm xs:text-[10px] leading-4'>
                        Download on the 
                      </p>
                      <p className='text-white text-center font-semibold text-lg xs:text-sm leading-4 xs:leading-normal'>
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
        </div>
       {/********************************** Mobile screen size <=768px end******************************/}
      </>
    )
}

export default Header