import React from 'react'

const ResentSalesSkeleton = () => {
    return (
        <li className='animate-pulse flex flex-row justify-between items-center mb-3'>
            <div className='flex flex-row gap-3 items-center'>
                <div className="avatar">
                    <svg className="w-14 h-1w-14 text-gray-200" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                </div>
                <div>
                    <div className="bg-gray-200 w-16 h-3 mb-2 rounded-lg" />
                    <div className='bg-gray-200 w-10 h-2 rounded-lg' />
                </div>
            </div>
            <p className="bg-gray-200 w-20 h-3 rounded-lg" />
        </li>
    )
}

export default ResentSalesSkeleton