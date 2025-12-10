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
            field: "متخصص بیکار",
            image: "/images/farhabakhsh.jpg",
            bio: "بیوگرافی دکتر فرحبخش"
        },
        {
            id: 2,
            name: "دکتر مسیب نژاد",
            field: "متخصص گمراه",
            image: "/images/rezaei.jpg",
            bio: "بیوگرافی دکتر رضایی"
        }
    ])
    return (
        <div className='w-2/12 place-self-center'>
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
