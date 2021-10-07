import React, { useState } from 'react';
import ModalWindow from '../../components/ModalWindow';

const Signup = () => {

    return (
        <ModalWindow btnName="Sign up">
            <h3>Sign Up and Start Learning!</h3>
            <form>
                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button className="btn submitbtn" type="submit">Login</button>
                </div>

                <div className="container">
                    <span>Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </ModalWindow>
    );
};

export default Signup;