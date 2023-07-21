import React from 'react';
import Link from 'next/link';

function Header () {
    return(
       
        
            <div className="flex">
                <p className="text-white text-center text-4xl font-normal leading-normal 3xl:mt-[53px] 3xl:mr-[513px] 3xl:ml-[126px]" >Endless Stories</p>
            
            <ul className="nav-items">
                <li><Link href="">Home</Link></li>
                <li><Link href="">How it works</Link></li>
                <li><Link href="">See it in action</Link></li>
                <li><Link href="">Support</Link></li>
                <li><Link href="">Contact</Link></li>
            </ul>
            </div>


    )
}

export default Header