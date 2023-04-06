import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { addProduct, deleteProduct, getAll, updateProduct } from './api/product'
import AddProduct from './page/admin/AddProduct'
import Dashboard from './page/admin/Dashboard'
import ProductManagement from './page/admin/ProductManagement'
import UpdateProduct from './page/admin/UpdateProduct'
import Detail from './page/Detail'
import { HomePage } from './page/HomePage'
import WebsiteLayout from './page/lauouts/WebsiteLayout'
import ProductsPage from './page/Products'
import AdminLayout from './page/lauouts/AdminLayout'


function App() {
  const [products, setProduct] = useState([])
  useEffect(() => {
    // fetch('http://localhost:3000/products')
    //   .then((res) => res.json())
    //   .then(data => setProduct(data))

    getAll()
      .then(({ data }) => setProduct(data))
  }, [])
  const onHandleRemove = (id) => {
    deleteProduct(id).then(() => setProduct(products.filter((item) => item.id !== id)))
  }
  const onHandleAdd = (product) => {
    addProduct(product)
  }
  const onHandleUpdate = (product) => {
    updateProduct(product).then((item) => item.id == product.id ? product : item)
      .then(() => window.location.reload())
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={< WebsiteLayout />}>
          <Route index element={< HomePage />} />
          <Route path='products'>
            <Route index element={<ProductsPage products={products} onRemove={onHandleRemove} />} />
            <Route path=':id' element={<Detail />} />
          </Route>
        </Route>

        <Route path='/admin' element={< AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='products'>
            <Route index element={< ProductManagement products={products} onRemove={onHandleRemove} />} />
          </Route>
        </Route>

        {/* <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage products={products} onRemove={onHandleRemove} />} />
        
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/admin/products' element={<ProductManagement product={products} onRemove={onHandleRemove} />} />
        <Route path='/admin/products/add' element={<AddProduct onAdd={onHandleAdd} />} />
        <Route path='/admin/products/:id/update' element={<UpdateProduct product={products} onUpdate={onHandleUpdate} />} /> */}
      </Routes>
    </div>
  )
}

export default App
