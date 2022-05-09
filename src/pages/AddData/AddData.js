import React, { Component } from 'react';

class AddData extends Component {

    state = {
        places: []
    }

    componentDidMount() {
        fetch('https://your-highway-travel.herokuapp.com/places')
            .then(res => res.json())
            .then(data => {
            localStorage.setItem('places', JSON.stringify(data))
            })
        const data = localStorage.getItem('places');
        if (data) {
            this.setState({places: JSON.parse(data)} );
        }
            
    };
    
    render() {

        console.log(this.state.places);
        return (
            <div>
                <h1>hello there</h1>
            </div>
        )

    }
}

export default AddData;