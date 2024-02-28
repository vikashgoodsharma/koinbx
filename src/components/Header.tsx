{/* Here header is converted into a component and being called in the layout file */}
// all the components will be created in components folder
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="p-4 bg-white w-full">
        <nav className="flex items-center justify-between lg:hidden">
        <div className="flex space-x-4">
            <img src="assets/KoinBXLogoHead.svg" className='h-[50px]'/>
            </div>
            <div className='flex space-x-2'>
           <button className='rounded-full bg-[#008000] px-4 h-[30px] self-end text-white'>Register</button>
            <img src="assets/MenuHeader1.svg" className='h-[25px] md:h-[30px] self-center' />
            </div>
            </nav>
     
      <div className="hidden lg:block px-8">
        <nav className="flex items-center justify-between">
          <div className="flex space-x-4">
            <img src="assets/KoinBXLogoHead.svg" className='h-[50px]'/>
            <img src="assets/menu-koinbx.svg" className='h-[25px] self-center'/>
            <ul className="flex space-x-8 self-center">
            <li><a href="#" className="hover:text-gray-300">Markets</a></li>
            <li><a href="#" className="hover:text-gray-300">Fees</a></li>
            <li><a href="#" className="hover:text-gray-300">Trade</a></li>
            <li><a href="#" className="hover:text-gray-300">|</a></li>
            <li><a href="#" className="hover:text-gray-300">List your Crypto</a></li>
          </ul>
            </div>
          <ul className="flex space-x-8">
          <img src="assets/announcement_koinbx.png" className='h-[40px] self-center'/>
          <div className='flex flex-col'>
          <img src="assets/live.png" className='h-[20px] self-end'/>
            <p className='self-center'>Trade Contest</p>
          </div>
           <button className='rounded-full bg-[#008000] px-4 h-[30px] self-end text-white'>Deposit</button>
          <img src="assets/user.png" className='h-[30px] self-end'/>
          <img src="assets/DownloadHeader.svg" className='h-[20px] self-end mb-[5px]'/>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
