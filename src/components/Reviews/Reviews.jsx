import '../../index.css';
import './reviews.css';

function Reviews() {
  return (
      <div className="row-6">
        <div className="reviews-grid">

        <div className="reviews-left">
          <h5 className="grid-full"> Reviews Header </h5>
          <p>Star Rating</p>
        </div>


        <div className="reviews-right centered">
          <button className='leftNav'>{'<'}</button>
          <div>
            <h3>Reviewer Name & Date</h3>
            <p>Review text</p>
          </div>
          <button className='leftNav'>{'<'}</button>
        </div>




        </div>
      </div>
  );
}

export default Reviews;
