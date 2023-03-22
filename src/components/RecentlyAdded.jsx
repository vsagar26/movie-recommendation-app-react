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
              src="https://images.pexels.com/photos/1386506/pexels-photo-1386506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="movie img"
              className="object-cover w-full h-[80vh] no-repeat relative"
            />
            <div className="absolute w-full h-[80vh] top-0 bg-gradient-to-b from-[#00000018] to-[#000000d5] "></div>
            <div className="text-white flex flex-row absolute top-[28vh] ml-[260px] ">
              <img
                src="https://images.pexels.com/photos/15094547/pexels-photo-15094547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="movie img"
                className="h-[340px]"
              />
              <div className="absolute w-full ml-[400px]">
                <h2 className="text-3xl md:text-5xl text-white flex w-[800px] pb-8">
                  Movie Title
                </h2>
                <button className="border border-red-600 bg-red-600 text-white px-5 py-2">
                  Play
                </button>
                <button className="border ml-2 md:ml-4 text-white px-5 py-2">
                  Watch Later
                </button>
                <p className="pt-4 text-gray-400">Released :</p>
                <p className=" text-gray-400">Rating :</p>
                <p className="py-4 text-white w-[700px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ullam, cum perferendis iste exercitationem doloribus
                  necessitatibus? Atque ipsum delectus sequi nobis quisquam
                  asperiores cumque enim ducimus placeat, blanditiis quas esse
                  dolor laborum vero dolorum perspiciatis! Explicabo aliquid
                  quod corporis alias. reiciendis!
                </p>
              </div>
            </div>
          </div>
          <div><Row
            rowID="2"
            title="Top Rated Movies"
            fetchURL={request.requestTopRatedMovies}
          /></div>
          <div className="pb-32"><Row rowID = "4" title="Popular Movies" fetchURL={request.requestPopularMovies}/></div>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default RecentlyAdded;
