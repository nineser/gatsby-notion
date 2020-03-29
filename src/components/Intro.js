
import React from "react"
import {useStaticQuery,graphql} from "gatsby"
import { css } from "@emotion/core"

const headPic = "https://www.laijunjie.com/static/headPic-a2980019266e83dc4beabf766b422012.jpg"

const container = css`
  max-width: 85%;
  margin-bottom: 0.5em;
  margin: 48px auto 0;
`;

const author = css`
  color: rgb(55, 53, 47);
  font-weight: 700;
  letter-spacing: -0.003em;
  line-height: 1.1;
  margin-bottom: 0.25em;
  font-size: 2.5em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  cursor: text;
`;

const quote = css`
  max-width: 100%;
  width: 780px;
  white-space: pre-wrap;
  word-break: break-word;
  caret-color: rgb(55, 53, 47);
  font-size: 14px;
  padding-left: 6px;
  padding-bottom: 4px;
  padding-top: 3px;
  margin-bottom: 10px;
`;

const headImg = css`
  object-fit: cover;
  border-radius: 3px;
  width: 33.744px;
  height: 33.744px;
  transition: opacity 100ms ease-out 0s;
  padding-left: 6px;
  margin-right: 12px;
`;

const Intro = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            quote
          }
        }
      }
    `
  );
  return (
    <div css={container}>
      <img css={headImg} alt="headImg" src={headPic}/>
      <span css={author}>{data.site.siteMetadata.author}</span>
      <p css={quote}>{data.site.siteMetadata.quote}</p>
    </div>
  )
}

export default Intro;
