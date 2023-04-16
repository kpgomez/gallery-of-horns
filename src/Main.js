import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component{
    render(){
        return(
            <>
                <HornedBeast title={'Buffalo'} imageURL={'https://www.publicdomainpictures.net/pictures/180000/velka/beast-with-hornes.jpg'} description={'buffalo'}/>
                <HornedBeast title={'Rhino'} imageURL={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/White_Baby_Rhino.jpg/1599px-White_Baby_Rhino.jpg?20130130070321'} description={'baby rhino'}/>
            </>
        )
    }
}

export default Main