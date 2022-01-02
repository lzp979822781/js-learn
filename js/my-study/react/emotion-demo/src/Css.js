import {css} from '@emotion/react';

const styleString = css`
	width: 200px;
	height: 200px;
	background: skyblue
`;

function Css(props) {
    const {className} = props;
	return (
		<div css={styleString} className={className}>
			css working
		</div>
	);
}

export default Css;
