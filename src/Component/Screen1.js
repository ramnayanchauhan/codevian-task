import React, { Fragment, useEffect, useState } from 'react';
import { Row, Col, Table,Card,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
const Screen = () => {
    const [users, setUsers] = useState();
    const [posts, setPosts] = useState();
    const [comments, setComments] = useState();
    const getUserData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
                console.log("userData", response.data);
            })
            .catch(error => {

                console.error('There was an error!', error);
            });
    }
    const getPostData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
                console.log("postData", response.data)
            })
            .catch(error => {

                console.error('There was an error!', error);
            });

    }
    const getCommentData = () => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                setComments(response.data);
                console.log("commentsData", response.data);
            })
            .catch(error => {

                console.error('There was an error!', error);
            });

    }

    useEffect(() => {
        getUserData();
        getPostData();
        getCommentData();
    }, []);

    const userRowData = () => {
         return  (users && users.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.address.city}</td>
                    </tr>
                )
            }))
    }

    const postRowData = () => {
        return  (posts && posts.map((item) => { if(item.userId === 1)
              { return (
                   <tr key={item.id}>
                       <td>{item.id}</td>
                       <td>{item.title}</td>
                       
                   </tr>
               )}
           }))
   }


   const commentstRowData = () => {
    return  (comments && comments.map((item) => { if(item.postId === 1)
          { return (
               <tr key={item.id}>
                   <td>{item.id}</td>
                   <td>{item.name}</td>
                   <td>{item.email}</td>
                   
               </tr>
           )}
       }))
}

let history = useHistory();

const gotoPage2 = () => {
    history.push("/screen2");
}

    return (
        <Fragment>
            <Header />
            <Button style={{backgroundColor:'teal', margin:'5px'}} onClick={gotoPage2}>Goto Page2</Button>
        <div className="container">
            <Row>
                <Col>
                <Card style={{backgroundColor:'#007d8054'}}>
                <Card.Title>Users Data</Card.Title>
                <Card.Body>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                          {userRowData()}
                        </tbody>
                    </Table>
                    </Card.Body>
                    </Card>
                </Col>

                <Col>
                <Card style={{backgroundColor:'#007d8054'}}>
                <Card.Title>Posts Data</Card.Title>
                <Card.Body>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                            </tr>
                        </thead>
                        <tbody>
                         {postRowData()}
                        </tbody>
                    </Table>
                    </Card.Body>
                    </Card>
                </Col>

                <Col>
                <Card style={{backgroundColor:'#007d8054'}}>
                <Card.Title>Comments Data</Card.Title>
                <Card.Body>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                          {commentstRowData()}
                        </tbody>
                    </Table>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
        <Footer />
        </Fragment>
    )
}
export default Screen;