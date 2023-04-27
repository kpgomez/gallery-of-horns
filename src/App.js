//brings in the React Library
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import beastJSON from "./data.json"; //imports the JSON data
import SelectedBeast from "./SelectedBeast";
import { Form } from "react-bootstrap";


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
    // console.log(beastObj);
    this.setState({ beast: beastObj });
    // console.log(this.state.beast);
    // console.log(this.state.beastData);
  }

  showBeastModal = () => {
    this.setState({ showModal: true })
  }

  hideBeastModal = () => {
    this.setState({ showModal: false })
  }

  changeNumberHorns = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    let filteredHorn;

    if(e.target.value === '1'){
      filteredHorn = beastJSON.filter(beast => beast.horns === 1)
    } else if(e.target.value === '2'){
      filteredHorn = beastJSON.filter(beast => beast.horns === 2)
    } else if(e.target.value === '3'){
      filteredHorn = beastJSON.filter(beast => beast.horns === 3)
    } else if(e.target.value === '100'){
      filteredHorn = beastJSON.filter(beast => beast.horns === 100)
    } else {
      filteredHorn = beastJSON;
    }

    this.setState({ beastData : filteredHorn})
  }

  render() { //required function for every class
    return ( //every render method has a return()
      <>
        <Header />
        <Form>
          <Form.Group>
            <Form.Label>Choose Number of Horns</Form.Label>
            <Form.Select onChange={this.changeNumberHorns}>
            <option value="">How Many Horns</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Main
          showBeastModal={this.showBeastModal}
          selectedBeast={this.selectedBeast}
          beastData={this.state.beastData} //passes the JSON data stored in state.beastData into the Main component
        // beast={this.state.beast} //this was causing the beast prop that was passed down to be set to empty
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