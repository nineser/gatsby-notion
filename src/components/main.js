
import React from "react"

import CategoryList from "./CategoryList.js"
import CardList from "./CardList.js"

class Main extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      categoryArr:props.categoryArr.group,
      nowCategory: props.categoryArr.group[0].fieldValue
    }
    this.handleCategoryClick = this.handleCategoryClick.bind(this); 
  }
  

  handleCategoryClick(category){
    this.setState({
      nowCategory: category
    });
  }

  render(){
    return(
      <main>
        <div style={{width: `85%`,margin: `0 auto`}}>
          <CategoryList onCategoryClick={this.handleCategoryClick} categoryArr={this.state.categoryArr}/>
          <CardList category={this.state.nowCategory}/>
        </div>
      </main>
    ) 
  }
} 

export default Main;
