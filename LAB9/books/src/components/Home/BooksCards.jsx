import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function BooksCards() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [bookType, setBookType] = useState('');
    const [error, setError] = useState(null);

    const fetchBooks = () => {
        setError(null);

        if (!searchQuery) {
            setError('Please enter a search query.');
            return;
        }

        const API_KEY = 'Please use your GAPI here!!!';

        let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${API_KEY}`;

        if (bookType) {
            apiUrl += `&filter=${bookType}`;
        }

        setLoading(true);
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setBooks(data.items || []);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching books:', error);
                setError('An error occurred while fetching books. Please try again later.');
                setLoading(false);
            });
    };

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            fetchBooks();
        }, 500);

        return () => clearTimeout(debounceTimer);
    }, [searchQuery, bookType]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
    };

    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleBookTypeChange = (e) => {
        setBookType(e.target.value);
    };

    const handleSearch = () => {
        fetchBooks();
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            fetchBooks();
        }
    };

    return (
        <section className="bookcards container">
            <center>
                <h1>Explore the latest books</h1>
            </center>
            <div className="search-controls ">
                <div>
                    <label htmlFor="searchQuery">Search Query:</label>
                    <input
                        type="text"
                        id="searchQuery"
                        value={searchQuery}
                        onChange={handleSearchQueryChange}
                        onKeyPress={handleKeyPress}
                        placeholder="Enter a search query"
                    />
                </div>

                <div>
                    <label htmlFor="bookType">Book Type:</label>
                    <select id="bookType" value={bookType} onChange={handleBookTypeChange}>
                        <option value="">All</option>
                        <option value="ebooks">eBooks</option>
                        <option value="free-ebooks">Free eBooks</option>
                        <option value="paid-ebooks">Paid eBooks</option>
                    </select>
                </div>


            </div>

            <div className='text-center'>{error && <div className="error-message">{error}</div>}</div>


            <div className="book-cards">
                <Slider {...settings}>
                    {books.map((book) => (
                        <div className="card" key={book.id}>
                            <center>
                                <img
                                    src={book.volumeInfo.imageLinks?.thumbnail || ''}
                                    alt={book.volumeInfo.title || '-'}
                                />
                            </center>
                            <hr />
                            <div className="text-block text-center">
                                <p>Name: {book.volumeInfo.title || 'N/A'}</p>
                                <p>Author: {book.volumeInfo.authors?.join(', ') || 'N/A'}</p>
                                <p>Year: {book.volumeInfo.publishedDate || 'N/A'}</p>
                                {book.saleInfo?.listPrice?.amount && (
                                    <p>Price: ${book.saleInfo.listPrice.amount.toFixed(2)}</p>
                                )}

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default BooksCards;
