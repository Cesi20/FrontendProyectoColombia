// src/components/Economia.js
import React, { useEffect, useState } from 'react';
import api from '../api';

const Economia = () => {
    const [economia, setEconomia] = useState([]);

    useEffect(() => {
        const fetchEconomia = async () => {
            try {
                const response = await api.get('/economia');
                setEconomia(response.data);
            } catch (error) {
                console.error('Error al obtener los datos de economía:', error);
            }
        };

        fetchEconomia();
    }, []);

    return (
        <div>
            <h2>Economía</h2>
            {/* Agrega aquí la tabla o lista para mostrar los datos */}
        </div>
    );
};

export default Economia;
