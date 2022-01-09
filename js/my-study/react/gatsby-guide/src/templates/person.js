import React from 'react';

function Person(props) {
    const {pageContext: {name, age}} = props;
    return (
        <div>
            <span>{name}</span>
            <span>{age}</span>
        </div>
    );
}

export default Person;