import React from 'react'

const Message = (props) => {
    const side = props.side
    return (
        side == 'left' ? (
            <div class="flex items-end justify-start">
                <img
                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                    class="object-cover h-7 w-7 rounded-full"
                    alt=""
                />
                <div class="ml-2 py-3 px-4 bg-[#343145] rounded-br-xl rounded-tr-xl rounded-tl-xl text-white text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at
                    praesentium, aut ullam delectus odio error sit rem.
                </div>
            </div>
        ) : (
            <div class="flex items-end justify-end">
                <div class="mr-2 py-3 px-4 bg-gradient-to-l from-teal-600 to-teal-700 rounded-bl-xl rounded-tl-xl rounded-tr-xl text-white text-sm">
                    Welcome to group everyone !
                </div>
                {/* <img
                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                    class="object-cover h-8 w-8 rounded-full"
                    alt=""
                /> */}
            </div>
        )
    );
}

export default Message