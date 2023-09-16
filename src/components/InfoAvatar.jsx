import { toLocalDateString } from '@/utils/toLocalDate'
import { UserIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'


const RenderDate = (props) => {
    return <span className={`text-gray-400 text-[.6rem] whitespace-nowrap ${props.light ? "text-gray-100" : "text-gray-500 dark:text-gray-400"}`}>{toLocalDateString(props.date)}</span>
}

const InfoAvatar = (props) => {
    const { name, date, url, alt = "Avatar", size = 50, light = false } = props

    return (
        <div className={`flex flex-row gap-3 items-ends `}>
            <div className="avatar">
                <div className="w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mask mask-hexagon flex items-center justify-center ">
                    {url ?
                        <Image src={url} alt={alt} width={size} height={size} />
                        :
                        <UserIcon className={`w-8 h-8 text-gray-500`} />
                    }
                </div>
            </div>
            <div className="flex flex-col justify-around">
                <h3 className={`text-[0.8rem]  font-semibold whitespace-nowrap ${light ? "text-gray-100 " : "text-gray-500 dark:text-gray-300"}`}>{name}</h3>
                {date && <RenderDate date={date} light={light} />}
            </div>
        </div>

    )
}

export default InfoAvatar