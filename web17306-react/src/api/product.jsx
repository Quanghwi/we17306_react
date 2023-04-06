import { instance } from "./instance";
const getAll = () => {
    return instance.get('/products');
}
const getOne = (id) => {
    return instance.get('/products/' + id);
}
const addProduct = (product) => {
    return instance.post('/products', product);
}
const deleteProduct = (id) => {
    return instance.delete('/products/' + id);
}
const updateProduct = (product) => {
    return instance.put('/products/' + product.id, product)
}
export { getAll, getOne, deleteProduct, addProduct, updateProduct }
