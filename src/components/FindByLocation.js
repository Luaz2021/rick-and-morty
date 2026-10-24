import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { randomLocation } from '../helpers/locationHelpers';
import { SearchBox } from './SearchBox';
import { ResidentsList } from './ResidentsList';
import { LocationInfo } from './LocationInfo';

export const FindByLocation = () => {
    const [location, setLocation] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://rickandmortyapi.com/api/location/${randomLocation()}`)
            .then(res => {
                setLocation(res.data);
            })
            .catch(err => {
                console.error("Error al obtener ubicación inicial", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleLocationChange = (newLoc) => {
        setLocation(newLoc);
    };

    return (
        <>
            <SearchBox changeLocation={handleLocationChange} />
            {loading ? (
                <h2 style={{ color: '#00b5cc', textAlign: 'center', margin: '2rem 0' }}>Cargando dimensión...</h2>
            ) : location.name ? (
                <>
                    <LocationInfo location={location} />
                    {location.residents && location.residents.length > 0 ? (
                        <ResidentsList charList={location.residents} />
                    ) : (
                        <p style={{ color: '#9ca3af', textAlign: 'center', margin: '2rem 0' }}>
                            No se conocen residentes registrados en esta dimensión.
                        </p>
                    )}
                </>
            ) : (
                <h2 style={{ color: '#ef4444', textAlign: 'center', margin: '2rem 0' }}>Ubicación no encontrada</h2>
            )}
        </>
    );
};
