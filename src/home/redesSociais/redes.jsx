import './redes.css'
import womanImage from '../resources/woman2.svg';

function Redes(){
    return(
    <div className='item'>
      {/* Move o link do CSS para o <head> do index.html para melhor performance */}
      
      <div className='subItem'>
          <h3>You Can Reach Out</h3>
          <div className='socialMedia'>
            <a href="https://www.linkedin.com/in/francyelle-souza-245968350/" 
               target="_blank" 
               rel="noopener noreferrer"
               aria-label="LinkedIn"> 
              <i className="uil uil-linkedin" id="link"></i> 
            </a>
            <a href="https://github.com/francyelle349" 
               target="_blank" 
               rel="noopener noreferrer"
               aria-label="GitHub"> 
              <i className="uil uil-github" id="git"></i> 
            </a>
          </div>
      </div>

      <div className='images'>
        <img src={`${womanImage}`} alt="Illustration of a woman" />
      </div>
    </div>
    );
}

export default Redes;