// AdventureStep.js
import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface AdventureStepProps {
    stepNumber: number;
    title: string;
    description: string;
  }
  const AdventureStep: React.FC<AdventureStepProps> = ({ stepNumber, title, description }) => {
  return (

    <div className="2xl:mt-[30px] 3xl:mt-[30px] xl:mt-[0px]  ">
      <div className="pl-[32px] xl:pb-24">
        <div className="3xl:w-[645px] 3xl:h-[223px] 2xl:w-[545px] 2xl:h-[193px] xl:w-[477px] xl:h-[166px] lg:w-[377px] lg:h-[126px] flex-shrink-0 rounded-lg bg-[#FCFCFC]">
          <div className="3xl:pt-[65px] 2xl:pt-[65px] xl:pt-[48px] lg:pt-[36px] flex items-center justify-center">
            <div className="w-[62px] h-[62px] rounded-full bg-[#D68294]">
              <p className="text-white 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-xl font-extrabold flex items-center justify-center pt-3.5">
                {stepNumber}
              </p>
            </div>
            <div className="pl-6">
              <p className="text-[#2A2E36] 3xl:text-4xl 2xl:text-3xl xl:text-2xl font-extrabold">{title}</p>
              <p className="text-[#2A2E36] 3xl:text-2xl 2xl:text-xl xl:text-base font-normal">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureStep;
