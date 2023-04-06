import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Iproduct } from '../../types/interface'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input } from 'antd';


interface IFormInput {
  id: number,
  name: string,
  price: number
}
interface IProps {
  onAdd: (product: Iproduct) => void
}

const AddProduct = (props: IProps) => {
  const navigate = useNavigate()
  // const { register, handleSubmit } = useForm<IFormInput>()

  // const onHandleSubmit: SubmitHandler<IFormInput> = (data) => {
  //   props.onAdd(data)

  //   navigate('/admin/products')
  //   window.location.reload()
  // }
  const onFinish = (values: any) => {
    props.onAdd(values);
    navigate('/admin/products')
    window.location.reload()
  };

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log('Failed:', errorInfo);
  // };
  return (
    <div className='mt-5'>
      <h1 className='font-medium mb-[20px]'>Add New Product</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Product name"
          name="name"
          rules={[{ required: true, message: 'Please input your product name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product price"
          name="price"
          rules={[{ required: true, message: 'Please input your price!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AddProduct