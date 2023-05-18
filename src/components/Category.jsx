import React, { useEffect, useState } from "react";
import Row from "./Row";
import Footer from "./Footer";
import { request } from "./requests";

const Category = () => {
  const [items, setItems] = useState([]);

  const heroItems = items[Math.floor(Math.random() * items.length)];

  async function fetchData() {
    try {
      const response = await fetch(request.requestUpcomingMovies);
      const trendingMovies = await response.json();
      setItems(trendingMovies.results);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const truncatedString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div>
      <div className="w-full h-full bg-black">
        <div className="w-full h-full">
          <div className="absolute w-full h-[70vh]bg-gradient-to-r from-black"></div>
          <img
            key={items.key}
            className="w-full h-[70vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${heroItems?.backdrop_path}`}
            alt={items?.title}
          />
          <div className="absolute w-full top-[30%] md:top-[40%] px-12 md:px-36">
            <h1 className="text-white text-[120px] font-[Montserrat]">
              CATEGORIES
            </h1>
          </div>
          <div>
            <Row
              rowID="1"
              title="Upcoming Movies"
              fetchURL={request.requestUpcomingMovies}
            />
            <Row
              rowID="2"
              title="Top Rated Movies"
              fetchURL={request.requestTopRatedMovies}
            />
            <Row
              rowID="3"
              title="Latest Movies"
              fetchURL={request.requestLatestMovies}
            />
            <Row
              rowID="4"
              title="Popular Movies"
              fetchURL={request.requestPopularMovies}
            />
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Category;
