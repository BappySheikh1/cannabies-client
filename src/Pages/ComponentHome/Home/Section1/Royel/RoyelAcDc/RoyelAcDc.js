import React from 'react';
import { GoLinkExternal } from 'react-icons/go';
import { MdOutlineHome } from 'react-icons/md';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { BsArrowDownCircle, BsArrowUpLeftCircle } from 'react-icons/bs';
import { RiAuctionLine } from 'react-icons/ri';


const RoyelAcDc = () => {
    return (
        <div >
            <div className='flex items-center justify-between'>
                <div>
                   <h2 className='text-2xl text-[#4CAF50] font-semibold'>Royal ACDC Outdoor</h2>
                   <p className='text-[#4CAF50] flex items-center'>Gold Leaf Flowers <GoLinkExternal className='ml-2'/></p>
                </div>

                <div>
                     <div className="rating ">
                      <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
                      <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500"  />
                      <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
                      <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
                      <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" checked/>
                     </div>
                      <p className='text-gray-500'>4.9 (2130 reviews)</p>
                </div>
            </div>

        <div className='my-5'>
            <div className='flex items-center justify-around'>
                <p className='font-semibold'>Category: Flowers</p>
                <p className='font-semibold'>Strains: Indica</p>
                <p className='font-semibold'>Terpenes: 10</p>
                <p className='font-semibold'>Canabinoids: 15</p>
            </div>
            <hr className='my-1'/>
            <div className='flex items-center justify-around'>
              <p className='font-semibold'>Cultivation: Indoor</p>
              <p className='font-semibold'>THC: 0.5%</p>
              <p className='font-semibold'>Batch No: B54U</p>
              <p className='font-semibold'>Brand: Gold</p>
            </div>
        </div>
            
            {/* Box */}
            <div className='flex items-center justify-between'>
                   <div className='w-24 h-28 bg-[#4CAF50] rounded'>
                         <p className='text-white text-center  pt-4'>Total Stock</p>
                         <p className='font-bold text-white text-center text-xl'>100lb</p>
                   </div>

                   <div className='w-60 h-28 rounded-lg border p-1'>
                        <div className='flex items-center justify-between'>
                            <p className='font-bold text-[#4CAF50] flex items-center justify-center'> <MdOutlineHome className='mr-2'/> Marketplace</p>
                            <p className=''><input type="checkbox" checked="checked" className="checkbox text-gray-300" />Ib</p>
                        </div>

                        <div className='flex items-center justify-between'>
                            <div className='text-gray-500'>
                                <BsArrowUpLeftCircle />
                                <small>All</small>
                                <p className='text-black font-bold'>100Ib</p>
                            </div>

                            <div className='text-gray-500'>
                                <BsArrowDownCircle />
                                <small>Min</small>
                                <p className='text-black font-bold'>5Ib</p>
                            </div>

                            <div className='text-gray-500'>
                                <HiOutlineCurrencyDollar />
                               <small>Price</small>
                               <p className='text-black font-bold'>$600/Ib</p>
                            </div>

                            <div >
                            <div className="radial-progress text-black" style={{"--value":70}}>100Ib</div>
                            </div>
                        </div>
                       </div>

                   <div className='w-56 h-28 rounded-lg border p-1 flex justify-center'>
                       <div className='w-1/2'>
                       <p className='font-bold text-[#4CAF50] flex items-center justify-center'> <RiAuctionLine className='mr-1' /> Auction</p>
                       <div className='flex items-center justify-around'>
                       <div className='text-gray-500'>
                                <BsArrowUpLeftCircle />
                                <small>All</small>
                                <p className='text-black font-bold'>100Ib</p>
                            </div>

                            <div className='text-gray-500'>
                                <BsArrowDownCircle />
                                <small>Min</small>
                                <p className='text-black font-bold'>5Ib</p>
                            </div>
                       </div>
                       
                       
                       </div>

                       <div className='w-1/2 bg-[#a4e7a6]'>
                         <small className='text-gray-500 text-center '>Stock Allocated</small>          <div className="radial-progress" style={{"--value":70}}>100Ib</div>
                       </div>

                   </div>
            </div>

        </div>
    );
};

export default RoyelAcDc;