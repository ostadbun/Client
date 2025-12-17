"use client"
import { LensDemo } from '@/components/magicui/LensDemo';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { number } from 'framer-motion';
import { Car } from 'lucide-react';
import React, { useState } from 'react';

const professors = () => {
    type Professor = {
        id: number;
        name: string;
        field: string;
        image: string;
        bio: string;
    }
    const [professors, setProfessors] = useState<Professor[]>([
        {
            id: 1,
            name: "دکتر فرحبخش",
            field: "متخصص گمراه",
            image: "/images/2025-12-10 03.54.32.jpg",
            bio: "بیوگرافی ارزو رسیدن به شریف"
        },
        {
            id: 2,
            name: "دکتر مسیب نژاد",
            field: "متخصص گمراه",
            image:"/images/2025-12-10 03.54.20.jpg",
            bio: "بیوگرافی ارزو رسیدن به شریف"
        }
    ])
    return (
        <div className='place-self-center'>
            <h1 className='text-4xl place-self-center'>جستوجوی اساتید</h1>
            <Input className='mt-[2rem]' type="email" placeholder="professors" />
            <div className='flex justify-center gap-6 mt-20 place-items-center'>
                {professors.map((c) => {
                    return <LensDemo
                        key={c.id}
                        name={c.name}
                        field={c.field}
                        image={c.image}
                        bio={c.bio}
                    />
                })}
            </div>
        </div>
    );
}

export default professors;
