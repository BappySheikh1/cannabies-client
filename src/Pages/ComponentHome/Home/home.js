import React from 'react';
import Navbar from './Navbar/Navbar';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';

const home = () => {
    return (
        <div>
             <Navbar />
             <Section1 />
             <Section2 />
        </div>
    );
};

export default home;