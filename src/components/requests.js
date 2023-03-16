const apiKey = "3a994fbcec90554936de6a34bea370e9";

export const request = {
  requestTrendingMovies: `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`,
  requestUpcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
  requestTopRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
  requestLatestMovies: `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`,
  requestPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
};
