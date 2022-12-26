import React from 'react';
import { BsClockHistory, BsCurrencyDollar } from 'react-icons/bs';
import { MdDateRange, MdOutlineHighQuality, MdProductionQuantityLimits } from 'react-icons/md';
import { RiAuctionLine } from 'react-icons/ri';

const Card = ({item}) => {
    // console.log(item);
    const { id, quantity, date, min, duration, reverse}=item
    return (
        <div>
            <div className="card shadow">
  <div className="flex items-center justify-between p-3">

      <div className='flex items-center'>
         <div>
           <RiAuctionLine className='text-[#4CAF50] mr-2' />
         </div>
           <div>
              <small className='text-gray-400'>Auction ID</small>
              <p className='font-bold'>{id}</p>
           </div>
      </div>

      <div className='flex items-center'>
        <div>
            <MdProductionQuantityLimits className='text-[#4CAF50] mr-2' />
        </div>

       <div>
          <div>
          <small className='text-gray-400'>Quantity</small>
           <p className='font-bold'>{quantity}</p>
          </div>
       </div>
      </div>

      <div className='flex items-center'>
        <div>
            <MdDateRange className='text-[#4CAF50] mr-2'/>
        </div>
         <div>
         <small className='text-gray-400'>Start Date</small>
         <p className='font-bold'>{date}</p>
         </div>
      </div>

      <div className='flex items-center'>
        <div>
           <MdOutlineHighQuality className='text-[#4CAF50] mr-2'/>
        </div>
        <div>
         <small className='text-gray-400'>Min Quantity</small>
         <p className='font-bold'>{min}</p>
        </div>
      </div>

      <div className='flex items-center'>
        <div>
              <BsClockHistory className='text-[#4CAF50] mr-2'/>
        </div>
        <div>
         <small className='text-gray-400'>Duration</small>
         <p className='font-bold'>{duration}</p>
        </div>
      </div>

      <div className='flex items-center'>
        <div>
        <BsCurrencyDollar className='text-[#4CAF50] mr-2'/>
        </div>
        <div>    
         <small className='text-gray-400'>Reverse</small>
         <p className='font-bold'>{reverse}</p>
        </div>
      </div>

  </div>
</div>
        </div>
    );
};

export default Card;