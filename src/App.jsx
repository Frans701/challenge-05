import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "boxicons";
import Movie from "./components/Movie";
import Hero from "./components/Hero";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const client = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=907b5f77b10b2d71bf815146cfad03a7&language=en-US",
});

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await client.get();
      setMovies(res.data.results);
    };
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div className="font-poppins">
      <div>
        <Carousel
          autoFocus={true}
          autoPlay={false}
          infiniteLoop={true}
          showStatus={false}
          interval={2000}
          showArrows={true}
        >
          {movies.slice(0, 3).map((movie) => {
            return <Hero key={movie.id} movie={movie} />;
          })}
        </Carousel>
        {movies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
