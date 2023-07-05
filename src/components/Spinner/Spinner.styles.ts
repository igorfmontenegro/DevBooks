import styled, { keyframes } from 'styled-components'

const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`

export const Spinner = styled.div`
  margin-top: 200px;
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: #ef552b;
  border-radius: 50%;
  animation: ${rotation} 1s linear infinite;
`

export const ContainerSpinner = styled.div`
  height: calc(100vh - 50px);
`
