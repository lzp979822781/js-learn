import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

    const onClick = () => {
        console.log("点击事件");
    };
    return (
        <div onClick={onClick}>
            Home working
            <Link to='/list'>jump to list</Link>
        </div>
    );
}

export default Home;