import Home from './Pages/Home'
import Apropos from './Pages/Apropos'
import Contact from './Pages/Contact'
import Prix from './Pages/Prix'
import {Routes, Route} from "react-router-dom"
import Navigation from './Components/Navigation'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';







function App() {
  return (
    <div className="App">

             

      

    <Navigation/>

    
   
<Routes>

  
  <Route exact path ='/' element={<Home/>}/>
  <Route  path ='/Apropos' element={<Apropos/>}/>
  <Route  path ='/Contact' element={<Contact/>}/>
  <Route  path ='/Prix' element={<Prix/>}/>
  
  
      
  </Routes>





<footer>
  <div className='PartFooter'>
<div className='TFContact'>
<h5>Contact us for informations allways</h5>
</div>

<div className='Informations'>

  <div className='InformationsT'></div>

  <h4>For more Informations</h4>
  <p>Mail: MessaWorkTunisia.tn</p>
  <p>Tel: 50099026</p>
  <p>Localisation: El Manar I Rue Mohamed Abd el Wahab</p>
</div>


<div className='Company'>
<div className='CompanyT'>

<h4>Company Name</h4></div>


<p>MessaWork Coworking Space</p>



</div>

<div className='CopyWright'>

<p>Copywright MessaWork Coworking Space</p>
</div>
</div>
</footer>







  
    </div>
  );
}

export default App;
