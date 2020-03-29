
import React from "react"

import CategoryList from "./categoryList.js"
import CardList from "./cardList.js"

class Main extends React.Component{

  constructor(props){
    super(props);
    console.log(props);
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
