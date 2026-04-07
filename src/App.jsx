import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Stack from './components/Stack.jsx';
import Contact from './components/Contact.jsx';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Projects />
      <Stack />
      <Contact />
    </div>
  );
}

export default App;
