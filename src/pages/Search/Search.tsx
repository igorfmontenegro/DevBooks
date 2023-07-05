import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  SearchButton,
  SearchContainer,
  Logo,
  BaseBoard
} from './Search.styles'
import LogoDevBooks from '../../assets/logo.png'
import { SearchBox } from '../../components/SearchBox/SearchBox'

export function Search() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    if (search) {
      navigate(`/books?q=${search}`)
    }
  }

  return (
    <>
      <Container>
        <Logo src={LogoDevBooks} alt="Logo DevBooks"></Logo>
        <h1> Busque seus livros favoritos </h1>

        <SearchContainer>
          <SearchBox
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchButton onClick={handleSearch}> Buscar </SearchButton>
        </SearchContainer>
      </Container>

      <BaseBoard> Devbooks ® Igor Montenegro </BaseBoard>
    </>
  )
}
