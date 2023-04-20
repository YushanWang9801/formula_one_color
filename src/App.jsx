import './App.css'
import data from "./assets/data.json"
import Color from "./Components/color"

import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMedium, faInstagram, faLinkedin }
            from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    // <div className="app">
    //   <div className="title">
    //     <h1>
    //       <a href="http://yushanwang9801.github.io">
    //         <small>Yushan Wang&rsquo;s</small><br />
    //       </a>
    //       <div>Formula 1 Dashboard</div>
    //     </h1>
    //   </div>
    //   <div className="colorboard">
    //     {data.map((d) => <Color team={d} />)}
    //   </div>
    // </div>
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
          {/* <a href="http://yushanwang9801.github.io">YushanWang9801</a> */}
          <ul>
          <li>
            <span></span>
            <span></span>
            <span></span>
            <span><a href="https://github.com/YushanWang9801"
            target="_blank" rel="noreferrer" aria-label="Find me on Github">
            <FontAwesomeIcon className="faicon" icon={faGithub} />
            </a></span>
          </li>
          <li>
            <span></span>
            <span></span>
            <span></span>
            <span><a href="https://github.com/YushanWang9801"
            target="_blank" rel="noreferrer" aria-label="Find me on Github">
            <FontAwesomeIcon className="faicon" icon={faGithub} />
            </a></span>
          </li>
          <li>
            <span></span>
            <span></span>
            <span></span>
            <span><a href="https://github.com/YushanWang9801"
            target="_blank" rel="noreferrer" aria-label="Find me on Github">
            <FontAwesomeIcon className="faicon" icon={faGithub} />
            </a></span>
          </li>
          <li>
            <span></span>
            <span></span>
            <span></span>
            <span><a href="https://github.com/YushanWang9801"
            target="_blank" rel="noreferrer" aria-label="Find me on Github">
            <FontAwesomeIcon className="faicon" icon={faGithub} />
            </a></span>
          </li>
          </ul>
      </div>
    </div>
  );
}

export default App
