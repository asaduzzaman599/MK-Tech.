import React from 'react';
import SectionTitle from '../SectionTitle';
import { BeakerIcon, PaperAirplaneIcon, SpeakerphoneIcon, StatusOnlineIcon } from '@heroicons/react/solid'
import AvailableItem from './AvailableItem';

const Available = () => {
    const items = [
        { id: 1, title: "Hello 1", text: "Text 1", Icon: SpeakerphoneIcon },
        { id: 2, title: "Hello 2", text: "Text 2", Icon: PaperAirplaneIcon },
        { id: 3, title: "Hello 3", text: "Text 3", Icon: StatusOnlineIcon },
    ]
    return (
        <section>
            <SectionTitle>AVAILABLE FOR EVERYONE</SectionTitle>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, sint.</h3>

            <div className='grid md:grid-cols-3 gap-10'>
                {
                    items.map(item => <AvailableItem key={item.id} item={item}></AvailableItem>)
                }

            </div>
        </section>
    );
};

export default Available;