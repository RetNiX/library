import { FunctionComponent, useEffect, useState } from "react";
import { getBooks } from "../services/booksService";
import Book from "../interfaces/Book";
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";

interface BooksTableProps {
    booksChanged: boolean;
    setBooksChanged: Function;
}

const BooksTable: FunctionComponent<BooksTableProps> = ({ booksChanged, setBooksChanged }) => {
    let [books, setBooks] = useState<Book[]>([]);
    let [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
    let [id, setId] = useState<number>(0);
    let [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
    useEffect(() => {
        getBooks().then((res) => setBooks(res.data)).catch((err) => console.log(err));
    }, [booksChanged]);

    let render = () => setBooksChanged(!booksChanged);
    return (
        <>
            {books.length ? (<table className="table table-striped">
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
                <tbody>
                    {books.map((book: Book) => <tr key={book.id}>
                        <td><b>{book.id}</b></td>
                        <td>{book.name}</td>
                        <td>{book.author}</td>
                        <td>{book.genre}</td>
                        <td>{book.price}</td>
                        <td><i className="fa-solid fa-pencil" style={{ color: "#03b006" }} onClick={() => {setOpenUpdateModal(true); setId(book.id as number)}}></i></td>
                        <td><i className="fa-solid fa-trash" style={{ color: "#d50707" }} onClick={() => {setOpenDeleteModal(true); setId(book.id as number)}}></i></td>
                    </tr>
                    )}
                </tbody>
            </table>)
                :
                (<p className="text-danger display-5">There are no Books !</p>)}
            <DeleteModal show={openDeleteModal} onHide={() => setOpenDeleteModal(false)} render={render} bookId={id} />
            <UpdateModal show={openUpdateModal} onHide={() => setOpenUpdateModal(false)} render={render} bookId={id} />
        </>
    );
}

export default BooksTable;