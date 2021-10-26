import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import ModalWindow from '../../components/ModalWindow';
import { signup } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';

const initialState = {
    userFirstName: '',
    userLastName: '',
    email: '',
    password: ''
}

const Signup = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const ref = useRef(null);

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signup(formData, history));
        console.log(formData)
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    return (
        <ModalWindow btnName="Sign up" ref={ref}>
            <h3>Sign Up and Start Learning!</h3>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <label htmlFor="firstname"><b>First name</b></label>
                    <input type="text" placeholder="Enter first name" name="userFirstName" onChange={handleChange} required />

                    <label htmlFor="lastname"><b>Last name</b></label>
                    <input type="text" placeholder="Enter last name" name="userLastName" onChange={handleChange} required />

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" onChange={handleChange} required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} required />

                    <button className="btn submitbtn" type="submit">Sign up</button>
                </div>
            </form>
        </ModalWindow>
    );
};

export default Signup;