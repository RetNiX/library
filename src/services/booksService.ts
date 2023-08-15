import axios from "axios";
import Book from "../interfaces/Book";

let api :string = `${process.env.REACT_APP_API}/books`;

// ALL C.R.U.D functions!!

// GET all books
export function getBooks() {
    return axios.get(api);
}
// GET a book by id
export function getBookById(id : number) {
    return axios.get(`${api}/${id}`);
}
// POST a new book
export function addBook(newBook : Book) {
    return axios.post(api, newBook);
}
// PUT book by id
export function updateBook(bookToUpdate : Book, id : number) {
    return axios.put(`${api}/${id}`, bookToUpdate);
}
// DELETE book by id
export function deleteBook(id : number) {
    return axios.delete(`${api}/${id}`);
}