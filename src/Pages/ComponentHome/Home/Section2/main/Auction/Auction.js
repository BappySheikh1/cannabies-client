import React from 'react';
import Card from './Card';

const Auction = () => {
    const items=[
        {
            id:'A#1001',
            quantity:'35Lb',
            date: '10.03.22',
            min:'4Ib',
            duration:'4 days',
            reverse:'200'
        },
        {
            id:'A#1002',
            quantity:'35Lb',
            date: '09.03.22',
            min:'4Ib',
            duration:'3 days',
            reverse:'300'
        },
        {
            id:'A#1003',
            quantity:'35Lb',
            date: '08.03.22',
            min:'4Ib',
            duration:'4 days',
            reverse:'200'
        },
    ]
    return (
        <div>
            <p className='text-black font-bold mb-5 text-xl'>Auction Overview</p>
            <div>
                 {
                    items?.map((item,i) => <Card key={i} item={item}/>)
                 }
            </div>
        </div>
    );
};

export default Auction;