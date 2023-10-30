import { Link } from "react-router-dom";
import user from "../assets/images/user.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../redux/movieSlice";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
  };

  return (
    <div className="bg-secondary h-[72px] flex py-0 px-10 items-center justify-between">
      <Link to="/">
        <div className="text-font-primary text-[20px] font-semibold ">
          Movie App
        </div>
      </Link>

      <div className="w-1/2">
        <form onSubmit={handleSubmit} className="flex justify-center  w-[70%]">
          <input
            type="text"
            value={term}
            placeholder="Search Movie or Shows..."
            onChange={(e) => setTerm(e.target.value)}
          />
          <button
            type="submit"
            className="py-0 px-2 text-xl cursor-pointer h-[38px]"
          >
            <i className="fa-solid fa-magnifying-glass text-[18px] w-full p-[5px] h-[38px] outline-none"></i>
          </button>
        </form>
      </div>

      <div className="w-[38px] h-[38px]">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
