// src/components/Poblacion.js
import React, { useEffect, useState } from 'react';
import api from '../api';

const Poblacion = () => {
    const [poblacion, setPoblacion] = useState([]);

    useEffect(() => {
        const fetchPoblacion = async () => {
            try {
                const response = await api.get('/poblacion');
                setPoblacion(response.data);
            } catch (error) {
                console.error('Error al obtener los datos de población:', error);
            }
        };

        fetchPoblacion();
    }, []);

    return (
        <div>
            <h2>Población</h2>
            {/* Agrega aquí la tabla o lista para mostrar los datos */}
        </div>
    );
};

export default Poblacion;
