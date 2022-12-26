import React from 'react';
import img from '../../assets/Minimalistic Weed Logo Maker copy.jpg'
import { MdDashboard,MdOutlineHome,MdOutlineInventory2 ,MdBorderColor, MdOutlineEmojiTransportation, MdHourglassBottom, MdOutlineSettings} from 'react-icons/md';
import { RiAuctionLine } from 'react-icons/ri';
import { BsArrowLeftRight } from 'react-icons/bs';

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
                <h3 className='text-2xl mb-8 flex items-center justify-center'> <MdDashboard className='mr-4'/> Dashboard</h3>
               <div className='bg-[#ecf5ec] '>
               <h3 className='text-2xl text-[#8dee92] font-semibold mb-8 flex items-center justify-center'><MdOutlineInventory2 className='mr-8 text-[#8dee92]'/> Inventory</h3>
               </div>

                <h3 className='text-2xl mb-8 flex items-center justify-center'><MdOutlineHome className='mr-2'/> Marketplace</h3>

                <h3 className='text-2xl mb-8 flex items-center justify-center'> <RiAuctionLine className='mr-14' /> Auction</h3>

                <h3 className='text-2xl mb-8 flex items-center justify-center'> <MdBorderColor className='mr-16' /> Orders</h3>

                <h3 className='text-2xl mb-8 flex items-center justify-center'> <MdOutlineEmojiTransportation className='mr-6'/> Transports</h3>

                <h3 className='text-2xl mb-8 flex items-center justify-center'> <MdHourglassBottom className='mr-3'/> Laboratories</h3>

                <h3 className='text-2xl mb-8 flex items-center justify-center'><BsArrowLeftRight 
                 className='mr-4'/> Transaction</h3>

                <h3 className='text-2xl mb-8 flex items-center justify-center'> <MdOutlineSettings  className='mr-12'/> Settings</h3>
                
             </div>
        </div>
    );
};

export default Home;