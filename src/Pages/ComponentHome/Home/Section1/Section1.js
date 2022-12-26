import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Royal from './Royel/Royel';

const Section1 = () => {
    return (
        <div className='bg-white p-2 rounded-lg'>
            <div className='flex justify-between px-3 mb-4'>
                <p className='font-semibold flex items-center text-black'> <AiOutlineArrowLeft className='mr-2'/> Back</p>
                <p className='font-semibold text-black'>Edit</p>
            </div>
           <Royal />

        </div>
    );
};

export default Section1;