import React from 'react';
import './App.css';
import HackerForm from "./Form";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";

import Container from "react-bootstrap/Container";

require('dotenv').config();

class HomeApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Chrome",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Chrome_icon_%28September_2014%29.svg",
            url: "https://google.com/chrome"
        }
    }
    render() {
        return (
                <Col xs={3}>
                    <a href={this.state.url}>
                        <img src={this.state.image_url} alt={this.state.name} />
                    </a>
                </Col>
        )
    }
}
class AppCollection extends React.Component {
    render() {
            return (

                <div className="hello">
                    <Navbar>
                        <Navbar.Brand href="#home">
                          <img
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                            alt="Name"
                            id="logo"
                          />
                        </Navbar.Brand>
                      </Navbar>
                    <Container>
                        <HackerForm/>
                    </Container>
                </div>
            );
    }
}
export default AppCollection;
