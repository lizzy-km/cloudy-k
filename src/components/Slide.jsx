import React from 'react'
import { Carousel } from '@mantine/carousel';
import { rem } from '@mantine/core';
import { css } from '@emotion/react';
import './chanel.css'

const Slide = () => {
    const customStyles = css`
  /* Override the background color of the carousel controls */
  .mantine-carousel-controls {
    background-color: #f0f0f0;
  }
`;
  return (
    <Carousel loop 
    maw={1680}
    slideSize='100%'
    // mx="auto"
    withIndicators
    height={700}
    styles={{
        control:{
            color: 'white',
            width:'1rem',
            height:'6rem',
            borderRadius:'0',
            background:'#121212',
            color:'white',
        },
      indicator: {
        width: rem(12),
        height: rem(4),
        transition: 'width 250ms ease',
        color:'white',

        '&[data-active]': {
          width: rem(40),
        },
      },
    }}
  >
    <Carousel.Slide>
    <img className=' brightness-75 w-[100%] h-[700px] object-cover ' src="https://www.chanel.com/us/img/t_one/q_auto:good,fl_lossy,dpr_1.2,f_auto/w_1920/prd-emea/sys-master/content/P1/ha8/h24/10191925182494-Desktop_ONE_HP-CORPO_Sliding-Hero_2880x1260px.jpg" alt=""/>
                    <div className=' gap-6 tracking-wider absolute bottom-[20%] left-[25%] text-[#fff] flex flex-col justify-center items-center text-center ' >
                        <p className=' text-[1.55rem] font-medium ' >Fragrance</p>
                        <span className=' text-[2.875rem] font-semibold ' >LES CARACTÈRES DE CHANEL</span>
                        <button className=' w-[9rem]  h-[3rem] bg-[#fff] text-[#000] text-[.7875rem] font-medium ' type=""> SHOP NOW</button>
                    </div>
    </Carousel.Slide>
    <Carousel.Slide>
    <img className=' brightness-75 w-[100%] h-[700px] object-cover ' src=
    "https://media.gucci.com/content/HeroRegularStandard_3200x1350/1677524480/HeroRegularStandard_Bloom-intense-2023-02_001_Default.jpg" alt=""/>
                    <div className=' gap-6 tracking-wider absolute bottom-[20%] left-[8%] text-[#fff] flex flex-col justify-center items-center text-center ' >
                        <p className=' text-[3.55rem] font-thin ' >WOMEN'S FRAGRANCES</p>
                        <span className=' text-[.975rem] font-semibold ' >Diverse expressions of self are celebrated through Gucci perfumes for women with a refined blend of scents.</span>
                        <button className=' w-[9rem]  h-[3rem] bg-[#fff] text-[#000] text-[.7875rem] font-medium ' type=""> SHOP NOW</button>
                    </div>
    </Carousel.Slide>
    <Carousel.Slide>
    <img className=' brightness-75 w-[100%] h-[700px] object-cover ' src=
    "https://www.yslbeautyus.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-ysl-us-Library/default/dwc8801c1d/landing-pages/frag-collection/Hero%20Asset%20(3).jpg?sw=2000&sh=724&sm=cut&q=85" alt=""/>
                    <div className=' gap-6 tracking-wider absolute bottom-[20%] left-[20%] text-[#fff] flex flex-col justify-center items-center text-center ' >
                        <p className=' text-[3.55rem]   font-bold ' >Y EAU DE PARFUM
<br/>INTENSE</p>
                        <span className=' text-[.975rem] font-thin ' >
                        A FRESH AND POWERFUL COLOGNE WITH  BLUE JUNIPER BERRIES, LAVENDER, AND PATCHOULI
                        </span>
                        <button className=' w-[9rem]  h-[3rem] bg-[#fff] text-[#000] text-[.7875rem] font-medium ' type=""> SHOP NOW</button>
                    </div>
    </Carousel.Slide>

    <Carousel.Slide>
    <img className=' brightness-75 w-[100%] h-[700px] object-cover ' src=
    "https://cdn.shopify.com/s/files/1/1556/1715/articles/Banner_Apr28_800x.jpg?v=1619703044" alt=""/>
                    <div className=' gap-6 tracking-wider absolute bottom-[20%] left-[25%] text-[#fff] flex flex-col justify-center items-center text-center ' >
                        <p className=' text-[3.55rem]   font-bold ' >CK One for Every Body
</p>
                        <span className=' text-[.975rem] font-thin ' >
                        The original gender-inclusive fragrance.
Celebrate pride.
                        </span>
                        <button className=' w-[9rem]  h-[3rem] bg-[#fff] text-[#000] text-[.7875rem] font-medium ' type=""> SHOP NOW</button>
                    </div>
    </Carousel.Slide>
    {/* ...other slides */}
  </Carousel>
  )
}

export default Slide
