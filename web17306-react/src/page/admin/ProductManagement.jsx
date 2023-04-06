import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductManagement = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(props.product)
    }, [props])
    console.log(data);
    const removePrd = (id) => {
        props.onRemove(id)
        // .then(()=>window.location.reload())
    }
    return (
        <div>
            <button><Link to={'/admin/products/add'}>Add New Product</Link></button>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button>
                                        <Link to={`${item.id}/update`}>Update</Link>
                                    </button>
                                    <button onClick={() => removePrd(item.id)}>Remove</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductManagement