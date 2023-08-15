import { FunctionComponent, useState } from "react";
import NewBook from "./NewBook";
import BooksTable from "./BooksTable";

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    let [booksChanged, setBooksChanged] = useState<boolean>(false);

    return (
        <>
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <NewBook booksChanged={booksChanged} setBooksChanged={setBooksChanged} />
                    </div>
                    <div className="col-md-8">
                        <BooksTable booksChanged={booksChanged} setBooksChanged={setBooksChanged} /> {/* setbookschanged we will need further when you delete or edit the book */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;