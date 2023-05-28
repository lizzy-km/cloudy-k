import React from 'react'

const RandomM = () => {
  return (
    <div className=' rounded-[10px] px-[1rem] py-[2rem] shadow-[#444444] shadow-md collectionM h-[300px] flex flex-col justify-center w-[100%] items-center text-[#121212] ' >
    <div className=' cc w-[100%] h-[100%] flex flex-col justify-center text-center items-center gap-5 ' >
        <h1 className=' text-xl font-semibold ' >Collection Arrived</h1>
        <div>
            <p className=' text-xs ' >  You have no items & Are you <br/>
    ready to use? come & shop with us!
                            </p>
  
    </div>
    <div className=' flex items-center ' >
        <p className=' text-xs '>Price from:</p>
        <p className=' text-xl font-bold text-[#ab8e66] ' >$80.00</p>
    </div>
    <div>
        <button className=' text-[.3rem] w-[3rem] h-[1rem] rounded-sm bg-[#ffffff] ' type="">Shop Now</button>
    </div>
    </div>
    
</div>
  )
}

export default RandomM
