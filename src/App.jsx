
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import UserProfile from './pages/UserProfile'
import { Fotter, NaveBar, NaveBarM } from './common/index'
import { useMediaQuery } from 'react-responsive'


function App() {


  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 991px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 992px)' })
 

  return (
    <div className=' flex flex-col ' >
      
      <BrowserRouter>
      <div className= ' z-[1]   fixed   w-[100%]  ' >
      {
            isMobile && <NaveBarM />
        }
        {
            isDesktop &&       <NaveBar />

        }
        {
            isTablet && <NaveBar />

        }
        </div>
     
      <Routes>
        
      <Route  path='/' exact element={<Home/>} >
                  </Route>
      <Route  path='/cart' exact element={<Cart/>} >
                  </Route>
      <Route  path='/userprofile' exact element={<UserProfile/>} >
                  </Route>

      </Routes>
      <Fotter />
      </BrowserRouter>
     
    </div>
    
    
  )
}

export default App
