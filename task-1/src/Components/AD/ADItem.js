import React from 'react';

const ADItem = ({ item: { img, title, text, link } }) => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img src={img} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold text-primary">{title}</h1>
                    <p class="py-6">{text}</p>
                    <div className='text-right'>
                        <a href="" className='no-underline text-secondary'>Learn more</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ADItem;