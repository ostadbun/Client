"use client"
import  { useState } from 'react';

const CourseInfo = () => {
    const [courses, setCourses] = useState<string[]>([
        "نظریه زبان و ماشین ها",
        "ساختمان داده‌ها",
        "سیستم عامل"
    ]);
    {/* {courses.map((course, index)=>(
    ))} */}






    return (
        <div>
            <div className='w-10/12 h-10'>
                <h1>نظریه زبان و ماشین ها</h1>
            </div>

        </div>
    );
}

export default CourseInfo;
