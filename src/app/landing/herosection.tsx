import Slideshow from "./slideshow";

const HeroSection = () => {
  return (
    <>
      <div className="w-1/2 h-6/12  bg-green-300 ">
        <div className="w-full h-[60%] bg-amber-200"></div>
        <div className="w-full h-[40%] bg-amber-700"></div>
      </div>

      <Slideshow />
    </>
  );
};

export default HeroSection;
