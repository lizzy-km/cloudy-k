import React, { useEffect, useState } from 'react'
import {HiMenuAlt2} from 'react-icons/hi'
import {WiSmoke} from 'react-icons/wi'

import {BsSearch} from 'react-icons/bs'
import {IoCartOutline} from 'react-icons/io5'
import { Input } from '@mantine/core'
import {RxCross2} from 'react-icons/rx'
import {VscAccount} from 'react-icons/vsc'
import { Link } from 'react-router-dom'


const NaveBarM = () => {
    const[src,setSrc] = useState('justify-between absolute w-[100%] h-[4rem] left-[200%] bg-[#222222] p-[1rem] flex items-center text-[#fff] ')
    // const[src,setSrc] = useState('justify-between absolute w-[100%] h-[4rem] left-[200%] bg-[#222222] p-[1rem] flex items-center text-[#fff] ')
    const [logo,setLogo] = useState('flex ml-[-200px]  justify-center items-center text-2xl font-semibold border-2 border-black h-[2rem]')
    const [menue,setMenu] = useState('flex mr-[-200px] justify-evenly gap-[2rem]  items-center')
    const[nav,setNav]=useState(false)
    useEffect(()=>{
            setLogo('flex ml-[400px]  justify-center items-center text-2xl font-semibold border-2 border-black h-[2rem]')
            setMenu('flex mr-[400px] justify-evenly gap-[2rem]  items-center')
    },[])

   menue == 'flex mr-[400px] justify-evenly gap-[2rem]  items-center' &&  setMenu('flex  justify-evenly gap-[2rem]  items-center')

   logo === 'flex ml-[400px]  justify-center items-center text-2xl font-semibold border-2 border-black h-[2rem]' &&         setLogo('flex   justify-center items-center text-2xl font-semibold  h-[2rem]')



    const menu =()=>{

        setSrc('justify-between gap-2 absolute w-[100%] h-[4rem] left-0 bg-[#222222] p-[1rem] flex items-center text-[#fff] ')

    }

    const closeMenu =()=>{
        setSrc('justify-between absolute w-[100%] h-[4rem] left-[200%] bg-[#222222] p-[1rem] flex items-center text-[#fff] ')
    }
  return (
    
       <div className=' relative nav text-[#121212] flex justify-between p-[.3rem] bg-transparent items-center ' >
      <Link to={'/'} className={logo} >
      <p className=' p-[.2rem] bg-[#fff] text-sm  ' > Cloudy. </p>
        <WiSmoke className=' bg-[#121212] text-[#fff] w-[1rem] h-[1rem]  ' />
      </Link>
      <div className='flex justify-evenly text-2xl cursor-pointer ' >
       <div className={menue} >
        <HiMenuAlt2 onClick={menu} />
       </div>
      </div>

      <div className={src} >
            <div className=' w-[5%]  text-2xl cursor-pointer ' >
                <RxCross2 onClick={closeMenu}  />
            </div>
        <div className=' w-[75%] ' >
        <Input className='text-white tracking-wider '
      icon={<BsSearch/>}
      variant="unstyled"
      placeholder="Search our products"
      size="lg"
      styles = {(theme)=> ({
        input:{
            color: theme.colors.orange[0]
        }
      })}

    />
        </div>

        <div className=' w-[5%] text-3xl cursor-pointer justify-center flex items-center   h-[2rem] '>
        <Link to={'/'}  className=' w-[100%]  '>
            <IoCartOutline className='text-2xl  cursor-pointer ' />
        </Link>
            </div>

            <div className=' w-[5%] text-3xl cursor-pointer justify-center flex items-center   h-[2rem] '>
        <Link to={'/'}  className=' w-[100%]  '>
            <VscAccount className='text-2xl  cursor-pointer ' />
        </Link>
            </div>
        
      </div>
    </div>
    
  )
}

export default NaveBarM
