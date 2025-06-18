import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './home/Home.jsx'
import Cursos from './home/cursos/Cursos.jsx'
import Abillities from './home/abillities/Abillities.jsx'
import Redes from './home/redesSociais/redes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  

  

    <Home />

  <div class="section2">
      <Cursos/>

    <Abillities/>
    
  </div>

  <Redes/>

  


  </StrictMode>,

)
