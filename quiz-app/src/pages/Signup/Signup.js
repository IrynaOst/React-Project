import React, { useState } from 'react';
import ModalWindow from '../../components/ModalWindow';

const Signup = () => {

    return (
        <ModalWindow btnName="Sign up">
            <h3>Sign Up and Start Learning!</h3>
            <form>
                <div className="container">
                    <label htmlFor="firstname"><b>First name</b></label>
                    <input type="text" placeholder="Enter first name" name="ufname" required />

                    <label htmlFor="lastname"><b>Last name</b></label>
                    <input type="text" placeholder="Enter last name" name="ulname" required />

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button className="btn submitbtn" type="submit">Sign up</button>
                </div>
            </form>
        </ModalWindow>
    );
};

export default Signup;