import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from './styles/global.ts'

import { Search } from './pages/Search/Search.tsx'
import { Books } from './pages/Books/Books.tsx'
import { BookDetail } from './pages/BookDetail/BookDetail.tsx'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:bookId" element={<BookDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
