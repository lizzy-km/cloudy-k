import React from 'react'
import './chanel.css'

const LatestCard = ({data}) => {
  return (
    <div className=' w-[25rem] h-auto flex gap-[.5rem] justify-center items-center ' >
      <div className=' w-[100%] h-auto flex flex-col gap-2 justify-center items-center ' >
        <div className='w-[100%] relative h-[25rem]  felx items-center justify-center ' >
            <img className=' bg-[#fff] self-center w-[100%] object-cover h-[25rem] '  src={data?.img} alt=""/>
            <span className=' rounded-br-md absolute w-[30%] justify-center text-left p-[.3rem] h-[2rem] items-center bg-[#181515] top-[0%] text-[#ab8e66] ' >$ {data?.price}.00 </span>
            <div className='absolute flex justify-center items-center bottom-0 w-[100%]' >
            <button className='  bg-[#111111]  text-[#fff] p-[.7rem] w-[5rem] text-sm ' type="">View</button>

            </div>
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
