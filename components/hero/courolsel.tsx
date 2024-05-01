import React from 'react';
import { GiWorld } from "react-icons/gi";
import { GiClothes } from "react-icons/gi";
import { MdOutlineDiscount } from "react-icons/md"
import { AiOutlineSecurityScan } from "react-icons/ai"
    export default function CarouselComponent() {
        return (
            <main className='bg-gray-100 container mx-auto shadow-lg rounded-lg'>
                <div className='grid grid-cols-1 md:grid-cols-3  lg:grid-cols-5 gap-[24px] p-[30px]'>
                    <div className='text-center leading-7'>
                     <p className='text-yellow-500 text-3xl'>1800+</p>
                     <p>Truested Partner</p>
                    </div>
                    <div className='text-center'>
            <GiWorld className=' text-[50px] flex mx-auto'/>
        </div>

        <div className='text-center'>
        <GiClothes className='flex mx-auto text-[50px]' />  
        </div>

        <div className='text-center'>
        <MdOutlineDiscount className='flex mx-auto text-[50px]' />
        </div>

        <div className='text-center '>
        <AiOutlineSecurityScan  className='flex mx-auto text-[50px]'/>
        </div>
               </div>
            </main>
        )
    }
