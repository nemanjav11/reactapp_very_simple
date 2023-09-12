import { useRef } from 'react';
import './App.css';
import {Planet} from "./Planets.js";


const planets = [
  { name: "Mars", isGasPlanet: false },
  { name: "Earth", isGasPlanet: false },
  { name: "Jupiter", isGasPlanet: true },
  { name: "Venus", isGasPlanet: false },
  { name: "Neptune", isGasPlanet: true },
  { name: "Uranus", isGasPlanet: true },
];
function App(){
    return (
    <h1> {planets.map((entity,_) =>{
        return <Planet name={entity.name} isGas={entity.isGasPlanet}/>})}
        {planets.map((planet)=>{
          console.log(planet.isGasPlanet);
        
        })}
        {planets.filter((planet,id)=> {
          planet.isGasPlanet ? planet.value= 'no-sex' : planet.value = 'sex'
          id= planet.name
        } )}

       
        {console.log(planets)}
       
  


         </h1>
    )
}

export default App;