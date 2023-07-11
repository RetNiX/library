import { FunctionComponent } from "react";
import * as yup from 'yup';
import { useFormik } from 'formik';
import { getUser } from "../services/usersService";
import { Link, useNavigate } from "react-router-dom";
import Register from "./Register";

interface LoginProps {

}

const Login: FunctionComponent<LoginProps> = () => {
    let navigate = useNavigate();
    let formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: yup.object({
            email: yup.string().required().email(),
            password: yup.string().required().min(8, "Password should be at least 8 characters long !")
        }),
        onSubmit: (values) => {
            getUser(values).then((res) => {
                if (res.data.length) {
                    alert("You Logged in successfuly !");
                    navigate("/home");
                }
                else alert("Wrong Credentails. Try again !");
            }
            ).catch((err) => console.log(err)
            );
        }
    });
    return (
        <>
            <div className="container-fluid text-center">
                <h1 className="display-4 py-5 bg-dark text-light"><b>Book Collection</b></h1>
            </div>
            <h2 className="display-3 text-center mb-4">Login</h2>
            <hr className="m-auto w-25 mb-4" />
            <div className="container w-25">
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
                <div className="container text-center mt-3">
                    <Link to={"/register"}>Don't have a user? Register Here.</Link>
                </div>
            </div>
        </>
    );
}

export default Login;