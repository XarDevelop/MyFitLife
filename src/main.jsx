import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { UsuarioProvider } from './contexts/Usuario.context.jsx'
//import { noseqcosaProvider } from './context/'
//<BrowserRouter> para router envolver la aplicacion
    //<noseqcosaProvider>para context envolver la aplicacion
    //</noseqcosaProvider>
//</BrowserRouter>

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <UsuarioProvider>
    <StrictMode>
      <App/>
    </StrictMode>
  </UsuarioProvider>
  </BrowserRouter>,
)
