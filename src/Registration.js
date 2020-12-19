import React, { Component } from "react";    
    import FlashMessage from 'react-flash-message';
    import './RegistrationForm.css';
        
    class RegistrationForm extends Component {    
        constructor(props) {    
            super(props);    
            this.state = {    
                username: '',    
                Email: '',    
                password: '',    
                gender: '',    
                phone: '',    
                address: '', 
                salary:'',   
                formErrors: {}    
            };    
            
            this.initialState = this.state;    
        }    
        
        handleFormValidation() {    
            const { username, password, Email, phone, gender, address, salary } = this.state;    
            let formErrors = {};    
            let formIsValid = true;    
        
            //Student name     
            if (!username) {    
                formIsValid = false;    
                formErrors["usernameErr"] = "Name is required.";    
            }    
        
            //Email    
            if (!Email) {    
                formIsValid = false;    
                formErrors["EmailErr"] = "Email id is required.";    
            }    
            else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email))) {    
        
                formIsValid = false;    
                formErrors["EmailErr"] = "Invalid email id.";    
            }    
        
            //password    
            if (!password) {    
                formIsValid = false;    
                formErrors["passwordErr"] = "Password is required.";    
            }    
            else {    
                var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;    
                if (!pattern.test(password)) {    
                    formIsValid = false;    
                    formErrors["passwordErr"] = "Invalid Password";    
                }    
            }      
            if (!salary) {    
                formIsValid = false;    
                formErrors["salErr"] = "Salary is required.";    
            }    
            else {    
                var salPattern = /^(?:\d+|\d{1,2},(?:\d{2},)*\d{3})(?:\.\d{2})?$/;    
                if (!salPattern.test(salary)) {    
                    formIsValid = false;    
                    formErrors["salErr"] = "Enter correct  Salary.";    
                }    
            } 
        
            //Phone number    
            if (!phone) {    
                formIsValid = false;    
                formErrors["phoneErr"] = "Phone number is required.";    
            }    
            else {    
                var mobPattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;    
                if (!mobPattern.test(phone)) {    
                    formIsValid = false;    
                    formErrors["phoneErr"] = "Invalid phone number.";    
                }    
            }    
        
            this.setState({ formErrors: formErrors });    
            return formIsValid;    
        }    
        
        handleChange = (e) => {    
            const { name, value } = e.target;    
            this.setState({ [name]: value });    
        }    
        
        handleSubmit = (e) => {    
            e.preventDefault();    
        
            if (this.handleFormValidation()) {  
                this.setState({ showMessage: true });  
               // alert('You have been successfully registered.')  
              // window.flash('record has been created successfully!', 'success')
                this.setState(this.state)      
            }    
        }    
        
        render() {    
        
            const { usernameErr, EmailErr, passwordErr, phoneErr,salErr } = this.state.formErrors;    
        
            return (    
                <div className="formDiv">    
                    <h3 style={{ textAlign: "center" }} >Registration Form </ h3>    
                    <div>    
                        <form onSubmit={this.handleSubmit}>    
                            <div>    
                                <label htmlFor="username">Username</label>    
                                <input type="text" name="username"    
                                    value={this.state.username}    
                                    onChange={this.handleChange}    
                                    placeholder=""    
                                    className={usernameErr ? ' showError' : ''} />    
                                {usernameErr &&    
                                    <div style={{ color: "red", paddingBottom: 10 }}>{usernameErr}</div>    
                                }    
        
                            </div>    
                            <div>    
                                <label htmlFor="text">Password</label>    
                                <input type="password" name="password"    
                                    value={this.state.password}    
                                    onChange={this.handleChange}    
                                    placeholder=""    
                                    className={passwordErr ? ' showError' : ''} />    
                                {passwordErr &&    
                                    <div style={{ color: "red", paddingBottom: 10 }}>{passwordErr}</div>    
                                }    
                            </div>
                            <div>    
                                <label htmlFor="Email">Email Id</label>    
                                <input type="text" name="Email"    
                                    value={this.state.Email}    
                                    onChange={this.handleChange}    
                                    placeholder=""    
                                    className={EmailErr ? ' showError' : ''} />    
                                {EmailErr &&    
                                    <div style={{ color: "red", paddingBottom: 10 }}>{EmailErr}</div>    
                                }    
        
                            </div>        
                            <div>    
                                <label htmlFor="phone">Phone Number</label>    
                                <input type="text" name="phone"    
                                    onChange={this.handleChange}    
                                    value={this.state.phone}    
                                    placeholder=""    
                                    className={phoneErr ? ' showError' : ''} />    
                                {phoneErr &&    
                                    <div style={{ color: "red", paddingBottom: 10 }}>{phoneErr}</div>    
                                }    
                            </div>
                            <div>    
                                <label htmlFor="gender">Gender</label>    
                                <select name="gender" onChange={this.handleChange}       
                                value={this.state.gender} >        
                                <option value="male">Male</option>    
                                <option value="female">Female</option>    
                                <option value="female">Other</option>    
                            </select>    
                            </div>        
                            <div>    
                                <label htmlFor="address">Address</label>    
                                <input type="text" name="address"    
                                    onChange={this.handleChange}    
                                    value={this.state.address}    
                                    placeholder="Kolhapur,Maharashtra,India"    
                                     readOnly/>      
                            </div>   
                            <div>    
                                <label htmlFor="salary">Salary</label>    
                                <input type="text" name="salary"    
                                    onChange={this.handleChange}    
                                    value={this.state.salary}    
                                    placeholder=""    
                                    className={salErr ? ' showError' : ''} />    
                                    {salErr &&    
                                        <div style={{ color: "red", paddingBottom: 10 }}>{phoneErr}</div>    
                                    }    
                                  
                            </div>   
                            <input type="submit" value="Submit" />    
                            { this.state.showMessage &&  
        <div>
            <FlashMessage duration={5000}>
                <strong>You have successfully registered ... If you want to edit data then you can edit here and resubmmit form</strong>
            </FlashMessage>
        </div>
   }
                        </form>    
                    </div>    
                </div >    
            )    
        }    
    }    
        
    export default RegistrationForm;