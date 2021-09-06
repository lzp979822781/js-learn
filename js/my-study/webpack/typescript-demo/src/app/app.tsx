import * as React from 'react';
import * as ReactDom from 'react-dom';

const Hello: React.FunctionComponent<{compiler: string, framework: string}> = (props) => {
    return (
        <div>
            <div>{props.compiler}</div>
            <div>{props.framework}</div>
        </div>
    );
};

ReactDom.render(
    <Hello compiler='typescript' framework='React' />,
    document.getElementById('root')
)