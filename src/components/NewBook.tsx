import { FunctionComponent } from "react";
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';

interface NewBookProps {

}

const NewBook: FunctionComponent<NewBookProps> = () => {
    let navigate = useNavigate();
    let formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: yup.object({
            email: yup.string().required().email(),
            password: yup.string().required().min(8, "Password should be at least 8 characters long !")
        }),
        onSubmit: (values) => {
            console.log(values);

        }
    });
    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    {/* Form */}
                    <div className="container w-75">
                        <h2 className="text-decoration-underline">Add new book record:</h2>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-floating mb-4">
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                                <label htmlFor="email">Email address</label>
                                {formik.touched.email && formik.errors.email && <p className="text-danger text-center">{formik.errors.email}</p>}
                            </div>
                            <div className="form-floating mb-4">
                                <input type="password" className="form-control" id="password" placeholder="Password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                                <label htmlFor="password">Password</label>
                                {formik.touched.password && formik.errors.password && <p className="text-danger text-center">{formik.errors.password}</p>}
                            </div>
                            <button type="submit" className="btn btn-success w-100 text-center" disabled={!formik.dirty && !formik.isValid}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NewBook;