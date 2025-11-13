import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import { Fragment } from "react";

const Slideshow = () => {
  const images = [
    "https://diyarmirza.ir/wp-content/uploads/2025/05/photo_%DB%B2%DB%B0%DB%B2%DB%B5-%DB%B0%DB%B5-%DB%B0%DB%B3_%DB%B2%DB%B3-%DB%B0%DB%B8-%DB%B5%DB%B1.jpg",
    "https://diyarmirza.ir/wp-content/uploads/2025/05/photo_۲۰۲۵-۰۵-۰۳_۲۳-۰۸-۵۱.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaxWYeTUXmsAmL2YUQs1s16HqkvZobSa1s6w&s",
  ];

  return (
    <div className="h-3/12 relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee>
        {images.map((v, i) => {
          return (
            <Fragment key={i}>
              <div className="w-32 h-32 bg-gray-400 opacity-50 rounded-2xl overflow-hidden">
                <Image
                  src={v}
                  alt="مدرس"
                  width={120}
                  height={120}
                  className="w-32 h-32 object-cover"
                />
              </div>
            </Fragment>
          );
        })}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
};

export default Slideshow;
