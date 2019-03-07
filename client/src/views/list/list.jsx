import React from 'react'
import { Table } from 'antd'
const { Column } = Table

export default class List extends React.Component {
    state = {
        tableH: [{
            title: '名称',
            dataIndex: 'name',
            key: 'name'
        },{
            title: '大小',
            dataIndex: 'size',
            key: 'size'
        },{
            title: '创建人',
            dataIndex: 'creator',
            key: 'creator'
        },{
            title: '最后修改时间',
            dataIndex: 'lastTime'
        },{

        }],
        data: [{
            key: '1',
            name: '测试文件夹',
            type: 'dir',
            size: '1245682',
            creator: '张三',
            lastTime: '2019-03-09'
        }]
    }
    render() {
        return(
            <Table columns={this.state.tableH} dataSource={this.state.data}>
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <span>
                            <a href="/">Invite {record.lastName}</a>
                            <a href="/">Delete</a>
                        </span>
                    )}
                />
            </Table>
        )
    }
}