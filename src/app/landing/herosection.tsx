import Slideshow from "./slideshow";

const HeroSection = () => {
  return (
    <>
      <div className="w-1/2 h-6/12 ">
        <div className="w-full h-[60%] flex justify-center items-center">
          <h1 className="text-7xl font-extrabold leading-28 opacity-65">
            با شفّافیت انتخاب کن
            <br />
            با دانــــش رشــــد کن
          </h1>
        </div>

        <div className="w-full h-[40%] flex justify-center items-center">
          <p className="text-justify text-base font-normal leading-8 opacity-35">
            این یک سیستم متن‌باز و رایگان است که فرآیند انتخاب واحد (انتخاب
            استاد) را برای دانشجویان تسهیل می‌کند. با جمع‌آوری لیست اساتید یک
            دانشگاه و دریافت آرای دانشجویان درباره ویژگی‌های تدریس، این سیستم به
            دانشجویان کمک می‌کند تا با آگاهی بیشتری استادان خود را انتخاب کنند.
            هدف این پلتفرم ارتقای کیفیت آموزشی و ایجاد شفافیت در جامعه علمی است.
          </p>
        </div>
      </div>

      <Slideshow />
    </>
  );
};

export default HeroSection;
