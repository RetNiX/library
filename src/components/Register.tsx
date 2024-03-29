import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { addUser } from "../services/usersService";
import * as yup from 'yup';
import { successMsg } from "../services/feedbackService";

interface RegisterProps {
    setIsLoggedIn: Function;
}

const Register: FunctionComponent<RegisterProps> = ({ setIsLoggedIn }) => {
    let navigate = useNavigate();
    let formik = useFormik({
        initialValues: { name: "", email: "", password: "" },
        validationSchema: yup.object({
            email: yup.string().required().email(),
            password: yup.string().required().min(8, "Password should be at least 8 characters long !"),
            name: yup.string().optional().min(2, "Name should be at least 2 characters long.")
        }),
        onSubmit: (values) => {
            addUser(values).then((res) => {
                navigate("/home");
                successMsg("You have registered successfuly!");
                sessionStorage.setItem("userEmail", values.email);
                sessionStorage.setItem("isLoggedIn", "true");
                setIsLoggedIn(true);
            })
                .catch((err) => console.log(err));
        }
    });
    return (
        <>
            <h2 className="display-3 text-center mb-4">Register</h2>
            <hr className="m-auto w-25 mb-4" />
            <div className="container w-25">
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-floating mb-4">
                        <input type="text" className="form-control" id="name" placeholder="exampleName" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
                        <label htmlFor="name">Full Name</label>
                        {formik.errors.name && <p className="text-danger text-center">{formik.errors.name}</p>}
                    </div>
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
                    <button type="submit" className="btn btn-warning w-100 text-center" disabled={!formik.dirty || !formik.isValid}>Register</button>
                </form>
                <div className="container text-center mt-3">
                    <Link to={"/"}>Already have a user? Login Here.</Link>
                </div>
            </div>
        </>
    );
}

export default Register;