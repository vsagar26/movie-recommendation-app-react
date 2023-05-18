import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from "./requests";
import comingsoon from "../assets/comingsoon.jpg";

const MovieDetail = () => {
  const { id } = useParams();
  console.log(id);

  async function fetchMovie() {
    try {
      const response = await [
        fetch(request.requestUpcomingMovies),
        fetch(request.requestTrendingMovies),
        fetch(request.requestTopRatedMovies),
        fetch(request.requestLatestMovies),
        fetch(request.requestPopularMovies),
      ];
      const trendingMovies = await response.json();
      setItems(trendingMovies.results);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <div>
        <div className="bg-white h-full">
          <div className="pb-12">
            <div className="flex flex-col justify-center items-center">
              <img src={comingsoon} alt="img" className="h-[450px] mt-16" />
              <h2 className="text-[40px] font-[500] font-[Montserrat] text-black">
                Coming Soon
              </h2>
              <a href="/">
                <button className="bg-blue-900 text-white font-medium font-[Montserrat] px-4 py-2 mt-5 rounded-lg">
                  Back to Home
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
