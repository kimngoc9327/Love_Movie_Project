function Footer() {
  return (
    <div className="flex space-x-10 mt-8 items-center justify-center text-white">
      <p className="font-[fantasy] text-4xl ">Love Movie</p>
      <div className="flex space-x-8">
        <div className="space-y-3">
          <p className="text-xl font-bold">Contract</p>
          <div className="flex space-x-2">
            <i className="ri-mail-line text-2xl"></i>{" "}
            <p>kimngoc9327tn@gmail.com</p>
          </div>
          <div className="flex space-x-2">
            <i className="ri-phone-line text-2xl"></i> <p>0123456789</p>
          </div>
        </div>
        <div className="space-x-3">
          <i className="ri-facebook-circle-fill  text-2xl"></i>
          <i className="ri-github-fill  text-2xl"></i>
          <i className="ri-instagram-fill  text-2xl"></i>
          <i className="ri-reactjs-fill text-2xl"></i>
          <i className="ri-tailwind-css-fill text-2xl"></i>
          <i className="ri-remixicon-fill text-2xl"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
