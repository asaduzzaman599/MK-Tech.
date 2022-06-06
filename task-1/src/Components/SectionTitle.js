import React from 'react';

const SectionTitle = ({ children }) => {
    return (
        <div className='flex items-center my-16'>
            <div className='flex-1 border-b-2 border-dotted border-neutral'></div>
            <h3 className='text-xl text-secondary font-semibold mx-10'>{children}
            </h3>
            <div className='flex-1 border-b-2 border-dotted border-neutral'></div>
        </div>
    );
};

export default SectionTitle;