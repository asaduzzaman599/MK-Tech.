import React from 'react';

const SummaryItem = ({ item: { title, text, cssStyle } }) => {
    return (
        <div className={`h-60 w-60 flex items-center justify-center flex-col rounded-full ${cssStyle}`}>
            <h3 className='text-3xl font-semibold'>{title}+</h3>
            <p>{text}</p>

        </div>
    );
};

export default SummaryItem;