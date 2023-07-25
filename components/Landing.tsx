'use client'
  import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Image from 'next/image';
import heroboy from '@/assets/heroboy.png';
import star from '@/assets/star.gif';
import Link from 'next/link';
import book from "@/assets/book.png"
import cloud from "@/assets/cloud.png"
import butterfly from "@/assets/butterfly.png"
import wave from "@/assets/wave.png"
import vector1 from "@/assets/Vector1.png" 
import vector2 from "@/assets/Vector2.png" 
import vector3 from "@/assets/Vector3.png" 
import sun from "@/assets/sun.png"
import animal from "@/assets/animal.png"
import mail from "@/assets/mail.png"
import buter from "@/assets/buter.png"
import clouds4 from "@/assets/clouds4.png"
import boy from "@/assets/boy.png"
import Vector4 from "@/assets/Vector4.png"
import tv from "@/assets/tv.png"
import { BsFillPauseCircleFill, BsFillPlayCircleFill} from 'react-icons/bs';
import {BsPlayCircleFill} from 'react-icons/bs'
import tri from '@/assets/tri.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import cloud2 from "@/assets/cloud2.png"
import co from "@/assets/co.png"
import butterfly2 from "@/assets/butterfly2.png"
import giraf from "@/assets/giraf.png"
import Vector7 from "@/assets/Vector7.png"
import connection from "@/assets/connection.png"
import easytouse from "@/assets/easytouse.png"
import network1 from "@/assets/network1.png"
import designthinking from "@/assets/designthinking.png"
import tree1 from "@/assets/tree1.png"
import tree2 from "@/assets/tree2.png"
import bu from "@/assets/bu.png"
import fox from "@/assets/fox.png"
import play1 from "@/assets/play1.png"
import apple from "@/assets/apple.png"
import Vector6 from "@/assets/Vector6.png"
import path from "@/assets/Path.png"
import Step from '@/assets/Step.gif';
import girl1 from '@/assets/girl1.png';
import Step2 from '@/assets/Step2.gif';
import Step3 from '@/assets/Step3.gif';
import Step4 from '@/assets/Step4.gif';
import boy1 from '@/assets/boy1.png';
import girl from '@/assets/girl.png';
import elements from '@/assets/elements.gif';
import { useInView } from 'react-intersection-observer'
import { url } from 'inspector';
import Stars from './Stars';
import Caruselpage from './Carouselpage';
import Ask from './Ask';
import Carouseltwo from './Carouseltwo';
import Commingsoon from './Commingsoon';
import Videosec from './Videosec';
import Cards from './Cards';
import Tablet from './Tablet';
const Landing = () => {


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
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (imgRef.current && imgRef.current.firstChild instanceof Element) {
      imgRef.current.firstChild.classList.add('animate-custom-bounce')
    }
  }, [])






  return (
    <div className='bg-uni'>
      <Header />
      <Caruselpage />
      <Commingsoon />
      <Videosec />
      <Carouseltwo />
      <Cards/>
      <Tablet />
      <Ask />
    </div>
  );
}

export default Landing;