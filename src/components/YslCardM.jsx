import React from 'react'
import './chanel.css'
import {VscDiffAdded} from 'react-icons/vsc'
import Card from './Card'
import { Carousel } from '@mantine/carousel';

import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import CardM from './CardM';

const ysl= [
    {
        id:'1',
        brand:'calvinklein',
        title:'Eternity Eau de Parfum For Men',
        img:'https://calvinklein.scene7.com/is/image/CalvinKlein/44014552_000_alternate1?wid=720&hei=949&fmt=pjpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0',
        description:'Eau de Parfum Spray starting from',
        price:'125'
    },
    {
        id:'2',
        brand:'calvinklein',
        title:'Defy Eau De Parfum',
        img:'https://calvinklein.scene7.com/is/image/CalvinKlein/44016838_000_main?wid=720&hei=949&fmt=pjpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0',
        description:'Eau de Parfum Spray starting from',
        price:'133'
    },
    {
        id:'3',
        brand:'calvinklein',
        title:'Eternity Eau De Toilette For Men',
        img:'https://calvinklein.scene7.com/is/image/CalvinKlein/44010003_000_main?wid=720&hei=949&fmt=pjpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0',
        description:'Eau de Parfum Spray starting from',
        price:'72'
    },
    {
        id:'4',
        brand:'calvinklein',
        title:'CK ONE',
        img:'https://calvinklein.scene7.com/is/image/CalvinKlein/44010044_000_main?wid=720&hei=949&fmt=pjpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0',
        description:'Eau de Parfum Spray starting from',
        price:'83'
    },
    {
        id:'5',
        brand:'calvinklein',
        title:'Eternity Reflections Eau De Toilette For Men',
        img:'https://calvinklein.scene7.com/is/image/CalvinKlein/44019973_000_main?wid=720&hei=949&fmt=pjpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0',
        description:'Eau de Parfum Spray starting from',
        price:'68'
    },
    {
        id:'6',
        brand:'calvinklein',
        title:'CK ONE Gift Set',
        img:'https://calvinklein.scene7.com/is/image/CalvinKlein/44024585_000_main?wid=720&hei=949&fmt=pjpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0',
        description:'Eau de Parfum Spray starting from',
        price:'87'
    },
    {
        id:'7',
        brand:'calvinklein',
        title:'ETERNITY For Men Eau De Parfum',
        img:'https://calvinklein.scene7.com/is/image/CalvinKlein/44015022_000_main?wid=720&hei=948&fmt=pjpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0',
        description:'Eau de Parfum Spray starting from',
        price:'109'
    },
    {
        id:'8',
        brand:'calvinklein',
        title:'CK One Reflections Eau De Toilette',
        img:'https://calvinklein.scene7.com/is/image/CalvinKlein/44013359_000_main?wid=648&hei=855&fmt=jpeg&qlt=90%2C0&op_sharpen=1&resMode=trilin&op_usm=0.8%2C1.0%2C6%2C0&iccEmbed=0',
        description:'Eau de Parfum Spray starting from',
        price:'90'
    },
    {
        id:'9',
        brand:'calvinklein',
        title:'Eternity Eau de Parfum Intense For Women',
        img:'https://calvinklein.scene7.com/is/image/CalvinKlein/44014550_000_alternate1?wid=720&hei=949&fmt=pjpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0',
        description:'Eau de Parfum Spray starting from',
        price:'107'
    },
    {
        id:'10',
        brand:'calvinklein',
        title:'ETERNITY Eau De Parfum For Women',
        img:'https://calvinklein.scene7.com/is/image/CalvinKlein/44010032_000_main?wid=720&hei=949&fmt=pjpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0',
        description:'Eau de Parfum Spray starting from',
        price:'114'
    },
    {
        id:'11',
        brand:'calvinklein',
        title:'Obsession Eau De Parfum For Women',
        img:'https://calvinklein.scene7.com/is/image/CalvinKlein/44013404_000_main?wid=720&hei=949&fmt=pjpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0',
        description:'Eau de Parfum Spray starting from',
        price:'97'
    },
    {
        id:'12',
        brand:'calvinklein',
        title:'CK EVERYONE Gift Set',
        img:'https://calvinklein.scene7.com/is/image/CalvinKlein/44028448_000_main?wid=720&hei=949&fmt=pjpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0',
        description:'Eau de Parfum Spray starting from',
        price:'85'
    },
    

]


const YslCardM = () => {
  return (
    <div  animateIn='fadeIn' animateOut='fadeOut'  className=' ck rounded-[10px] flex gap-0 shadow h-[10rem] w-[100%] bg-[#333333] ' >

        <div  className=' ckS rounded-l-[10px]  w-[20%] flex flex-col gap-3 h-[10rem] justify-center ' >
            {/* <h1 className=' text-[.7rem] font-medium ' >FRAGRANCE</h1>
            <h2 className=' text-2xl ' >WOMEN</h2>
            <p className=' py-[.5rem] text-[#918f8f] text-sm font-thin  ' >Lifelong companions for bold, luminous personalities in perpetual movement, each <br/>
            CHANEL fragrance for women is inspired by the world of Mademoiselle and <br/>
            composes its own imaginative and feminine olfactory experience. For a complete <br/>
            beauty ritual, prolong the fragrance trail with other expressions of the scent. 

            </p> */}
        </div>
        <div className='cc flex overflow-auto w-[80%] gap-10 h-auto ' >

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
            ysl?.map(data =>{
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

export default YslCardM
