import React, { useEffect, useState } from 'react';
import { request } from "./requests";
import {FaPlay} from "react-icons/fa"
import { useParams } from 'react-router-dom';

const MovieDetail = () => {

  const {id} = useParams()
  console.log(id);
  
  return (
    <div>
      <div>
        
      </div>
    </div>
  )
}

export default MovieDetail