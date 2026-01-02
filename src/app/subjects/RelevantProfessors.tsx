import React from "react";
import Link from "next/link";

const RelevantProfessors = () => {
    const professors = [
        { id: 1, name: "دکتر احمدی", score: 18.5 },
        { id: 2, name: "دکتر رضایی", score: 17.2 },
        { id: 3, name: "دکتر محمدی", score: 19.1 },
    ];
    return (
        <div className="w-5/12 bg-[#131314] shadow-xl/30 rounded-lg p-4">

            <h1 className="text-lg font-bold mb-3 text-white">
                اساتید مربوطه
            </h1>

            <input
                className="w-full mb-4 p-2 rounded-md bg-[#1c1c1e] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="جستجو کنید"
            />

            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-center text-sm text-white">

                    <thead className="bg-[#1c1c1e]">
                        <tr>
                            <th className="border border-gray-700 p-2 w-[10%]">ردیف</th>
                            <th className="border border-gray-700 p-2 w-[40%]">نام استاد</th>
                            <th className="border border-gray-700 p-2 w-[20%]">نمره کل</th>
                            <th className="border border-gray-700 p-2 w-[30%]">صفحه استاد</th>
                        </tr>
                    </thead>

                    <tbody>
                        {professors.map((prof) => (
                            <tr
                                key={prof.id}
                                className="hover:bg-[#1f1f22] transition"
                            >
                                <td className="border border-gray-700 p-2">
                                    {prof.id}
                                </td>
                                <td className="border border-gray-700 p-2">
                                    {prof.name}
                                </td>
                                <td className="border border-gray-700 p-2">
                                    {prof.score}
                                </td>
                                
                                    <td className="border border-gray-700 p-2 text-blue-400 hover:underline cursor-pointer">
                                        <Link href={"/professors"}>
                                        
                                        مشاهده
                                        </Link>
                                    </td>
                               
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default RelevantProfessors;