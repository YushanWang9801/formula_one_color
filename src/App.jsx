import './App.css'
import data from "./assets/data.json"
import Color from "./Components/color"

import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMedium, faInstagram, faLinkedin }
            from '@fortawesome/free-brands-svg-icons';
import { faArrowsRotate, faCopy } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="app">
      <div className="title">
        <h1>
          <a href="http://yushanwang9801.github.io">
            <small>Yushan Wang&rsquo;s</small><br />
          </a>
          <div>Formula 1 Dashboard</div>
        </h1>
      </div>
      <div className="colorboard">
        {data.map((d) => <Color team={d} />)}
      </div>
      <div className="iconSection">
          <ul>
          <Icon icon={faCopy} 
                  link={"#"} 
                  text={"#"}/>
          <Icon icon={faArrowsRotate} 
                  link={"#"} 
                  text={"#"}/>
          <Icon icon={faInstagram} 
                link={"https://www.instagram.com/yushan9801/"} 
                text={"Find me on Github"}/>
          <Icon icon={faMedium} 
                link={"https://medium.com/@wang33he77"} 
                text={"Find me on Medium"}/>
          <Icon icon={faGithub} 
                link={"https://github.com/YushanWang9801"} 
                text={"Find me on Instagram"}/>
          </ul>
      </div>
    </div>
  );
}


function Icon({icon, link, text}){
  if(link === "#"){
      return (
        <li>
        <span></span>
        <span></span>
        <span></span>
        <span>
          <FontAwesomeIcon className="faicon" icon={icon} />
        </span>
      </li>
    );
  } else {
    return (
      <li>
      <span></span>
      <span></span>
      <span></span>
      <span>
          <a href={link}
        target="_blank" rel="noreferrer" aria-label={text}>
        <FontAwesomeIcon className="faicon" icon={icon} />
        </a>
      </span>
    </li>
    );
  }
}

export default App
