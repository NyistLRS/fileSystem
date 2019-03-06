import React from 'react'
import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout
// const SubMenu = Menu.SubMenu
export default class SlideNav extends React.Component {
    render() {
        return (
            <Sider collapsible collapsed={this.props.collapsed} trigger={null}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Icon type="home" />
                        <span>全部</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="folder" />
                        <span>文件夹</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="file" />
                        <span>文件</span>
                    </Menu.Item>
                    {/* <SubMenu key="sub1" title={<span><Icon type="setting" /><span>系统设置</span></span>} >
                        <Menu.Item key="3">主题设置</Menu.Item>
                        <Menu.Item key="4">权限配置</Menu.Item>
                        <Menu.Item key="5">日志管理</Menu.Item>
                    </SubMenu> */}
                    <Menu.Item key="4">
                        <Icon type="picture" />
                        <span>图片</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

