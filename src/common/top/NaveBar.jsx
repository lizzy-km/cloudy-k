import React, { useEffect, useState } from 'react'
import './navbar.css'
import {WiSmoke} from 'react-icons/wi'
import {BsSearch} from 'react-icons/bs'
import {IoCartOutline} from 'react-icons/io5'
import { Input } from '@mantine/core'
import {RxCross2} from 'react-icons/rx'
import {VscAccount} from 'react-icons/vsc'
import { Link } from 'react-router-dom'

const NaveBar = () => {

    const[src,setSrc] = useState('justify-between absolute w-[100%] h-[4rem] left-[200%] bg-[#222222] p-[1rem] flex items-center text-[#fff] ')
    const [logo,setLogo] = useState('flex ml-[-200px]  justify-center items-center text-2xl font-semibold border-2 border-black h-[2rem]')
    const [menu,setMenu] = useState('flex mr-[-200px] justify-evenly gap-[2rem]  items-center')
    const[nav,setNav]=useState(false)
    useEffect(()=>{
            setLogo('flex   justify-center items-center text-2xl font-semibold  border-[#fff]  h-[2rem]')
            setMenu('flex mr-[400px] justify-evenly gap-[2rem]  items-center')
    },[])

   menu == 'flex mr-[400px] justify-evenly gap-[2rem]  items-center' &&  setMenu('flex  justify-evenly gap-[2rem]  items-center')

//    logo === 'flex ml-[400px]  justify-center items-center text-2xl font-semibold border-2 border-black h-[2rem]' &&         setLogo('flex   justify-center items-center text-2xl font-semibold border-2 border-[#fff] border-black h-[2rem]')




   


    

    const search =()=>{

        setSrc('justify-between absolute w-[100%] h-[4rem] left-0 bg-[#222222] p-[1rem] flex items-center text-[#fff] ')

    }

    const closeSearch =()=>{
        setSrc('justify-between absolute w-[100%] h-[4rem] left-[200%] bg-[#222222] p-[1rem] flex items-center text-[#fff] ')
    }

  return (
    <div className=' text-[#fff] nav overflow-hidden w-[100%] relative h-[4rem] flex justify-between px-[5rem] py-[2rem] bg-transparent items-center ' >
      <Link to={'/'} className={logo} >
        <p className=' p-[.3rem] ' > Cloudy. </p>
        <WiSmoke className=' bg-[#121212] border border-black text-[#fff] w-[2rem] h-[100%]  ' />
      </Link>
      <div className={menu} >
        <div className='hover:border-b-2 w-[2rem] h-[2rem] flex justify-center items-center  ' >
            <BsSearch onClick={search} className='text-xl cursor-pointer  ' />
        </div>
        <Link to={'/cart'}  className='hover:border-b-2 w-[2rem] h-[2rem] flex justify-center items-center '>
            <IoCartOutline className='text-2xl  cursor-pointer ' />
        </Link>

        <Link to={'/userprofile'}  className='hover:border-b-2 flex justify-center items-center w-[2rem] h-[2rem] '>
            <VscAccount className='text-2xl  cursor-pointer ' />
        </Link>

      </div>

      <div className={src} >
            <div className=' w-[5%] text-2xl cursor-pointer ' >
                <RxCross2 onClick={closeSearch}  />
            </div>
        <div className=' w-[95%] ' >
        <Input className='text-white tracking-wider '
      icon={<BsSearch />}
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
       
        
      </div>
    </div>
  )
}

export default NaveBar
