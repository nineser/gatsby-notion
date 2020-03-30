import React from "react";
import {useStaticQuery,Link,graphql} from "gatsby"

import { css } from "@emotion/core"
import tw from "tailwind.macro"


const ListArr= css`
  ${tw`flex flex-wrap -mx-2 overflow-hidden`};
`;

const cardContainer = css`
  ${tw`w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4`};
  box-sizing: border-box;
  padding: .5rem;
`;

const card = css`
  user-select: none;
  transition: background 120ms ease-in 0s;
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
`;

const titleContainer = css`
  display: block;
  color: inherit;
  text-decoration: none;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
  border-radius: 3px;
  background: white;
  overflow: hidden;
  transition: background 100ms ease-out 0s;
  position: static;
  height: 100%;
  padding: 8px 10px 10px;
`

const title = css`
  max-width: 100%;
  width: auto;
  white-space: nowrap;
  word-break: break-word;
  caret-color: rgb(55, 53, 47);
  font-size: 14px;
  line-height: 1.5;
  min-height: 21px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  color: #000;
`

const postCover = css`
  display: block;
  object-fit: cover;
  border-radius: 1px 1px 0px 0px;
  width: 100%;
  height: 155.813px;
  object-position: center 50%;
`


const CardList = (props) => {
  const data = useStaticQuery(graphql`{
    allPosts(sort: {order: DESC, fields: last_edited_time}) {
      group(field: tags, limit: 1) {
        fieldValue
        edges {
          node {
            category
            cover          
          }
        }
      }
    }
  }`)

  const Cards = data.allPosts.group.map(( item ) => {
    return (
    <div key={item.fieldValue} css={cardContainer} style={{display: props.category === item.edges[0].node.category[0]?"block":"none"}}>
      <Link to={`/${item.fieldValue}/`}>  
        <div css={card}>
          <div>
            <img alt="cover" src={item.edges[0].node.cover} css={postCover}/>
          </div> 
          <div css={titleContainer}>
            <span css={title}># {item.fieldValue}</span>
          </div> 
        </div>
      </Link>
    </div>
    )
  });


    return (
      <div style={{minHeight:`320px`}}>
        <div css={ListArr}>
          {Cards}
        </div>
      </div>
    )


}
export default CardList;
