import React from 'react'

import './chanel.css'
import {VscDiffAdded} from 'react-icons/vsc'

const Card = ({data}) => {
    for (let index = 0; index < 20; index++) {
       
        
    }

    return (
        <div  className=' mx-[1rem] mt-[1rem] pb-[1rem] rounded-md shadow-md shadow-[#666666] h-[22rem]  chanelCard gap-1 flex flex-col w-[12rem] justify-between items-center ' >
        <div className=' bg-[#ffffffde] shadow-inner  rounded-t-md ' >
            <img className=' w-[14rem] h-[14rem] rounded-t-md '  src={data?.img} alt=""/>
        </div>
        <div>
            <h1 className=' capitalize text-sm line-clamp-1 ' >{data?.title}</h1>
        </div>
        <div>
            <p className=' text-[#b6b6b6] text-xs font-thin ' >{data?.description} </p>
        </div>
        <div className='flex justify-between text-xl px-[1rem] items-center w-[100%] ' >
            <p className=' ml-[4rem] text-base  ' >${data?.price}</p>
            <VscDiffAdded className=' cursor-pointer text-[#918f8f] ' />
        </div>
      </div>
      )
 
}

export default Card
