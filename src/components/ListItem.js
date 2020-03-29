
import React from "react"

import { css } from "@emotion/core"

const container = css` 
  display: flex;
  padding-bottom:6px;
  align-items: center  
`

const listLeft = css`
  display: flex;
  align-items: center;
  height: 34px;
  width: 160px;
  flex: 0 0 auto;
  color: rgba(55, 53, 47, 0.6);
`

const listRight = css`
  display: flex;
  align-items: center;
  margin-left: 4px;
  height: 100%;
  flex: 1 1 auto;
  min-width: 0px;
  color: rgba(55,53,47,0.6); 
`

const ListItem = (props) => {
  return (
    <div css={container}>
      <div css={listLeft}>{props.keyName}</div>
      <div css={listRight}>{props.val}</div>
    </div>
  )
}

export default ListItem;
