import React from "react";
import {useStaticQuery,Link} from "gatsby";

import {css} from "@emotion/core";

const container = css`
  display: flex;
  height: 45px;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  border-bottom: 1px solid #f7f7f7;
  background: #fefefe;
  justify-content: space-between;
`;

const title = css`
  padding: 36px;
  color: #000;
  text-decoration: none;
`;


const TopBar = (props) => {
  
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
           title 
          }
        }
      }
    `
  )

  return (
    <div css={container}>
      <Link to = {`/`}>
        <span css={title}>{data.site.siteMetadata.title} / {props.subLink}</span>
      </Link>
      <Link to = {`/posts/b3e50deaeb7d4734bf84e15bbf2787c3`}>
        <span css={title}>About</span>
      </Link>
    </div>
  )
}

export default TopBar;

