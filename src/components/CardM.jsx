import React, { useState } from 'react'

import './chanel.css'
import {VscDiffAdded} from 'react-icons/vsc'
import {MdArrowForwardIos,MdArrowBackIosNew} from 'react-icons/md'

const CardM = ({data}) => {
   const[cd,setCd] = useState(' chanelCard flex flex-col p-[1rem] opacity-0 w-0 ')
   const showArrow = <MdArrowForwardIos onClick={()=> 
    {
        setCd(' chanelCard flex flex-col p-[1rem] w-[100%] ')
    setArrow(hideArrow)
}

} />
    const hideArrow = <MdArrowBackIosNew onClick={()=> 
       { 
        setCd(' chanelCard flex flex-col p-[1rem] opacity-0 w-0 ')
        setArrow(showArrow)
    }
    } />
    const[arrow,setArrow]= useState(showArrow)
   

    return (
        <div  className=' mt-[.5rem] rounded-md shadow-md shadow-[#666666] h-[9rem]   gap-1 flex  w-[100%] justify-between items-center ' >
        <div className=' text-[#121212] flex items-center justify-center bg-[#ffffffde] w-[10rem] shadow-inner card  rounded-l-md ' >
            <img className=' object-cover h-[8rem] min-w-[8rem] rounded-l-md '  src={data?.img} alt=""/>
            {arrow}
            
        </div>
        <div className={cd} >
        <div>
            <h1 className=' capitalize text-xs font-medium line-clamp-2 ' >{data?.title}</h1>
        </div>
        <div>
            <p className=' text-[#b6b6b6] line-clamp-2 text-[.4rem] font-thin ' >{data?.description} </p>
        </div>
        <div className='flex justify-evenly gap-[0] text-xs px-[0rem] pt-[2rem] items-center w-[100%] ' >
            <p className='  text-xs  ' >${data?.price}</p>
            <button className=' shadow-md shadow-[#444444] text-[.4rem] w-[2rem] h-[1rem] rounded-sm bg-[#000000c1] ' type="">View</button>

            <VscDiffAdded className=' shadow-md shadow-[#444444] cursor-pointer text-[#ffffff] ' />
        </div>
        </div>
      
      </div>
      )
 
}

export default CardM
