import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Project from './Project'

const Testi = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        const getProduct = async () => {
            try{
                const res =await axios.get("https://pokeapi.co/api/v2/pokemon/")
                setProduct(res.data.results)
            }catch(error) {
                console.log(error);
            }
        }
        getProduct()
    }, [])
  return (
    <div>
      {
        product.map((ti, index) => (
            <Project key={index} product={ti.name}/>
        ))
      }
    </div>
  )
}

export default Testi
