import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./index.css"
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';


export default function OurBlog() {
 

    return (
        <div className='our-blog'>
            <h3 className='blog-header-text'>OUR BLOGS</h3>
            <div className='main-container'>

                <div className='swiper-container'>
                    <Swiper
                        spaceBetween={80}
                        slidesPerView={3}

                        autoplay={{
                          delay: 3500,
                          disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: {
                              slidesPerView: 1,
                            },
                            700:{
                              slidesPerView:2,
                            },
                            1500:{
                              slidesPerView:3,
                            
                            },
                          }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img className='blogs-img' src={require('../../../images/Blogs/blogs.svg').default} alt="blog slide" />
                            <h3>In amet, mollis </h3>
                            <p>Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero, libero, amet tortor, velit ex. </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='blogs-img' src={require('../../../images/Blogs/blogs.svg').default} alt="blog slide" />
                            <h3>In amet, mollis </h3>
                            <p>Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero, libero, amet tortor, velit ex. </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='blogs-img' src={require('../../../images/Blogs/blogs.svg').default} alt="blog slide" />
                            <h3>In amet, mollis </h3>
                            <p>Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero, libero, amet tortor, velit ex. </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='blogs-img' src={require('../../../images/Blogs/blogs.svg').default} alt="blog slide" />
                            <h3>In amet, mollis </h3>
                            <p>Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero, libero, amet tortor, velit ex. </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='blogs-img' src={require('../../../images/Blogs/blogs.svg').default} alt="blog slide" />
                            <h3>In amet, mollis </h3>
                            <p>Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero, libero, amet tortor, velit ex. </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='blogs-img' src={require('../../../images/Blogs/blogs.svg').default} alt="blog slide" />
                            <h3>In amet, mollis </h3>
                            <p>Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero, libero, amet tortor, velit ex. </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='blogs-img' src={require('../../../images/Blogs/blogs.svg').default} alt="blog slide" />
                            <h3>In amet, mollis </h3>
                            <p>Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero, libero, amet tortor, velit ex. </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='blogs-img' src={require('../../../images/Blogs/blogs.svg').default} alt="blog slide" />
                            <h3>In amet, mollis </h3>
                            <p>Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero, libero, amet tortor, velit ex. </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='blogs-img' src={require('../../../images/Blogs/blogs.svg').default} alt="blog slide" />
                            <h3>In amet, mollis </h3>
                            <p>Ipsum dui sit non ipsum leo, dictumst. Dictumst. Et pulvinar leo, id ut. Eget mattis pellentesque mattis dolor adipiscing accumsan elit. Non libero, libero, amet tortor, velit ex. </p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
