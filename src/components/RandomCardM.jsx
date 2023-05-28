import React from 'react'

import {RxRocket} from 'react-icons/rx'
import {GiReturnArrow} from 'react-icons/gi'
import {MdOutlineSupportAgent} from 'react-icons/md'
import './chanel.css'
const RandomCardM = () => {
  return (
    <div className=' bg-[#ab8e66c2] text-[#fff] tracking-wide gap-[6rem]  rounded-[10px] px-[1rem] py-[2rem] shadow-[#444444] shadow-md  h-auto flex flex-col  justify-center w-[100%] items-center  ' >
      <div className=' gap-[3rem] w-[33.3333%] flex  justify-center items-center ' >
        <div>
            <RxRocket className=' text-[6rem] font-light ' />
        </div>

        <div className=  ' gap-[2rem] flex flex-col justify-center items-left ' >
            <div>
                <h1 className=' text-lg font-medium ' >MM Free Delivery</h1>
            </div>

            <div  className=' cus text-xs font-medium tracking-wide flex felx-col justify-center items-center ' >
                <p>
                    Free Delivery on all order from Myanmar <br/>
                    with price more than $99.00
                </p>
            </div>
        </div>

      </div>

      <div className=' gap-[3rem] w-[33.3333%] flex  justify-center items-center ' >
        <div>
            <GiReturnArrow className=' text-[6rem] font-light ' />
        </div>

        <div className=  ' gap-[2rem] flex flex-col justify-center items-left ' >
            <div>
                <h1 className=' text-lg font-medium ' >	MONEY GUARANTEE</h1>
            </div>

            <div  className=' cus text-xs font-medium tracking-wide flex felx-col justify-center items-center ' >
                <p>
                30 Days money back guarantee
 <br/>
 no question asked!
                </p>
            </div>
        </div>

      </div>

      <div className=' gap-[3rem] w-[33.3333%] flex  justify-center items-center ' >
        <div>
            <MdOutlineSupportAgent className=' text-[6rem] font-light ' />
        </div>

        <div className=  ' gap-[2rem] flex flex-col justify-center items-left ' >
            <div>
                <h1 className=' text-lg font-medium ' >ONLINE SUPPORT 24/7</h1>
            </div>

            <div  className=' cus text-xs font-medium tracking-wide flex felx-col justify-center items-center ' >
                <p>
                We’re here to support to you.
 <br/>
 Let’s shopping now!
                </p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default RandomCardM
