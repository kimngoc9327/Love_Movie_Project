import BachXa from "../assets/Bach xa 2.jpg";

function MoiveCard() {
  return (
    <div className="relative w-[198px] h-[278px] overflow-hidden border-2 rounded-lg">
      <img
        src={BachXa}
        alt="BachXa"
        className="absolute w-full h-full  object-cover transition delay-75 duration-200 ease-in-out hover:scale-115"
      />
      <div className="">
        <p className="absolute bottom-0 text-white font-medium ">
          Bạch Xà: Kiếp khởi
        </p>
      </div>
    </div>
  );
}

export default MoiveCard;
