import React from 'react'
import './chanel.css'
import {VscDiffAdded} from 'react-icons/vsc'
import Card from './Card'
import { Carousel } from '@mantine/carousel';

import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import CardM from './CardM';

const chanel= [
    {
        id:'1',
        brand:'chanel',
        title:'coco mademoiselle',
        img:'https://www.chanel.com/images/t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620//coco-mademoiselle-eau-de-parfum-spray-3-4fl-oz--packshot-default-116520-9518352924702.jpg',
        description:'Eau de Parfum Spray starting from',
        price:'94'
    },
    {
        id:'2',
        brand:'chanel',
        title:'n°5',
        img:'https://www.chanel.com/images/t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620//n-5-eau-de-parfum-spray-3-4fl-oz--packshot-default-125530-9518357119006.jpg',
        description:'Eau de Parfum Spray starting from',
        price:'94'
    },
    {
        id:'3',
        brand:'chanel',
        title:'chance eau tendre',
        img:'https://www.chanel.com/images/t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620//chance-eau-tendre-eau-de-parfum-spray-3-4fl-oz--packshot-default-126260-9518357184542.jpg',
        description:'Eau de Parfum Spray starting from',
        price:'94'
    },
    {
        id:'4',
        brand:'chanel',
        title:'gabrielle chanel essence',
        img:'https://www.chanel.com/images/t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620//gabrielle-chanel-essence-eau-de-parfum-spray-3-4fl-oz--packshot-default-120630-9518175879198.jpg',
        description:'Eau de Parfum Spray starting from',
        price:'94'
    },
    {
        id:'5',
        brand:'chanel',
        title:'Coco Noir',
        img:'https://www.chanel.com/images/t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620//coco-noir-eau-de-parfum-spray-3-4fl-oz--packshot-default-113660-9519205842974.jpg',
        description:'Eau de Parfum Spray starting from',
        price:'94'
    },
    {
        id:'6',
        brand:'chanel',
        title:'coco mademoiselle',
        img:'https://www.chanel.com/images/t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620//coco-mademoiselle-eau-de-parfum-intense-spray-3-4fl-oz--packshot-default-116660-9519205384222.jpg',
        description:'Eau de Parfum Spray starting from',
        price:'94'
    },
    {
        id:'7',
        brand:'chanel',
        title:'chance',
        img:'https://www.chanel.com/images/t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620//chance-eau-de-parfum-spray-3-4fl-oz--packshot-default-126520-9519204401182.jpg',
        description:'Eau de Parfum Spray starting from',
        price:'94'
    },
    {
        id:'8',
        brand:'chanel',
        title:'GABRIELLE CHANEL',
        img:'https://www.chanel.com/images/t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620//gabrielle-chanel-eau-de-parfum-spray-3-4fl-oz--packshot-default-120525-9518095564830.jpg',
        description:'Eau de Parfum Spray starting from',
        price:'94'
    },
    {
        id:'9',
        brand:'chanel',
        title:'COCO',
        img:'https://www.chanel.com/images/t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620//coco-eau-de-parfum-spray-3-4fl-oz--packshot-default-113530-9519205613598.jpg',
        description:'Eau de Parfum Spray starting from',
        price:'94'
    },
    {
        id:'10',
        brand:'chanel',
        title:'allure sensuelle',
        img:'https://www.chanel.com/images/t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620//allure-sensuelle-eau-de-parfum-spray-3-4fl-oz--packshot-default-129730-8824194039838.jpg',
        description:'Eau de Parfum Spray starting from',
        price:'94'
    },
    {
        id:'11',
        brand:'chanel',
        title:'allure',
        img:'https://www.chanel.com/images/t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620//allure-eau-de-parfum-spray-3-4fl-oz--packshot-default-112530-8824193548318.jpg',
        description:'Eau de Parfum Spray starting from',
        price:'94'
    },
    {
        id:'12',
        brand:'chanel',
        title:'sycomore',
        img:'https://www.chanel.com/images/t_one//w_0.80,h_0.80,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620//sycomore-limited-edition-les-exclusifs-de-chanel-eau-de-parfum-6-7fl-oz--packshot-default-122308-8857871024158.jpg',
        description:'Eau de Parfum Spray starting from',
        price:'94'
    },
    

]


const ChanelCardM = () => {
  return (
    <div  animateIn='fadeIn' animateOut='fadeOut'  className=' chanel flex gap-2 shadow h-[10rem] w-[100%] bg-[#333333] ' >

        <div  className=' chanelS  w-[10rem] flex flex-col gap-3 h-[10rem] justify-center ' >
            {/* <h1 className=' text-[.7rem] font-medium ' >FRAGRANCE</h1>
            <h2 className=' text-2xl ' >WOMEN</h2>
            <p className=' py-[.5rem] text-[#918f8f] text-sm font-thin  ' >Lifelong companions for bold, luminous personalities in perpetual movement, each <br/>
            CHANEL fragrance for women is inspired by the world of Mademoiselle and <br/>
            composes its own imaginative and feminine olfactory experience. For a complete <br/>
            beauty ritual, prolong the fragrance trail with other expressions of the scent. 

            </p> */}
        </div>
        <div className=' flex overflow-auto w-[100%] gap-10 h-auto ' >

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
            chanel?.map(data =>{
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

export default ChanelCardM
