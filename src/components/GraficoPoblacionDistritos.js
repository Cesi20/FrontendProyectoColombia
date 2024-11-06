// src/components/GraficoPoblacionDistritos.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import api from '../api';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const GraficoPoblacionDistritos = () => {
    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Población Total',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/distritos/poblacion-total');
                const nombresDistritos = response.data.map(distrito => distrito.nombre);
                const poblacionTotal = response.data.map(distrito => distrito.poblacion_total);

                setData({
                    labels: nombresDistritos,
                    datasets: [
                        {
                            label: 'Población Total',
                            data: poblacionTotal,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1
                        }
                    ]
                });
            } catch (error) {
                console.error('Error al obtener los datos para el gráfico:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Población Total por Distrito</h2>
            <div style={{ width: '600px', height: '400px', margin: '0 auto' }}>
                <Bar data={data} options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }} />
            </div>
        </div>
    );
};

export default GraficoPoblacionDistritos;
