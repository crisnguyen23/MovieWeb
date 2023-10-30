import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  return (
    <div className="bg-secondary cursor-pointer transition-all duration-300 hover:scale-110 hover:transition-all hover:duration-300 h-full min-h-[450px] mx-1">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="h-full">
            <img
              className=" w-full h-full p-0"
              src={data.Poster}
              alt={data.Title}
            />
          </div>
          <div className="p-5">
            <div className="text-font-primary">
              <h4 className="text-[16px] font-normal mb-[10px]">
                {data.Title}
              </h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
