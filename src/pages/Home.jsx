import React, { useEffect } from 'react'
import {Fotter, Mid, NaveBar, NaveBarM} from '../common/index.js'
import {useMediaQuery} from 'react-responsive'

const Home = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 991px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 992px)' })

 
   

  return (
    <div className='  flex flex-col  items-center w-[100%] h-screen overflow-auto  ' >
        

       
            <div className=' w-[100%] ' >
                <Mid/>
            </div>

            
            
        
        
    </div>
  )
}

export default Home
