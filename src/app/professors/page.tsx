"use client"
import { LensDemo } from '@/components/magicui/LensDemo';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { number } from 'framer-motion';
import { Car } from 'lucide-react';
import React, { useState } from 'react';
import Votes from './Votes';

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
        <div className='w-9/12 place-self-center'>
            <Votes/>
        </div>
    );
}

export default professors;
