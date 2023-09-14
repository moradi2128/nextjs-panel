import Breadcrumbs from '@/components/Breadcrumbs'
import ThumbsGallery from '@/components/Carousel/ThumbsGallery'
import ProductPrice from '@/components/ProductPrice'
import { ProductRating } from '@/components/ProductRating'
import Tags from '@/components/Tags'
import { getProductDetailBySlug, getProducts } from '@/services/productService'
import { RectangleStackIcon, TagIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
export const dynamic = "force-static" // SSG or {cache :"force-cache"}
export const dynamicParams = false

// === product img ===
import img1 from "../../../../../public/assets/images/product/1.jpg"
import img2 from "../../../../../public/assets/images/product/2.jpg"
import img3 from "../../../../../public/assets/images/product/3.jpg"

const ProductDetail = async ({ params }) => {
    const { slug } = params;
    const { product } = await getProductDetailBySlug(slug)
    const BREADCRUMBS = [
        { id: 0, label: "صفحه نخست", href: "/" },
        { id: 1, label: "محصولات ", href: "/products" },
        { id: 2, label: product.title, href: null },
    ]
    const PRODUCT_IMG = [
        {
            id: 0,
            img: img1
        },
        {
            id: 1,
            img: img2
        },
        {
            id: 2,
            img: img3
        },
    ]
    return (
        <div className='space-y-5 container'>
            {/* === Breadcrumbs === */}
            <Breadcrumbs breadcrumbs={BREADCRUMBS} />
            {/* === Product === */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                    <div >
                        {/* {product?.imageLink && <Image
                            src={`${product.imageLink}`}
                            className="hidden rounded-lg grayscale lg:block"
                            alt={product.title}
                            height={400}
                            width={400}
                        />} */}
                        <ThumbsGallery data={PRODUCT_IMG} />
                    </div>

                <div className="space-y-5 ">
                    <div>
                        {/* === Title === */}
                        <div className="truncate text-xl font-medium text-gray-600 dark:text-gray-300 lg:text-2xl">
                            {product.title}
                        </div>
                        {/* === Brand === */}
                        <div className="truncate font-medium text-gray-400">
                            برند :
                            <span>{product.brand}</span>
                        </div>
                    </div>
                    {/* === Rating === */}
                    <div className="flex justify-between items-center">
                        <ProductRating rating={2} />
                    </div>
                    {/* === Description === */}
                    <div className="space-y-4 text-sm text-gray-200">
                        <p className="text-justify">{product.description}</p>
                    </div>
                    <ProductPrice product={product} />
                    <div>
                        {/* === Category === */}
                        {product.category &&
                            <div className='flex gap-2 mb-2'>
                                <span className='text-gray-500 dark:text-gray-300 font-bold '>
                                    <RectangleStackIcon className="w-4 h-4 inline ml-2" />
                                    دسته بندی :</span>
                                <Link href={`/category/${product.category.englishTitle}`} className="text-gray-400">
                                    {product.category.title}
                                </Link>
                            </div>
                        }
                        {/* === Tags === */}
                        {product.tags.length !== 0 &&
                            <div className='flex gap-2'>
                                <span className='text-gray-500 dark:text-gray-300 font-bold '>
                                    <TagIcon className="w-4 h-4 inline ml-2" />
                                    تگ ها :</span>
                                <Tags tags={product.tags} />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail

export async function generateStaticParams() {
    const { products } = await getProducts()
    return products.map((product) => ({
        slug: product.slug
    }))
}


