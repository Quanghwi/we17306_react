import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailProduct = (props) => {
    const { id } = useParams()
    const currentProduct = props.products.find((item)=>item.id == id)

    return (
        <div className='w-full max-w-[100px] m-auto'>
            <p>Tên sản phẩm</p>
            <p className='font-medium'>{currentProduct?.name}</p>
            <p className='text-red-600'>{currentProduct.price}đ</p>
        </div>
    )
}

export default DetailProduct