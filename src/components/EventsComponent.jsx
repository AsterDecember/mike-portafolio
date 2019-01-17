import React from 'react';
import { Timeline, Avatar } from 'antd';

const EventsComponent = () => {
    return (
        <div className="eventsDiv">
        <h2>Relevant Events</h2>
            <Timeline  mode="alternate">
                <Timeline.Item>
                    <p className="pTitle"><Avatar shape="square" src="https://joseramonsahuquillo.com/wp-content/uploads/2016/10/ironhack.png" />IronHack November 2018 - January 2019</p>
                    <p> Full Stack Web Developer MERN Stack</p>
                </Timeline.Item>
                <Timeline.Item>
                    <p className="pTitle"><Avatar shape="square" src="https://wizeline-website-assets.s3.amazonaws.com/wp-content/uploads/sites/8/2018/03/02144352/academy-color-transparent-283x300.png" /> React JS Certification July 2018</p>
                    <p>Wizeline Academy & ITESM</p>
                </Timeline.Item>
                <Timeline.Item>
                    <p className="pTitle"><Avatar shape="square" src="https://wizeline-website-assets.s3.amazonaws.com/wp-content/uploads/sites/8/2018/03/02144352/academy-color-transparent-283x300.png" /> Vue JS Workshop January 2018</p>
                    <p>Wizeline Academy</p>
                </Timeline.Item>
                <Timeline.Item>
                    <p className="pTitle"><Avatar shape="square" src="https://miro.medium.com/max/2400/0*pEtP2hlsUORSm04h.png" /> MLH MXHacks 4  2016</p>
                    <p>Tec de Monterrey campus Santa Fe</p>
                </Timeline.Item>
                <Timeline.Item>
                    <p className="pTitle"><Avatar shape="square" src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/072010/campus-party.png?itok=wSlUcOco" /> Campus Party Mexico  2016, 2015, 2013</p>
                    <p>Zapopan Guadalajara, CDMX</p>
                </Timeline.Item>
        
            </Timeline>
        </div>
    );
}

export default EventsComponent;
