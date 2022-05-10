import React, { useEffect, useState } from 'react';

const ShowData = () => {

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        let datas = JSON.parse(localStorage.getItem('places'));
        console.log(datas);
        // setPlaces(datas)
    },[])
   
    return (
        <div className='container'>
                <table className="table table-striped text-center">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Country</th>
                            <th scope="col">Place</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            places.map(place => (
                                <tr key={place.id}>
                                    <td>
                                        <img className='rounded' src={place.thumb} alt="" height='50px' />
                                    </td>
                                    <td>
                                        {place.country}
                                    </td>
                                    <td>
                                        {place.place}
                                    </td>

                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
    );
};

export default ShowData;