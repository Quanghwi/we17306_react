import { Iproduct } from "../types/interface";
import { instance } from "./instance";

const getAll = () => {
    return instance.get('/products');
}
const getOne = (id:number) => {
    return instance.get('/products/' + id);
}
const addProduct = (product:Iproduct) => {
    return instance.post('/products', product);
}
const deleteProduct = (id:number) => {
    return instance.delete('/products/' + id);
}
const updateProduct = (product:Iproduct) => {
    return instance.put('/products/' + product.id, product)
}
export { getAll, getOne, deleteProduct, addProduct, updateProduct }
