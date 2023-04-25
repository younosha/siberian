import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { MainPage } from './pages/MainPage/MainPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { PersonPage } from './pages/PersonPage/PersonPage';
import { AboutPage } from './pages/AboutPage/AboutPage';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<MainPage/>} />
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/person/:personId' element={<PersonPage/>} />
          </Route>
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
