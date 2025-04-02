function Footer() {
  return (
    <div className="flex space-x-10 mt-12 py-4 px-10 items-center justify-between text-white bg-black">
      <p className="font-[fantasy] text-3xl max-lg:text-xl">Love Movie</p>

      <div className="flex space-x-3">
        <i className="ri-facebook-circle-fill  text-2xl"></i>
        <i className="ri-github-fill  text-2xl"></i>
        <i className="ri-instagram-fill text-2xl"></i>
      </div>
    </div>
  );
}

export default Footer;
