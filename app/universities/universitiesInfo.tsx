import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const UniversitiesInfo = () => {
  return (
    <div className="space-y-4 mb-[3vh] max-w-2xl mx-auto text-center">
    
      
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Ntv6QZwX0YstXnXUPGTEpdq2_njUivQ5Dw&s"
          alt="دانشگاه صنعتی شریف"
          width={200}
          height={200}
          className="w-full h-60 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <h2 className="text-2xl font-semibold">دانشگاه صنعتی شریف</h2>

      <p className="text-muted-foreground">
        دانشگاه صنعتی شریف نماد تلاش، نخبگی و رویاهای بزرگ در مهندسی ایران است.
      </p>

      <Separator />

      <p>
        دانشگاه صنعتی شریف یکی از معتبرترین دانشگاه‌های ایران است که به دلیل سطح بالای علمی و پژوهشی خود شهرت دارد و فرصتی خوب برای دانشجویان علاقه‌مند به علوم مهندسی فراهم می‌کند.
      </p>
    </div>
  );
};

export default UniversitiesInfo;