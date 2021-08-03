import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import Screen02 from './Screen02';


const Screen2 = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [image1, setImage] = useState();
    const [title, setTitle] = useState();
    const [errorMsg, setErrorMsg] = useState();
    const [successMsg, setSuccessMsg] = useState();
    const [success, setSuccess] = useState();

    const handleChange = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]));
    }

    const handleChange1 = (event) => {
        setTitle(event.target.value)
    }
    const validate = () => {
        if (!title) {
            setErrorMsg("Title is Required");

        }
        else if (!image1) {
            setErrorMsg("Image is Required");
        }
        else {
            if (true) {

                axios({
                    method: 'post',
                    url: 'https://jsonplaceholder.typicode.com/photos',
                    data: {
                        title: title,
                        image: image1
                    }
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

                setSuccessMsg("Form Successfully submitted!!!");
                setSuccess(true);
                setShow(false);

            }

        }
    }
    const submitHandler = (e) => {
        e.preventDefault();
       validate();


    }

    let history = useHistory();

const gotoPage1 = () => {
    history.push("/");
}

    return (
        <>
            <Header />
            <Button variant="primary" onClick={handleShow} style={{ margin: '5px' }}>
                Open Modal
            </Button>

            <Button style={{backgroundColor:'teal', margin:'5px'}} onClick={gotoPage1}>Goto Page1</Button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Form Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <div>
                                {successMsg ? <strong style={{ color: 'green' }}>{successMsg}</strong> : errorMsg ? <strong style={{ color: 'red' }}>{errorMsg}</strong> : ""}
                            </div>
                            <Form.Group as={Col} controlId="formGridTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" name="title" placeholder="Enter title" onChange={handleChange1} />
                            </Form.Group>
                        </Row>
                        < Row className="mb-3">
                            <Form.Group controlId="formFile" className="mb-3">
                                <input type="file" name="ima" onChange={handleChange} />
                                <img src={image1} alt={""} style={{ width: '100px', height: '80px' }} />
                            </Form.Group>
                        </Row>


                    <Button variant="primary" show={show}  onClick={submitHandler} >
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            <Screen02 />

            <Footer />
        </>
    );
}
export default Screen2;