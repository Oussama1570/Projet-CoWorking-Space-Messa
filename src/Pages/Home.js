import React from 'react'
import "./Home.css"
import Carousel from "../Components/Carousel"
import Button from 'react-bootstrap/Button';




const Home = () => {
  return (
    <div>

 {/*Header */} 



<h2 className='WelcomeTitle'> Welcome to MessaWork CoWorking Space </h2>



{/* Carousel */}

<Carousel/>

<hr></hr>

<section className='Intro'>
      

        

      <div className='BannerINtro'>
<img src="https://img.freepik.com/photos-gratuite/collegues-plein-coup-assis-ensemble_23-2149390530.jpg?t=st=1720196244~exp=1720199844~hmac=3a46924288d92b94f26d86e5c61aaa9c540e694cb82af8f3177d9e2ba77f5e9b&w=900" alt='Banner1'></img>

</div>
     

      <div className='Introtext'>
       
<p>
At Messa, we offer a vibrant and supportive environment for individuals and businesses to thrive.
 Our shared workspaces cater to a variety of needs, providing you with:
 
 Collaborative Atmosphere: Spark creativity and innovation through interaction with a diverse community
  of professionals. Bounce ideas off each other, participate in brainstorming sessions, and build valuable 
  connections that can fuel your success.

  Communal areas: Relaxation spaces, break-out areas, and kitchens designed to encourage interaction and
   informal meetings.

   Events & Workshops: Regularly hosted events focused on networking, knowledge sharing, and fostering connections
    within the Messa community.

    Dedicated Collaboration Zones: Designated areas with whiteboards, markers, and comfortable seating for brainstorming
     sessions and group projects.
 </p>
</div>

</section>



<section className='OurServices'>


  <h3>Our Services</h3>

  <div className='SharedWorkService'>
    <div className='Workshared'>
  <img src='https://media.licdn.com/dms/image/D4E22AQHmPh7zyJin8Q/feedshare-shrink_800/0/1700659164655?e=2147483647&v=beta&t=5Sbq-veRVhZ-XaqrWNnYpEBQVtbCQcKf4F7o_7bLVX8' alt='SharedWorkSpaceIMG'></img>

  <div className='TWorkShared'>
  <h2>Work Shared Space</h2>

  </div>
  <div className='PWorkShared'>
    <p>
    Tired of the stale coffee and four walls of your home office? Craving connection and inspiration but don't need the overhead <br></br> 
    of a full-blown office lease? Look no further than MessaWork! We offer a vibrant shared workspace experience packed with <br></br> 
    everything you need to escape the grind  and find your flow.
    </p>
  </div>
  
  
  </div>

  </div>


  <div className='AtmospehereCollaborativeService'>
    <div className='Collaborative'>
  <img src='https://bhiveworkspace.com/wp-content/uploads/2023/11/oworking.jpg' alt='AtmospehreCollIMG'></img>

  <div className='TAtmospehereCol'>
  <h2>Atmosphere collaborative</h2>

  </div>
  <div className='PAtmospehereCol'>
    <p>
    The sterile silence of a traditional office can stifle creativity. <br></br>
     Craving an environment that fuels collaboration, sparks ideas,and fosters connections?<br></br>
      Look no further than our vibrant coworking space.
    </p>
  </div>
  
  
  </div>

  </div>




  <div className='EquipmentsService'>
    <div className='Equipments'>
  <img src='https://img.freepik.com/photos-premium/interieur-bureau-moderne_196776-404.jpg?w=900' alt='EquipmentsMateriels'></img>

  <div className='TEquipments'>
  <h2>Equipments</h2>

  </div>
  <div className='PEquipments'>
    <p>
    Imagine a workspace designed for flexibility, collaboration, and efficiency.That's the essence
     of a coworking space! While you bring your laptop and ideas,the space itself provides
      the tools to turn them into reality.
    </p>
  </div>
  
  
  </div>

  </div>


  </section>


  <section className='OurFeatures'>

    <h3>Our Features</h3>

   <p><div className='Internet'>Blazing-Fast Internet:</div> Say goodbye to buffering and lagging! We provide high-speed, reliable internet
   connections to ensure seamless online collaboration, video conferencing, and downloading of large files.</p>

   <p><div className='Offices'>Dedicated Desks and Private Offices:</div> Need a space to personalize? Choose from a variety of dedicated desk
   options or private offices, equipped with ergonomic furniture and ample storage to maximize your comfort
   and productivity.</p>

   <p><div className='Rooms'>Meeting Rooms and Conference Facilities:</div> Foster creativity and teamwork with our well-equipped meeting rooms
   and conference facilities. Whether you're brainstorming with a small team or hosting a client presentation,
   we have the space to meet your needs.</p>

   <p><div className='OptionsMembers'>Flexible Membership Options:</div> We offer membership plans to suit your specific needs, from daily passes
    to dedicated desks or private office subscriptions. Choose the option that best fits your work style
    and schedule.</p>

  </section>




<div className='Prices'>
  <div className='TPrices'>
  <h3>Our Prices for you</h3></div>

  <div className='PlatePrices'>
    <div className='SpacePricesIMG'>
     
<img src='https://hellomonday.de/immobilien/rent24-Schoeneberg-2--a0E090000000DOAEA2/image-thumb__276898__immo_detail_slider_large/rent24%20Potsdamer%20Stra%C3%9Fe%20Berlin%20Sch%C3%B6neberg%20Coworking%20B%C3%BCro%20mieten%20Arbeitsplatz%20hellomonday%20%282%29.webp' alt='CoWorkingPrices'></img>
</div>
<div className='SeePrices'>

<a href='/Prix'><Button variant="success">See Prices</Button></a>


</div>

  </div>
</div>








    </div>
  )
}

export default Home
