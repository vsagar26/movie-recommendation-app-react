import React, { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";


const Movie = ( {item, id} ) => {
  const [like, setLike] = useState(false);

  console.log(item.id)

  return (
    <div>
      <div className="pb-8">
        <div className="w-[160px] sm:w-[200px] lg:w-[280px] inline-block mr-4 cursor-pointer relative">
          <img
            className="w-full h-auto block relative"
            src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
            alt={item?.title}
          />
          <div className="absolute w-full h-full top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100 flex items-center justify-center gap-3">
            <Link to={`/watch/${item.id}`}><button className="text-black bg-white px-4 py-2 " >
              Watch Now
            </button></Link>
            <div className="text-white text-2xl" onClick={()=>setLike((prev)=>!prev)}>
              {like ? <BsHeartFill /> : <BsHeart />}
            </div>
          </div>
        </div>
        <h3 className="text-white text-center cursor-pointer">{item?.title}</h3>
      </div>
      
    </div>
  );
};

export default Movie;
