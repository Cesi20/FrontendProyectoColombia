// src/components/Educacion.js
import React, { useEffect, useState } from 'react';
import api from '../api';

const Educacion = () => {
    const [educacion, setEducacion] = useState([]);

    useEffect(() => {
        const fetchEducacion = async () => {
            try {
                const response = await api.get('/educacion');
                setEducacion(response.data);
            } catch (error) {
                console.error('Error al obtener los datos de educación:', error);
            }
        };

        fetchEducacion();
    }, []);

    return (
        <div>
            <h2>Educación</h2>
            {/* Agrega aquí la tabla o lista para mostrar los datos */}
        </div>
    );
};

export default Educacion;
