import axios from 'axios'
import React, { useState } from 'react'
import rick from '../assets/img/rick.jpg'

export const SearchBox = ({changeLocation}) => {

    const [search, setSearch] = useState("")

    const searchLocation = ()=>{
        axios.get(`https://rickandmortyapi.com/api/location/?name=${search}`)
          .then(res=> {
              changeLocation(res.data.results[0])  
          })
    }

    return (
        <div className="containtSearch"> 
            <img src={rick} alt="" />
            <div className="containInput">
            <input 
                type="text" 
                onChange={e=>setSearch(e.target.value)}
                value={search}
            />
            <button onClick={searchLocation}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="60" height="60" viewBox="0 0 24 24" stroke="#ffffff" fill="none">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
            </button>
            </div>
            
        </div>
    )
}
