import streams from '../apis/streams';
import axios from 'axios';
import { SIGN_IN, SIGN_OUT } from './actionTypes';

export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload:userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createStream = formValues =>async dispatch => {
    let response = await axios.post(`${streams.baseUrl}/streams`,formValues)
    console.log(response);

    // axios.post('http://localhost:3001/streams', formValues)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    
};
