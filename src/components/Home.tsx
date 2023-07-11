import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../services/usersService";
import * as yup from 'yup';

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    return (
        <>
            <div className="container-fluid text-center py-4 bg-dark text-light">
                <h1 className="display-5 text-decoration-underline"><b>Book Collection</b></h1>
            </div>
            <div className="container-fluid bg-dark pb-4 text-center">
                <Link to="/" className="btn btn-primary py-2 px-3 mx-4 mb-3 mt-2">Login</Link>
            </div>
            <div className="container-fluid mt-3">
                
                    
                </div>
        </>
    );
}

export default Home;