import "./Navigation.css"
import React from 'react'
import Logo from "./Logo"





const Navigation = () => {
  return (
    <div>




      <header>
    <div class="container">

   <a href="/" ><Logo/></a>

      <h1 class="logo"></h1>

      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/Aprpos">A propos</a></li>
          <li><a href="/Contact">Contact</a></li>
          <li><a href="/Prix">Prix</a></li>
        </ul>
      </nav>
    </div>
  </header>
    </div>
  )
}

export default Navigation


