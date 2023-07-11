import { FunctionComponent } from "react";

interface PageNotFoundProps {
    
}
 
const PageNotFound: FunctionComponent<PageNotFoundProps> = () => {
    return ( 
        <>
        <div className="container text-center bg-warning">
            <h1 className="display-4">404 - Page NOt Found IDIOT !!</h1>
        </div>
        </>
     );
}
 
export default PageNotFound;