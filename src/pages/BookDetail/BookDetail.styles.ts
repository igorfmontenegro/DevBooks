import styled from 'styled-components'
import BackgroundBook from '../../assets/background.png'

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-image: url(${BackgroundBook});
  background-size: cover;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const BackButton = styled.button`
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 46px;
  width: 46px;
  cursor: pointer;
  position: fixed;
  left: 20px;
  top: 20px;

  @media (max-width: 1024px) {
    height: 32px;
    width: 32px;
    left: 12px;
  }

  @media (max-width: 768px) {
    height: 28px;
    width: 28px;
    left: 8px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50%;
  padding: 48px;
  overflow-y: scroll;

  @media (max-width: 768px) {
    overflow-y: inherit;
    width: 100%;
  }
`

export const Title = styled.h1`
  font-size: 54px;
  margin-bottom: 24px;

  @media (max-width: 1024px) {
    font-size: 24px;
  }
`

export const Subtitle = styled.h1`
  font-weight: normal;
  font-size: 36px;
  margin-bottom: 16px;

  @media (max-width: 1024px) {
    font-size: 18px;
    margin-bottom: 8px;
  }
`

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.8;
  margin-top: 24px;
  text-align: justify;

  @media (max-width: 1024px) {
    font-size: 14px;
  }
`

export const ContainerSpinner = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100vh;
`
