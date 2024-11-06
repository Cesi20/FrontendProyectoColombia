// src/components/Distritos.js
import React, { useEffect, useState } from 'react';
import api from '../api';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Distritos = () => {
    const [distritos, setDistritos] = useState([]);

    useEffect(() => {
        const fetchDistritos = async () => {
            try {
                const response = await api.get('/distritos');
                setDistritos(response.data);
            } catch (error) {
                console.error('Error al obtener los distritos:', error);
            }
        };

        fetchDistritos();
    }, []);

    return (
        <div>
            <h2>Distritos</h2>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Superficie</TableCell>
                            <TableCell>Población Total</TableCell>
                            <TableCell>Año Censo</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {distritos.map(distrito => (
                            <TableRow key={distrito.id}>
                                <TableCell>{distrito.id}</TableCell>
                                <TableCell>{distrito.nombre}</TableCell>
                                <TableCell>{distrito.superficie}</TableCell>
                                <TableCell>{distrito.poblacion_total}</TableCell>
                                <TableCell>{distrito.ano_censo}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Distritos;
