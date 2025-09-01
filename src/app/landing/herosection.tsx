import { TextAnimate } from "@/components/magicui/text-animate";
import Slideshow from "./slideshow";
import { Meteors } from "@/components/magicui/meteors";
import DetailAnimation from "./DetailAnimation";

const HeroSection = () => {
  return (
    <>
      <div className="md:w-11/12 xl:w-1/2  mx-auto mt-20 mb-14 h-6/12 ">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-4xl md:text-7xl font-extrabold leading-14 md:leading-28 opacity-65">
            با شفّافیت انتخاب کن
            <br />
            با دانــــش رشــــد کن
          </h1>
        </div>

        <div className="w-11/12 md:w-full mt-12  mx-auto max-w-[600px] flex justify-center items-center">
          <TextAnimate
            className="text-xs md:text-base leading-7 md:leading-8 text-justify"
            animation="blurIn"
            as="p"
          >
            این یک سیستم متن‌باز و رایگان است که فرآیند انتخاب واحد (انتخاب
            استاد) را برای دانشجویان تسهیل می‌کند. با جمع‌آوری لیست اساتید یک
            دانشگاه و دریافت آرای دانشجویان درباره ویژگی‌های تدریس، این سیستم به
            دانشجویان کمک می‌کند تا با آگاهی بیشتری استادان خود را انتخاب کنند.
            هدف این پلتفرم ارتقای کیفیت آموزشی و ایجاد شفافیت در جامعه علمی است.
          </TextAnimate>
        </div>
      </div>

      <DetailAnimation />
    </>
  );
};

export default HeroSection;
