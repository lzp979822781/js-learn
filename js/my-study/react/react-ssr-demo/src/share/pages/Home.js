import React from 'react';

function Home() {

    const onClick = () => {
        console.log("点击事件");
    };
    return (
        <div onClick={onClick}>
            Home working
        </div>
    );
}

export default Home;