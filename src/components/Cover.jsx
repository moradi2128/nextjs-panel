import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import BannerSvg from './BannerSvg/BannerSvg'


const Cover = ({ children, background, alt = "", hasParallax = false, containerStyle }) => {
    return (
        <div className={clsx("text-white min-h-[600px] relative flex justify-center items-center z-0", containerStyle)}>
            {!background && <div className='absolute inset-0 blur-xl bg-gradient-to-t from-primary/0 to-secondary/10 overflow-hidden'>
                <div className='absolute bg-primary-900/20 w-[100px] h-[100px] rounded-full top-10 right-10' />
                <div className='absolute bg-primary-900/30 w-[90px] h-[90px] rounded-full bottom-10 right-56' />
                <div className='absolute bg-primary-900/20 w-[100px] h-[100px] rounded-full -top-5 left-20' />
                <div className='absolute bg-primary-900/10 w-[100px] h-[100px] rounded-full top-40 left-44' />
            </div>}


            {(background) &&
                <Image alt={alt} src={background || featuredImage} className='mix-blend-soft-light' />
            }
            <BannerSvg />
            <div className='container z-10'>{children}</div>
        </div>
    )
}

export default Cover
