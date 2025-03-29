function Footer() {
  return (
    <div className="flex space-x-10 mt-12 p-4 items-center justify-center text-white bg-black">
      <p className="font-[fantasy] text-4xl ">Love Movie</p>
      <div className="flex space-x-8">
        <div className="space-y-3">
          <div className="flex space-x-2">
            <i className="ri-mail-line text-2xl"></i>{" "}
            <p>kimngoc9327tn@gmail.com</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <i className="ri-facebook-circle-fill  text-2xl"></i>
          <i className="ri-github-fill  text-2xl"></i>
          <i className="ri-instagram-fill  text-2xl"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
