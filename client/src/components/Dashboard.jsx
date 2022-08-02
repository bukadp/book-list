import React, {useEffect, useState} from "react";
import {booksAPI} from "../api/api";
import '../../../client/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {Table} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import AddBook from "./AddBook";


function Dashboard() {
    const [booksData, setBooksData] = useState('')

    useEffect(() => {
        async function fetchMyAPI() {
            const response = await booksAPI.getData()
            setBooksData(response)
        }
        fetchMyAPI()
    }, [])

    const handleEdit = (item) => {
        console.log('idEDIT', item)
    }

    const handleDelete = async (id) => {
        await booksAPI.deleteBook(id)
    }

    return (
        <div>

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Book title</th>
                    <th>Author name</th>
                    <th>Category</th>
                    <th>ISBN</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {booksData &&
                    booksData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                            <td>{item.category}</td>
                            <td>{item.isbn}</td>
                            <td>
                                <NavLink
                                    to={'/editbook/'+(item.id)}
                                    state={{ item }}
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-pencil-square me-4" viewBox="0 0 16 16"
                                     onClick={()=>{
                                         handleEdit(item)}}>
                                    <path
                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fillRule="evenodd"
                                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                                </NavLink>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF7F50"
                                     className="bi bi-trash3 pointer" viewBox="0 0 16 16"
                                     onClick={()=>{
                                         handleDelete(item.id)}}>
                                    <path
                                        d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                </svg>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>


            <div className="pt-3">
                <NavLink to={'/addbook'}>
                    <div>
                        <Button variant="primary">Add Book</Button>
                    </div>
                </NavLink>
            </div>


        </div>
    )
}

export default Dashboard;


{/*            {Array.isArray(booksData)
                ?
                booksData.map((book) => {
                return <div>
                    <div>{book.title}</div>
                    <div>{book.author}</div>
                </div>
            })
                : <span>Loading...</span>
            }*/
}


/*


const columns = [
    {
        title: 'Book title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Author name',
        dataIndex: 'author',
        key: 'author',
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
    },
    {
        title: 'ISBN',
        dataIndex: 'isbn',
        key: 'isbn',
    },
    {
        key: "actions",
        title: "Actions",
        render: (record) => {
            return (
                <>
                    <EditOutlined
                        onClick={() => {
                            onEditBook();
                        }}
                    />
                    <DeleteOutlined
                        onClick={() => {
                            onDeleteBook();
                        }}
                        style={{ color: "red", marginLeft: 12 }}
                    />
                </>
            );
        },
    },
]
*/

/*{Array.isArray(booksData)
                ?
                booksData.map((book) => {
                    return <div>
                        <div>{book.title}</div>
                        <div>{book.author}</div>
                    </div>
                })
                : <span>Loading...</span>
            }
            <button onClick={() => {
                booksAPI.getData()
            }

            }>122
            </button>*/


{/* <button type="button" className="btn btn-primary">Primary</button>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>
*/
}
