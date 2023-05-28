import React from 'react'
// import RandomCard from './RandomCard'
import './chanel.css'

const Random = () => {

    

  return (
    <div className=' rounded-[10px] px-[1rem] py-[2rem] shadow-[#444444] shadow-md collection h-[300px] flex flex-col justify-center w-[100%] items-center text-[#121212] ' >
        <div className=' cc w-[100%] h-[100%] flex flex-col justify-center text-center items-center gap-5 ' >
            <h1 className=' text-3xl font-semibold ' >Collection Arrived</h1>
            <div>
                <p className=' text-sm ' >  You have no items & Are you <br/>
        ready to use? come & shop with us!
                                </p>
      
        </div>
        <div className=' flex items-center ' >
            <p className=' text-sm '>Price from:</p>
            <p className=' text-2xl font-bold text-[#ab8e66] ' >$80.00</p>
        </div>
        <div>
            <button className=' w-[9rem] h-[3rem] rounded-md bg-[#ffffff] ' type="">Shop Now</button>
        </div>
        </div>
        
    </div>
  )
}

export default Random
