// src/components/Home.js
import React from 'react';
import Navbar from './Navbar';
import Banner from './Home/Banner';
import BooksCards from './Home/BooksCards';
import Feedback from './Home/feedback';

function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <BooksCards />
            <Feedback />
        </>
    );
}

export default Home;
