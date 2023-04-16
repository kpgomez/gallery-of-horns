//brings in the React Library
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

//React.Component is the parent and App receives all of the parent's functionality
class App extends React.Component { //class name matches the name of the file
  render() { //required function for every class
    return ( //every render method has a return()
    <>
      <Header />
      <Main />
      <Footer />
    </>
    )    
  }
}

//defines what you want to export
export default App