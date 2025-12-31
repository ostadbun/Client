"use client"
import { Button } from '@/components/ui/button';

const CourseInfo = () => {
    return (
        <div className='pt-5'>
            <div className='w-11/12 h-72 shadow-xl/30 bg-[#131314] rounded-lg'>
                <h1 className='text-4xl pr-8 pt-5 text-white'>
                    نظریه زبان و ماشین ها
                </h1>
                <p className='pt-7 pl-5 pr-8 text-white'>
                    درس نظریه زبان و ماشین‌ها به بررسی ساختارهای ریاضی برای مدل‌سازی زبان‌ها و ماشین‌های محاسباتی می‌پردازد.
                </p>
                <div className='flex justify-center pt-10 gap-7'>
                    <button className='bg-red-600 text-red-100 rounded-lg p-1 ring-2 ring-red-500/50'>
                        سخت
                    </button>
                    <Button className='bg-white text-black'>تخصصی</Button>
                    <Button className='bg-white text-black'>ترم ۴</Button>
                    <Button className='bg-white text-black'>۳ واحد</Button>
                    <button className='bg-green-600 text-green-100 rounded-lg p-1 ring-2 ring-green-500/50'>
                        پاس شده
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CourseInfo;