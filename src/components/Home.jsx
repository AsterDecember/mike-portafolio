import React, { Component } from 'react'
import { Layout, Tabs } from 'antd';
import FooterComponent from './FooterComponent'
import AboutComponent from './AboutComponent'
import EventsComponent from './EventsComponent'
import ProyectsComponent from './ProyectsComponent'
import HeaderComponent from './HeaderComponent'
import Particles from './Particles'

const styles = {
    root: {
        fontFamily: "sans-serif",
        textAlign: "center",
        height: "100%",
        background: "#222",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
};

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
                <div style={styles.root}>
                    <Particles />
                </div>
                <Layout>

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
