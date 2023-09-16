"use client"
import clsxm from '@/lib/clsxm'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
const PAGINATION_SIZE = 10
const Pagination = ({ totalPage, onPageClick, pageLocation }) => {
    return (
        <ol className="flex justify-center gap-4 text-xs font-medium my-8">
            {/* === prev Pagination  === */}
            <li>
                <div
                    onClick={() => pageLocation !== 1 && onPageClick(pageLocation - 1)}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 ${pageLocation !== 1 ? "cursor-pointer" : " color-gray-100"}`}
                >
                    <span className="sr-only">صفحه قفل</span>
                    <ChevronRightIcon className={`h-3 w-3 ${pageLocation !== 1  ? "text-gray-900 dark:text-gray-600" : "text-gray-400 dark:text-gray-300"} `} />
                </div>
            </li>
            {/* === Pagination items === */}
            {
                Array.from({ length: totalPage }).map((_, i) =>
                    <li onClick={() => pageLocation !== (i + 1) && onPageClick(i + 1)} key={i}>
                        <span
                            className={clsxm(`flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 text-center cursor-pointer `,
                                `h-10 w-10 `,
                                ` ${pageLocation == (i + 1) ? "border-primary-900 bg-primary-900 text-white cursor-default" : ""}`
                            )}
                        >
                            {i + 1}
                        </span>
                    </li>
                )
            }
            {/* === next Pagination  === */}
            <li>
                <div
                    onClick={() => pageLocation !== totalPage && onPageClick(Number(pageLocation + 1))}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 ${pageLocation !== totalPage ? "cursor-pointer" : ""}`}
                >
                    <span className="sr-only">صفحه بعد</span>
                    <ChevronLeftIcon className={`h-3 w-3 ${pageLocation !== totalPage ? "text-gray-900 dark:text-gray-600" : "text-gray-400 dark:text-gray-300"} `} />
                </div>
            </li>
        </ol >

    )
}

export default Pagination
