import React from 'react'
import './Country.css'
export default function Country({ name, flags, population, capital, region }) {
    console.log(name.common);
    return (
        <div className='container'>
            <div className="fle">
            <div className='image'>
                <img src={flags.png} alt="" />
            </div>
            <div>
                <h2>Name: {name.common}</h2>
                <p>Capital: {capital}</p>
                <p>population: {population}</p>
                <p>Region: {region}</p>
            </div>
            </div>
        </div>
    )
}