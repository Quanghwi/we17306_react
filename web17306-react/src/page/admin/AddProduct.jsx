import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = (props) => {
  const navigate = useNavigate()
  const [inputValue, setinputValue] = useState()

  const onHandleChange = (e) => {
    console.log(e.target.value);
    // setinputValue({ name: e.target.value })
    // const name = e.target.name
    // const value = e.target.value
    const {name , value} = e.target // lấy ra name và value của input
    console.log(name,value);
    setinputValue({ ...inputValue, [name]: value }) // gán giá trị cho state
  }

  const onHandleSubmit = (e) => {
    e.preventDefault()
    console.log(inputValue);
    props.onAdd(inputValue)// gọi hàm onAdd từ props
    navigate('/admin/products') // chuyển về trang /admin/products

  }

  return (
    <div>

      <form className='m-5' action="" onSubmit={onHandleSubmit}> <h1>Add Product</h1>
        <input className='border border-black block' type="text" name='name' placeholder='product name' onChange={onHandleChange} />
        <p>price</p>
        <input className='border border-black block' type="number" name='price' onChange={onHandleChange} />
        <button type='submit'>Add New Product</button>
      </form>
    </div>
  )
}

export default AddProduct