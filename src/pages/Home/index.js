import React, { useEffect, useRef } from "react";
import TopHeader from "./../../Components/TopHeader";
import "./home.sass";
import MoviesFilter from "../../Components/MoviesFilter";
import Movies from "../../Components/Movies";
import Footer from "../../Components/Footer";
import { GenresProvider } from "../../data/GenresContext";
import { MoviesProvider } from "../../data/MoviesContext";
import { useScroll } from "../../data/ScrollContext";
import { ActorsProvider } from "../../data/ActorsContext";
import Actors from "../../Components/Actors";

const Home = () => {
  let { shouldScroll, positionTo } = useScroll();
  const firstSection = useRef();
  const secondSection = useRef();

  const scrollFunc = () => {
    if (shouldScroll && positionTo === 1) {
      firstSection.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end",
      });
    }
    if (shouldScroll && positionTo === 2) {
      secondSection.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end",
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      scrollFunc();
    }, 1000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="home-page">
      <TopHeader firstText="Movie" secondText="Picker" left="60%" />
      <section className="movies-section" ref={firstSection}>
        <MoviesProvider>
          <GenresProvider>
            <MoviesFilter />
          </GenresProvider>
          <Movies />
        </MoviesProvider>
      </section>
      <section className="actors-section" ref={secondSection}>
        <ActorsProvider>
          <Actors />
        </ActorsProvider>
      </section>
      <section className="footer-section">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
