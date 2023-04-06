
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { addProduct, deleteProduct, getAll, updateProduct } from './api/product'
import AdminLayout from './layout/AdminLayout'
import WebLayout from './layout/WebLayout'
import AddProduct from './page/admin/AddProduct'
import Dashboard from './page/admin/Dashboard'
import ProductsManagement from './page/admin/ProductsManagement'
import UpdateProduct from './page/admin/UpdateProduct'
import DetailProduct from './page/DetailProduct'
import HomePage from './page/HomePage'
import ProductsPage from './page/ProductsPage'
import { Iproduct } from './types/interface'

function App() {
  const [products, setProduct] = useState([])

  useEffect(() => {
    getAll()
      .then(({ data }) => setProduct(data))
    console.log(products);
  }, [])

  const onHandleRemove = (id: number) => {
    deleteProduct(id).then(() => setProduct(products.filter((item: Iproduct) => item.id !== id)))
  }

  const onHandleAdd = (product: Iproduct) => {
    addProduct(product)
  }

  const onHandleUpdate = (product: Iproduct) => {
    updateProduct(product)
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebLayout />}>
          <Route index element={< HomePage />} />
          <Route path='products' >
            <Route index element={< ProductsPage products={products} onRemove={onHandleRemove} />} />
            <Route path=':id' element={< DetailProduct products={products} />} />
            <Route />
          </Route>
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='products'>
            <Route index element={< ProductsManagement products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={< AddProduct onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={< UpdateProduct onUpdate={onHandleUpdate} products={products} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
