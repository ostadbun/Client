import React from 'react';

const RelevantCourses = () => {
  const subjects = [
    { id: 1, SubjectName: "مبانی کامپیوتر", Status: "پاس نشده", TypeofSubject: "همنیاز" },
    { id: 2, SubjectName: "مبانی کامپیوتر", Status: "پاس شده", TypeofSubject: "پیشنیاز" },
    { id: 3, SubjectName: "مبانی کامپیوتر", Status: "پاس نشده", TypeofSubject: "پیشنیاز" }
  ]
  return (
    <div className="w-5/12 border border-gray-500 bg-[#181818]
 shadow-xl/30 rounded-lg p-4">

      <h1 className="text-lg font-bold mb-3 text-white">
        جدول روابط دروس
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
              <th className="border border-gray-700 p-2 w-[40%]">نام درس</th>
              <th className="border border-gray-700 p-2 w-[20%]">وضعیت</th>
              <th className="border border-gray-700 p-2 w-[30%]">نوع</th>
            </tr>
          </thead>

          <tbody>
            {subjects.map((prof) => (
              <tr
                key={prof.id}
                className="hover:bg-[#1f1f22] transition"
              >
                <td className="border border-gray-700 p-2">
                  {prof.id}
                </td>
                <td className="border border-gray-700 p-2">
                  {prof.SubjectName}
                </td>
                <td className={`border border-gray-700 p-2
                 ${prof.Status === "پاس شده" ? "text-green-500" : "text-red-500"}`}
                >
                  {prof.Status}
                </td>
                <td className="border border-gray-700 p-2 cursor-pointer">
                  {prof.TypeofSubject}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default RelevantCourses;
