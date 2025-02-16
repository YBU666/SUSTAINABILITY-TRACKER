import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/actions/';


export const getActions = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addAction = async (newAction) => {
    await axios.post(API_URL, newAction);
};

export const updateAction = async (id, updatedAction) => {
    await axios.put(`${API_URL}${id}/`, updatedAction);
};

export const deleteAction = async (id) => {
    await axios.delete(`${API_URL}${id}/`);
};
