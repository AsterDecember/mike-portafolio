import React, { Component } from 'react'
import { Layout, Tabs } from 'antd';
import FooterComponent from './FooterComponent'
import AboutComponent from './AboutComponent'
import EventsComponent from './EventsComponent'
import ProyectsComponent from './ProyectsComponent'
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
                            <TabPane tab="Proyects" key="3">
                                <h2>Proyects</h2>
                                <ProyectsComponent />
                            </TabPane>
                        </Tabs>
                    </Content>
                    <Footer><FooterComponent /></Footer>
                </Layout>
            </div >
        )
    }
}
