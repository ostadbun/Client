import React from 'react';

const RelevantProfessors = () => {
    return (
        <div className='w-11/12 h-72 shadow-xl/30 bg-[#131314] rounded-lg'>
            <h1>اساتید مربوطه </h1>
            <input placeholder="جستوجو کنید" />
            <table>
                <thead>
                    <tr>
                        <th>رقم</th>
                        <th>نام استاد</th>
                        <th>نمره کل</th>
                        <th>صفحه استاد</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
}

export default RelevantProfessors;
