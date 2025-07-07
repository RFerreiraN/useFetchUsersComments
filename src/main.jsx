import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ApiComponents } from './Components/ApiComponents'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiComponents/>
  </StrictMode>,
)
