import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter} from "react-router-dom";
import ServerProvider from './Context/servercontext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ServerProvider>
    <App />
    </ServerProvider>
    </BrowserRouter>
  </StrictMode>,
)
