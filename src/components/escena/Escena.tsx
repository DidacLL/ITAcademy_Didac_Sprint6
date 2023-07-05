import React,{ useState} from "react";
import styled from 'styled-components';
import StoryData from "../objects/StoryData";
const StyledP = styled.p`
  background-color: rgba(255, 255, 255, 0.45);


  margin-bottom: 10px;
  border: 2px solid black;
  border-radius: 20px;
  padding: 10px;
`;
const StyledSelected = styled.p`
  margin-bottom: 10px;
  border: 2px solid black;
  border-radius: 20px;
  padding: 10px;
  background-color: salmon;
`;
const StyledButtonContainer = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  flex: 1;
  min-height: 10vh;
`;
const StyledBackground = styled.div<{img:string}>`
  background-image: url(${props => props.img});
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`;
const SceneButton = (name:string,action:any) => {
    return(
        <StyledButton onClick={action}>{name}</StyledButton>
    )
};

export const Escena = (props: { text: StoryData[] }) => {
    const [count, setCount] = useState(0);
    const currentLine = props.text[count];

    const changeP = (val: number) => {
        setCount((prevCount) => Math.max(Math.min(prevCount + val, props.text.length - 1), 0));
    };

    return (
        <StyledBackground img={currentLine.img}>
            <StyledButtonContainer>
                {SceneButton("Anterior", () => changeP(-1))}
                {SceneButton("Següent", () => changeP(1))}
            </StyledButtonContainer>
            {props.text.map((line, index) =>
                index === count ? (
                    <StyledSelected key={index}>{line.text}</StyledSelected>
                ) : (
                    <StyledP key={index}>{line.text}</StyledP>
                )
            )}
        </StyledBackground>
    );
};