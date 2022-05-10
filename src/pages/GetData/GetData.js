import React, { Component } from 'react';
import ShowData from '../ShowData/ShowData';

class GetData extends Component {

    componentDidMount() {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('places', JSON.stringify(data))
            })


    };


    render() {
        return (
            <ShowData />
        )

    }
}

export default GetData;