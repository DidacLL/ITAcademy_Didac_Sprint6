import React, {useState} from 'react';
import './App.css';
import {Escena} from "./components/escena/Escena";
import {styled} from "styled-components";
import StoryData from "./components/objects/StoryData";
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';

function App() {
    const sampleText = [
        new StoryData("El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",img1),
        new StoryData("Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",img2),
        new StoryData("L'heroi va decidir travessar la porta que el portava a casa",img3),
        new StoryData("Mentrestant, altres herois no van tenir tanta sort en la seva elecció ...",img4)
    ]
    const [welcome, setWelcome] = useState(true);
    const startGame = () => {
        setWelcome(false);
    };
    return (
        <div className="App">
            {welcome ?
                <WelcomeScreen startGame={startGame}/>:<Escena text={sampleText}/>
            }
        </div>
    );
}

const WelcomeScreen=({startGame}: {startGame:() =>void})=>{
    const StyledWelcomeScreen = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background-image: url('https://img.freepik.com/premium-vector/fantasy-space-scene-extraterrestrial-landscape-with-colorful-vivid-planets-craters-stars-comet-fantastic-mystery-world-game-vector-futuristic-background_176411-1832.jpg');
      background-size: cover;
      background-position: center;
      color: azure;
    `;

    const StyledButton = styled.button`
      padding: 10px 20px;
      background-color: #f2f2f2;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
    `;


    return (
        <StyledWelcomeScreen>
            <h1>Benvingut a SpaceOdissey</h1>
            <p>Una aventura por los confines de la galaxia...</p>
            <StyledButton onClick={startGame}>Start</StyledButton>
        </StyledWelcomeScreen>
    );
}

export default App;
