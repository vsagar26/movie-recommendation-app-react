import React, { useEffect, useState } from "react";
import { request } from "./requests";

const Hero = () => {
  const [items, setItems] = useState([]);

  const heroItems = items[Math.floor(Math.random() * items.length)];

  // const fetchData = () => {
  //   fetch(request.requestTrendingMovies)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setItems(data.results);
  //     })
  //     .catch(() => console.log("Error"));
  // };
  // console.log(heroItems);
  

  async function fetchData() {
    try{
      const response = await fetch(request.requestUpcomingMovies)
      const trendingMovies = await response.json();
      setItems(trendingMovies.results) ;
     }catch(err){
       console.error(err); 
     }
     
   }

  useEffect(() => {
   fetchData();
  },[]);

  const truncatedString = (str, num) =>{
    if(str?.length > num){
      return str.slice(0, num) + '...';
    }
    else {return str}
  }

  return (
    <div>
      <div className="w-full h-[100vh]">
        <div className="w-full h-full">
          <div className="absolute w-full h-full bg-gradient-to-r from-black"></div>
          <img
            key={items.key}
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${heroItems?.backdrop_path}`}
            alt={items?.title}
          />
          <div className="absolute w-full top-[30%] md:top-[40%] px-12 md:px-36">
            <h2 className="text-3xl md:text-5xl text-white py-4">{heroItems?.title}</h2>
            <button className="border bg-gray-300 text-black border-gray-300 px-5 py-2">
              Play
            </button>
            <button className="border ml-2 md:ml-4 text-white border-gray-300 px-5 py-2">
              Watch Later
            </button>
            <p className="pt-4 text-gray-400">Released : {heroItems?.release_date}</p>
            <p className=" text-gray-400">Rating : {heroItems?.vote_average}</p>
            <p className="py-4 text-white w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%]">{truncatedString(heroItems?.overview,170)}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
