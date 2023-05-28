import React from 'react'
import { Carousel } from '@mantine/carousel';
import './chanel.css'
import LatestCard from './LatestCard';
import { useMediaQuery } from 'react-responsive';

const Latest = () => {
    const random = [
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
            brand:'gucci',
            title:'Gucci Bloom 100ml Eau de Toilette',
            img:'https://media.gucci.com/style/White_South_0_160_316x316/1643739312/670035_99999_0099_002_100_0000_Light-Gucci-Bloom-100ml-Eau-de-Toilette.jpg',
            description:'Eau de Parfum Spray starting from',
            price:'133'
        },
        {
            id:'4',
            brand:'gucci',
            title:'Gucci Bloom 100ml eau de parfum',
            img:'https://media.gucci.com/style/White_South_0_160_316x316/1545327905/488830_99999_0099_002_100_0000_Light-Gucci-Bloom-100ml-eau-de-parfum.jpg',
            description:'Eau de Parfum Spray starting from',
            price:'155'
        },
        {
            id:'5',
            brand:'calvinklein',
            title:'Eternity Eau de Parfum For Men',
            img:'https://calvinklein.scene7.com/is/image/CalvinKlein/44014552_000_alternate1?wid=720&hei=949&fmt=pjpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0',
            description:'Eau de Parfum Spray starting from',
            price:'125'
        },
        {
            id:'6',
            brand:'calvinklein',
            title:'Defy Eau De Parfum',
            img:'https://calvinklein.scene7.com/is/image/CalvinKlein/44016838_000_main?wid=720&hei=949&fmt=pjpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0',
            description:'Eau de Parfum Spray starting from',
            price:'133'
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
            brand:'gucci',
            title:'GUCCI FLORA GORGEOUS GARDENIA, 100ML, EAU DE PARFUM ',
            img:'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1614617112/667343_99999_0099_002_100_0000_Light-Gucci-Flora-Gorgeous-Gardenia-100ml-eau-de-parfum.jpg',
            description:'Eau de Parfum Spray starting from',
            price:'155'
        },
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
            brand:'gucci',
            title:'Gucci Bloom 100ml Eau de Toilette',
            img:'https://media.gucci.com/style/White_South_0_160_316x316/1643739312/670035_99999_0099_002_100_0000_Light-Gucci-Bloom-100ml-Eau-de-Toilette.jpg',
            description:'Eau de Parfum Spray starting from',
            price:'133'
        },
        {
            id:'4',
            brand:'gucci',
            title:'Gucci Bloom 100ml eau de parfum',
            img:'https://media.gucci.com/style/White_South_0_160_316x316/1545327905/488830_99999_0099_002_100_0000_Light-Gucci-Bloom-100ml-eau-de-parfum.jpg',
            description:'Eau de Parfum Spray starting from',
            price:'155'
        },
        {
            id:'5',
            brand:'calvinklein',
            title:'Eternity Eau de Parfum For Men',
            img:'https://calvinklein.scene7.com/is/image/CalvinKlein/44014552_000_alternate1?wid=720&hei=949&fmt=pjpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0',
            description:'Eau de Parfum Spray starting from',
            price:'125'
        },
        {
            id:'6',
            brand:'calvinklein',
            title:'Defy Eau De Parfum',
            img:'https://calvinklein.scene7.com/is/image/CalvinKlein/44016838_000_main?wid=720&hei=949&fmt=pjpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0',
            description:'Eau de Parfum Spray starting from',
            price:'133'
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
            brand:'gucci',
            title:'GUCCI FLORA GORGEOUS GARDENIA, 100ML, EAU DE PARFUM ',
            img:'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1614617112/667343_99999_0099_002_100_0000_Light-Gucci-Flora-Gorgeous-Gardenia-100ml-eau-de-parfum.jpg',
            description:'Eau de Parfum Spray starting from',
            price:'155'
        },
        
    ]
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 991px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 992px)' })
  return (
    <div className=' w-[100%]  ' >
         {
            isDesktop && <Carousel  className='    '
            withIndicators
            width="1080px"
            height='40rem'
            slideSize="20rem"
            slideGap="xl"
            loop
            align="center"
            
            slidesToScroll={3}
            styles={{
              control:{
                  color: 'white',
                  width:'1rem',
                  height:'6rem',
                  borderRadius:'0',
                  background:'#121212',
                  color:'white',
              }
          }}
          >
              {
                  random?.map(data =>{
                      return(
                          <Carousel.Slide>
                              <LatestCard data={data} />
                          </Carousel.Slide>
      
                      )
                  })
              }
          
            {/* ...other slides */}
          </Carousel>
         }

         {
            isTablet && <Carousel  className='    '
            withIndicators
            width="1280px"
            height='40rem'
            slideSize="20rem"
            slideGap="lg"
            loop
            align="center"
            
            slidesToScroll={2}
            styles={{
              control:{
                  color: 'white',
                  width:'1rem',
                  height:'6rem',
                  borderRadius:'0',
                  background:'#121212',
                  color:'white',
              }
          }}
          >
              {
                  random?.map(data =>{
                      return(
                          <Carousel.Slide>
                              <LatestCard data={data} />
                          </Carousel.Slide>
      
                      )
                  })
              }
          
            {/* ...other slides */}
          </Carousel>
         }
         {
            isMobile && <Carousel  className='    '
            withIndicators
            width="1280px"
            height='40rem'
            slideSize="20rem"
            slideGap="lg"
            loop
            align="center"
            
            slidesToScroll={1}
            styles={{
              control:{
                  color: 'white',
                  width:'1rem',
                  height:'6rem',
                  borderRadius:'0',
                  background:'#121212',
                  color:'white',
              }
          }}
          >
              {
                  random?.map(data =>{
                      return(
                          <Carousel.Slide>
                              <LatestCard data={data} />
                          </Carousel.Slide>
      
                      )
                  })
              }
          
            {/* ...other slides */}
          </Carousel>
         }

       
    </div>
  )
}

export default Latest
