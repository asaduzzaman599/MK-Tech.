import React, { useState } from 'react';

const Header = () => {
    const [language, setLanguage] = useState('BN')

    const menuItems = <>
        <li><a href="" className='px-2 font-semibold'>HOME </a></li>
        <li><a href="" className='px-2 font-semibold'>ADVERTISERS</a></li>
        <li><a href="" className='px-2 font-semibold'>PUBLISHERS</a></li>
        <li><a href="" className='px-2 font-semibold'>INFLUENCERS</a></li>
        <li><a href="" className='px-2 font-semibold'>AD FORMATS</a></li>
        <li><a href="" className='px-2 font-semibold'>BLOG</a></li>
        <li><a href="" className='px-2 font-semibold'>CONTACT US</a></li>
    </>
    return (
        <div>
            <div className='flex justify-between items-center px-10 pt-6'>
                <div>
                    <a className='font-bold text-2xl' href='#'>Logo</a>
                </div>
                <div className='font-semibold'>
                    <button className={`btn btn-ghost p-1 m-1 ${language === "BN" ? 'text-success' : ''}`} onClick={() => setLanguage('BN')}>BN</button>
                    /
                    <button className={`btn btn-ghost p-1 m-1 ${language === "EN" ? 'text-success' : ''}`} onClick={() => setLanguage('EN')}>EN</button>
                </div>
            </div>

            <div class="navbar ">
                <div class=" ">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 flex-1">
                            {menuItems}
                        </ul>
                    </div>
                    <div class=" hidden lg:flex w-full">
                        <ul class="menu menu-horizontal p-0 w-full text-sm">
                            {menuItems}
                        </ul>
                    </div>
                </div>

                <div class="ml-auto">

                    <div className='px-2 py-1 rounded-3xl bg-white '>
                        <button className=' px-6 py-2 rounded-3xl font-semibold'>Login</button>
                        <button className='text-base-100 bg-primary px-6 py-2 rounded-3xl font-semibold shadow-xl'>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;