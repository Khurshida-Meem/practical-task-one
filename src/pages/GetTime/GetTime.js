import React, { Component } from 'react';
import AddData from '../AddData/AddData';
import AddDataByClass from '../AddDataByClass/AddDataByClass';

class GetTime extends Component {

    state = { date: new Date() };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }


    render() {

        const { date } = this.state;
        const { locale } = this.props;
        return (
            <>
                <AddData time={date.toLocaleTimeString(locale)} />
                {/* <AddDataByClass time={date.toLocaleTimeString(locale)} /> */}
            </>

        );
    }

}

export default GetTime;