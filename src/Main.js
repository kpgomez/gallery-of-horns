import React from "react";
import HornedBeast from "./HornedBeast";
import "./Main.css";
import App from "./App";


class Main extends React.Component {
    render() {
        return (
            <div className="beasts">
                {this.props.beastData.map(beast =>  //to access data that is passed from parent, use "this.props"
                    <HornedBeast
                        title={beast.keyword}
                        imageURL={beast.image_url}
                        description={beast.description} 
                        showBeastModal={this.props.showBeastModal}
                        selectedBeast={this.props.selectedBeast}
                        beastData={this.props.beastData}
                   
                    />  
                )}
            </div>
        )
    }
}

export default Main;