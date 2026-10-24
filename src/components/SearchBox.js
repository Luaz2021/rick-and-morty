import axios from 'axios';
import React, { useState } from 'react';
import rick from '../assets/img/rick.jpg';

export const SearchBox = ({ changeLocation }) => {
    const [search, setSearch] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const searchLocation = (e) => {
        if (e) e.preventDefault();
        const trimmed = search.trim();
        if (!trimmed) return;

        setErrorMessage("");
        axios.get(`https://rickandmortyapi.com/api/location/?name=${encodeURIComponent(trimmed)}`)
          .then(res => {
              if (res.data?.results && res.data.results.length > 0) {
                  changeLocation(res.data.results[0]);
                  setErrorMessage("");
              } else {
                  setErrorMessage("No se encontró ninguna ubicación con ese nombre.");
              }
          })
          .catch(() => {
              setErrorMessage("Ubicación no encontrada. Prueba con: Earth, Citadel, Abadango...");
          });
    };

    return (
        <div className="containtSearch"> 
            <img src={rick} alt="Rick Sanchez" />
            <form className="containInput" onSubmit={searchLocation}>
                <input 
                    type="text" 
                    placeholder="Buscar ubicación (ej: Earth, Citadel)..."
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                />
                <button type="submit" title="Buscar ubicación">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                </button>
            </form>
            {errorMessage && (
                <p style={{ color: '#ef4444', marginTop: '10px', fontSize: '14px', fontWeight: 'bold' }}>
                    {errorMessage}
                </p>
            )}
        </div>
    );
};
