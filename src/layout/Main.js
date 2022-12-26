import React from 'react';
import ComponentSide from '../Pages/ComponentSide/Home'

const Main = () => {
    return (
        <div className='grid grid-cols-4'>

             <div className=' '>
                <ComponentSide />
             </div>

             <div className='col-span-3 bg-yellow-300'>
                <h2 className="text-2xl">Home-1</h2>
            </div>
        </div>
    );
};

export default Main;