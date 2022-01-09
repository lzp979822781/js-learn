import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

function Header(props) {

    const {site: {siteMetadata: {author, title}}} = useStaticQuery(graphql`
        query {
            site {
                id
                siteMetadata {
                    author
                    title
                }
            }
        }
    `);

    return (
        <div>
            <p>{author}</p>
            <p>{title}</p>
        </div>
    );
}

export default Header;