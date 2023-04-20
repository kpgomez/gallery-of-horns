import React from "react";
import HornedBeast from "./HornedBeast";
import beastData from "./data.json";
import "./Main.css"


class Main extends React.Component {
    render() {
        return (
            <div className="beasts">
                {beastData.map(beast => 
                    <HornedBeast
                        title={beast.keyword}
                        imageURL={beast.image_url}
                        description={beast.description} 
                    />  
                )}
            </div>
        )
    }
}

export default Main