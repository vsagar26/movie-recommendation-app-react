import React from "react";
import { Row, Hero} from "../components";
import { request } from "../components/requests";

const Home = () => {
  return (
    <div className="bg-black">
      <Hero />
      <Row rowID = "1" title="Upcoming Movies" fetchURL={request.requestUpcomingMovies}/>
      <Row rowID = "2" title="Top Rated Movies" fetchURL={request.requestTopRatedMovies}/>
      <Row rowID = "3" title="Latest Movies" fetchURL={request.requestLatestMovies}/>
      <Row rowID = "4" title="Popular Movies" fetchURL={request.requestPopularMovies}/>
    </div>
  );
};

export default Home;
