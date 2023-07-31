import React, {useState} from 'react'

import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'
import { StaticImageData } from 'next/image'


const Faq=({questions }:{questions: { title: string, text: string, images?: (string | StaticImageData)[] }[]}) => {
    return(
      <>
       <div className="flex justify-center flex-col items-center text-lg">
        {questions.map((item: any, index: number) => {
            return (
                <>
                <div>
                <Faqitem question={item} key={index}/>
                </div>
                </> 
            )
            })}
       </div>
      </>
    )
}
const Faqitem = ({question} : {question: { title: string, text: string, images?: (string | StaticImageData)[]}}) =>{
    const [open, setopen] = useState(false)
    function openquestion(){
     setopen(!open)
    }
    return(
        <div className="xl:w-[925px] 2xl:w-[1150px] 3xl:w-[1212px]  md:w-[595px] lg:w-[595px] sm:w-[400px] xs:w-[280px] xs:px-0 px-4 pb-5">
            <button onClick={openquestion} className="text-xl xs:text-left text-[#134A50] border-b-2  border-b-[#1E1E1E]   w-full flex justify-between xs:px-0 px-4 py-3">
                {question.title}{open? <MdKeyboardArrowDown className='w-[36px] h-[36px] ' /> : <MdKeyboardArrowUp className='w-[36px] h-[36px]'/>}
            </button>
            <div className={`${open? 'max-h-fit' : 'max-h-0'} overflow-hidden`}>
                <p className="p-8 bg-[#F8F7FF] ">{question.text}</p>
            </div>
        </div>
    )
}
export default Faq