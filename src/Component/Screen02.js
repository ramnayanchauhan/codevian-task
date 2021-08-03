import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';

const Screen02 = () => {
    
    const [photos, setPhotos] = useState();
    const photosData = () => {

        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                setPhotos(response.data);
                console.log("allpic", response.data);
            })
            .catch((error) => console.error('There was an error!', error))
    }

    useEffect(() => {
        photosData();
    }, []);
    console.log("allpic", photos);
    const getImageData = () => {
        return (
            photos && photos.map((item) => {
                if (item.albumId === 1) {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td><img src={item.url} alt={item.thumbnailUrl} style={{ width: '100px', height: '80px' }} /></td>
                            {/* <td>{item.thumbnailUrl}</td> */}
                        </tr>
                    )

                }

            })
        )
    }

    return (

<>
            <div className="container">
                <Card style={{ backgroundColor: '#007d8054' }}>
                    <Card.Title>Users Data</Card.Title>
                    <Card.Body>
                        <Table responsive="sm">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getImageData()}
                            </tbody>
                        </Table>
                    </Card.Body>
                    </Card>

            </div>
        </>
            )
}
            export default Screen02;