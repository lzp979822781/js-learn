import {Button} from 'antd';
import {css, keyframes} from '@emotion/react';
import styled from '@emotion/styled';
import {Global} from '@emotion/react';

const btnStyle = css`
    color: red;
`;

const styleString = css`
	width: 200px;
	height: 200px;
	background: pink
`;

const StyledButton = styled.button({
    width: 100,
    height: 30
}, props => ({
    color: props.colors
}));

const Container = styled.div({
    width: 1000,
    background: 'pink',
    margin: '0 auto'
}, props => ({
    width: props.w,
    background: props.bgColor
}));

function Demo(props) {
    const {className} = props;
    return (
        <div className={className}>
            Demo
            <a>Demo 中的a标记</a>
        </div>
    );
}

const Fancy = styled(Demo)`
    color: white;
    background: tomato;
`;

/* const Child = styled.div`
    color: red;
`;

const Parent = styled.div`
    ${Child} {
        color: green;
    }
`; */
const Child = styled.div({
    color: 'red'
});

const Parent = styled.div({
    // 只能修改styled包装的子组件
    [Child]: {
        color: 'yellow'
    }
});

const base = css`
    background: tomato;
    color: white;
`;

// 后面的样式覆盖前面的
const danger = css`
    background: black;
    color: red;
`;

// 全局样式
const styles = css`
    body {
        margin: 0;
    }

    a {
        text-decoration: none;
        color: red;
    }
`;

// 动画实例
const move = keyframes`
    0% {
        left: 0;
        top: 0;
        background: skyblue;
    }

    100% {
        left: 600px;
        top: 300px;
        background: tomato;
    }
`;
const box = css`
    position: absolute;
    width: 100px;
    height: 100px;
    animation: ${move} 2s ease infinite alternate;
`;

const getAppTheme = props => css`
    color: ${props.colors.primary}
`;

function App(props) {
	return (
		<div css={getAppTheme}>
            <Global styles={styles} />
            <Container w={1600} bgColor='skyblue'>
                <StyledButton>我是按钮</StyledButton>
                <Button type='primary'>antd button</Button>
            </Container>
            <Fancy />
            <Child>orgin child</Child>
            <Parent>
                <Child>parent child</Child>
            </Parent>
            <button css={[base, danger]}>多个样式设置</button>

            {/* 全局样式 */}
            <div>
                <a>全局样式</a>
                <Demo />
            </div>
            主题测试
		</div>
	);
}

export default App;
