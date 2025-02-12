import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Random from './Random'
import Counter from './Counter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Random />
    <Counter /> */}
  </StrictMode>,
)
