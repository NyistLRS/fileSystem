import React from 'react'
import { Layout,Breadcrumb, Icon } from 'antd'
import RouterView from '../../../routers'
const { Content } = Layout

export default class AppMain extends React.Component {
    state = {
        list: [
            {
                name: 'fileSystem'
            },{
                name: 'react'
            }
        ]
    }
    render() {
        return (
            <Content style={{ margin: '0 16px', padding: '10px 0' }}>
                <div className="breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Item>root</Breadcrumb.Item>
                        {
                            this.state.list.map( res => (
                                <Breadcrumb.Item >{res.name}</Breadcrumb.Item>
                            ))
                        }
                    </Breadcrumb>
                    <div className="swap">
                        <Icon type="bars"></Icon>
                        <Icon type="appstore"></Icon>
                    </div>
                </div>
                <div style={{ minHeight: '100%' }}>
                    <RouterView />
                </div>
            </Content>
        )
    }
}