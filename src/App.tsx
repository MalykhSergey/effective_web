import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import { AllComics } from './presentation/Comic/AllComics/AllComics'
import { ComicPage } from './presentation/Comic/ComicPage/ComicPage'
import { Favorite } from './presentation/Comic/Favorite/Favorite'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="/" element={<AllComics />} />
            <Route path="/comic/:id" element={<ComicPage />} />
            <Route path="/favorite" element={<Favorite />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
