// src/App.js
import React from 'react';
import Distritos from './components/Distritos';
import Poblacion from './components/Poblacion';
import Hogares from './components/Hogares';
import Educacion from './components/Educacion';
import Economia from './components/Economia';
import GraficoPoblacionDistritos from './components/GraficoPoblacionDistritos';

const App = () => {
    return (
        <div>
            <h1>Dashboard de Censos</h1>
            <GraficoPoblacionDistritos />
            <Distritos />
            <Poblacion />
            <Hogares />
            <Educacion />
            <Economia />
        </div>
    );
};

export default App;
