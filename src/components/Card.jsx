import React, { useState } from 'react'

import './chanel.css'
import {VscDiffAdded} from 'react-icons/vsc'

const Card = ({data}) => {
    
    const [cd,setCd] = useState(' flex flex-col h-0 opacity-0 ')
    const[title,setTitle] = useState('text-sm')


    return (
        <div  className=' mx-[1rem] mt-[1rem] pb-[1rem] rounded-md shadow-md shadow-[#666666] h-auto  chanelCard gap-1 flex flex-col w-[12rem] justify-between items-center ' >
        <div onMouseLeave={()=>{
            setCd(' flex flex-col h-0 opacity-0  ')
            setTitle('text-sm')
        }} onMouseEnter={()=>{
            setCd(' flex flex-col h-[7rem] gap-5 ')
            setTitle('opacity-0')
        }} className=' bg-[#ffffffde] shadow-inner h-[14rem]  rounded-t-md ' >

            <img className=' w-[14rem] h-[14rem] rounded-t-md '  src={data?.img} alt=""/>
            <p className={title} >{data?.title}</p>
        </div>
        <div 
        onMouseLeave={()=>{
            setTitle('text-sm')

            setCd(' flex flex-col h-0 opacity-0  ')
        }}
         onMouseEnter={()=>{
            setTitle('opacity-0')

            setCd(' flex flex-col h-[7rem] gap-5 ')
        }} className={cd} >
        <div>
            <h1 className=' capitalize text-sm line-clamp-1 ' >{data?.title}</h1>
        </div>
        <div>
            <p className=' text-[#b6b6b6] text-xs font-thin ' >{data?.description} </p>
        </div>
        <div className='flex justify-between text-xl px-[1rem] items-center w-[100%] ' >
            <p className=' ml-[0rem] text-base  ' >${data?.price}</p>
            <button className=' shadow-md shadow-[#444444] text-xs w-[4rem] h-[2rem] rounded-md bg-[#000000c1] ' type="">View</button>
            <VscDiffAdded className=' cursor-pointer text-[#918f8f] ' />
        </div>
        </div>
        
      </div>
      )
 
}

export default Card
