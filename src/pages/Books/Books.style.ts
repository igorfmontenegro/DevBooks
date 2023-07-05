import styled, { css } from 'styled-components'
import backgroundBooks from '../../assets/background.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 40px;
  width: 100%;
  background-image: url(${backgroundBooks});

  ul {
    margin-top: 100px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    max-width: 1200px;
    width: 100%;
    grid-gap: 30px;
    list-style: none;
  }

  li {
    &:hover {
      div {
        background-color: #ef552b;
      }
    }
  }

  a {
    text-decoration: none;
  }
`

const clampText = css`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const Title = styled.h2`
  font-size: 18px;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 8px;
  color: #222;

  ${clampText}
`

export const Subtitle = styled.h3`
  font-weight: normal;
  font-size: 14px;
  text-align: center;
  color: #222;

  ${clampText}
`
