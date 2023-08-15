import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
    isLoggedIn: boolean;
    setIsLoggedIn: Function;
}

const Header: FunctionComponent<HeaderProps> = ({ isLoggedIn, setIsLoggedIn }) => {
    let navigate = useNavigate();
    return (
        <>
            <h1 className="display-5 text-decoration-underline text-center py-4 bg-dark text-light mb-5"><b>Book Collection</b>
            {isLoggedIn && (
                <>
                    <div className="container-fluid text-center mt-4">
                        <h5>Welcome back {sessionStorage.getItem("userEmail")}</h5>
                        <button className="btn btn-primary" onClick={() => {
                            navigate("/");
                            sessionStorage.removeItem("isLoggedIn");
                            sessionStorage.removeItem("userEmail");
                            setIsLoggedIn(false);
                            }}>Logout</button>
                    </div>
                </>
            )}</h1>
        </>
    );
}

export default Header;