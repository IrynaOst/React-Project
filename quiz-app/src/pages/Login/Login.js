import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import ModalWindow from '../../components/ModalWindow';
import { GoogleLogin } from 'react-google-login';
import google from '../../assets/google-logo.png';
import './login.scss';
import { useDispatch } from 'react-redux';
import { HOME } from '../../constants/navigations';
import { login } from '../../redux/actions/auth';

const initialState = {
    email: '',
    password: ''
}

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const ref = useRef(null);

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData, history));
        console.log(formData)
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj; 
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', payload: { result, token } });
            history.push(HOME);
            ref.current.onCloseModal();
        } catch (e) {
            console.log(e);
        }
    };

    const googleFailure = (error) => {
        console.log(error);
        console.log('Google Log in was unsuccessful. Try Again Later');
    }

    return (
        <ModalWindow btnName="Log in" ref={ref}>
            <h3>Log in to Your Musicdemy Account</h3>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" onChange={handleChange} required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} required />

                    <button className="btn submitbtn" type="submit">Login</button>
                </div>

                <GoogleLogin
                    clientId="26529330945-vebkc81rti9dn76p4poqe4i8p5bls7hn.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <div className="google-container">
                            <button className="google-btn" onClick={renderProps.onClick} disabled={renderProps.disabled} >
                                <img src={google} className="google-logo" alt="google-logo" /> Log in with Google
                            </button>
                        </div>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                />

                <div className="container">
                    <span>Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </ModalWindow>
    );
};

export default Login;
