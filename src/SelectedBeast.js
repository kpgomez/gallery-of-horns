//brings in the React Library
import React from "react";
import { Button, Modal } from "react-bootstrap";
import App from "./App";


//React.Component is the parent and BeastModal receives all of the parent's functionality
class SelectedBeast extends React.Component {
    render() { //required function for every class
        return (
            <>
                <Modal show={this.props.showModal} onHide={this.props.hideBeastModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.beast.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><img src={this.props.imageURL} alt={this.props.title}/></Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.props.hideBeastModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

//defines what you want to export
export default SelectedBeast;