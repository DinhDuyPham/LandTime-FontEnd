import React from 'react';

const HomeSectionCard = () => {
    return (
        <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-[15rem] mx-3 p-2'>
            <div className='h-[13rem] w-full p-2'>
                <img
                    className="object-cover  w-full h-full"
                    src="https://images.unsplash.com/photo-1695345272166-4efd76dd7a21?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="img"
                />
            </div>
            <div className='p-4'>
                <h3 className='text-lg font-medium text-gray-900'>Nofilter</h3>
                <p className='mt-2 text-sm text-gray-500'>Men solid pure cotton straight kurta</p>
            </div>
        </div>
    );
}

export default HomeSectionCard;
