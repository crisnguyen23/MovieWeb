import { useSelector } from "react-redux";
import Slider from "react-slick";
import MovieCard from "./MovieCard";

const MovieListing = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  const movies = useSelector((state) => state.movies.movies);
  const shows = useSelector((state) => state.movies.shows);
  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movie-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    movies.Response === "True" ? (
      shows.Search.map((show, index) => <MovieCard key={index} data={show} />)
    ) : (
      <div className="movie-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div>
      <div className="my-5 mx-0">
        <h2 className="text-font-primary mb-[10px] font-normal text-2xl">
          Movies
        </h2>
        <div className="gap-[15px]">
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
      </div>

      <div className="my-5 mx-0">
        <h2 className="text-font-primary mb-[10px] font-normal text-2xl">
          Shows
        </h2>
        <div className="grid grid-cols-movieCard gap-[15px]">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
