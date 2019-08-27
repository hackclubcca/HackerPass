import React from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import { FORM_FIELDS } from "./config/fields";
import axios from 'axios';

require('dotenv').config();
const fields = FORM_FIELDS;


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
        if (event.target.type == "textarea") {
            let total = event.target.maxLength != -1 ? event.target.maxLength : 999;
            document.getElementById(event.target.id+"-count").innerText = event.target.value.toString().length + "/" + total;
        }
        let newState = Object.assign({}, this.state); // Clone the state obj in newState
        newState["values"][event.target.id] =  event.target.value;             // modify newState
        this.setState(newState);
        //this.setState({[event.target.id]: event.target.value});
    };
    handleSubmit = (event) => {
        this.setState({validated: true});
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            this.setState({errors: true});
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
            this.setState({errors: false});
        }
    };

    render() {
        const fields = this.state.fields;

        return (
            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                {this.state.errors &&
                    (<Alert variant="danger">Oops! You filled out one of the fields below incorrectly :(</Alert>)

                }
                {fields.map((value, index) => {
                    return (
                        <Form.Group>
                            {value.type != "checkbox" && (<Form.Label required={value.required}>{value.label}</Form.Label>)}
                            {value.type == "dropdown" ?
                                (
                                    <Form.Control id={value.key} as="select" className={"option"}>
                                        {value.options.map((option) => {
                                            return <option>{option}</option>;
                                        })}
                                    </Form.Control>
                                ):value.type == "checkbox" ? (
                                        <Form.Group controlId={value.key}>
                                            <Form.Check type="checkbox" label={value.label} />
                                          </Form.Group>
                                ):(
                                       <Form.Control id={value.key} onChange={this.handleChange} required={value.required} type={value.type}
                                                 placeholder={value.default_value ? value.default_value : "Enter " + value.type}
                                                 name={value.key} className={"wow fadeInUp"}
                                                 as={value.type == "textarea" ? "textarea" : undefined} minLength={value.min_length} maxLength={value.max_length || 999} min={value.min} max={value.max}/>
                                )
                            }
                            {value.type == "textarea" &&
                                 <p id={value.key+"-count"}>0/{value.max_length || 999}</p>
                             }
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
