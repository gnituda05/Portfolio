import React from 'react'
import Experties from "./components/Experties/Experties";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import css from './styles/app.module.scss'
import Works from './components/Works/Works';
import Portfolio from './components/Portfolio/Portfolio';
import Techs from './components/Techs/Techs';
import Footer from './components/Footer/Footer';




const App = () => {
   return (
   <div className = {`bg-primary ${css.container}`}>
     <Header/>
     <Hero/>
     <Experties/>
     <Works/>
     <Portfolio/>
    <Techs/>
    <Footer/>

   
   </div>
   )
}


export default App;
