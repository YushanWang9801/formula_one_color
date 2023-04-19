import './App.css'
import data from "./assets/data.json"
import Color from "./Components/color"

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
    </div>
  );
}

export default App
