import React from "react";
import Row from "./Row";
import { request } from "./requests";
import Footer from "./Footer";


const RecentlyAdded = () => {
  

  return (
    <>
      <div>
        <div className="bg-black h-full">
          <div className="pb-12">
            <img
              src="https://www.themoviedb.org/t/p/original/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg"
              alt="movie img"
              className="object-cover w-full h-[80vh] no-repeat relative"
            />
            <div className="absolute w-full h-[80vh] top-0 bg-gradient-to-b from-[#00000018] to-[#000000d5] "></div>
            <div className="text-white flex flex-row absolute top-[28vh] ml-[260px] ">
              <img
                src="https://www.themoviedb.org/t/p/original/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg"
                alt="movie img"
                className="h-[340px]"
              />
              <div className="absolute w-full ml-[400px]">
                <h2 className="text-3xl md:text-5xl text-white flex w-[800px] pb-8">
                  Guardians of the Galaxy Vol. 3
                </h2>
                <button className="border border-red-600 bg-red-600 text-white px-5 py-2">
                  Play
                </button>
                <button className="border ml-2 md:ml-4 text-white px-5 py-2">
                  Watch Later
                </button>
                <p className="pt-4 text-gray-400">Released : 05/05/2023</p>
                <p className=" text-gray-400">Rating : 8.3/10</p>
                <p className="py-4 text-white w-[700px]">
                  Still reeling from the loss of Gamora, Peter Quill rallies his
                  team to defend the universe and one of their own - a mission
                  that could mean the end of the Guardians if not successful.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Row
              rowID="2"
              title="Top Rated Movies"
              fetchURL={request.requestTopRatedMovies}
            />
          </div>
          <div className="pb-32">
            <Row
              rowID="4"
              title="Popular Movies"
              fetchURL={request.requestPopularMovies}
            />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default RecentlyAdded;
