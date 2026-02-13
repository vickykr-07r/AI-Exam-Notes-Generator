import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter} from "react-router-dom";
import ServerProvider from './Context/servercontext.jsx';
import store from './Redux/store.js';
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ServerProvider>
      <Provider store={store}>
    <App />
    </Provider>
    </ServerProvider>
    </BrowserRouter>
  </StrictMode>,
)
