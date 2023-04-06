export interface Iproduct {
    id: number,
    name: string,
    price: number
}

export interface Iprops {
    products: Iproduct[],
    onRemove: (id: number) => void
}