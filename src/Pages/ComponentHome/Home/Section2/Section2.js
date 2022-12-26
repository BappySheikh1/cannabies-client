import React from 'react';
import Auction from './main/Auction/Auction';
import Header from './main/Header/Header';
import Insights from './main/Insights/Insights';

const Section2 = () => {
    return (
        <div className='bg-white mt-1 rounded-lg p-2'>
            <Header />
            <hr className='my-2 '/>
            <div>
                <div>
                      <Auction />
                </div>

                <div>
                     <Insights />
                </div>
            </div>
        </div>
    );
};

export default Section2;