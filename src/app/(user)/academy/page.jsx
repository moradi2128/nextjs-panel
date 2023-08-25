import CardAcademy from '@/components/Cards/CardAcademy'
import React from 'react'
import { academyTestData } from '../../../../dummy'
import AcademyAside from './Aside/AcademyAside'
import AcademyPagination from './Pagination/AcademyPagination'



const page = () => {
    return (
        <div className='container'>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 relative">
                {/* === Aside === */}
                <aside className='col-span-1 md:col-span-1 sticky top-0 rounded-lg'>
                    <AcademyAside />
                </aside>
                {/* === Blog list === */}
                <div className='col-span-1 md:col-span-3'>
                    <div className="grid grid-cols-1 me:grid-cols-2 lg:grid-cols-3 gap-5">
                        {(academyTestData || []).map(card => {
                            return <CardAcademy content={card} key={card.id} />
                        })}
                    </div>
                    <AcademyPagination />
                </div>
            </div>
        </div>
    )
}

export default page