import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {booksAPI} from "../api/api";
import {NavLink, useNavigate} from "react-router-dom";
import {Modal} from "react-bootstrap";


function AddBook() {
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleCloseModal = () => {
        setShow(false)
        navigate("/")
    };

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        })

        if (!!errors[field]) {
            setErrors({
                ...errors,
                [field]: null,
            })
        }
    }

    const validateForm = () => {
        const {title, author, category, isbn} = form
        const newErrors = {}
        const re = /^(\d+-?)+$/
        const ok = re.test(isbn);
        console.log('ok', ok)

        if (!title || title === '') newErrors.title = 'Please enter title of the book'
        if (!author || author === '') newErrors.author = 'Please enter author of the book'
        if (!category || category === 'Select category') newErrors.category = 'Please select category'
        if (!isbn || isbn === '') newErrors.isbn = 'Please enter isbn of the book'
        else if (!ok) newErrors.isbn = 'ISBN may start from number. Contains only digits and dash'
        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formErrors = validateForm()
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors)
        } else {
            fetchApiPostBook(form)
        }
    }

    const fetchApiPostBook = async (book) => {
        await booksAPI.postBook(book)
        await setShow(true)
        setTimeout(() => {setShow(false)
            navigate("/")
        }, 2000);

    }

    return (
        <div>
            <div className="d-flex mb-2 justify-content-between">
                <NavLink to={'/'}>
                    <Button variant="light" type="button" className="align-items-end">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                        Back to Dashboard
                    </Button>
                </NavLink>
                <h2>Fill all fields</h2>
            </div>

            <Form>
                <Form.Group className="mb-2" controlId="title">
                    <Form.Control
                        type="text"
                        placeholder="Book title"
                        value={form.title}
                        onChange={(e) => setField('title', e.target.value)}
                        isInvalid={!!errors.title}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.title}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-2" controlId="author">
                    <Form.Control
                        type="text"
                        placeholder="Author name"
                        value={form.author}
                        onChange={(e) => setField('author', e.target.value)}
                        isInvalid={!!errors.author}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.author}
                    </Form.Control.Feedback>

                </Form.Group>

                <Form.Group className="mb-2" controlId="category">
                    <Form.Select
                        value={form.category}
                        onChange={(e) => setField('category', e.target.value)}
                        isInvalid={!!errors.category}
                    >
                        <option>Select category</option>
                        <option value='Fantasy'>Fantasy</option>
                        <option value='Novella'>Novella</option>
                        <option value='Detective'>Detective</option>
                    </Form.Select>
                    <Form.Control.Feedback type='invalid'>
                        {errors.category}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-2" controlId="isbn">
                    <Form.Control
                        type="text"
                        placeholder="ISBN"
                        value={form.isbn}
                        onChange={(e) => setField('isbn', e.target.value)}
                        isInvalid={!!errors.isbn}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.isbn}
                    </Form.Control.Feedback>
                </Form.Group>
                <div className="d-flex justify-content-end">
                    <Button variant="primary" type="submit"
                            onClick={handleSubmit}>
                        Add a Book
                    </Button>
                </div>
            </Form>


            <Modal show={show} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Book added successfully</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddBook;
