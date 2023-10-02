import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Feedback() {
  const [bookName, setBookName] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a formatted review message
    const reviewMessage = `Book Name: ${bookName}\nReview: ${review}`;

    // Use Swal to display the custom alert
    Swal.fire({
      title: 'Review Details',
      html: `<p><strong>Book Name:</strong> ${bookName}</p><p><strong>Review:</strong> ${review}</p>`,
      icon: 'info',
      confirmButtonText: 'Close'
    });

    // Reset the form
    setBookName('');
    setReview('');
  };

  return (
    <section className='feedback container'>
      <hr />
      <h1>Book Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <div className='forms'>
          <label htmlFor="bookName">Book Name:</label>
          <input
            type="text"
            id="bookName"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            required
          />
        </div>
        <div className='forms'>
          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default Feedback;