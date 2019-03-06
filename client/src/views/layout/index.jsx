import React from 'react'
import { Layout } from 'antd'
import { SlideNav, MyHeader, AppMain } from './component'
import './index.scss'

export default class LayoutMain extends React.Component {
    state = {
        collapsed: false
    }
    handleStatus = (val) => {
        console.log(val)
        this.setState({
            collapsed: val
        })
    }
    render() {
        return (
            < Layout style = {{ minHeight: '100vh' }}>
                <SlideNav collapsed={this.state.collapsed}></SlideNav>
                <Layout>
                    <MyHeader collapsed={this.state.collapsed} handleStatus={this.handleStatus.bind(this)}></MyHeader>
                    <AppMain></AppMain>
                </Layout>
            </Layout >
        )
    }
}