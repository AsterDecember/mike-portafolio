import React from 'react';
import { Card, Button } from 'antd';
const { Meta } = Card;

const ProyectsComponent = () => {
    return (
        <div className="proyectsDiv">
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://i.imgur.com/AU02tkI.png" />}
            >
                <Meta
                    title="What To Do"
                    description="Web aplication who helps you to find interesting events near CDMX"
                />
                <a href="https://github.com/AsterDecember/whatToDo"><Button type="primary" block>Git</Button></a>
                <a href="https://floating-plains-96602.herokuapp.com/"><Button type="primary" block>View</Button></a>
            </Card>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://i.imgur.com/KM0zWlX.png" />}
            >
                <Meta
                    title="Ran_Dj"
                    description="Web aplication that creates a new playlist based on a song or artist that you give."
                />
                <a href="https://github.com/AsterDecember/iron-spotify"><Button type="primary" block>Git</Button></a>
                <a href="https://ran-dj.herokuapp.com/"><Button type="primary" block>View</Button></a>
            </Card>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://pbs.twimg.com/profile_images/699676239620083713/WCUM0RqH_400x400.jpg" />}
            >
                <Meta
                    title="Gyphi Clone"
                    description="First proyect using React
                    React Styled Components, Basic CSS"
                />
                <a href="https://github.com/AsterDecember/react-series-challenge"><Button type="primary" block>Git</Button></a>
                <a href="https://front-final.firebaseapp.com/allElements?fbclid=IwAR2rRdRC4mYly1f78CMs4ea1nhWnN6ZOM0CdzMHqnNa3FGOht_MlgYC9KI8"><Button type="primary" block>View</Button></a>
            </Card>
        </div>
    );
}

export default ProyectsComponent;
