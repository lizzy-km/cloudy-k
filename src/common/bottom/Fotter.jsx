import React, { useEffect, useRef, useState } from 'react'
import './fotter.css'
import { IconRotate2 } from '@tabler/icons-react';
import { IconShieldLock } from '@tabler/icons-react';
import { IconMapPin } from '@tabler/icons-react';
import { IconPhoneCall } from '@tabler/icons-react';
import { useMediaQuery } from 'react-responsive';
import {SlArrowUp,SlArrowDown} from 'react-icons/sl'
import { FaViber,FaInstagram,FaFacebook,FaTelegram} from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Fotter = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 991px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 992px)' })
    const ref = useRef(null)

    const[fot,setFot]=useState(' text-[#fff] flex flex-col justify-between py-[2rem] gap-6 bg-blur w-[100%] mt-[200px] h-1 opacity-0 p-[1rem]  ')
    const[fotd,setFotd]=useState(' d-n text-[#fff] flex justify-between py-[1rem] gap-6 bg-blur w-[100%] h-[300px]  mt-[200px] ')

    const showArrow =    <SlArrowUp className='min-h-[3rem] text-xl ' onClick={()=>{
        setArrow(hideArrow)
        setFotd(' text-[#fff] flex justify-between py-[1rem] gap-6 bg-blur w-[100%] h-[300px]  mt-[0px] ')
        setFot('text-[#fff] flex flex-col justify-between py-[2rem] gap-6 bg-blur w-[100%] h-auto p-[1rem] mt-0 ')
        

    }} />

    

        const hideArrow =    <SlArrowDown className='min-h-[3rem] text-xl ' onClick={()=>{
            setArrow(showArrow)
            setFotd(' d-n text-[#fff] flex justify-between py-[1rem] gap-6 bg-blur w-[100%] h-[300px]  mt-[200px] ')
            setFot('text-[#fff] flex flex-col justify-between py-[2rem] gap-6 bg-blur w-[100%]  h-1 opacity-0  p-[1rem] ')
        }} />

        const[arrow,setArrow]= useState(showArrow) 
        useEffect(()=>{
            ref.current?.scrollIntoView({behavior: 'smooth'});
        },[arrow])

    // const [footer,setFooter] = useState(' text-[#fff] flex justify-between py-[1rem] gap-6 bg-blur w-[100%] h-[300px] ')
  if (isDesktop || isTablet) {
    return(
        <div className=' bg-[#111111] text-[#fff] w-[100%] h-auto  px-[5rem] ' >
             {/* <div className=' text-[#fff] text-xl w-[100%] flex justify-center items-center ' >
            {arrow}
            </div> */}
             <div className=' text-[#fff] flex justify-between py-[1rem] gap-6 bg-blur w-[100%] h-[300px]  mt-[0px] ' >
                <div className=' flex flex-col gap-6 ' >
                    <div>
                        <h1 className=' text-xl font-base ' >Customer Service</h1>
                    </div>
                    <div className='flex flex-col  gap-4 ' >
                        <div className='flex items-center gap-2 cursor-pointer ' >
                            <IconShieldLock/>
                            <p>Terms & Privacy Policy</p>
                        </div>
                        <div className='flex items-center gap-2 cursor-pointer '>
                            <IconRotate2/>
                            <p>Return Policy</p>
                        </div>
                    </div>
                    <div>
                        {
                            isDesktop &&   <div  className=' py-[2.8rem] flex flex-col  ' >
                            <h1 className='text-xl' >Payment</h1>
                            <div  className=' flex gap-4 ' >
                                <img className=' w-[5rem] ' src="https://www.kbzpay.com/wp-content/uploads/sites/9/2020/04/og_image_for_kbzpay.png" alt=""/>
                                <img className=' w-[5rem] ' src="https://cdn6.aptoide.com/imgs/a/d/0/ad05b74cd5f80b55498d98a21368e43e_fgraphic.png" alt=""/>
        
                            </div>
                        </div>
                        }
                        {
                            isTablet &&   <div  className=' mt-[-1rem] flex flex-col  ' >
                            <h1 className='text-xl py-[.2rem] ' >Payment</h1>
                            <div  className=' flex gap-4 ' >
                                <img className=' w-[3rem] ' src="https://www.kbzpay.com/wp-content/uploads/sites/9/2020/04/og_image_for_kbzpay.png" alt=""/>
                                <img className=' w-[3rem] ' src="https://cdn6.aptoide.com/imgs/a/d/0/ad05b74cd5f80b55498d98a21368e43e_fgraphic.png" alt=""/>
        
                            </div>
                        </div>
                        }
              
            </div>
                </div>
                <div className=' flex flex-col gap-6 '>
                <div>
                        <h1 className=' text-xl font-base '>Language</h1>
                    </div>
                    <form className='flex flex-col text-[#fff]  gap-4 '>
    
                        <div className=' flex gap-2 ' >
                            
                        <input  type="radio" name="English" value="English"/>
                        <label for='English' >Myanmar(Unicode)</label>
                        </div>
    
                        <div className=' flex gap-2 ' >
                            
                            <input  type="radio" name="English" value="English"/>
                            <label for='English' >Myanmar(Zawgyi)</label>
                            </div>
    
                            <div className=' flex gap-2 ' >
                            
                            <input  type="radio" name="English" value="English"/>
                            <label for='English' >English</label>
                            </div>
                        
                       
                    </form>

                    <div>
                    <h1 className='text-xl' >Follow Us On</h1>
                    <div className=' flex gap-2 twxt-xl ' >

                        <Link to={'https://www.facebook.com/LisaYaeKgLay'} >
                        <FaFacebook className='text-[1.5rem] ' />
                        </Link>

                        <Link to={'+959761723325'}>
                            <FaViber className='text-[1.5rem] '/>
                        </Link>
                        <Link to={'https://instagram.com/dev_k_l?igshid=ZDc4ODBmNjlmNQ=='}>
                            <FaInstagram className='text-[1.5rem] '/>
                        </Link>
                        <Link to={'https://t.me/Rezeyy_3_0'} >
                            <FaTelegram className='text-[1.5rem] '/>
                        </Link>
                        
                    </div>
                </div>
                </div>
                <div className=' flex flex-col gap-6 ' >
                <div>
                        <h1 className=' text-xl font-base '>Contact Us</h1>
                    </div>
                    <div className='flex flex-col  gap-6 ' >
                        <div className='flex items-center gap-2 cursor-pointer ' >
                            <IconMapPin/>
                            <p>Zaypine No.3,Kyauktaga,Bago,Myanmar.</p>
                        </div>
                        <div className='flex items-center gap-2 cursor-pointer '>
                            <IconPhoneCall/>
                            <p>+95 9 7617 23325</p>
                        </div>
                    </div>
                </div>
                <div className=' flex flex-col gap-4 ' >
                <div>
                        <h1  className=' text-xl font-base '>Download Our App</h1>
                    </div>
                    <div ref={ref} className='flex flex-col  gap-2 ' >
                        <div className='flex items-center justify-center gap-2 cursor-pointer ' >
                            <img className=' w-[10rem] ' src="https://i.pinimg.com/originals/9c/98/9b/9c989bba786f8955c01017c0e734b756.png" alt=""/>
                        </div>
                       
                    </div>
                </div>
            </div>
            
           
           
          <div  className='flex bg-[#111111] w-[100%] text-center justify-center text-[#fff] ' >
          © copyright 2023 by lizzy co.,ltd all rigths served
           </div>
          
        </div>
       )
  }
  if (isMobile) {
    return(
        <div className=' bg-[#111111] w-[100%] h-auto text-[.4rem] overflow-hidden  ' >
            {/* <div className=' text-[#fff] text-xl w-[100%] flex justify-center items-center ' >
            {arrow}
            </div> */}
           
             <div className='text-[#fff] flex flex-col justify-between py-[2rem] gap-6 bg-blur w-[100%] h-auto p-[1rem] mt-0 ' >
               <div className='flex justify-between' >
               <div className=' flex flex-col gap-6 ' >
                    <div>
                        <h1 className=' text-[.6rem]  font-base ' >Customer Service</h1>
                    </div>
                    <div className='flex flex-col  gap-4 ' >
                        <div className='flex items-center gap-2 cursor-pointer ' >
                            <IconShieldLock className='w-[.7rem]' />
                            <p>Terms & Privacy Policy</p>
                        </div>
                        <div className='flex items-center gap-2 cursor-pointer '>
                            <IconRotate2 className='w-[.7rem]'/>
                            <p>Return Policy</p>
                        </div>
                    </div>
                    <div  className=' py-[1rem] flex flex-col  ' >
                    <h1 className='text-[.6rem] py-[1rem] ' >Payment</h1>
                    <div  className=' flex gap-4 ' >
                        <img className=' w-[2rem] ' src="https://www.kbzpay.com/wp-content/uploads/sites/9/2020/04/og_image_for_kbzpay.png" alt=""/>
                        <img className=' w-[2rem] ' src="https://cdn6.aptoide.com/imgs/a/d/0/ad05b74cd5f80b55498d98a21368e43e_fgraphic.png" alt=""/>

                    </div>
                </div>
                </div>
                <div className=' flex flex-col gap-6 '>
                <div>
                        <h1 className=' text-[.6rem]  font-base '>Language</h1>
                    </div>
                    <form className='flex flex-col text-[#fff]  gap-4 '>
    
                        <div className=' flex gap-2 ' >
                            
                        <input  type="radio" name="English" value="English"/>
                        <label for='English' >Myanmar(Unicode)</label>
                        </div>
    
                        <div className=' flex gap-2 ' >
                            
                            <input  type="radio" name="English" value="English"/>
                            <label for='English' >Myanmar(Zawgyi)</label>
                            </div>
    
                            <div className=' flex gap-2 ' >
                            
                            <input  type="radio" name="English" value="English"/>
                            <label for='English' >English</label>
                            </div>
                        
                       
                    </form>
                    <div>
                    <h1 className='text-[.6rem] py-[1rem] ' >Follow Us On</h1>
                    <div className=' flex gap-2 twxt-xl ' >

                        <Link to={'https://www.facebook.com/LisaYaeKgLay'} >
                        <FaFacebook className='text-[1rem] ' />
                        </Link>

                        <Link to={'+959761723325'}>
                            <FaViber className='text-[1rem] '/>
                        </Link>
                        <Link to={'https://instagram.com/dev_k_l?igshid=ZDc4ODBmNjlmNQ=='}>
                            <FaInstagram className='text-[1rem] '/>
                        </Link>
                        <Link to={'https://t.me/Rezeyy_3_0'} >
                            <FaTelegram className='text-[1rem] '/>
                        </Link>
                        
                    </div>
                </div>
                </div>
               </div>
               
                <div className='flex justify-between' >
                <div className=' flex flex-col gap-6 ' >
                <div>
                        <h1 className=' text-[.6rem]  font-base '>Contact Us</h1>
                    </div>
                    <div className='flex flex-col   gap-6 ' >
                        <div className='flex items-center gap-2 cursor-pointer ' >
                            <IconMapPin className='w-[.7rem]'/>
                            <p>Zaypine No.3,Kyauktaga, <br/>
                                Bago,Myanmar.</p>
                        </div>
                        <div className='flex items-center gap-2 cursor-pointer '>
                            <IconPhoneCall className='w-[.7rem]'/>
                            <p>+95 9 7617 23325</p>
                        </div>
                    </div>
                </div>
                <div className=' flex flex-col gap-4 ' >
                <div>
                        <h1 className=' text-[.6rem] font-base '>Download Our App</h1>
                    </div>
                    <div  className='flex flex-col  gap-2 ' >
                        <div className='flex items-center justify-center gap-2 cursor-pointer ' >
                        <img className=' w-[6rem] ' src="https://i.pinimg.com/originals/9c/98/9b/9c989bba786f8955c01017c0e734b756.png" alt=""/>

                        </div>
                       
                    </div>
                </div>
                </div>
                
            </div>
            
           
           
          
            <div  className='flex p-[1rem] bg-[#111111] w-[100%] text-center justify-center text-[#fff] ' >
          © copyright 2023 by lizzy co.,ltd all rigths served
           </div>
        </div>
       )
  }
   
 
}

export default Fotter