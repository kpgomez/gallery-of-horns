//brings in the React Library
import React from "react";


//React.Component is the parent and App receives all of the parent's functionality
class HornedBeast extends React.Component {
  render() { //required function for every class

    return (
    <>
      <h2>{this.props.title}</h2>
      <img src={this.props.imageURL} alt={this.props.description} title={this.props.title}/>
      <p>{this.props.description}</p>
    </>
    )    
  }
}

//defines what you want to export
export default HornedBeast