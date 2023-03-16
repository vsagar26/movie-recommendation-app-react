import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  const moviesRows = () => {
    fetch(fetchURL)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch(() => console.log("Error"));
  };

  useEffect(() => {
    return moviesRows;
  }, [fetchURL]);

  const sliderLeft = () =>{
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const sliderRight = () =>{
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  }




  return (
    <>
      <h2 className="text-white md:text-2xl p-4 ml-8">{title}</h2>

      <div className="flex ">
        <AiOutlineLeftCircle onClick={sliderLeft} className="text-[40px] text-white mr-2 cursor-pointer opacity-50 hover:opacity-100 mt-6 md:mt-16" />
        <div
          id={"slider" + rowID}
          className="relative flex items-center w-full h-full whitespace-nowrap scroll-smooth  overflow-x-hidden"
        >
          {movies?.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <AiOutlineRightCircle onClick={sliderRight} className="text-[40px] text-white ml-2 cursor-pointer opacity-50 hover:opacity-100 mt-6 md:mt-16"/>
      </div>
    </>
  );
};

export default Row;
