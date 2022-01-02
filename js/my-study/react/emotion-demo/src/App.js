import {css} from '@emotion/react';

const styleObj = {
	width: 200,
	height: 200,
	background: 'skyblue'
};

const styleString = css`
	width: 200px;
	height: 200px;
	background: skyblue
`;

const style = css({
	width: 200,
	height: 200,
	background: 'pink'
})


function App() {
	return (
		<div css={style}>
			app working
		</div>
	);
}

export default App;
