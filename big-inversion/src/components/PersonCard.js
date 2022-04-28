import React, { Component, useState } from 'react';

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            birthday: this.props.age,
        };
    }

    render() {
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={() => this.setState({ birthday: this.state.birthday + 1 })}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        )
    }
}

export default PersonCard;