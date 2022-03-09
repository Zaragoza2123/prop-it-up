import React, {Component} from 'react';

class PersonCard extends Component {
    //constructor allows to initalize other varibles to keep track of changing information 
    constructor(props) {
        super(props);
        //create an object to 
        this.state = {
            //create a sate variable for age so it's not just in a props variable (which isnt allowed in react)
            ages: this.props.age  //initialized the value of ages to be    what value we got from likes
        };
    this.addToBday = () =>  {
        console.log("Its ya bday bruh")
        this.setState({ages: this.state.ages + 1}) // in order to update state variables we must use this.setState()
    }
    }


    render() {
        //const {firstname, lastname, hairColor} = this.props;
        return (
        <div>
            <h1>{this.props.lastname}, {this.props.firstname}</h1>
            <p>Age: {this.state.ages}</p>
            <p>Hair Color: {this.props.hairColor}</p>
            <button onClick = {this.addToBday} >Birthday Button for {this.props.firstname} {this.props.lastname} </button>
            <hr />
        </div>
        );


}
}
export default PersonCard;