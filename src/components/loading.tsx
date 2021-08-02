import React from 'react'
import styled, { keyframes } from 'styled-components';
const rotate = keyframes`
 0% {
    transform: rotate(0deg)
  }
  
  100% {
    transform: rotate(360deg)
  }
`

const LoadingDiv = styled.div`
width: 50px;
height: 50px;
margin: 0 auto;
margin-top: 20%;
background-color: blue;
transition: all 1s ease;
animation:  1s ${rotate}   linear;
`;

export const Loading: React.FC<{}> = () => {
  return (
    <div>
      <LoadingDiv />
      loading ...
    </div>
  )
}