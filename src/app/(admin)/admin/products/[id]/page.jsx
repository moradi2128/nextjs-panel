"use client"

import { useParams } from "next/navigation"

const page = () => {
    const params = useParams() // params.id
    return (
        <div>page</div>
    )
}

export default page