import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { googleBooksApi } from '../../services/GoogleBooksApi'
import parse from 'html-react-parser'

import {
  Container,
  Content,
  Title,
  Subtitle,
  Description,
  BackButton,
  ContainerSpinner
} from './BookDetail.styles'

import { Thumbnail } from '../../components/Thumbnail/Thumbnail'
import { ReactComponent as ArrowLeft } from '../../icons/arrowleft.svg'
import { Spinner } from '../../components/Spinner/Spinner.styles'

export interface Book {
  id: string
  volumeInfo: {
    title: string
    subtitle: string
    description: string
    imageLinks?: {
      thumbnail: string
    }
  }
}

export function BookDetail() {
  const [book, setBook] = useState<Book | null>(null)
  const params = useParams()
  const navigate = useNavigate()

  const { bookId } = params

  useEffect(() => {
    googleBooksApi
      .get(`v1/volumes/${bookId}`)
      .then((response) => setBook(response.data))
  }, [bookId])

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <Container>
      {book ? (
        <>
          <BackButton onClick={handleGoBack}>
            <ArrowLeft />
          </BackButton>
          <Thumbnail
            thumbnail={book.volumeInfo.imageLinks?.thumbnail}
            title={book.volumeInfo.title}
            size="large"
            bgColor="#ef552b"
          />

          <Content>
            <Title> {book.volumeInfo.title}</Title>
            <Subtitle> {book.volumeInfo.subtitle} </Subtitle>
            <Description>
              {book.volumeInfo.description
                ? parse(book.volumeInfo.description)
                : ''}
            </Description>
          </Content>
        </>
      ) : (
        <ContainerSpinner>
          <Spinner />
        </ContainerSpinner>
      )}
    </Container>
  )
}
