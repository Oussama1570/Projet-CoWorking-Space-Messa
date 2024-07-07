import React from 'react'
import "./Carousel.css"

const Carousel = () => {
  return (

<div>

    <div className='CarouselSlider'>
    <div>
      <section class="carousel" aria-label="Gallery">
  <ol class="carousel__viewport">
    <li id="carousel__slide1"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper">
        <a href="#carousel__slide4"
           class="carousel__prev">Go to last slide</a>
        <a href="#carousel__slide2"
           class="carousel__next">Go to next slide</a>
           <div class="carousel__text-overlay">
            <div className='TechnoloSlider1'>
            <h2>Empowering Your Work with Cutting-Edge Technologies</h2>
    
    <p>
Empowering Your Work with Cutting-Edge TechnologiesIn today's dynamic work
 environment, having access to the latest technologies  is crucial for success.
  At our coworking space, we go beyond providing just
  a desk and a chair.</p>
  </div>

  </div>
      </div>
    </li>
    <li id="carousel__slide2"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide1"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide3"
         class="carousel__next">Go to next slide</a>

<div className='TechnoloSlider2'>
            <h2>Unleash the Power of Shared Workspaces in Our Coworking Space
            Break the isolation and unlock a world of collaboration.</h2>
    
    <p>
    Our coworking space offers not just a desk, but a vibrant ecosystem of shared
     workspaces designed to foster connection, inspire creativity, and spark innovation.</p>
  </div>

    </li>
    <li id="carousel__slide3"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide2"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide4"
         class="carousel__next">Go to next slide</a>

<div className='TechnoloSlider3'>
            <h2>Fully Equipped for Success: Your One-Stop Shop for Work Essentials</h2>
    
    <p>
    At our coworking space, we understand that having the right tools at your disposal is critical for
     peak performance. That's why we provide you with a comprehensive range of equipment to ensure a seamless
      and productive workday.</p> </div>


    </li>
    <li id="carousel__slide4"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide3"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide1"
         class="carousel__next">Go to first slide</a>

<div className='TechnoloSlider4'>
            <h2>Thrive in a Vibrant Community: Where Collaboration Meets Connection</h2>
    
    <p>
    Coworking spaces offer more than just a desk and an internet connection. They provide
     a unique opportunity to connect with a diverse and inspiring community of professionals.</p> </div>
         
    </li>
  </ol>
  <aside class="carousel__navigation">
    <ol class="carousel__navigation-list">
      <li class="carousel__navigation-item">
        <a href="#carousel__slide1"
           class="carousel__navigation-button">Go to slide 1</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide2"
           class="carousel__navigation-button">Go to slide 2</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide3"
           class="carousel__navigation-button">Go to slide 3</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide4"
           class="carousel__navigation-button">Go to slide 4</a>



      </li>
    </ol>
  </aside>
</section>
    </div>

    </div>
    </div>
  )
}

export default Carousel
