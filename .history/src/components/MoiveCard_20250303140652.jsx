import BachXa from "../assets/Bach xa 2.jpg";

function MoiveCard() {
  return (
    <div className="relative w-[198px] h-[278px] border-2 rounded-lg">
      <img
        src={BachXa}
        alt="BachXa"
        className="absolute w-full h-full object-cover"
      />
      <div className="">
        <p className="absolute bottom-0 text-center ">Bạch Xà: Kiếp khởi</p>
      </div>
    </div>
  );
}

export default MoiveCard;
