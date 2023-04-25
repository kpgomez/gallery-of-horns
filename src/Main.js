import React from "react";
import HornedBeast from "./HornedBeast";
import "./Main.css";
import App from "./App";


class Main extends React.Component {
    render() {
        return (
            <div className="beasts">
                {this.props.beastData.map((beast, idx) =>  //to access data that is passed from parent, use "this.props"
                    <HornedBeast
                        title={beast.title}
                        imageURL={beast.image_url}
                        description={beast.description} 
                        keyword={beast.keyword}
                        showBeastModal={this.props.showBeastModal}
                        selectedBeast={this.props.selectedBeast}
                        beast={beast}
                        beastData={this.props.beastData}
                        key={idx}
                    />  
                )}
            </div>
        )
    }
}

export default Main;