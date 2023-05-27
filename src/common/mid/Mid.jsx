import React, { useEffect, useState } from 'react'
import './mid.css'
import Slide from '../../components/Slide'
import { useMediaQuery } from 'react-responsive'
import SlideM from '../../components/SlideM'
import SlideT from '../../components/SlideT'
import ChanelCard from '../../components/ChanelCard'
import GucciCard from '../../components/GucciCard'
import ChanelCardM from '../../components/ChannelCardM'
import GucciCardM from '../../components/GucciCardM'
import YslCard from '../../components/YslCard'
import YslCardM from '../../components/YslCardM'

const Mid = () => {

    const [slide,setSlide] = useState(' bg-[#4e4f5cbd] w-[10%] h-[50px] my-[200px] ')

    const [main,setMain] = useState('w-[100%] flex flex-col px-[5rem] py-[20rem] items-center justify-center  ')

   

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 991px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 992px)' })

    useEffect(()=>{
        if (isDesktop) {
            
            setSlide(' bg-[#4e4f5cbd] w-[100%] h-[700px] relative ')
            setMain('w-[100%] flex flex-col px-[5rem] py-[2rem] items-center justify-center gap-[8rem] ')


        }
        if (isTablet) {
            // window.location.reload(true)
            setSlide(' bg-[#4e4f5cbd] w-[100%] h-[500px] relative ')
            setMain('w-[100%] flex flex-col px-[5rem] py-[2rem] items-center justify-center gap-[8rem] ')


        }
        if (isMobile) {
            
            setSlide(' bg-[#4e4f5cbd] w-[100%] h-[200px] relative ')
            setMain('w-[100%] flex flex-col px-[0rem] py-[2rem] items-center justify-center gap-[4rem] ')


        }
        // window.location.reload(true)
    },[])

    

  return (
    <div className='bg-[#121212] top-[0%]  flex flex-col justify-center items-center gap-10  h-auto w-[100%] ' >
                <div className={slide} >
                    {
                        isDesktop &&                    <Slide/>

                    }
                     {
                        isTablet &&                    <SlideT/>

                    }
                    {
                        isMobile &&                    <SlideM/>

                    }
                </div>

                <div className={main} >
                        {
                            isDesktop && <div className=' w-[100%] flex justify-between items-center gap-1 ' >
                            <div className=' text-[#fff] bg-blur flex flex-col justify-center items-center gap-4  w-[20rem] h-[20rem] ' >
                                <img className=' shadow-md shadow-[#444444] object-cover bg-[#fff]  w-[20rem] h-[20rem] ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqTlYChEHaiBKsJseT86Wb9kHlId2Za9i3hX2GWe0dAJ4MSUQb9yumzbYc9RcvVnsS80&usqp=CAU" alt=""/>
                            <h1 className=' text-xl ' >For Her</h1>
                            </div>
                            <div className=' text-[#fff] bg-blur flex flex-col justify-center items-center gap-4  w-[20rem] h-[20rem] ' >
                                <img className=' shadow-md shadow-[#444444]  object-cover bg-[#fff]  w-[20rem] h-[20rem] ' 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrxRxSMO2_xyx99fygIu6M4aBNW_hBlq2XaA&usqp=CAU" alt=""/>
                            <h1 className=' text-xl ' >For Him</h1>
                            </div>
                            <div className=' text-[#fff] bg-blur flex flex-col justify-center items-center gap-4  w-[20rem] h-[20rem] ' >
                                <img className=' shadow-md shadow-[#444444]  bg-[#fff] object-cover  w-[20rem] h-[20rem] ' 
                                src="https://www.chanel.com/emea/img/prd-emea/sys-master/content/P1/h48/h17/9724791848990" alt=""/>
                            <h1 className=' text-xl ' >New In</h1>
                            </div>
                            <div className=' text-[#fff] bg-blur flex flex-col justify-center items-center gap-4  w-[20rem] h-[20rem] ' >
                                <img className=' shadow-md shadow-[#444444]  object-cover bg-[#fff]  w-[20rem] h-[20rem] ' 
                                src="https://the-fragrance-shop.imgix.net/banners/3349668594412_10.jpg?fm=webp&h=547&w=547&max-w=547" alt=""/>
                            <h1 className=' text-xl ' >Offers</h1>
                            </div>
                        </div>
                        }
                        {
                            isTablet && <div className=' w-[100%] flex justify-between items-center gap-1 ' >
                            <div className='  text-[#fff] bg-blur flex flex-col justify-center items-center gap-4  w-[20rem] h-[20rem] ' >
                                <img className=' shadow-md shadow-[#444444]  object-cover bg-[#fff]  w-[20rem] h-[20rem] ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqTlYChEHaiBKsJseT86Wb9kHlId2Za9i3hX2GWe0dAJ4MSUQb9yumzbYc9RcvVnsS80&usqp=CAU" alt=""/>
                            <h1 className=' text-xl ' >For Her</h1>
                            </div>
                            <div className=' text-[#fff] bg-blur flex flex-col justify-center items-center gap-4  w-[20rem] h-[20rem] ' >
                                <img className=' shadow-md shadow-[#444444]  object-cover bg-[#fff]  w-[20rem] h-[20rem] ' 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrxRxSMO2_xyx99fygIu6M4aBNW_hBlq2XaA&usqp=CAU" alt=""/>
                            <h1 className=' text-xl ' >For Him</h1>
                            </div>
                            <div className=' text-[#fff] bg-blur flex flex-col justify-center items-center gap-4  w-[20rem] h-[20rem] ' >
                                <img className=' shadow-md shadow-[#444444]  bg-[#fff] object-cover  w-[20rem] h-[20rem] ' 
                                src="https://www.chanel.com/emea/img/prd-emea/sys-master/content/P1/h48/h17/9724791848990" alt=""/>
                            <h1 className=' text-xl ' >New In</h1>
                            </div>
                            <div className=' text-[#fff] bg-blur flex flex-col justify-center items-center gap-4  w-[20rem] h-[20rem] ' >
                                <img className=' shadow-md shadow-[#444444]  object-cover bg-[#fff]  w-[20rem] h-[20rem] ' 
                                src="https://the-fragrance-shop.imgix.net/banners/3349668594412_10.jpg?fm=webp&h=547&w=547&max-w=547" alt=""/>
                            <h1 className=' text-xl ' >Offers</h1>
                            </div>
                        </div>
                        }
                        {
                            isMobile && <div className=' w-[100%] flex justify-between items-center gap-1 ' >
                            <div className=' text-[#fff] bg-blur flex flex-col justify-center items-center gap-4  w-[20rem] h-[20rem] ' >
                                <img className=' object-cover bg-[#fff]  w-[20rem] h-[20rem] ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqTlYChEHaiBKsJseT86Wb9kHlId2Za9i3hX2GWe0dAJ4MSUQb9yumzbYc9RcvVnsS80&usqp=CAU" alt=""/>
                            <h1 className=' text-base ' >For Her</h1>
                            </div>
                            <div className=' mt-[2rem] text-[#fff] bg-blur flex flex-col justify-center items-center gap-4  w-[20rem] h-[20rem] ' >
                                <img className='  object-cover bg-[#fff]  w-[20rem] h-[20rem] ' 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrxRxSMO2_xyx99fygIu6M4aBNW_hBlq2XaA&usqp=CAU" alt=""/>
                            <h1 className=' text-base ' >For Him</h1>
                            </div>
                            <div className=' text-[#fff] bg-blur flex flex-col justify-center items-center gap-4  w-[20rem] h-[20rem] ' >
                                <img className=' bg-[#fff] object-cover  w-[20rem] h-[20rem] ' 
                                src="https://www.chanel.com/emea/img/prd-emea/sys-master/content/P1/h48/h17/9724791848990" alt=""/>
                            <h1 className=' text-base ' >New In</h1>
                            </div>
                            <div className=' mt-[2rem] text-[#fff] bg-blur flex flex-col justify-center items-center gap-4  w-[20rem] h-[20rem] ' >
                                <img className=' object-cover bg-[#fff]  w-[20rem] h-[20rem] ' 
                                src="https://the-fragrance-shop.imgix.net/banners/3349668594412_10.jpg?fm=webp&h=547&w=547&max-w=547" alt=""/>
                            <h1 className=' text-base ' >Offers</h1>
                            </div>
                        </div>
                        }
                    


                    <div className=' w-[100%] flex flex-col justify-center items-center text-center gap-4 ' >
                       
                    <svg xmlns="http://www.w3.org/2000/svg" height="4rem" width="10rem" version="1.0" viewBox="-45.43695 -48.48325 393.7869 290.8995">
                        <path d="M43.666 181.178a2.58 2.58 0 00-.145.327c-3.913 7.392-11.597 12.428-20.366 12.428C10.435 193.933 0 183.28 0 170.125c0-13.082 10.436-23.809 23.155-23.809 8.807 0 16.526 5.146 20.402 12.648.11.145.145.217.254.434.037.037-7.392 5.4-7.465 5.292-.037-.145-.072-.254-.144-.327-2.14-5.327-7.211-8.878-13.047-8.769-7.791.073-14.206 6.522-14.206 14.53 0 8.082 6.415 14.606 14.206 14.606 5.654 0 10.582-3.48 12.828-8.408.11-.181.146-.326.219-.471l7.464 5.327zm9.603-34.426h8.914v16.634h23.411v-16.634h8.986v46.276h-8.986v-20.33H62.183v20.33h-8.914v-46.276zM220.4 193.028v-46.276h32.36v9.349h-23.338v9.24h21.562v9.241h-21.562v9.24h26.634v9.206H220.4zm48.304 0v-46.276h9.059v37.07h25.15v9.206h-34.21zm-96.937 0h-9.059v-46.276h12.574l19.822 27.83v-27.83h8.987v46.276h-7.175l-25.149-34.897v34.897zm-43.16-36.928l-7.899 18.482h16.162l-8.263-18.481zm-11.959 27.722l-4.13 9.206H101.79l20.511-46.276h12.538l20.656 46.276h-10.727l-4.166-9.206h-23.955zm39.463-54.892c-9.72 5.62-21.347 8.96-33.735 8.96-25.348 0-47.55-13.819-59.557-34.31 0-.094-.093-.094-.093-.19 0-.095-.098-.095-.098-.19l9.72-5.049 9.72-4.958c.097.1.195.19.288.385 8.29 13.434 23.156 22.394 40.02 22.394 5.435 0 10.675-.952 15.345-2.48-10.388-11.91-16.677-27.537-16.677-44.597 0-16.96 6.196-32.587 16.487-44.597-4.67-1.618-9.817-2.475-15.155-2.475-16.673 0-32.111 8.956-40.592 23.346-.097.095-.097.195-.097.285L62.155 35.356c.093-.19.19-.38.283-.48C74.353 14.009 96.838 0 122.376 0c12.388 0 24.016 3.336 33.735 9.055C165.831 3.335 177.458 0 189.842 0c25.539 0 48.028 14.01 59.939 34.876.095.1.19.29.285.48l-19.534 10.098c0-.09 0-.19-.095-.285-8.48-14.39-23.917-23.346-40.595-23.346-5.333 0-10.48.857-15.15 2.475 10.29 12.01 16.487 27.637 16.487 44.597 0 17.06-6.29 32.687-16.678 44.598 4.67 1.527 9.91 2.479 15.341 2.479 16.868 0 31.734-8.96 40.024-22.394.095-.195.19-.286.285-.385l9.718 4.958 9.721 5.049c0 .095-.095.095-.095.19 0 .096-.095.096-.095.19-12.006 20.491-34.21 34.31-59.558 34.31-12.384 0-24.011-3.34-33.73-8.96zm0-27.348c-8.007-8.48-13.15-20.01-13.15-32.687 0-12.482 4.86-23.821 13.15-32.301 8.29 8.48 13.15 19.82 13.15 32.301 0 12.677-5.148 24.207-13.15 32.687z" 
                        fill="#fff" fill-rule="evenodd"/>
                    </svg>
                    
                        <div className=' w-[100%] text-[#fff] ' >

                        {
                        isDesktop &&                    <ChanelCard/>

                    }
                     {
                        isTablet &&                   <ChanelCard/>

                    }
                    {
                        isMobile &&                    <ChanelCardM/>

                    }
                        

                        </div>

                    </div>

                    <div className=' w-[100%] flex flex-col justify-center items-center  text-center gap-4 ' >
                    <svg xmlns="http://www.w3.org/2000/svg" height="5rem" width="14rem" viewBox="-18.3195 -31.83875 158.769 191.0325">
<path fill='#fff' fill-rule="evenodd" clip-rule="evenodd" d="M116.797 90.217c0 20.504-16.634 37.138-37.138 37.138-5.907 0-11.474-1.357-16.498-3.87-4.957 2.445-10.592 3.87-16.43 3.87-20.505 0-37.139-16.634-37.139-37.138 0-20.504 16.634-37.138 37.138-37.138 5.907 0 11.474 1.358 16.43 3.802 4.957-2.444 10.592-3.802 16.499-3.802 20.504 0 37.138 16.634 37.138 37.138zm-7.332 0c0-16.43-13.376-29.805-29.806-29.805-3.123 0-6.178.475-8.962 1.358 5.703 4.752 9.845 11.134 11.881 18.467h-7.672A29.686 29.686 0 0063.229 65.3c-5.364 3.53-9.438 8.759-11.61 14.937h-7.672a37.368 37.368 0 0111.881-18.535 30.604 30.604 0 00-9.03-1.358c-16.43 0-29.805 13.375-29.805 29.805s13.375 29.806 29.805 29.806c3.123 0 6.11-.475 8.894-1.358-7.4-6.178-12.22-15.276-12.967-25.46h17.652v7.264l-8.623.136c2.241 5.975 6.247 11 11.475 14.462 5.227-3.463 9.233-8.487 11.474-14.462l-8.623-.136v-7.264h17.653c-.815 10.184-5.703 19.214-13.104 25.392 2.852.883 5.907 1.426 9.03 1.426 16.498.068 29.806-13.24 29.806-29.738z"/>
<path fill='#fff'
d="M110.631 7.759l-.228.076q-1.331-2.891-3.804-4.603-2.434-1.711-6.123-1.711-2.054 0-3.918.875-1.864.836-3.271 2.396-1.37 1.521-2.206 3.69-.837 2.167-.837 4.792 0 2.624.837 4.792.837 2.168 2.206 3.728 1.407 1.521 3.27 2.358 1.865.837 3.919.837 3.651 0 5.933-1.141 2.32-1.18 3.918-3.576l.228.076-.076 2.434q-.875.913-2.016 1.636-1.14.685-2.472 1.18-1.293.455-2.7.684-1.408.266-2.815.266-2.929 0-5.591-.95-2.663-.952-4.679-2.663-2.016-1.75-3.195-4.184-1.179-2.472-1.179-5.477 0-3.005 1.18-5.44 1.178-2.472 3.194-4.221 2.016-1.75 4.679-2.663 2.662-.95 5.59-.95 1.408 0 2.816.227 1.407.229 2.7.723 1.331.457 2.472 1.18 1.141.684 2.016 1.597zm-83.816 7.265q-.418.19-.798.494-.38.304-.38.837v4.679q-1.827 2.624-4.68 4.07-2.852 1.445-6.313 1.445-2.929 0-5.592-.951-2.662-.951-4.678-2.663-2.016-1.75-3.195-4.183Q0 16.279 0 13.274q0-3.004 1.18-5.439 1.178-2.472 3.194-4.222Q6.39 1.863 9.052.951 11.715 0 14.644 0q1.407 0 2.814.228 1.408.228 2.7.723 1.332.456 2.473 1.179 1.141.685 2.016 1.597l.153 4.032-.229.076q-1.33-2.89-3.803-4.602-2.435-1.712-6.124-1.712-2.054 0-3.918.875-1.863.837-3.27 2.396-1.37 1.522-2.207 3.69-.837 2.168-.837 4.792 0 2.586.8 4.754.836 2.169 2.205 3.728 1.408 1.521 3.271 2.396 1.864.837 3.956.837 3.956 0 6.77-1.521v-7.113q0-.532-.418-.837-.38-.304-.76-.495l.034-.19q.19.035.685.076.495.035 1.027.076h3.271q.457-.035.875-.076.418-.035.646-.076zM54.365.798q-.38.19-.76.495-.381.304-.419 1.141-.035.913-.076 2.32 0 1.37-.034 3.12 0 1.749-.035 3.803v4.26q-.035 2.472-.609 4.222-.57 1.75-1.521 2.928-.913 1.18-2.054
 1.864-1.103.685-2.206 1.027-1.065.38-2.016.457-.951.114-1.484.114-2.168 0-4.184-.57-2.016-.533-3.537-1.75-1.521-1.218-2.434-3.157-.913-1.94-.913-4.717V8.101q0-1.825-.035-3.27 0-1.484-.035-2.397-.034-.837-.418-1.14-.38-.305-.76-.496l.034-.19q.19.035.61.076.456.035.912.076.495 0 .95.035h1.37q.457-.035.951-.035.495-.035.913-.076.456-.035.646-.076l.035.19q-.418.19-.799.495-.342.304-.38 1.141-.035.913-.076 2.396v11.525q0 4.146 1.94 6.124 1.94 1.978 5.743 1.978 1.103 0 2.51-.267 1.408-.304 2.625-1.217 1.255-.913 2.092-2.586.875-1.674.875-4.45 0-3.005-.035-5.135 0-2.168-.035-3.69 0-1.56-.035-2.662-.034-1.103-.076-2.016-.034-.837-.418-1.141-.38-.304-.76-.495l.034-.19q.419.076.951.153.533.034.99.034.417 0 .95-.034.57-.076.989-.153zm27.6 6.961l-.228.076q-1.332-2.891-3.804-4.603-2.434-1.711-6.124-1.711-2.053 0-3.917.875-1.864.836-3.271 2.396-1.37 1.521-2.206 3.69-.837 2.167-.837 4.792 0 2.624.837 4.792.836 2.168 2.206 3.728 1.407 1.521 3.27 2.358 1.865.837 3.918.837 3.652 0 5.934-1.141 2.32-1.18 3.918-3.576l.228.076-.076 2.434q-.875.913-2.016 1.636-1.14.685-2.472 1.18-1.293.455-2.7.684-1.408.266-2.815.266-2.93 0-5.592-.95-2.662-.952-4.678-2.663-2.016-1.75-3.195-4.184-1.18-2.472-1.18-5.477 0-3.005 1.18-5.44 1.18-2.472 3.195-4.221 2.016-1.75 4.678-2.663Q68.881 0 71.81 0q1.407 0 2.814.227 1.408.229 2.7.723 1.332.457 2.473 1.18 1.141.684 2.016 1.597zm40.13 18.142q-.19-.034-.646-.075-.418 0-.913-.035-.495 0-.951-.034h-2.281q-.457.034-.914.075-.418.035-.646.076l-.035-.152q.38-.19.76-.495.381-.304.419-1.141.035-.913.035-1.902.035-.989.035-2.244V6.548q0-1.256-.035-2.207 0-.989-.035-1.901-.035-.837-.418-1.141-.38-.343-.76-.533l.034-.152q.228.076.646.114.457 0 .913.035.495.035.951.035h1.331q.456-.035.95-.035.496-.035.914-.076.456-.035.646-.076l.035.153q-.418.19-.799.532-.342.304-.38 1.14-.035.914-.076 1.903v17.877q.035.988.076 1.901.034.837.38 1.141.38.304.799.495z" 
/>
</svg>         
                                <div data-aos="fade-left" className=' w-[100%] text-[#fff] ' >

                        {
                        isDesktop &&                  <GucciCard/>

                    }
                     {
                        isTablet &&                  <GucciCard/>

                    }
                    {
                        isMobile &&                   <GucciCardM/>

                    }
                        

                        </div>

                    </div>

                    <div className=' items-center w-[100%] flex flex-col justify-center  text-center gap-4  ' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="8rem" height="4rem" viewBox="0 0 108 18" fill="#fff">
<path fill='#fff' d="M96.0057 5.7067H94.3025V17.2161H96.0057V5.7067ZM47.2483 5.7067H45.545V17.2161H47.2483V5.7067ZM13.6655 5.44447H15.6057C15.0873 3.75532 12.8459 0.521702 8.21176 0.521702C3.57761 0.521702 0 4.17489 0 9.01085C0 13.9119 3.53485 17.5 8.21176 17.5C12.8441 17.5 15.0873 14.1959 15.563 12.617H13.6869C13.1702 13.6461 11.531 15.724 8.21176 15.724C4.6484 15.724 1.94025 12.8576 1.94025 9.03255C1.94025 5.16053 4.65553 2.29404 8.21176 2.29404C11.4669 2.29404 13.0829 4.37202 13.6655 5.44447ZM26.4472 11.4614C26.4472 13.9336 24.7226 15.838 22.3743 15.838C20.0261 15.838 18.2765 13.9336 18.2765 11.4614C18.2765 8.98915 20.0011 7.08479 22.3743 7.08479C24.7475 7.08479 26.4472 8.98915 26.4472 11.4614ZM26.4259 17.2161H28.1291V5.7067H26.4259V7.87692C26.082 7.11192 24.874 5.44808 22.3084 5.44808C19.0764 5.44808 16.5322 8.03064 16.5322 11.465C16.5322 14.8994 19.0764 17.4819 22.3084 17.4819C24.874 17.4819 26.0606 15.8416 26.4259 15.0531V17.2161ZM30.1977 17.2161H31.901V0.5H30.1977V17.2161ZM39.7475 17.2161L44.1446 5.7067H42.2685L38.6624 15.4437L35.0688 5.7067H33.1945L37.5934 17.2161H39.7475ZM45.5237 3.69383H47.2697V1.68096H45.5237V3.69383ZM57.5072 17.2161H59.2319V10.7181C59.2319 7.80819 57.7442 5.44447 54.5764 5.44447C52.2263 5.44447 51.2357 6.99798 51.013 7.63277V5.7067H49.3169V17.2161H51.0201V10.8483C51.0201 8.6383 52.2495 7.08479 54.2966 7.08479C56.3438 7.08479 57.5037 8.59489 57.5037 10.7615L57.5072 17.2161ZM76.9079 17.2161L70.4191 8.22415L76.9079 0.809255H74.6648L67.0784 9.56245V0.805638H65.2094V17.2161H67.0855V12.0311L69.1291 9.68904L74.7557 17.2161H76.9079ZM77.8772 17.2161H79.5805V0.5H77.8772V17.2161ZM83.0262 10.3672C83.1855 9.43502 83.6643 8.58996 84.3779 7.98137C85.0916 7.37278 85.9942 7.03984 86.9263 7.04138C89.189 7.04138 90.4612 8.6383 90.8068 10.3672H83.0262ZM82.9211 11.8936H92.6473C92.7346 8.13011 90.2545 5.43904 86.9352 5.43904C83.6801 5.43904 81.2018 8.065 81.2018 11.456C81.2018 14.8469 83.6587 17.4729 86.978 17.4729C90.3846 17.4729 92.0665 15.0874 92.5012 13.5122H90.7997C90.3471 14.4762 89.2478 15.8633 86.9833 15.8633C84.7188 15.8633 83.0636 14.1127 82.9318 11.9027L82.9211 11.8936ZM94.2918 3.69745H96.0325V1.68096H94.2864L94.2918 3.69745ZM108 17.2197V10.7181C108 7.80819 106.512 5.44447 103.344 5.44447C100.994 5.44447 100.004 6.99798 99.7811 7.63277V5.7067H98.0778V17.2161H99.774V10.8483C99.774 8.6383 101.002 7.08479 103.051 7.08479C105.099 7.08479 106.258 8.59489 106.258 10.7615V17.2161L108 17.2197Z" fill="#fff"/>
</svg>
                        <div data-aos="fade-left" className=' w-[100%] text-[#fff] ' >
                        {
                        isDesktop &&                  <YslCard/>

                    }
                     {
                        isTablet &&                  <YslCard/>

                    }
                    {
                        isMobile &&                   <YslCardM/>

                    }

                        </div>

                    </div>
                    
                </div>
                
            </div>
  )
}

export default Mid
