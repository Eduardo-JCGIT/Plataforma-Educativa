import React from 'react'
import Not404 from "../../img/not404/No404.png";
import Nav from '../welcome/Nav';

function NoAlive() {
  return (
    <div>
        <Nav/>
        <div  className="cat-not404">
        <img src={Not404} alt={Not404}/>
        </div>
    </div>
  )
}

export default NoAlive