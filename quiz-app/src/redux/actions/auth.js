import { HOME } from '../../constants/navigations';
import { AUTH } from '../constants';

export const login = (formData, history) => async (dispatch) => {
    try {
        // const {data} = api.getUser();
        // dispatch({type: AUTH, payload: data});
        history.push(HOME);
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
        // const {data} = api.createUser();
        // dispatch({type: AUTH, payload: data});
        history.push(HOME);
    } catch (error) {
        console.log(error);
    }
};