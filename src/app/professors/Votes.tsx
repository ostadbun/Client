"use client"
import { Edit, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

const Votes = () => {
    const [votes] = useState([
        { id: 1, characteristic: "اخلاق", YourVote: 12, vote: 14 },
        { id: 2, characteristic: "کردار", YourVote: 14, vote: 14 },
        { id: 3, characteristic: "مهربانی", YourVote: 17, vote: 14 },
    ]);

    return (
        <div className='w-4/12 h-[420px] border border-gray-500 shadow-xl/30 bg-[#131314] p-5 rounded-lg'>
            <h1 className='text-3xl text-white text-center mb-5'>آرا</h1>

            <table className='w-full text-right text-white border-collapse'>
                <thead className=''>
                    <tr className='border-b border-white/20'>
                        <th className='py-2'>خصوصیت</th>
                        <th className='py-2 pl-3'>نمره</th>
                        <th className='py-2'>نمره شما</th>
                        <th className='py-2 pr-[75px] border-r border-white/20'>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {votes.map((item) => (
                        <tr key={item.id} className='border-b border-white/10 hover:bg-white/5 transition'>
                            <td className='py-2'>{item.characteristic}</td>
                            <td className='py-2 text-yellow-300'>{item.YourVote}</td>
                            <td className='py-2 text-green-300 pr-4'>{item.vote}</td>
                            <td className="py-2 border-r border-white/10">
                                <div className="flex gap-3 justify-center">
                                    <button className="p-2 rounded bg-green-500/20 hover:bg-green-500/40 transition">
                                        <Plus className="w-5 h-5 text-green-400" />
                                    </button>

                                    <button className="p-2 rounded bg-red-500/20 hover:bg-red-500/40 transition">
                                        <Trash2 className="w-5 h-5 text-red-400" />
                                    </button>

                                    <button className="p-2 rounded bg-yellow-500/20 hover:bg-yellow-500/40 transition">
                                        <Edit className="w-5 h-5 text-yellow-400" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Votes;