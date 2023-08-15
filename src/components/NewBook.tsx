import { FunctionComponent, useEffect } from "react";
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { addBook } from "../services/booksService";
import { successMsg } from "../services/feedbackService";

interface NewBookProps {
    booksChanged: boolean;
    setBooksChanged: Function;
}

const NewBook: FunctionComponent<NewBookProps> = ({booksChanged, setBooksChanged}) => {
    let navigate = useNavigate();
    let formik = useFormik({
        initialValues: { name: "", author: "", genre: "", price: 0 },
        validationSchema: yup.object({
            name: yup.string().required("Book name is required!").min(2),
            author: yup.string().required().min(2),
            genre: yup.string().required().min(2),
            price: yup.number().typeError("Should contain only numbers !").required().min(1)
        }),
        onSubmit: (values, {resetForm}) => {
            addBook(values).then((res) => {
                setBooksChanged(!booksChanged);
                resetForm();
                formik.setFieldValue("price", "");
                successMsg("Book has been Added!");
            }).catch((err) => console.log(err))
        }
    });
    // We did this so that we have an inistial value of 0 but so it wouldn't display on the front.
    useEffect(() => {
        formik.setFieldValue("price", "");
    }, []);
    return (
        <>

            <div className="container w-75">
                <h2 className="text-decoration-underline">Add new book record:</h2>
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
                    <button type="submit" className="btn btn-success w-100 text-center" disabled={!formik.dirty || !formik.isValid}><i className="fa-solid fa-plus"></i> Add a Book</button>
                </form>
            </div>
        </>
    );
}
export default NewBook;