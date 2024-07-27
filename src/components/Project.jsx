import React from 'react'
import './Style.css'

const url = "https://img.pokemondb.net/artwork/"

const Project = ({product:name}) => {
  return (
    <div>
      <div className="poke">
       <img src={url+`${name}.jpg`} alt="" />
        <h3>{name}</h3>
      </div>
    </div>
  )
}

export default Project
