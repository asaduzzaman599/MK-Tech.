import React from 'react';
import SummaryItem from './SummaryItem';

const BusinessSummary = () => {
    const items = [
        { id: 1, title: '1 BN', text: "Daily Impressions", cssStyle: " text-white border-dotted border-2 border-white" },
        { id: 2, title: '$500K', text: "Paid", cssStyle: "text-secondary bg-white" },
        { id: 3, title: '8K', text: "Global Publishers", cssStyle: "text-white bg-primary" },
    ]
    return (
        <div className='my-8 bg-secondary'>
            <div className='grid md:grid-cols-3 gap-10 container mx-auto p-20'>
                {
                    items.map(item => <SummaryItem item={item} key={item.id}></SummaryItem>)
                }
            </div>
        </div>
    );
};

export default BusinessSummary;