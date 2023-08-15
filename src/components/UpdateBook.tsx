import { useFormik } from "formik";
import { FunctionComponent, useEffect, useState } from "react";
import * as yup from 'yup';
import { getBookById, updateBook } from "../services/booksService";
import Book from "../interfaces/Book";
import { successMsg } from "../services/feedbackService";
interface UpdateBookProps {
    bookId: number;
    render: Function;
    onHide: Function;
}

const UpdateBook: FunctionComponent<UpdateBookProps> = ({ bookId, render, onHide }) => {
    let [book, setBook] = useState<Book>({ name: "", author: "", genre: "", price: 0 });
    useEffect(() => {
        getBookById(bookId).then((res) => setBook(res.data)).catch((err) => console.log(err))
    }, []);
    let formik = useFormik({
        initialValues: { name: book.name, author: book.author, genre: book.genre, price: book.price },
        enableReinitialize: true,
        validationSchema: yup.object({
            name: yup.string().required("Book name is required!").min(2),
            author: yup.string().required().min(2),
            genre: yup.string().required().min(2),
            price: yup.number().typeError("Should contain only numbers !").required().min(1)
        }),
        onSubmit: (values) => {
            updateBook(values, bookId).then((res) => {
                onHide();
                render();
                successMsg("The book has been updated!");
            }).catch((err) => console.log(err))
        }
    });
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-floating mb-4 mt-4">
                    <input type="text" className="form-control" id="name" placeholder="name@example.com" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
                    <label htmlFor="name">Book Name</label>
                    {formik.touched.name && formik.errors.name && <p className="text-danger text-center">{formik.errors.name}</p>}
                </div>
                <div className="form-floating mb-4 mt-4">
                    <input type="text" className="form-control" id="author" placeholder="author" onChange={formik.handleChange} value={formik.values.author} onBlur={formik.handleBlur} />
                    <label htmlFor="author">Author</label>
                    {formik.touched.author && formik.errors.author && <p className="text-danger text-center">{formik.errors.author}</p>}
                </div>
                <div className="form-floating mb-4">
                    <input type="text" className="form-control" id="genre" placeholder="genre" onChange={formik.handleChange} value={formik.values.genre} onBlur={formik.handleBlur} />
                    <label htmlFor="genre">Genre</label>
                    {formik.touched.genre && formik.errors.genre && <p className="text-danger text-center">{formik.errors.genre}</p>}
                </div>
                <div className="form-floating mb-4 mt-4">
                    <input type="number" className="form-control" id="price" placeholder="price" onChange={formik.handleChange} value={formik.values.price} onBlur={formik.handleBlur} />
                    <label htmlFor="price">Price</label>
                    {formik.touched.price && formik.errors.price && <p className="text-danger text-center">{formik.errors.price}</p>}
                </div>
                <button type="submit" className="btn btn-success w-100 text-center" disabled={!formik.dirty || !formik.isValid}><i className="fa-solid fa-plus"></i> Update</button>
            </form>
        </>
    );
}

export default UpdateBook;