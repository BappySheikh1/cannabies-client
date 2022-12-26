import React from 'react';

const Card = ({item}) => {
    // console.log(item);
    const { id, quantity, date, min, duration, reverse}=item
    return (
        <div>
            <div className="card shadow">
  <div className="flex items-center justify-between p-3">

      <div>
         <small className='text-gray-400'>Auction ID</small>
         <p className='font-bold'>{id}</p>
      </div>
      <div>
         <small className='text-gray-400'>Quantity</small>
         <p className='font-bold'>{quantity}</p>
      </div>
      <div>
         <small className='text-gray-400'>Start Date</small>
         <p className='font-bold'>{date}</p>
      </div>
      <div>
         <small className='text-gray-400'>Min Quantity</small>
         <p className='font-bold'>{min}</p>
      </div>
      <div>
         <small className='text-gray-400'>Duration</small>
         <p className='font-bold'>{duration}</p>
      </div>
      <div>
         <small className='text-gray-400'>Reverse</small>
         <p className='font-bold'>{reverse}</p>
      </div>

  </div>
</div>
        </div>
    );
};

export default Card;