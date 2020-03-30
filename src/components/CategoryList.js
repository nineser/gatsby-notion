
import React from "react";

import { css } from "@emotion/core"


const cate = css`
  font-size: 14px;
  line-height: 20px;
  color: rgb(55, 53, 47);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 6px;
  margin-right: 4px;
  font-weight: 600;
`;

const cateBox = css`
  display: flex;
  align-items: center;
  flex-shrink: 1;
  min-width: 0px;
  height: 18px;
  border-radius: 3px;
  padding: 3px 6px;
  font-size: 14px;
  line-height: 120%;
  color: rgb(55, 53, 47);
  margin: 0px 6px 0px 0px;
  cursor: pointer;
`

const cateContainer = css`
  display: flex;
  align-items: center;
  height: 38px;
  padding-bottom: 2px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 15px;
`;

class CategoryList extends React.Component{

  constructor(props){
    super(props);
    
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      categoryArr: props.categoryArr,
      nowCate: props.categoryArr[0].fieldValue 
    }
  }

  handleClick(e){
    e.preventDefault();
    e.persist();
    if(e.target.tagName==="SPAN"){
      this.props.onCategoryClick(e.target.innerText);
      this.setState({
        nowCate: e.target.innerText
      })
    }
  }

  render(){
    const CategoriesList = this.state.categoryArr.map((item)=>{
      return (
        <span key={item.fieldValue} css={cateBox} style={{
          background:(this.state.nowCate===item.fieldValue)?`rgba(251, 114, 153, 0.2)`:`#fff`}}>
          <span css={cate}>
            {item.fieldValue}
          </span>
        </span>
      )
    })
    return (
      <div onClick={(e) => this.handleClick(e)} css={cateContainer}>
        {CategoriesList}
      </div>
    );
  }

}

export default CategoryList;


