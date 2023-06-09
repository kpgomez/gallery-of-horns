//brings in the React Library
import React from "react";
import { Card, Button } from "react-bootstrap";



//React.Component is the parent and HornedBeast receives all of the parent's functionality
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faveCounter: 0
    };
  };

  incrementFaveCounter = () => {
    this.setState({
      faveCounter: this.state.faveCounter + 1
    });
  };

  handleModalEvent = () => {
    this.props.selectedBeast(this.props.beast);
    this.props.showBeastModal();
  } 
  render() { //required function for every class

    return (
      <>
        <div>
          {/* <h2>{this.props.title}</h2>
          <div>
            <p>Favorites ❤️ {this.state.faveCounter}</p>
            <button onClick={this.incrementFaveCounter}></button>
          </div>
          <img src={this.props.imageURL} alt={this.props.description} title={this.props.title} height={250} />
          <p>{this.props.description}</p> */}

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.imageURL} height={250} onClick={this.handleModalEvent} />
            <Card.Body>
              <Card.Title className ="title">{this.props.title}</Card.Title>
              <Card.Text>
                Favorites ❤️ {this.state.faveCounter}
              </Card.Text>
              <Button variant="primary" onClick={this.incrementFaveCounter}>Select Favorite Horned Beast</Button>
            </Card.Body>
          </Card>
        </div>
      </>
    )
  }
}

//defines what you want to export
export default HornedBeast