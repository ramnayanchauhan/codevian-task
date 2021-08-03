import React from 'react';
import {Card,CardColumns } from 'react-bootstrap'

const Footer = () => {


    return (

        <div>
            <CardColumns>
                <Card bg="primary" text="white" className="text-center p-3" style={{margin:'10px'}}>
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
            </CardColumns>
        </div>
    )
}
export default Footer;