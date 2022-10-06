import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate, useSearchParams } from "react-router-dom";

function Navbar() {
  const [search, setSearch] = useState("");
  const [searchMovie, setSearchMovie] = useState([]);
  const redirect = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=907b5f77b10b2d71bf815146cfad03a7&query=${search}`
      );
      setSearchMovie(res.data.results);
    };
    getMovies();
  }, []);

  console.log(search);

  const searchMovieList = () => {
    redirect(`/searchPage?search=${search}`);
  };

  return (
    <div>
      <nav>
        <Link to="/">MovieList</Link>
      </nav>
      <input
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <button type="submit" onClick={searchMovieList}>
        {" "}
        Search
      </button>
      <Outlet />
    </div>
  );
}

export default Navbar;
