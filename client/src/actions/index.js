import streams from '../apis/streams';
import axios from 'axios';
import { 
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from './actionTypes';
import { formValues } from 'redux-form';

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
    let response = await axios.post(`${streams.baseUrl}/streams`,formValues);
    dispatch({type:CREATE_STREAM, payload:response.data});
};

export const fetchStreams = () => async dispatch => {
    const response = await axios.get(`${streams.baseUrl}/streams`);
    dispatch({type: FETCH_STREAMS, payload: response.data})
}

export const fetchStream = (id) => async dispatch => {
    const response = await axios.get(`${streams.baseUrl}/streams/${id}`);
    dispatch({type: FETCH_STREAM, payload: response.data});
}

export const editStream = (id, formValues) => async dispatch => {
    const response = await axios.put(`${streams.baseUrl}/streams/${id}`,formValues);
    dispatch({type: EDIT_STREAM, payload: response.data});
}

export const deletetreams = (id) => async dispatch => {
    await axios.get(`${streams.baseUrl}/streams/${id}`);
    dispatch({type: DELETE_STREAM, payload: id});
}