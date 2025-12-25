import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import QuoteCard from "./components/QuoteCard";
import axios from "axios";
import { BlinkBlur } from "react-loading-indicators";

const App = () => {
  const [showQuote, setShowQuote] = useState(true);
  const [quote, setQuote] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const hasFetchedQuote = useRef(false);

  useEffect(() => {
    if (!hasFetchedQuote.current) {
      hasFetchedQuote.current = true;
      axios
        .get("https://api.api-ninjas.com/v2/randomquotes?category=happiness", {
          headers: { "X-Api-Key": "odhBOHh6Fx2OBj+rod+r1A==AkZWByqB8mdWjfxK" },
        })
        .then((response) => {
          console.log(response);
          setQuote(response.data[0]);
          setIsLoading(true);
        })
        .catch((error) => {
          console.error("Error fetching quote:", error);
        });
    }
  }, [isLoading]);

  return (
    <>
      <div className="w-full relative flex flex-1 justify-center bg-black overflow-hidden">
        {/* <QuoteCard/> */}
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
              <Contact />
            </section>
          </main>
          <Footer />
        </div>
        {showQuote && (
          <div className="w-full h-full fixed top-0 left-0 z-50 flex justify-center items-start backdrop-blur-2xl">
            {isLoading ? (
              <QuoteCard quote={quote} setShowQuote={setShowQuote} />
            ) : (
              <div className="text-blue-500 text-center lg:text-6xl text-lg font-bold mt-80 text-shadow-lg text-shadow-white">
                      <BlinkBlur color="#FFE100FF" size="large" text="" textColor="" />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
