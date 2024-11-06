// src/components/Hogares.js
import React, { useEffect, useState } from 'react';
import api from '../api';

const Hogares = () => {
    const [hogares, setHogares] = useState([]);

    useEffect(() => {
        const fetchHogares = async () => {
            try {
                const response = await api.get('/hogares');
                setHogares(response.data);
            } catch (error) {
                console.error('Error al obtener los datos de hogares:', error);
            }
        };

        fetchHogares();
    }, []);

    return (
        <div>
            <h2>Hogares</h2>
            {/* Agrega aquí la tabla o lista para mostrar los datos */}
        </div>
    );
};

export default Hogares;
