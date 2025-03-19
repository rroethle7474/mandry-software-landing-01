import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App.jsx'
import TimeOverrideProvider from './hooks/useTimeOfDay.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimeOverrideProvider>
      <App />
    </TimeOverrideProvider>
  </StrictMode>,
)
