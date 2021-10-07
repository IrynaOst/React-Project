import { AUTH, LOGOUT } from "../../constants/actionTypes";

const initialState = null;

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, authData: payload, loading: false, errors: null }

        case LOGOUT:
            localStorage.clear();
            return { ...state, authData: null, loading: false, errors: null };
        default:
            return state;
    }
}

export default authReducer;