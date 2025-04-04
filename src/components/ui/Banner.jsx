import BachXa from "../../assets/Bach xa 2.jpg";
import { useDispatch } from "react-redux";
import { getMovie } from "../../redux/actions/movieActions";
import { useNavigate } from "react-router-dom";

// Banner component displays a background image and movie information with action buttons.
function Banner() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = "795607-ii";

  const handleSelect = (id) => {
    // Dispatch action to get movie details and navigate to movie page
    dispatch(getMovie(id));
    navigate(`/movie?id=${id}`);
  };
  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BachXa})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 h-full"></div>
      <div className="absolute z-10 w-full flex items-center justify-around mt-[137px] max-lg:h-[60%]">
        <div className="space-y-4">
          {/* Movie label */}

          <p
            className="p-2  w-[80px] rounded-[2px] text-sm text-center text-white font-medium
                 bg-gradient-to-r from-red-500  to-red-400 max-lg:ml-6
                 "
          >
            Movie
          </p>
          {/* Movie description */}
          <p className="w-[600px] text-white text-justify font-medium max-lg:line-clamp-8 max-md:w-[340px]">
            White Snake 2: The Tribulation of Green Snake continues the
            storyline of the first part. The serpent spirit Xiao Bai has been
            imprisoned in Leifeng Pagoda by the monk Fa Hai. In an attempt to
            save her sister, Xiao Qing was cast into the Asura Realm, reaching
            the Nirvana state of selflessness and formlessness. As she struggled
            through perilous trials, surrounded by thick mist and illusions, a
            sudden police siren echoed from afar. To her astonishment, a modern
            world appeared before her eyes—towering skyscrapers stretching into
            the sky. Overwhelmed and bewildered, Xiao Qing found herself lost in
            this unfamiliar era. There, she unexpectedly encountered a
            mysterious young man who repeatedly rescued her from danger. What
            fate awaits them? To transcend space and time and return to save
            Xiao Bai, what must Xiao Qing do?
          </p>

          <div className="flex space-x-8 text-white max-lg:ml-6 max-lg:text-sm">
            {/* Action buttons */}
            <button
              onClick={() => handleSelect(id)}
              className="font-bold p-2 pl-3 pr-3 rounded-[4px] bg-black cursor-pointer "
            >
              Details
            </button>
            <button
              onClick={() => handleSelect(id)}
              className="font-bold p-2 pl-3 pr-3 rounded-[4px] bg-red-500 cursor-pointer"
            >
              Watch Movie
            </button>
          </div>
        </div>
        {/* Movie poster */}
        <img
          src={BachXa}
          className=" w-[250px] h-[350px] object-cover shadow-2xl max-lg:hidden "
        />
      </div>
    </div>
  );
}

export default Banner;
