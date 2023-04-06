import React from "react"
export const HomePage = () => {
    return (
        <div>
            <h1 className="text-2xl font-medium text-gray-900 m-6">Home Page</h1>
            <a href="/products"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-6">Products</button></a>
        </div>

    )
}