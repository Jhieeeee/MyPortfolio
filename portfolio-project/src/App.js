import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import Skills from './components/skills';
import Works from './components/works';
import Contact from './components/contact';
function App() {
  return (
    <>
      <main>
        <Navbar />
          <section id="home">
            <Header /> {/* Ensure this section is properly set up */}
          </section>
          <section id="about-me">
            <AboutMe /> 
          </section>
          <section id="skills">
            <Skills /> 
          </section>
          <section id="works">
            <Works /> 
          </section>
          <section id="contact">
            <Contact /> 
          </section>
      </main>
    </>
  );
}


export default App;
