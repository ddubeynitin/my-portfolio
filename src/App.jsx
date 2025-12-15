import "./App.css";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";


const App = () => {
  return (
    <>
      <div className="bg-black relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="w-full flex flex-1 justify-center">
            <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1 px-4 sm:px-8 md:px-10 ">
            
                <Header />
              
              <main className="grow pt-14">
                <section className="py-20 sm:py-32" id="home">
                  <Home />
                </section>
                <section className="py-16 sm:py-24" id="about">
                  <About />
                </section>
                <section className="py-16 sm:py-24" id="skills">
                  <Skills />
                </section>
                <section className="py-16 sm:py-24" id="projects">
                  <Projects />
                </section>
                <section className="py-16 sm:py-24" id="contact">
                  <Contact/>
                 
                </section>
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
