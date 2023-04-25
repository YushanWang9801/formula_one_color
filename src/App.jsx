import './App.css'
import data from "./assets/data.json"
import Color from "./Components/color"

import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMedium, faInstagram }
  from '@fortawesome/free-brands-svg-icons';
import { faArrowsRotate, faCopy } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="app">
      <TeamPage />
    </div>
  );
}

const shuffleColor = () => {
  console.log("test");
};


const MainPage = () => {
  return (
    <>
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
      <IconSection />
    </>
  );
}

function IconSection() {
  return (
    <div className="iconSection">
      <ul>
        <Icon icon={faCopy}
          link={"#"}
          text={"#"}
          onClick={shuffleColor} />
        <Icon icon={faArrowsRotate}
          link={"#"}
          text={"#"} />
        <Icon icon={faInstagram}
          link={"https://www.instagram.com/yushan9801/"}
          text={"Find me on Github"} />
        <Icon icon={faMedium}
          link={"https://medium.com/@wang33he77"}
          text={"Find me on Medium"} />
        <Icon icon={faGithub}
          link={"https://github.com/YushanWang9801"}
          text={"Find me on Instagram"} />
      </ul>
    </div>
  );
}

function Icon({ icon, link, text }) {
  if (link === "#") {
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


const TeamPage = () => {
  return (
    <>
      <div className="teamSection">
        {/* <div className="strip1" style={{ backgroundColor: 'green'}}></div>
        <div className="teamTitle">
          <h1 style={{ color: '#111'}}>Ferrari</h1>
        </div>
        <div className="strip2" style={{ backgroundColor: 'red'}}></div> */}
        <div className="teamTitle">
          <h1 style={{ color: '#111'}}>Ferrari</h1>
        </div>
        <div className="wallpaper">wtf</div>
        <div className="strip" id="s1" style={{ backgroundColor: 'red'}}>  <h2>red</h2>    </div>
        <div className="strip" id="s2" style={{ backgroundColor: 'white'}}> <h2>white</h2> </div>
        <div className="strip" id="s3" style={{ backgroundColor: 'green'}}> <h2>green</h2> </div>
      </div>
      <div className="colorboard">
        {data.map((d) => <Color team={d} />)}
      </div>
      <IconSection />
    </>
  );
}

export default App
