import React from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { VscBellDot } from 'react-icons/vsc';
import { GrLogout } from 'react-icons/gr';
import img from "../../../../assets/Bappy_Sheikh.jpg"

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a href='#' className=""><span className='text-gray-400'>Products / </span>
Add New Items- Preview</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
      <VscBellDot className='text-2xl'/>
      </label>

      <label tabIndex={0} className="btn btn-ghost btn-circle">
      <AiOutlineMessage className='text-2xl'/>
      </label>
    </div>

    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={img} alt=''/>
        </div>
      </label>
      
    </div>
 
    <label tabIndex={0} className="btn btn-ghost btn-circle">
      <GrLogout className='text-2xl'/>
      </label>
     
  </div>
</div>
        </div>
    );
};

export default Navbar;