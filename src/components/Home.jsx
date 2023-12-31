import { useEffect } from "react";
import { useDispatch } from "react-redux";

import MovieListing from "./MovieListing";
import { fetchAsyncMovies, fetchAsyncShows } from "../redux/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "Friends";

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  return (
    <div>
      <MovieListing />
    </div>
  );
};

export default Home;
