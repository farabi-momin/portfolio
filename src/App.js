import logo from './logo.svg';
import './App.css';
import Profile from './components/profile';
import About from './components/about';
import Education from './components/education';
import Projects from './components/projects';
import Skills from './components/skills';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <header id='home'>
        Welcome to My Portfolio
      </header>
      <div className='app-body'>
        <Profile/>
        <Navbar/>
        <About/>
        <Education/>
        <Skills/>
        <Projects/>        
      </div>
      <footer>

      </footer>
      
    </div>
  );
}

export default App;
