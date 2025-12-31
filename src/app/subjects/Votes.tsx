"use client"
import { number } from 'framer-motion';
import  { useState } from 'react';

const Votes = () => {
        const [votes] = useState([
        { id: 1, user: "علی", YourVote:12, date: "1403/02/10" },
        { id: 2, user: "مریم", YourVote: 14, date: "1403/02/12" },
        { id: 3, user: "رضا", YourVote: 17, date: "1403/02/15" },
    ]);
    return (
            <div className='w-4/12 h-[420px] shadow-xl/30 bg-[#131314] p-5 rounded-lg'>
                <h1 className='text-3xl text-white text-center mb-5'>آرا</h1>

                <table className='w-full  text-right text-white border-collapse'>
                    <thead>
                        <tr className='border-b border-white/20'>
                            <th className='py-2'>خصوصیت</th>
                            <th className='py-2'>نمره</th>
                            <th className='py-2'>نمره شما</th>
                            <th className='py-2'>ertgret</th>
                        </tr>
                    </thead>
                    <tbody>
                        {votes.map((item) => (
                            <tr
                                key={item.id}
                                className='border-b border-white/10 hover:bg-white/5 transition'
                            >
                                <td className='py-2'>{item.user}</td>
                                <td
                                    className={`py-2 ${item.YourVote === 12? "text-green-400":""}`}>
                                    {item.YourVote}
                                </td>
                                <td className='py-2'>{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    );
}

export default Votes;


