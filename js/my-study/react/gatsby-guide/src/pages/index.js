import React from "react";
import { Link, graphql } from 'gatsby';

export default function Home(props) {
	console.log('props', props);
	const {data: {site: {siteMetadata: {author, title}}}} = props;
	return (
		<div>
			Hello world!
			<Link to='/pages/zhangsan'>张三</Link>
			<Link to='/pages/lisi'>李四</Link>
			<div>{author}</div>
			<div>{title}</div>
		</div>
	);
}

export const query = graphql`
	query MyQuery {
		site {
			id
			siteMetadata {
				author
				title
			}
		}
	}
`;
