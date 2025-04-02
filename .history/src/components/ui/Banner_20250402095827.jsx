import BachXa from "../../assets/Bach xa 2.jpg";
import { useDispatch } from "react-redux";
import { getMovie } from "../../redux/actions/movieActions";
import { useNavigate } from "react-router-dom";

function Banner() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = "795607-ii";
  // const currentMovie = useSelector((state) => state.movieReducer.currentMovie);
  // useEffect(() => {
  //   dispatch(getMovie(id));
  // }, [dispatch]);

  const handleSelect = (id) => {
    dispatch(getMovie(id));
    navigate(`/movie?id=${id}`);
  };
  return (
    <div className="relative w-screen h-screen">
      <img
        src={BachXa}
        className="absolute w-full h-screen object-cover opacity-50"
      />
      <div className="absolute w-full flex items-center justify-around mt-[137px] ">
        <div className="space-y-4">
          <p
            className="p-2  w-[80px] rounded-[2px] text-sm text-center text-white font-medium
                 bg-gradient-to-r from-red-500  to-red-400 max-lg:ml-6
                 "
          >
            Movie
          </p>
          <p className="w-[340px] text-white text-justify font-medium max-lg:line-clamp-8">
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
        <img
          src={BachXa}
          className=" w-[250px] h-[350px] object-cover shadow-2xl max-lg:hidden "
        />
      </div>
    </div>
  );
}

export default Banner;
