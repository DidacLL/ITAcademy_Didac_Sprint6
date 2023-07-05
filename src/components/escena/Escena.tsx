import React,{ useState} from "react";
import styled from 'styled-components';
const StyledP = styled.p`
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
const SceneButton = (name:string,action:any) => {
    return(
        <StyledButton onClick={action}>{name}</StyledButton>
    )
};
export const Escena = (props: { text:string[] }) => {
    const [count,setCount]= useState(0)
    const changeP = (val:number)=>{
        setCount((prevCount)=> Math.max(Math.min(prevCount + val,props.text.length-1),0));
    };
    return (
        <>
            <StyledButtonContainer> {SceneButton("Anterior",()=>changeP(-1))}{SceneButton("Següent",()=>changeP(1))}</StyledButtonContainer>
            {props.text.map((line,index)=>(
                index===count?<StyledSelected>{line}</StyledSelected>:<StyledP>{line}</StyledP>
                ))
            }
        </>
    );
};