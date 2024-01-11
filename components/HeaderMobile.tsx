import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '@/assets/logo.png'
import { useRouter } from 'next/router';

export default function HeaderMobile() {
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

  return (
    <header ref={menuRef} className={`fixed top-0 left-0 right-0 lg:hidden sm:block ${openmenu ? 'z-20' : 'z-10'} ${hideOnScroll ? 'hidden' : ''}`}>
      <div className="flex justify-between items-center px-8 pt-3">
        <div className="flex items-center">
          <Link className="flex items-center" href="/">
            <button>
              <Image src={logo} alt="Logo" className="w-[38px] h-[38px] rounded-full" />
            </button>
            <h1 className="font-semibold ml-2 md:text-4xl sm:text-xl xs:text-xl text-black">Endless Stories</h1>
          </Link>
        </div>
        <div className="flex items-center">
          <button onClick={() => setOpenmenu(!openmenu)} className="text-3xl cursor-pointer">
            <GiHamburgerMenu className="fill-black w-[20px] h-[14px]" name={openmenu ? 'close' : 'menu'} />
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
  );
}