

"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
const CourseInfo = () => {
    return (
    <div className=" max-w-sm gap-4 text-sm">
      <div className="flex mb-5 flex-col gap-1.5">
        <div className="leading-none font-medium">نظریه زبان و ماشین ها</div>
        <div className="text-muted-foreground">
     درس نظریه زبان و ماشین‌ها به بررسی ساختارهای ریاضی برای مدل‌سازی زبان‌ها و ماشین‌های محاسباتی می‌پردازد.
        </div>
      </div>
      <Separator />

         <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-6 pb-6">
             <button className="bg-red-600 text-red-100 rounded-lg px-2 py-1 ring-2 ring-red-500/50 whitespace-nowrap">
                 سخت
             </button>

             <Button className="bg-black dark:bg-white hover:opacity-75 text-white dark:text-black whitespace-nowrap">
                 تخصصی
             </Button>

             <Button className="bg-black dark:bg-white hover:opacity-75 text-white dark:text-black whitespace-nowrap">
                 ترم ۴
             </Button>

             <Button className="bg-black dark:bg-white hover:opacity-75  text-white dark:text-black whitespace-nowrap">
                 ۳ واحد
             </Button>

             <button className="bg-green-600 text-green-100 rounded-lg px-2 py-1 ring-2 ring-green-500/50 whitespace-nowrap">
               پاس شده
             </button>
        </div>
    </div>
  )
};

export default CourseInfo;
//     {/* <div
//         className="
//             min-h-64
//             w-full
//             max-w-md
//             mx-auto
//             shadow-xl/30
//             bg-[#181818]
//             border
//             border-gray-500
//             rounded-lg
//         "
//     >
//         <h1 className="text-2xl sm:text-3xl lg:text-4xl p-4 sm:p-6 text-white">
//             نظریه زبان و ماشین‌ها
//         </h1>

//         <p className="px-4 pb-4 sm:px-6 sm:pb-6 text-white">
//             درس نظریه زبان و ماشین‌ها به بررسی ساختارهای ریاضی برای مدل‌سازی زبان‌ها و ماشین‌های محاسباتی می‌پردازد.
//         </p>

//         <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-6 pb-6">
//             <button className="bg-red-600 text-red-100 rounded-lg px-2 py-1 ring-2 ring-red-500/50 whitespace-nowrap">
//                 سخت
//             </button>

//             <Button className="bg-white hover:opacity-75 text-black whitespace-nowrap">
//                 تخصصی
//             </Button>

//             <Button className="bg-white hover:opacity-75 text-black whitespace-nowrap">
//                 ترم ۴
//             </Button>

//             <Button className="bg-white hover:opacity-75 text-black whitespace-nowrap">
//                 ۳ واحد
//             </Button>

//             <button className="bg-green-600 text-green-100 rounded-lg px-2 py-1 ring-2 ring-green-500/50 whitespace-nowrap">
//                 پاس شده
//             </button>
//         </div>
//     </div> */}
