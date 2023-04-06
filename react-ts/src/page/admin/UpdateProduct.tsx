import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Iproduct } from '../../types/interface';

interface IFormInput {
  id: number;
  name: string;
  price: number;
}

interface IProps {
  products: Iproduct[];
  onUpdate: (product: Iproduct) => void;
}

const UpdateProductPage = (props: IProps) => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const { id } = useParams();

  useEffect(() => {
    const currentProduct = props.products.find((item) => item.id === Number(id));
    reset(currentProduct);
  }, [props, id]);

  const onHandleSubmit: SubmitHandler<IFormInput> = (data) => {
    props.onUpdate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <input className="border-separate border border-slate-400 py-2 px-4" type="text" {...register('name')} />
        <input className="border-separate border border-slate-400 py-2 px-4" type="number" {...register('price')} />
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" type="submit">Update Product</button>
      </form>
    </div>

  );
};

export default UpdateProductPage;