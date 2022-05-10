import React, { useState } from 'react';
import './AddData.css'

const AddData = () => {

    const [data, setData] = useState({});

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
        localStorage.setItem('places', JSON.stringify(datas))
        e.preventDefault();
    }

    return (
        <div className='my-5 py-5'>
            <div className='catagory-bg'>
                <div className='container text-white py-2 my-3 d-flex justify-content-between align-items-center'>
                    <p>Expand</p>
                </div>

            </div>
            <div className='container'>
                <p>https://avijatrik.org/wp-content/uploads/2019/06/cover22-870x555.jpg</p>
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
    );
};

export default AddData;