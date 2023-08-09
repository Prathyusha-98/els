import React from 'react';
import Image, { StaticImageData } from 'next/image';
interface AdventurePartProps {

    imageSrc: StaticImageData;
    imageClassName: string;
    divClassName: string;
  }

  const Adventurepart: React.FC<AdventurePartProps> = ({ imageSrc, imageClassName, divClassName }) => {

    return (
        <div className={divClassName}>
        <Image className={imageClassName} src={imageSrc} alt=""/>
        </div>
      );
    };
    
    export default Adventurepart;