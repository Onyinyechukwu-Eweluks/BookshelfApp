import React, {Component} from 'react';
import { Form, Col, Button } from 'react-bootstrap'

class Register extends Component{
    state = {
        Firstname: "",
        Lastname: "",
        Username: "",
        Email: "",
        Phone: "",
        Password: "",
        Address: "",
        City: "",
        State: "",
        ZipCode: "",

    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(e) {
        e.preventDefault();

 
    }
    render(){
        return(
            <div className='container'>
                <h2>Register</h2>
                <Form onSubmit={e=> this.handleSubmit(e)}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstname">
                            <Form.Label>Firstname</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Firstname" 
                                name= "Firstname" 
                                value= {this.state.Firstname} 
                                onChange= {e => this.handleChange(e)} 
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridLastname">
                            <Form.Label>Lastname</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Lastname" 
                                name= "Lastname" 
                                value= {this.state.Lastname} 
                                onChange= {e => this.handleChange(e)} 
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Username" 
                                name= "Username" 
                                value= {this.state.Username} 
                                onChange= {e => this.handleChange(e)}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email"
                                name= "Email" 
                                value= {this.state.Email} 
                                onChange= {e => this.handleChange(e)} 
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="Phone number"
                                name= "Phone" 
                                value= {this.state.Phone} 
                                onChange= {e => this.handleChange(e)} 
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password"
                                name= "Password" 
                                value= {this.state.Password} 
                                onChange= {e => this.handleChange(e)} 
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control 
                            type= "text"
                            placeholder="1234 Main St"
                            name= "Address" 
                            value= {this.state.Address} 
                            onChange= {e => this.handleChange(e)} 
                        />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control 
                            type= "text"
                            name= "City" 
                            value= {this.state.City} 
                            onChange= {e => this.handleChange(e)}
                        />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control 
                            type= "text"
                            name= "ZipCode" 
                            value= {this.state.ZipCode} 
                            onChange= {e => this.handleChange(e)}
                        />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
export default Register;

    
    
