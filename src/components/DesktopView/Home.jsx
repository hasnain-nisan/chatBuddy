import React, { useEffect, useState } from 'react'
import { CgDanger } from 'react-icons/cg';
import { IoLogoIonitron } from 'react-icons/io';
import { useSelector } from 'react-redux';
import MenuMessage from './MenuMessage';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const menu = useSelector((state) => state.menuData.selectedMenu);
    const singleConversations = useSelector(
      (state) => state.conversationData.single_conversations
    );
    const addModalOpen = useSelector((state) => state.menuData.addModalOpen)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [menu, addModalOpen])

    return (
        loading ? (
            <div className='w-full flex items-start justify-center mt-10'>
                <span className="flex items-center justify-center gap-3 animate-ping">
                    <IoLogoIonitron
                        className="group-hover:text-teal-300 text-teal-400" 
                    />
                    <h1 className="group-hover:text-teal-300 text-sm font-popins font-bold text-teal-500">
                        Loading...
                    </h1>
                </span>
            </div>
        ) : (
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
    )
}

export default Home