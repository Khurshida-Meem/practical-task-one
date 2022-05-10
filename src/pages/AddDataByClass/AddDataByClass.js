import React, { Component } from 'react'
import ShowData from '../ShowData/ShowData';

export default class AddDataByClass extends Component {


    constructor(props) {
        super(props)

        this.state = {
            show: true,
            data: {},
            places: []
        }

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...this.state.data };
        newData[field] = value;
        this.setState({ data: newData });
    }

    handleSubmit = e => {
        let datas = JSON.parse(localStorage.getItem('places'));
        const id = datas.length + 1;
        datas.push({
            id,
            thumb: this.state.data.thumb,
            country: this.state.data.country,
            place: this.state.data.place
        })
        this.setState({ places: datas });
        localStorage.setItem('places', JSON.stringify(datas));

        e.preventDefault();
    }

    handleClick = () => {
        this.setState({show: !this.state.show});
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/Khurshida-Meem/fake-Datas/main/Your%20Highwy/practical-task')
            .then(res => res.json())
            .then(data => {
                const datas = JSON.parse(localStorage.getItem('places'));
                if (!datas) {
                    localStorage.setItem('places', JSON.stringify(data));
                }
                this.setState({places: datas});
            })
    }

    render() {
        return (
            <div>
                <div>
                    <div className='my-5'>
                        <div onClick={this.handleClick} className='catagory-bg'>
                            <div className='container text-white py-2 my-3 d-flex justify-content-between align-items-center'>
                                <p>{this.props.time}</p>
                                <p>
                                    Click Here
                                </p>
                            </div>

                        </div>
                        <div className={this.state.show ? 'd-block' : 'd-none'}>
                            <p className='text-center'>sample img url: https://avijatrik.org/wp-content/uploads/2019/06/cover22-870x555.jpg</p>

                            <div className='container'>
                                <form onSubmit={this.handleSubmit}>
                                    <label>
                                        Image
                                        <input
                                            type="link"
                                            placeholder='Enter Image LInk'
                                            name='thumb'
                                            onChange={this.handleOnChange}
                                        />

                                    </label>

                                    <label>
                                        Country
                                        <input
                                            type="text"
                                            placeholder='Enter Country Name'
                                            name='country'
                                            onChange={this.handleOnChange}
                                        />
                                    </label>

                                    <label>
                                        Place
                                        <input
                                            type="text"
                                            placeholder='Enter Place'
                                            name='place'
                                            onChange={this.handleOnChange}
                                        />
                                    </label>
                                    <br />
                                    <input type="submit" value="Submit" />
                                </form>
                            </div>
                        </div>

                    </div>
                    <ShowData places={this.state.places} />
                </div>
            </div>
        )
    }
}
