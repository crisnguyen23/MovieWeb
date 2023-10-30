import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAsyncMovieDetail, removeSelectMovie } from "../redux/movieSlice";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movies.selectMovie);

  useEffect(() => {
    dispatch(fetchAsyncMovieDetail(imdbID));

    return () => {
      dispatch(removeSelectMovie());
    };
  }, [dispatch, imdbID]);

  return (
    <section className="flex max-md:flex-col-reverse justify-between py-10 px-0 text-font-primary font-normal min-h-[calc(100dvh-144px)] w-full">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="text-[40px]">{data.Title}</div>
            <div className="pl-[3px] mt-5 flex text-font-secondary">
              <span className="mr-5">
                IMDB Rating <i className="fa-solid fa-star text-[#ff9e00]"></i>{" "}
                :{data.imdbRating}
              </span>
              <span className="mr-5">
                IMDB Votes{" "}
                <i className="fa-solid fa-thumbs-up text-[#fafafa]"></i> :
                {data.imdbVotes}
              </span>
              <span className="mr-5">
                Runtime <i className="fa-solid fa-film text-[#BFD5D6]"></i> :
                {data.Runtime}
              </span>
              <span className="mr-5">
                Year <i className="fa-solid fa-calendar text-[peachpuff]"></i> :
                {data.Year}
              </span>
            </div>
            <div className="mt-5 leading-[1.8rem] mb-5">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span className="py-[10px] px-0 font-semibold min-w-[100px] inline-block">
                  Director:
                </span>
                <span className=" text-font-secondary"> {data.Director}</span>
              </div>
              <div>
                <span className="py-[10px] px-0 font-semibold min-w-[100px] inline-block">
                  Stars:{" "}
                </span>
                <span className=" text-font-secondary">{data.Actors}</span>
              </div>
              <div>
                <spa className="py-[10px] px-0 font-semibold min-w-[100px] inline-block">
                  Generes:{" "}
                </spa>
                <span className=" text-font-secondary">{data.Genre}</span>
              </div>
              <div>
                <span className="py-[10px] px-0 font-semibold min-w-[100px] inline-block">
                  Languages:{" "}
                </span>
                <span className=" text-font-secondary">{data.Language}</span>
              </div>
              <div>
                <span className="py-[10px] px-0 font-semibold min-w-[100px] inline-block">
                  Awards:{" "}
                </span>
                <span className=" text-font-secondary">{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="ml-[30px] min-w-[300px] pr-4 max-md:self-center">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </section>
  );
};

export default MovieDetail;
