import React from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Iprops } from '../../types/interface';
interface DataType {
    key: string | number;
    name: string;
    price: number;
}
const ProductManagementPage = (props: Iprops) => {
    const removeProduct = (id: number) => {
        props.onRemove(id)
    }

    const data: DataType[] = props.products.map(item => {
        return {
            key: item.id,
            name: item.name,
            price: item.price
        }
    })


    const columns: ColumnsType<DataType> = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Product Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                // console.log(record.key)

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeProduct(record.key)}>Remove</Button>
                </Space>
            ),
        },
    ];

    return <Table columns={columns} dataSource={data} pagination={{ pageSize: 10, showQuickJumper: true }} />
}

export default ProductManagementPage