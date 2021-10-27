import { HOME } from '../../constants/navigations';
import * as api from '../../api/index';
import { AUTH } from '../constants';

export const login = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.logIn(formData);
        dispatch({ type: AUTH, payload: data });

        history.push(HOME);
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, payload: data });
        
        history.push(HOME);
    } catch (error) {
        console.log(error);
    }
};