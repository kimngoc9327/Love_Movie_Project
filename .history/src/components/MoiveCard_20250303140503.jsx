import BachXa from "../assets/Bach xa 2.jpg";

function MoiveCard() {
  return (
    <img
      src={BachXa}
      className="relative w-[198px] h-[278px] border-2 rounded-lg"
    >
      <div className="">
        <p className="absolute bottom-0 text-center ">Bạch Xà: Kiếp khởi</p>
      </div>
    </img>
  );
}

export default MoiveCard;
