import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProduct = (props) => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [inputValue, setInputValue] = useState({})
    useEffect(() => {
        const curentProduct = props.product.find((item) => item.id == id)
        setProduct(curentProduct)
    })
    const onHandleChange = (e) => {
        const { name, value } = e.target
        setInputValue({ ...inputValue, [name]: value })
    }
    const onHandleSubmit = (e) => {
        e.preventDefault()
        props.onUpdate({...product,...inputValue})
        navigate('/admin/products')
    }
    return (
        <div>
            <form className='m-5' action="" onSubmit={onHandleSubmit}> <h1>Update Product</h1>
                <input className='border border-black block'
                    type="text" name='name' defaultValue={product?.name} placeholder='product name' onChange={onHandleChange} />
                <p>price</p>
                <input className='border border-black block'
                    type="number" name='price' defaultValue={product?.price} onChange={onHandleChange} />
                <button type='submit'>Update Product</button>
            </form>
        </div>
    )
}

export default UpdateProduct