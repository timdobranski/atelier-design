import { useState } from 'react';
import reviews from '../../assets/fakeReviews.js';
import '../../index.css';
import './reviews.css';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';

function Reviews() {
  const [reviewIndex, setReviewIndex] = useState(0);

  const handleLeftNav = () => {
    if (reviewIndex === 0) {
      setReviewIndex(reviews.length - 1);
    } else {
      setReviewIndex(reviewIndex - 1);
    }
  };
  const handleRightNav = () => {
    if (reviewIndex === reviews.length - 1) {
      setReviewIndex(0);
    } else {
      setReviewIndex(reviewIndex + 1);
    }
  }
  function StarRating(rating) {
    console.log('rating: ', rating)
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      stars += i <= rating ? '★' : '☆';
    }
    return <div className='review-stars'>{stars}</div>;
  }
  const ReviewDots = ({ reviewIndex }) => {
    return (
      <div className="dot-container">
        {[0, 1, 2].map((index) => (
          <BsDot
            key={index}
            className={reviewIndex === index ? 'active-dot' : 'inactive-dot'}
          />
        ))}
      </div>
    );
  };
  return (
      <div className="row-6">
        <div className="reviews-grid">
          <div className="reviews-left">
            <h3 className='section-titles'> OUR REVIEWS </h3>
            <p className='reviews-description-paragraph'>See what our clients are saying about our work!</p>
            <h5 className="review-title"> {`"${reviews[reviewIndex].title}"`} </h5>
            <p>{StarRating(reviews[reviewIndex].rating)}</p>
          </div>

        <div className="reviews-right centered">
          <AiOutlineLeft className='nav' onClick={handleLeftNav} />
          <div className='review-container'>
            <h3 className='reviews-header'>{`${reviews[reviewIndex].name} ${reviews[reviewIndex].date}`}</h3>
            <p className='reviews-text'>{`"${reviews[reviewIndex].text}"`}</p>
            <ReviewDots reviewIndex={reviewIndex} />
          </div>
          <AiOutlineRight className='nav' onClick={handleRightNav} />
        </div>
        </div>
      </div>
  );
}

export default Reviews;
