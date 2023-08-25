import clsxm from '@/lib/clsxm'
import React from 'react'

const StateSkeleton = ({ horizontal = false, returns }) => {
    return (
        <div className='animate-pulse p-4 shadow-card rounded-3xl'>
            <div className="flex flex-row items-center gap-3">
                {
                    returns && <div className="radial-progress border-6 border-gray-400 min-w-[6rem]" style={{ "--value": returns, "--size": "6rem", "--thickness": "4px", }}></div>
                }
                <div>
                    <div className={`${horizontal ? "flex flex-col-reverse" : "block"}`}>
                        <div className={clsxm("flex flex-row gap-4  items-center", horizontal ? "mb-2" : "mb-4")}>
                            <div className="p-7 rounded-2xl border-2 border-gray-200 " />
                            <div className="flex flex-row gap-3 items-center">
                                <div className={clsxm("rounded-full bg-gray-200 w-[25px] h-[25px] flex justify-center items-center")} />
                                <span className={clsxm("font-bold text-md bg-gray-200 w-14 h-4 rounded-lg")} />
                            </div>
                        </div>
                        <div className="rounded-lg bg-gray-200 w-24 h-4 mb-4" />
                    </div>
                    <div className="rounded-lg bg-gray-200 w-36 h-4 mb-2" />
                    <div className="bg-gray-200 w-60 h-2 rounded-lg" />
                </div>
            </div>
        </div>
    )
}

export default StateSkeleton