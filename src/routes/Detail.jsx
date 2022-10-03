import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  let params = useParams();
  const [detail, setDetail] = useState("");
  const [genres, setGenres] = useState([]);

  const client = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/${params.detailId}?api_key=907b5f77b10b2d71bf815146cfad03a7&language=en-US`,
  });

  useEffect(() => {
    const getDetail = async () => {
      const res = await client.get();
      setDetail(res.data);
      setGenres(res.data.genres);
    };
    getDetail();
  }, []);

  let name = [];
  let names = ["aku", "betas"];
  console.log(name);
  console.log(names);
  genres.map((genre) => {
    name.push(genre.name);
    return (
      <div>
        <span>{name}</span>
      </div>
    );
  });

  return (
    <>
      <div className="relative z-[1] h-[700px] w-full">
        {/* Text */}
        <div className="container mx-auto">
          <div className="absolute z-[1] text-white text-left w-[700px] mt-[250px]">
            <h1 className="text-6xl font-bold">{detail.title}</h1>
            {genres.map((genre) => {
              let name = [genre.name];
              console.log(name);
              return (
                <div>
                  <span>{name}</span>
                </div>
              );
            })}
            <p className="mt-6 text-sm">{detail.overview}</p>
            <button class="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-full uppercase mt-6 flex items-center">
              <box-icon color="white" name="play-circle"></box-icon>
              <span className="ml-2">Watch Trailer</span>
            </button>
          </div>
        </div>
        {/* Image */}
        <div className="absolute w-full h-full top-0">
          <img
            className="w-full h-full object-cover"
            src={"https://image.tmdb.org/t/p/w500" + detail.backdrop_path}
            alt={detail.path}
          />
        </div>
        {/* Black background */}
        <div className="absolute w-full h-full bg-black bg-opacity-50"></div>
      </div>
    </>
  );
}

export default Detail;
