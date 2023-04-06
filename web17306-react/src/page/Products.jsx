import React, { useEffect, useState } from "react"

const ProductsPage = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        setData(props.products)
    }, [props])

    const removePrd = (id) => {
        // fetch('http://localhost:3000/products/' + id, {
        //     method: "DELETE"
        // })
        props.onRemove(id)
            // .then(() => setData(data.filter((item) => item.id != id)))
    }

    return (
        <div>{
            data.map((item) => {
                return <div key={item.id}>
                    <a href={`/products/${item.id}`} className="inline-block"><h3 className="text-2xl font-medium text-gray-900 m-6">{item.name}</h3></a>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-6"
                        onClick={() => removePrd(item.id)}>Remove
                    </button>
                </div>
            })
        }
        </div>
    )
}

export default ProductsPage