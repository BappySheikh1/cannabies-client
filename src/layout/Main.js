import React from 'react';
import ComponentSide from '../Pages/ComponentSide/Home'
import ComponentHome from '../Pages/ComponentHome/Home/home'

const Main = () => {
    return (
        <div className='grid grid-cols-4'>

             <div className=' '>
                <ComponentSide />
             </div>

             <div className='col-span-3 px-2 border'>
                <ComponentHome />
            </div>
        </div>
    );
};

export default Main;