import React, { Component } from 'react'
import { Layout, Tabs } from 'antd';
import FooterComponent from './FooterComponent'
import AboutComponent from './AboutComponent'
import EventsComponent from './EventsComponent'
const {
     Footer, Content,
} = Layout;
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

export default class Home extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <div className='headBanner'>Header</div>
                    <Content>
                        <Tabs defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="About Me" key="1"><AboutComponent /></TabPane>
                            <TabPane tab="Events" key="2"><EventsComponent /></TabPane>
                            <TabPane tab="Proyects" key="3">Content of Tab Pane 3</TabPane>
                        </Tabs>
                    </Content>
                <Footer><FooterComponent /></Footer>
                </Layout>
            </div >
        )
    }
}
