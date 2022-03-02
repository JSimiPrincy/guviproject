import { useState } from "react";
import './Book.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Pagination from "@material-ui/lab/Pagination"
import axios from "axios";

function Book() {
    const [books, setBooks] = useState(null);
    const [myOptions, setMyOptions] = useState([])
    const fetchData = async () => {
        const response = await axios.get("https://www.anapioficeandfire.com/api/books?pageSize=30");
        setBooks(response.data);
        for (var i = 0; i < response.data.length; i++) {
            myOptions.push(response.data[i].name)
        }
        setMyOptions(myOptions);
    };
    return (
        <div className="Books">
            <div className="fetchdata" onClick={fetchData}>
                Get Books
            </div>
            <div className="search" align="center">
               <Autocomplete
               style={{ width: 500 }}
               freeSolo
               autoComplete
               autoHighlight
               options={myOptions}
               renderInput={(params) => (
                  <TextField {...params}
                  onChange={fetchData}
                  variant="outlined"
                  label="Search Box"
                  />
                )}
                />
            </div>
            <br />
            <div className="books">
            {books && books.map((book, index) => {
                    const authors = book.authors.join(",");
                    return (
                        <div className="book" key={index}>
                            <h4><i>Book-{index+1}</i></h4>
                            <div className="details">
                                <p>Author: {authors}<br />
                                name: {book.name}<br />
                                isbn: {book.isbn}<br />
                                MediaType: {book.mediaType}
                                Pages: {book.numberOfPages}<br />
                                Released: {book.released}<br />
                                country: {book.country}<br />
                                Publisher: {book.publisher}<br />
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
export default Book;