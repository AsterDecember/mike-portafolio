import React, { Component } from 'react'
import { Layout } from 'antd';
import FooterComponent from './FooterComponent'
const {
  Header, Footer, Sider, Content,
} = Layout;


export default class Home extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <div className='headBanner'>Header</div>
                    <Content>Content</Content>
                    <Footer><FooterComponent /></Footer>
                </Layout>
            </div>
        )
    }
}
