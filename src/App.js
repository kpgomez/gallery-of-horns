//brings in the React Library
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import beastJSON from "./data.json"; //imports the JSON data
import SelectedBeast from "./SelectedBeast";

//React.Component is the parent and App receives all of the parent's functionality
class App extends React.Component { //class name matches the name of the file
  constructor(props) {
    super(props);
    this.state = {
      beast: {},
      showModal: false, 
      beastData: beastJSON //sets the JSON data to a state property
    }
  }

  selectedBeast = (beastObj) => {
    this.setState({ beastData: beastObj })
    console.log(this.state);
  }

  showBeastModal = () => {
    this.setState({ showModal: true })
  }

  hideBeastModal = () => {
    this.setState({ showModal: false })
  }

  render() { //required function for every class
    return ( //every render method has a return()
      <>
        <Header />
        <Main
          showBeastModal={this.showBeastModal}
          selectedBeast={this.selectedBeast} 
          beastData={this.state.beastData} //passes the JSON data stored in state.beastData into the Main component
          />
        <SelectedBeast
          showModal={this.state.showModal}
          hideBeastModal={this.hideBeastModal}
          beast={this.state.beast}
          beastData={this.state.beastData}
        />
        <Footer />
      </>
    )
  }
}

//defines what you want to export
export default App;