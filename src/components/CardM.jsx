import React from 'react'

import './chanel.css'
import {VscDiffAdded} from 'react-icons/vsc'

const CardM = ({data}) => {
    for (let index = 0; index < 20; index++) {
       
        
    }

    return (
        <div  className=' mt-[.5rem] rounded-md shadow-md shadow-[#666666] h-[9rem]  chanelCard gap-1 flex  w-[100%] justify-between items-center ' >
        <div className=' bg-[#ffffffde] shadow-inner  rounded-l-md ' >
            <img className=' object-cover h-[9rem] w-[10rem] rounded-l-md '  src={data?.img} alt=""/>
        </div>
        <div className=' flex flex-col p-[1rem] ' >
        <div>
            <h1 className=' capitalize font-medium line-clamp-2 ' >{data?.title}</h1>
        </div>
        <div>
            <p className=' text-[#b6b6b6] line-clamp-2 text-sm font-thin ' >{data?.description} </p>
        </div>
        <div className='flex justify-between text-xl px-[1rem] items-center w-[100%] ' >
            <p className='  text-base  ' >${data?.price}</p>
            <VscDiffAdded className=' cursor-pointer text-[#918f8f] ' />
        </div>
        </div>
      
      </div>
      )
 
}

export default CardM
