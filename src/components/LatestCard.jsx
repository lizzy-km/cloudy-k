import React, { useState } from 'react'
import './chanel.css'
import {VscAdd} from 'react-icons/vsc'

const LatestCard = ({data}) => {
    const [dt,setDt]= useState( 
        <><span className=' opacity-0 rounded-tl-[10px] rounded-br-md absolute w-[30%] justify-center text-left p-[.3rem] h-[2rem] items-center bg-[#181515] top-[0%] text-[#ab8e66] '>$ {data?.price}.00 </span><div className='absolute  flex justify-center items-center bottom-0 w-[100%]'>
            <button className=' opacity-0 rounded-t-[10px]  bg-[#111111]  text-[#fff] p-[0rem] w-[5rem] h-[2.2rem] text-sm ' type="">View</button>

        </div></>
    )
        const hover =()=>{
            setDt(<><span className=' opacity-100 rounded-tl-[10px] rounded-br-md absolute w-[30%] justify-center text-left p-[.3rem] h-[2rem] items-center bg-[#181515] top-[0%] text-[#ffffff] '>$ {data?.price}.00 </span>
                        <VscAdd className=' rounded-bl-md rounded-tr-md right-0 text-3xl bg-[#121212] text-center top-[0%]  p-[.3rem] h-[2rem] absolute w-[15%] opacity-100 justify-center cursor-pointer text-[#ffffff] ' />

            <div className='absolute  flex justify-center items-center bottom-0 w-[100%]'>
            <button className=' opacity-100 rounded-t-[10px]  bg-[#111111]  text-[#fff] p-[0rem] w-[5rem] h-[2.2rem] text-sm ' type="">View</button>

        </div></>)
        }
        const nohover =()=>{
            setDt( setDt(<><span className=' opacity-0 rounded-tl-[10px] rounded-br-md absolute w-[30%] justify-center text-left p-[.3rem] h-[2rem] items-center bg-[#181515] top-[0%] text-[#ab8e66] '>$ {data?.price}.00 </span><div className='absolute  flex justify-center items-center bottom-0 w-[100%]'>
            <button className=' opacity-0 rounded-t-[10px]  bg-[#111111]  text-[#fff] p-[0rem] w-[5rem] h-[2.2rem] text-sm ' type="">View</button>

        </div></>))
        }
  return (
    <div className=' w-[20rem] rounded-t-[10px] h-auto flex gap-[.5rem] justify-center items-center ' >
      <div className=' w-[100%] h-auto flex flex-col gap-2 justify-center items-center ' >
        <div onMouseLeave={nohover} onMouseEnter={hover} className='w-[100%] relative h-[25rem]  felx items-center justify-center ' >
            <img className=' rounded-t-[10px] bg-[#fff] self-center w-[100%] object-cover h-[25rem] '  src={data?.img} alt=""/>
            
           {dt}
        </div>
        <div className=' rounded-b-[10px]  text-center rounded-t-0 cc h-[14rem] flex flex-col w-[100%] justify-start gap-7 p-[1rem]  ' >
            <div>
                <h1> {data?.title} </h1>
            </div>
            <div>
                <h2> {data?.description} </h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LatestCard
