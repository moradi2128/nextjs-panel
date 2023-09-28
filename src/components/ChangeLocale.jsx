'use client';

import React from 'react';
import { useRouter, useParams, useSelectedLayoutSegments } from 'next/navigation';
import { LanguageIcon } from '@heroicons/react/24/outline';
import IconButton from '@/common/IconButton';
// === Flags img ===
import iran from "@/public/assets/images/flags/iran.png"
import english from "@/public/assets/images/flags/english.png"
import Image from 'next/image';
import Dropdown from '@/common/Dropdown/Dropdown';
import DropdownContent from '@/common/Dropdown/DropdownContent';
const LAN_DATA = [
    {
        id: 0,
        label: "فارسی",
        value: "fa",
        FlagImg: iran
    },
    {
        id: 1,
        label: "English",
        value: "en",
        FlagImg: english
    },
]
const ChangeLocale = ({ dir }) => {
    const router = useRouter();
    const params = useParams();
    const urlSegments = useSelectedLayoutSegments();

    const handleLocaleChange = event => {
        // const newLocale = event.target.value;
        const newLocale = event;

        // This is used by the Header component which is used in `app/[locale]/layout.tsx` file,
        // urlSegments will contain the segments after the locale.
        // We replace the URL with the new locale and the rest of the segments.
        router.push(`/${newLocale}/${urlSegments.join('/')}`);
    };

    return (
        // <div>
        //     <select className="select select-bordered w-full max-w-xs " onChange={handleLocaleChange} value={params.locale}>
        //         <option value="en" className='bg-red-100 p-5'>English</option>
        //         <option value="fa">فارسی</option>
        //     </select>
        // </div >
        <Dropdown>
            <IconButton className="px-3" tabIndex={0} >
                <LanguageIcon className="w-5 h-5 text-slate-500 dark:text-slate-300" />
                {/* <ChevronDownIcon className='w-3 h-3 text-slate-500 dark:text-slate-300' /> */}
            </IconButton>
            <DropdownContent
                tabIndex={0}
                dir={dir}
                className="w-36 mt-2"
            >
                {LAN_DATA.map((lan) => {
                    return <li key={lan.id} className='text-[12px] font-bold cursor-pointer mb-2 pb-2 last:pb-0 last:mb-0 border-b dark:border-b-slate-700 last:border-b-0' onClick={() => handleLocaleChange(lan.value)} >
                        <span className="flex flex-row items-center gap-2">
                            <Image src={lan.FlagImg} className="w-5 h-5" />
                            <span> {lan.label}</span>
                        </span>

                    </li>
                })}
            </DropdownContent>
        </Dropdown>
    );
};

export default ChangeLocale;