"use client"
import ProductFilter from './ProductFilter'
import ProductSort from './ProductSort'
import SearchFilter from './SearchFilter'
const CategorySlider = ({ categories }) => {

    return (
        <div className='col-span-5 md:col-span-1 grid grid-cols-4 gap-10 items-center md:items-start'>
            <ProductFilter categories={categories} />
            <ProductSort />
        </div>
    )
}

export default CategorySlider