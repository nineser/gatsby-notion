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

const notionLink = "https://www.notion.so/laijunjie/07b3b0605b01406782dd2fd74742992a?v=c912183e7aa54e4ca27b5a6d9e95a6d9"


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
      <Link to = {`/`}>
        <span css={title}>About</span>
      </Link>
    </div>
  )
}

export default TopBar;

