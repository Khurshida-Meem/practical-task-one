import React, { useEffect, useState } from 'react';
import ShowData from '../ShowData/ShowData';
import './AddData.css'

const AddData = ({ time }) => {

    const [show, setShow] = useState(false)
    const [data, setData] = useState({});
    const [places, setPlaces] = useState([]);

    const url = 'https://raw.githubusercontent.com/Khurshida-Meem/fake-Datas/main/Your%20Highwy/practical-task'

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const datas = JSON.parse(localStorage.getItem('places'));
                if (!datas) {
                    localStorage.setItem('places', JSON.stringify(data));
                }
                setPlaces(datas);
            })
    }, [])


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...data };
        newData[field] = value;
        setData(newData);

    }

    const handleSubmit = e => {
        let datas = JSON.parse(localStorage.getItem('places'));
        const id = datas.length + 1;
        datas.push({
            id,
            thumb: data.thumb,
            country: data.country,
            place: data.place
        })
        setPlaces(datas);
        localStorage.setItem('places', JSON.stringify(datas));

        e.preventDefault();
    }

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <div>
            <div className='my-5'>
                <div onClick={handleClick} className='catagory-bg'>
                    <div className='container text-white py-2 my-3 d-flex justify-content-between align-items-center'>
                        <p>{time}</p>
                        <p>
                        Click Here
                    </p>
                    </div>

                </div>
                <div className={show ? 'd-block' : 'd-none'}>
                    <p className='text-center'>sample img url: https://avijatrik.org/wp-content/uploads/2019/06/cover22-870x555.jpg</p>
                    
                    <div className='container'>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Image
                                <input
                                    type="link"
                                    placeholder='Enter Image LInk'
                                    name='thumb'
                                    onChange={handleOnChange}
                                />

                            </label>

                            <label>
                                Country
                                <input
                                    type="text"
                                    placeholder='Enter Country Name'
                                    name='country'
                                    onChange={handleOnChange}
                                />
                            </label>

                            <label>
                                Place
                                <input
                                    type="text"
                                    placeholder='Enter Place'
                                    name='place'
                                    onChange={handleOnChange}
                                />
                            </label>
                            <br />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>

            </div>
            <ShowData places={places} />
        </div>
    );
};

export default AddData;