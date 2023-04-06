import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Detail = () => {
    const {id} = useParams()
    const [prd, setPrd] = useState({})
    // const [data,setData] = useState({})  
    useEffect(() => {
        fetch('http://localhost:3000/products/' + id)
            .then((res) => res.json())
            .then((data) => setPrd(data))
    }, [])
    return (
        <div>
            <p>Tên sp</p>
            <p>{prd.name}</p>
        </div>
    )
}

export default Detail