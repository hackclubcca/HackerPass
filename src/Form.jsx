import React from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { FORM_FIELDS } from "./fields";
import axios from 'axios';

require('dotenv').config();
const fields = FORM_FIELDS;


let URL = process.env.ROOT_URL;


class HackerForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit.bind(this);
        this.handleChange.bind(this);
        this.state = {
            fields: fields,
            validated: false,
            values: []
        };



    }
    handleChange = (event) => {
        let newState = Object.assign({}, this.state); // Clone the state obj in newState
        newState["values"][event.target.id] =  event.target.value;             // modify newState
        this.setState(newState);
        //this.setState({[event.target.id]: event.target.value});
    };
    handleSubmit = (event) => {
        this.setState({validated: true});
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            this.setState({validated: true});
            let data = {};
            for (let key in this.state.values) {
                data[key] = this.state.values[key];
            }
            console.log(data);
            axios.post("/data",data);
        }
    };

    render() {
        const fields = this.state.fields;
        return (
            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                {fields.map((value, index) => {
                    return (
                        <Form.Group controlId={value.key}>
                            <Form.Label>{value.label}</Form.Label>
                            <Form.Control onChange={this.handleChange} required={value.required} type={value.type} placeholder={value.default_value ? value.default_value : "Enter " + value.type } name={value.key} className={"wow fadeInUp"} as={value.type == "textarea" ? "textarea" : undefined} />
                        </Form.Group>
                    )
                })}
                <div className="col-sm-12">
                    <div className="text-center">
                    <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
                </div>
            </Form>
        )
    }
}
export default HackerForm;
