import React from 'react'
import { tagsData } from '../../../../../dummy'
import CardAcademyLayout from '../../../../Layout/CardAcademyLayout'
import AcademyCategories from './AcademyCategories'
import AcademyTags from './AcademyTags'
const AcademyAside = () => {
    return (
        <div className='space-y-4'>
            <CardAcademyLayout title='دسته بندی'>
                <AcademyCategories />
            </CardAcademyLayout>
            <CardAcademyLayout title='تگ ها'>
                <AcademyTags tags={tagsData} />
            </CardAcademyLayout>
        </div>
    )
}

export default AcademyAside