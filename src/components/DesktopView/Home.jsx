import React from 'react'
import { CgDanger } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import MenuMessage from './MenuMessage';

const Home = () => {
    const singleConversations = useSelector(
      (state) => state.conversationData.single_conversations
    );

    console.log(singleConversations);

    return (
        <div>
            {singleConversations?.length > 0 ? (
                singleConversations?.map((room) => {
                return <MenuMessage key={room.id} room={room}/>;
                })) : (
                <span className='flex items-center justify-start gap-2 px-2'>
                    <CgDanger fontSize={20} className="text-red-500"/>
                    <p className='text-red-500 font-popins text-sm'>No conversation found</p>
                </span>
                )
            }
        </div>
    )
}

export default Home