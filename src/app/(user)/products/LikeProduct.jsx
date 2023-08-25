"use client"
import { likeProduct } from "@/services/productService"
import { HeartIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"

const LikeProduct = ({ product }) => {
    const router = useRouter()
    const likeHandler = async () => {
        try {
            const { message } = await likeProduct(product._id)
            toast.success(message)
            router.refresh()
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }
    return (
        // <button onClick={likeHandler} className="w-[45px] h- bg-red-50 hover:bg-red-100 hover:shadow-light">{product.isLiked ?
        <button onClick={likeHandler} className="p-2 pl-0 group">{product.isLiked ?
            <HeartIcon className="w-5 h-5 fill-red-500 stroke-red-400" />
            :
            <HeartIcon className="w-5 h-5 text-red-500 group-hover:fill-red-200" />
        }</button>
    )
}

export default LikeProduct