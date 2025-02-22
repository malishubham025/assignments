import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import MainComponent from './MainComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainComponent />
  </StrictMode>,
)
