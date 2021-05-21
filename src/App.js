
import Navbar from './components/NavBar'
import About from './components/About';
import Project from './components/Project';
import Svg from './components/Svg'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <img src="/images/logo-mastercraft.svg" className="container-logo" alt="mastercraft logo" />

        <section>
          <h2 className="maintext">Mastercraft Bamboo Monitor Riser</h2>
          <p className="subtext">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>

          <div className="container-btn">
            <button className="btn-green">Back this project</button>
            <button className="btn-bookmark"><span><svg><use href="#bookmark"></use></svg></span><span>Bookmark</span></button> 
          </div>
        </section>
      
        <section>
          <div className="container-info">
            <div>
              <h2>$89,914 </h2>
              <p>of $100,000 backed</p>
            </div>
            <div>
      
                <h2>5,007</h2>
                <p>total backers</p>

            </div>

            <div>
              <h2>56</h2>
              <p> days left</p>
            </div>
          </div>
          <div className="progress-bar">
            <div className="--bar"></div>
          </div>
        </section>
 
          <About />
        <div className="projects-container">
          <Project />
          <Project />
          <Project />
        </div>
      </div>
      <Svg />
    </div>
  );
}

export default App;
