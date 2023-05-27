import React from 'react'
import './chanel.css'
import {VscDiffAdded} from 'react-icons/vsc'
import Card from './Card'
import { Carousel } from '@mantine/carousel';

import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import CardM from './CardM';

const gucci= [
    {
        id:'1',
        brand:'gucci',
        title:'Gucci Bloom 100ml Eau de Toilette',
        img:'https://media.gucci.com/style/White_South_0_160_316x316/1643739312/670035_99999_0099_002_100_0000_Light-Gucci-Bloom-100ml-Eau-de-Toilette.jpg',
        description:'Eau de Parfum Spray starting from',
        price:'133'
    },
    {
        id:'2',
        brand:'gucci',
        title:'Gucci Bloom 100ml eau de parfum',
        img:'https://media.gucci.com/style/White_South_0_160_316x316/1545327905/488830_99999_0099_002_100_0000_Light-Gucci-Bloom-100ml-eau-de-parfum.jpg',
        description:'Eau de Parfum Spray starting from',
        price:'155'
    },
    {
        id:'3',
        brand:'gucci',
        title:'GUCCI BLOOM EAU DE PARFUM INTENSE, 100ML',
        img:'https://media.gucci.com/style/White_South_0_160_316x316/1674865031/729160_99999_0099_002_100_0000_Light-Gucci-Bloom-Eau-de-Parfum-Intense-100ml.jpg',
        description:'Eau de Parfum Spray starting from',
        price:'165'
    },
    {
        id:'4',
        brand:'gucci',
        title:'GUCCI BLOOM AMBROSIA DI FIORI, 100ML EAU DE PARFUM',
        img:'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1562764504/595750_99999_0099_002_100_0000_Light-Gucci-Bloom-Ambrosia-di-Fiori-100ml-Eau-de-Parfum.jpg',
        description:'Eau de Parfum Spray starting from',
        price:'165'
    },
    {
        id:'5',
        brand:'gucci',
        title:'GUCCI BLOOM PROFUMO DI FIORI, 100ML EAU DE PARFUM',
        img:'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1611335703/628572_99999_0099_002_100_0000_Light-Gucci-Bloom-Profumo-di-Fiori-100ml-Eau-de-Parfum.jpg',
        description:'Eau de Parfum Spray starting from',
        price:'155'
    },
    {
        id:'6',
        brand:'gucci',
        title:'GUCCI BLOOM GIFT SET',
        img:'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1675725433/736615_99999_0099_002_100_0000_Light-Gucci-Bloom-gift-set.jpg',
        description:'Eau de Parfum Spray starting from',
        price:'167'
    },
    {
        id:'7',
        brand:'gucci',
        title:'GUCCI GUILTY EAU DE PARFUM INTENSE POUR FEMME, 90ML, EAU DE PARFUM',
        img:'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1640102406/671485_99999_0099_002_100_0000_Light-Gucci-Guilty-Eau-de-Parfum-Intense-Pour-Femme-90ml-eau-de-parfum.jpg',
        description:'Eau de Parfum Spray starting from',
        price:'165'
    },
    {
        id:'8',
        brand:'gucci',
        title:'GUCCI FLORA GORGEOUS GARDENIA, 100ML, EAU DE PARFUM ',
        img:'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1614617112/667343_99999_0099_002_100_0000_Light-Gucci-Flora-Gorgeous-Gardenia-100ml-eau-de-parfum.jpg',
        description:'Eau de Parfum Spray starting from',
        price:'155'
    },
    {
        id:'9',
        brand:'gucci',
        title:'GUCCI FLORA GORGEOUS JASMINE, 100ML, EAU DE PARFUM',
        img:'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1657799104/701224_99999_0099_002_100_0000_Light-Gucci-Flora-Gorgeous-Jasmine-100ml-eau-de-parfum.jpg',
        description:'Eau de Parfum Spray starting from',
        price:'155'
    },
    {
        id:'10',
        brand:'gucci',
        title:'THE ALCHEMIST’S GARDEN A REASON TO LOVE, EAU DE PARFUM',
        img:'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1674863112/702555_99999_0099_002_100_0000_Light-The-Alchemists-Garden-A-Reason-To-Love-eau-de-parfum.jpg',
        description:'Eau de Parfum Spray starting from',
        price:'380'
    },
    {
        id:'11',
        brand:'gucci',
        title:'FADING AUTUMN, WOODS, 150ML, ACQUA PROFUMATA',
        img:'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1546620305/548759_99999_0099_002_100_0000_Light-Fading-Autumn-Woods-150ml-acqua-profumata.jpg',
        description:'Eau de Parfum Spray starting from',
        price:'266'
    },
    {
        id:'12',
        brand:'gucci',
        title:'THE VIRGIN VIOLET, VIOLET, 100ML, EAU DE PARFUM',
        img:'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1546621205/548621_99999_0099_002_100_0000_Light-The-Virgin-Violet-Violet-100ml-eau-de-parfum.jpg',
        description:'Eau de Parfum Spray starting from',
        price:'380'
    },
    

]


const GucciCardM = () => {
    return (
        <div  animateIn='fadeIn' animateOut='fadeOut'  className=' GucciTM flex gap-2 shadow h-[10rem] w-[100%] bg-[#333333] ' >
    
            <div  className=' gucciM  w-[30%] flex flex-col gap-3 h-[10rem] justify-center ' >
                {/* <h1 className=' text-[.7rem] font-medium ' >FRAGRANCE</h1>
                <h2 className=' text-2xl ' >WOMEN</h2>
                <p className=' py-[.5rem] text-[#918f8f] text-sm font-thin  ' >Lifelong companions for bold, luminous personalities in perpetual movement, each <br/>
                CHANEL fragrance for women is inspired by the world of Mademoiselle and <br/>
                composes its own imaginative and feminine olfactory experience. For a complete <br/>
                beauty ritual, prolong the fragrance trail with other expressions of the scent. 
    
                </p> */}
            </div>
            <div className=' flex overflow-auto w-[70%] gap-10 h-auto ' >
    
            <Carousel 
    
    nextControlIcon={<IconArrowRight size={10} />}
    previousControlIcon={<IconArrowLeft size={10} />}
          
          slidesToScroll={1}
          maw='100%'
          slideSize='100%'
          height='auto'
          width='100%'
          styles={{
            control: {
               width:'10px',
               height:'1rem',
               borderRadius:'0',
               background:'#121212',
               
               color:'white',
              '&[data-inactive]': {
                opacity: 0,
                cursor: 'default',
              },
            },
          }}
        >
             {
                gucci?.map(data =>{
                    return(
                        <Carousel.Slide><CardM data={data} /></Carousel.Slide>
                    )
                })
               }
          
         
          {/* ...other slides */}
        </Carousel>
              
           
            </div>
          
        </div>
      )
}

export default GucciCardM
