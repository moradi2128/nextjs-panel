import { BellIcon } from '@heroicons/react/24/outline'
import React from 'react'

const PanelAdminHeaderSkeleton = () => {
  return (
    <div role="status" className='mt-1 mb-6 flex flex-row justify-between animate-pulse'>
      <div>
        <div className="w-32 h-4 bg-gray-300 rounded-full mb-2.5"></div>
        <div className="w-24 h-2 bg-gray-200 rounded-full "></div>
      </div>
      <div className='flex flex-row gap-3'>
        <div className="w-[45px] h-[45px] border-2 border-gray-200 rounded-xl center">
          <BellIcon className="w-5 h-5 text-gray-200" />
        </div>
        <svg className="w-12 h-12 mr-2 text-gray-200" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
      </div>
    </div>
  )
}

export default PanelAdminHeaderSkeleton