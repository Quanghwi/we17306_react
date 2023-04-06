import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Iproduct, Iprops } from "../types/interface"


const ProductsPage = (props: Iprops) => {
  const [data, setData] = useState<Iproduct[]>([])
  useEffect(() => {
    setData(props.products)
  }, [props])
  // console.log(data);
  const RemovePrd = (id: number) => {
    props.onRemove(id)
  }
  return (
    <div>
      <table className="border border border-slate-400 w-full max-w-[1000px] m-auto pr-[20px]">
        <thead>
          <tr>
            <th className="border border-slate-300">Stt</th>
            <th className="border border-slate-300">Name</th>
            <th className="border border-slate-300">Price</th>
            <th className="border border-slate-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => {
              return <tr key={item.id}>
                <td className="border border-slate-300 text-center">{index + 1}</td>
                <td className="border border-slate-300 text-center">{item.name}</td>
                <td className="border border-slate-300 text-center">{item.price}</td>
                <td className="border border-slate-300 text-center p-1">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5">
                    <Link to={`/products/${item.id}`}>Detail</Link>
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => RemovePrd(item.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ProductsPage