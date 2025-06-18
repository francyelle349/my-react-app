import './home.css';
import { useState, useEffect } from 'react';

function Home() {
    const [isVisible, setIsVisible] = useState(false); // Starts invisible

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true); // Fades in smoothly
    }, 100);
  }, []);

  return( <>
   
     <div className={`${isVisible ? 'show' : 'hidden'}`} id="hidden1">
      <div className="home">

        <div class="info">
              <p className="p-8 " id="title">Full-Stack Software Developer</p>
        <h1 className="pl-8">I'm Francyelle Souza</h1>
        <p className="pt-2 pl-8" id="description">I design and develop systems and Websites</p>
        
        <div className="pt-8 pl-8 flex items-center justify-start">
         <a href="/my-react-app/CV___Software_Engineer.pdf"> <p className="glass-button">Hire me | +</p></a>
          
          <div className="pl-3">
            <button className="copy-btn" onClick={() => {
              navigator.clipboard.writeText('francyelle5849@gmail.com');
            }}>
              <p className="copy-text">Copy Email</p>
              <svg className="copy-icon" viewBox="0 0 24 24" width="16" height="16">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
              </svg>
            </button>
          </div>
        </div>
        </div>
            
        
        <div class="status-indicator">
        <div class="status-dot"></div>
        <span class="status-text">Available for Job</span>
    </div>
      </div>
      
    </div>




  </>)
}
export default Home