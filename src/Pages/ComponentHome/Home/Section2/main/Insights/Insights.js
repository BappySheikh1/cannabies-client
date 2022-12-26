import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { GoLinkExternal } from 'react-icons/go';
import { BiMessageAltDots } from 'react-icons/bi';
import { AiFillStar, AiOutlineEye } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';


const Insights = () => {
    
    return (
        <div>
            {/* insights header start */}
          <div className='mb-5 flex items-center justify-between'>
             <div>
                <p className='text-black font-bold text-xl'>Insights</p>
                 <small className='text-gray-500'>ID: A#1001</small>
             </div>
             <div>
                <p className='text-blue-500 underline flex items-center'>Go to auction <GoLinkExternal className='ml-2' /></p>
             </div>
          </div>
             {/* insights header end */}

             {/* insights Engagement start */}
             <div className='mx-5 p-2 border'>
                   <div className='flex items-center justify-between mb-5'>
                       <h3 className='text-3xl font-bold'>Engagement</h3>
                       <p><BsThreeDotsVertical /></p>
                   </div>

                  <div>
                    <h4 className=''><span className='text-2xl font-bold'>219</span> <br />
                    <small className='text-gray-500 '>Last day</small>
                    </h4>
                  </div>
             </div>
             {/* insights Engagement end*/}
   
              <div className='grid grid-cols-2 gap-2 mx-5'>
                <div className='flex items-center '>
                    <div>
                      <AiOutlineEye className='text-2xl mr-2'/>
                    </div>
                    <div>
                        <small className='text-gray-500'>Total View</small>
                         <h3 className='text-2xl text-black font-bold'>274</h3>
                    </div>
                </div>

                <div className='flex items-center '>
                    <div>
                      <FaUsers className='text-2xl mr-2' />
                    </div>
                    <div>
                        <small className='text-gray-500'>Participants</small>
                         <h3 className='text-2xl text-black font-bold'>56</h3>
                    </div>
                </div>

                <div className='flex items-center '>
                    <div>
                    <AiFillStar className='text-2xl mr-2'/>
                    </div>
                    <div>
                        <small className='text-gray-500'>Highest Bid</small>
                         <h3 className='text-2xl text-black font-bold'>$2,350</h3>
                    </div>
                </div>

                <div className='flex items-center '>
                    <div>
                     <BiMessageAltDots className='text-2xl mr-2'/>
                    </div>
                    <div>
                        <small className='text-gray-500'>Message</small>
                         <h3 className='text-2xl text-black font-bold'>29</h3>
                    </div>
                </div>

               

              </div>
        </div>
    );
};

export default Insights;