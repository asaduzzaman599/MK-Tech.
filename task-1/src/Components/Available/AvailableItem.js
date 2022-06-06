import React from 'react';

const AvailableItem = ({ item: { Icon, title, text } }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-6'>
            <Icon className="h-20 w-20 text-blue-800 p-4 rounded-full shadow-lg" />
            <p className='font-medium'>{text}</p>
            <button className=' btn-secondary rounded-full py-2 w-4/6 text-white font-bold'>{title}</button>
        </div>
    );
};

export default AvailableItem;