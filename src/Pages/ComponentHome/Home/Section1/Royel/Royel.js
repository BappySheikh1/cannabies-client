import React from 'react';
import flower1 from '../../../../../assets/flower/p1.jpg'
import flower2 from '../../../../../assets/flower/p2.jpg'
import flower3 from '../../../../../assets/flower/p3.jpg'
import flower5 from '../../../../../assets/flower/p5.jpg'
import flower6 from '../../../../../assets/flower/p6.jpeg'
import RoyelAcDc from './RoyelAcDc/RoyelAcDc';

const Royal = () => {
    return (
        <div className='mb-3 flex '>
            {/* Image section start */}
            <div className='px-4 flex items-center'>
                  <div className='mr-2'>
                      <div>
                         <img style={{width: '60px', height:'60px'}} src={flower1} alt="" />
                      </div>

                      <div>
                         <img style={{width: '60px',height:'60px'}} className='mt-6' src={flower2} alt="" />
                      </div>

                      <div>
                         <img style={{width: '60px',height:'60px'}} className='mt-6' src={flower3} alt="" />
                      </div>

                      <div>
                         <img style={{width: '60px',height:'60px'}} className='mt-6' src={flower5} alt="" />
                      </div>
                     
                   </div>
                 <div className=''>
                    <img className='w-80 ' style={{height:'312px'}} src={flower6} alt="" />
                 </div>
            </div>
            {/* Image section end */}
            
            <div className='' style={{width:'700px'}}>
                <RoyelAcDc />
            </div>
        </div>
    );
};

export default Royal;