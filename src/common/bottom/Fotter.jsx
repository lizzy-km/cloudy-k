import React, { useState } from 'react'
import './fotter.css'
import { IconRotate2 } from '@tabler/icons-react';
import { IconShieldLock } from '@tabler/icons-react';
import { IconMapPin } from '@tabler/icons-react';
import { IconPhoneCall } from '@tabler/icons-react';
import { useMediaQuery } from 'react-responsive';
import {SlArrowUp,SlArrowDown} from 'react-icons/sl'
const Fotter = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 991px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 992px)' })

    const[fot,setFot]=useState(' text-[#fff] flex flex-col justify-between py-[2rem] gap-6 bg-blur w-[100%] h-0 opacity-0 p-[1rem]  ')

    const showArrow =    <SlArrowUp onClick={()=>{
        setArrow(hideArrow)
        setFot('text-[#fff] flex flex-col justify-between py-[2rem] gap-6 bg-blur w-[100%] h-auto p-[1rem] ')
    }} />

        const hideArrow =    <SlArrowDown onClick={()=>{
            setArrow(showArrow)
            setFot('text-[#fff] flex flex-col justify-between py-[2rem] gap-6 bg-blur w-[100%]  h-0 opacity-0  p-[1rem] ')
        }} />

        const[arrow,setArrow]= useState(showArrow) 

    // const [footer,setFooter] = useState(' text-[#fff] flex justify-between py-[1rem] gap-6 bg-blur w-[100%] h-[300px] ')
  if (isDesktop || isTablet) {
    return(
        <div className=' bg-[#111111] text-[#fff] w-[100%] h-auto px-[5rem] ' >
             <div className=' text-[#fff] flex justify-between py-[1rem] gap-6 bg-blur w-[100%] h-[300px] ' >
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
                <div  className=' py-[2.8rem] ' >
                    <h1 className='text-xl' >Payment</h1>
                </div>
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
                    <div className=' flex gap-2 ' >

                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="2rem" width="2rem" viewBox="-8.093805 -13.489675 70.14631 80.93805">
                            <defs>
                                <linearGradient id="a" y2="1.7526" x2="1.7537" y1="-5.8041" x1="-5.8093">
                                <stop offset="0%" stop-color="#FFD521"/>
                                <stop offset="5%" stop-color="#FFD521"/>
                                <stop offset="50.1119%" stop-color="#F50000"/>
                                <stop offset="95%" stop-color="#B900B4"/>
                                <stop offset="95.0079%" stop-color="#B900B4"/>
                                <stop offset="100%" stop-color="#B900B4"/>
                                </linearGradient>
                                <linearGradient id="b" y2=".9175" x2=".9175" y1=".0091" x1=".009">
                                <stop offset="0%" stop-color="#FFD521"/><stop offset="5%" stop-color="#FFD521"/>
                                <stop offset="50.1119%" stop-color="#F50000"/><stop offset="95%" stop-color="#B900B4"/>
                                <stop offset="95.0079%" stop-color="#B900B4"/>
                                <stop offset="100%" stop-color="#B900B4"/>
                                </linearGradient>
                                <linearGradient id="c" y2="1.3128" x2="1.3126" y1="-.456" x1="-.4558">
                                <stop offset="0%" stop-color="#FFD521"/><stop offset="5%" stop-color="#FFD521"/>
                                <stop offset="50.1119%" stop-color="#F50000"/>
                                <stop offset="95%" stop-color="#B900B4"/>
                                <stop offset="95.0079%" stop-color="#B900B4"/>
                                <stop offset="100%" stop-color="#B900B4"/>
                                </linearGradient>
                                <linearGradient gradientUnits="userSpaceOnUse" gradientTransform="scale(1.00041 .99959)" y2="11.412" x2="11.3667" y1="-37.5455" x1="-37.6312" id="d" xlink:href="#a"/>
                                <linearGradient gradientUnits="userSpaceOnUse" y2="49.554" x2="49.5047" y1=".536" x1=".4867" id="e" xlink:href="#b"/>
                                <linearGradient gradientUnits="userSpaceOnUse" gradientTransform="scale(.99988 1.00012)" y2="36.4816" x2="36.4315" y1="-12.5305" x1="-12.5688" id="f" xlink:href="#c"/>
                        </defs>
                        <g fill="none">
                            <path d="M6.4867 3.292c0 1.7933-1.4534 3.2413-3.24 3.2413C1.46 6.5333.0053 5.0853.0053 3.292.0053 1.5053 1.46.0573 3.2467.0573c1.7866 0 3.24 1.448 3.24 3.2347" fill="url(#d)" transform="matrix(1 0 0 -1 38.1333 15.8707)"/><path d="M48.9373 16.124c-.12-2.6307-.56-4.06-.9253-5.0093-.4907-1.2587-1.076-2.1587-2.0253-3.1027-.9387-.944-1.8387-1.528-3.0974-2.0133-.9493-.3707-2.384-.812-5.0146-.9374-2.844-.1253-3.6867-.152-10.8987-.152-7.2053 0-8.0547.0267-10.8987.152-2.6306.1254-4.0586.5667-5.008.9374C9.804 6.484 8.9107 7.068 7.9667 8.012c-.9507.944-1.536 1.844-2.02 3.1027-.3654.9493-.812 2.3786-.9254 5.0093-.1386 2.844-.164 3.7-.164 10.8973 0 7.212.0254 8.0614.164 10.9054.1134 2.6306.56 4.0586.9254 5.016.484 1.2573 1.0693 2.152 2.02 3.096.944.9426 1.8373 1.528 3.1026 2.0186.9494.372 2.3774.8067 5.008.932 2.844.1254 3.6934.1574 10.8987.1574 7.212 0 8.0547-.032 10.8987-.1574 2.6306-.1253 4.0653-.56 5.0146-.932 1.2587-.4906 2.1587-1.076 3.0974-2.0186.9493-.944 1.5346-1.8387 2.0253-3.096.3653-.9574.8053-2.3854.9253-5.016.132-2.844.164-3.6934.164-10.9054 0-7.1973-.032-8.0533-.164-10.8973zm4.8574 22.024c-.132 2.8747-.5854 4.8387-1.2587 6.5493-.6853 1.7747-1.604 3.2787-3.108 4.7827-1.4973 1.4973-3.0013 2.416-4.776 3.1093-1.7173.6667-3.6747 1.1254-6.5507 1.2507-2.876.1387-3.7946.164-11.1253.164-7.324 0-8.2493-.0253-11.1253-.164-2.8694-.1253-4.8254-.584-6.5507-1.2507-1.768-.6933-3.272-1.612-4.7693-3.1093-1.504-1.504-2.4227-3.008-3.1147-4.7827C.7493 42.9867.296 41.0227.1573 38.148.032 35.272 0 34.352 0 27.0213c0-7.324.032-8.2426.1573-11.1186.1387-2.8694.592-4.832 1.2587-6.5507.692-1.768 1.6107-3.2787 3.1147-4.776C6.028 3.0787 7.532 2.1533 9.3 1.4613c1.7253-.6666 3.6813-1.12 6.5507-1.252 2.876-.132 3.8013-.164 11.1253-.164 7.3307 0 8.2493.032 11.1253.164 2.876.132 4.8334.5854 6.5507 1.252 1.7747.692 3.2787 1.6174 4.776 3.1147 1.504 1.4973 2.4227 3.008 3.108 4.776.6733 1.7187 1.1267 3.6813 1.2587 6.5507.132 2.876.164 3.7946.164 11.1186 0 7.3307-.032 8.2507-.164 11.1267z" 
                            fill="url(#e)" transform="matrix(1 0 0 -1 0 54.004)"/>
                            <path d="M13.9093 4.9693c-4.964 0-8.992 4.0214-8.992 8.9854 0 4.972 4.028 8.9986 8.992 8.9986 4.9654 0 8.9987-4.0266 8.9987-8.9986 0-4.964-4.0333-8.9854-8.9987-8.9854zm0 22.848C6.2573 27.8173.06 21.6067.06 13.9547.06 6.3093 6.2573.1053 13.9093.1053c7.652 0 13.856 6.204 13.856 13.8494 0 7.652-6.204 13.8626-13.856 13.8626z" fill="url(#f)" 
                            transform="matrix(1 0 0 -1 13.0667 40.9373)"/>
                        </g>
                        </svg>
                        </div>

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="2rem" width="2rem" version="1.1" id="Layer_1" viewBox="-94.79835 -166.597 821.5857 999.582">
                                <defs id="defs178"><style id="style176">
                                   
                                    </style></defs><path id="path182" d="M560.651 64.998c-16.56-15.28-83.48-63.86-232.54-64.52 0 0-175.78-10.6-261.47 68-47.7 47.71-64.48 117.52-66.25 204.07-1.77 86.55-4.06 248.75 152.29 292.73h.15l-.1 67.11s-1 27.17 16.89 32.71c21.64 6.72 34.34-13.93 55-36.19 11.34-12.22 27-30.17 38.8-43.89 106.93 9 189.17-11.57 198.51-14.61 21.59-7 143.76-22.66 163.63-184.84 20.51-167.17-9.92-272.91-64.91-320.57zm18.12 308.58c-16.77 135.42-115.86 143.93-134.13 149.79-7.77 2.5-80 20.47-170.83 14.54 0 0-67.68 81.65-88.82 102.88-3.3 3.32-7.18 4.66-9.77 4-3.64-.89-4.64-5.2-4.6-11.5.06-9 .58-111.52.58-111.52s-.08 0 0 0c-132.26-36.72-124.55-174.77-123.05-247.06 1.5-72.29 15.08-131.51 55.42-171.34 72.48-65.65 221.79-55.84 221.79-55.84 126.09.55 186.51 38.52 200.52 51.24 46.52 39.83 70.22 135.14 52.89 274.77z" class="cls-1"/><path id="path184" d="M389.471 268.768q-2.46-49.59-50.38-52.09" class="cls-2"/><path id="path186" d="M432.721 283.268q1-46.2-27.37-77.2c-19-20.74-45.3-32.16-79.05-34.63" class="cls-2"/><path id="path188" d="M477.001 300.588q-.61-80.17-47.91-126.28t-117.65-46.6" class="cls-2"/><path id="path190" d="M340.761 381.678s11.85 1 18.23-6.86l12.44-15.65c6-7.76 20.48-12.71 34.66-4.81a366.67 366.67 0 0130.91 19.74c9.41 6.92 28.68 23 28.74 23 9.18 7.75 11.3 19.13 5.05 31.13 0 .07-.05.19-.05.25a129.81 129.81 0 01-25.89 31.88c-.12.06-.12.12-.23.18q-13.38 11.18-26.29 12.71a17.39 17.39 0 01-3.84.24 35 35 0 01-11.18-1.72l-.28-.41c-13.26-3.74-35.4-13.1-72.27-33.44a430.39 430.39 0 01-60.72-40.11 318.31 318.31 0 01-27.31-24.22l-.92-.92-.92-.92-.92-.92c-.31-.3-.61-.61-.92-.92a318.31 318.31 0 01-24.22-27.31 430.83 430.83 0 01-40.11-60.71c-20.34-36.88-29.7-59-33.44-72.28l-.41-.28a35 35 0 01-1.71-11.18 16.87 16.87 0 01.23-3.84q1.61-12.89 12.73-26.31c.06-.11.12-.11.18-.23a129.53 129.53 0 0131.88-25.88c.06 0 .18-.06.25-.06 12-6.25 23.38-4.13 31.12 5 .06.06 16.11 19.33 23 28.74a366.67 366.67 0 0119.74 30.94c7.9 14.17 2.95 28.68-4.81 34.66l-15.65 12.44c-7.9 6.38-6.86 18.23-6.86 18.23s23.18 87.73 109.79 109.84z" class="cls-1"/>
                            </svg>
                        </div>
                        
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
                        <h1 className=' text-xl font-base '>Download Our App</h1>
                    </div>
                    <div className='flex flex-col  gap-2 ' >
                        <div className='flex items-center gap-2 cursor-pointer ' >
                            <p>Terms & Privacy Policy</p>
                        </div>
                       
                    </div>
                </div>
            </div>
            
           
           
          <div className='flex text-[#fff] ' >
           

           
          </div>
          
        </div>
       )
  }
  if (isMobile) {
    return(
        <div className=' bg-[#111111] w-[100%] h-auto text-[.4rem] overflow-hidden  ' >
            <div className=' text-[#fff] text-xl w-[100%] flex justify-center items-center ' >
            {arrow}
            </div>
           
             <div className={fot} >
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
                    <div className='flex flex-col  gap-2 ' >
                        <div className='flex items-center gap-2 cursor-pointer ' >
                            <p>Terms & Privacy Policy</p>
                        </div>
                       
                    </div>
                </div>
                </div>
                
            </div>
            
           
           
          
          
        </div>
       )
  }
   
 
}

export default Fotter
