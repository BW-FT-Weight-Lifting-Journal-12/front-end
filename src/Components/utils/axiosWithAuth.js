import axios from 'axios';

export const axiosWithAuth = () =>
{
    const token = localStorage.getItem( 'token' );
    return axios.create( {
        baseURL: 'https://weight-lifting-journal-12.herokuapp.com/api/auth',
        headers: {
            Authorization: token
        }
    } );
};
