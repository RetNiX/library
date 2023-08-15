import { FunctionComponent } from "react";
import { Button, Modal } from "react-bootstrap";
import { deleteBook } from "../services/booksService";
import { successMsg } from "../services/feedbackService";

interface DeleteModalProps {
    show: boolean;
    onHide: Function;
    render: Function;
    bookId: number;
}

const DeleteModal: FunctionComponent<DeleteModalProps> = ({ show, onHide, render, bookId }) => {
    return (
        <>
            <Modal size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={show} onHide={() => onHide()}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete a Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete the book?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => {
                        deleteBook(bookId).then((res) => {
                            render();
                            onHide();
                            successMsg("The book has been Deleted!");
                        }).catch((err) => console.log(err))
                    }}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={() => onHide()}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteModal;