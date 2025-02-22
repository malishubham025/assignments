import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './Nav.jsx'
import MainPage from './MainPage.jsx'
import Carousel from './MainComponent.jsx'
import DataProvider from './Provider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <NavBar/>
      <MainPage></MainPage>
      <div className='relative'>
      <Carousel />
      </div>
    </DataProvider>
  </StrictMode>,
)
