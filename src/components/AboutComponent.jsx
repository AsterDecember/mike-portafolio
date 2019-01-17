import React from 'react';
import { Carousel, Card } from 'antd';

const AboutComponent = () => {
    return (
        <div>
            <div className="aboutTitle">
                Computing science engineer, immersed in functional programming & MVC, full stack developer in Javascript Node JS & React JS; Interested in js technologies & data science
            </div>
            <div> <h2>Principal Stack</h2>
                <Carousel autoplay>
                    <div className="imgBckg js"><h3>Javascript</h3></div>
                    <div className="imgBckg react"><h3>React Js</h3></div>
                    <div className="imgBckg node"><h3>Node js</h3></div>
                    <div className="imgBckg git"><h3>Git</h3></div>
                </Carousel>
            </div>
        </div>
    );
}

export default AboutComponent;
