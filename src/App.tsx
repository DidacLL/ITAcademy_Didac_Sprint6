import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Escena} from "./components/escena/Escena";
import {text} from "stream/consumers";

function App() {
    const sampleText = [
        "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
        "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
        "L'heroi va decidir travessar la porta que el portava a casa",
        "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ..."
    ]

    return (
        <div className="App">
            <Escena text={sampleText}/>
        </div>
    );
}

export default App;
