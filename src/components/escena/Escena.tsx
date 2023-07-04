import React from "react";
import styled from 'styled-components';
const StyledP = styled.p`
  margin-bottom: 10px;
  border: 2px solid black;
  border-radius: 20px;
  padding: 10px;
`;
export const Escena = (props: { text:string[] }) => {
    return (
        <>
            {props.text.map((line)=>(
                <StyledP>{line}</StyledP>
                ))
            }
        </>
    );
};