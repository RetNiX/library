import { FunctionComponent } from "react";

interface BooksTableProps {

}

const BooksTable: FunctionComponent<BooksTableProps> = () => {
    return (
        <>
            <div className="col-md-8">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Geners</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </>
    );
}

export default BooksTable;