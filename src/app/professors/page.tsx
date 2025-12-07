import { Input } from '@/components/ui/input';
import React from 'react';

const professors = () => {
    return (
        <div className='w-2/12 place-self-center'>
            <h1 className='text-4xl place-self-center'>جستوجوی اساتید</h1>
            <Input className='mt-[2rem]' type="email" placeholder="professors" />
            
        </div>
    );
}

export default professors;
