import {css} from '@emotion/react';
import Css from './Css';

const styleString = css`
	width: 200px;
	height: 200px;
	background: pink
`;

function App() {
	return (
		<div>
			<Css css={styleString} />
		</div>
	);
}

export default App;
