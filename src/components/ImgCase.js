
import React from "react"

import {css} from "@emotion/core"

const caseImg = "https://img.laijunjie.com/blog/showCase.jpg"

const showcase = css`
  width: 100%;
  height: 220px;
  object-position: center 24.75%;
  object-fit: cover;
`

const Imgcase = (props) => {
  
  return (
    <div>
      <img css={showcase} src={props.imgSrc?props.imgSrc:caseImg} alt="showCaseImg"/>
    </div>
  )
}

export default Imgcase;
