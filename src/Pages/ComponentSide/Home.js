import React from 'react';
import img from '../../assets/Minimalistic Weed Logo Maker copy.jpg'

const Home = () => {
    return (
        <div>
             <div className='mt-5'>
                 <img src={img} className='w-32 mx-auto' alt="" />
                 <div className='bg-[#47CC4D]'>
                       <h2 className='text-3xl text-white font-bold mt-2'>Grower</h2>
                 </div>
             </div>
             <div className='mt-10'>
                <h3 className='text-2xl mb-1'>Dashboard</h3>
                <h3 className='text-2xl mb-1'>Inventory</h3>
                <h3 className='text-2xl mb-1'>Marketplace</h3>
                <h3 className='text-2xl mb-1'>Auction</h3>
                <h3 className='text-2xl mb-1'>Orders</h3>
                <h3 className='text-2xl mb-1'>Transports</h3>
                <h3 className='text-2xl mb-1'>Laboratories</h3>
                <h3 className='text-2xl mb-1'>Transaction</h3>
                <h3 className='text-2xl mb-1'>Settings</h3>
                
             </div>
        </div>
    );
};

export default Home;