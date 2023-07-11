import axios from 'axios';
import '../interfaces/User';
import User from '../interfaces/User';

let api : string = `${process.env.REACT_APP_API}/users`

// Checking for a user by id - on login
export function getUser(userToCheck : User) {
    return axios.get(`${api}?email=${userToCheck.email}&password=${userToCheck.password}`);
}
// adding a user - on register
export function addUser(newUser : User) {
    return axios.post(api, newUser);
}