import { Container, Logo } from './MainPage.styles'
import LogoDev from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

export function MainPage() {
  const navigate = useNavigate()

  const backPage = () => {
    navigate(-1)
  }

  return (
    <Container>
      <Logo src={LogoDev} alt="Logo do DevBooks" onClick={backPage} /> Resultado
      da sua busca
    </Container>
  )
}
