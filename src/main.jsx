import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from "react-toastify";
import { UserProvider } from './UseContext/UseContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ToastContainer  autoClose={3000} closeButton={false} /> 
     <UserProvider>
    <App />
    </UserProvider>
    
  </StrictMode>,
)
