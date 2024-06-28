import React, { useState } from 'react';
import './Rateus.css';

const RateUs = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [showMessage, setShowMessage] = useState(false); // State for showing message
  const [message, setMessage] = useState(''); // State for the message content

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Set the message content and show the message
    setMessage(`Thanks For Your Feedback: "${feedback}"`);
    setShowMessage(true);

    // Hide the message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
      setFeedback('');
    }, 3000);
  };

  return (
    <div className="rate-us-container">
      <center><h1>Rate Us</h1></center>
      <div className="stars">
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;

          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <span
                className="star"
                role="img"
                aria-label={`${ratingValue} star`}
                style={{
                  color: ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9',
                  fontSize: '24px',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              >
                ★
              </span>
            </label>
          );
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Leave your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {showMessage && (
        <div className="custom-toast">
          {message}
        </div>
      )}
    </div>
  );
};

export default RateUs;
