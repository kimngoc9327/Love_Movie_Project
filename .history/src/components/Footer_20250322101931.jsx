function Footer() {
  return (
    <div className=" space-x-5 text-white">
      <p className="font-[fantasy] text-4xl">Love Movie</p>
      <div>
        <p className="text-xl ">Contract</p>
        <div className="flex space-x-2">
          <i className="ri-mail-line text-2xl"></i>{" "}
          <p>kimngoc9327tn@gmail.com</p>
        </div>
        <div className="flex space-x-2">
          <i className="ri-phone-line text-2xl"></i> <p>0123456789</p>
        </div>
      </div>
      <div>
        <i className="ri-facebook-circle-fill  text-2xl"></i>
        <i className="ri-github-fill  text-2xl"></i>
        <i className="ri-instagram-line  text-2xl"></i>
      </div>
    </div>
  );
}

export default Footer;
