import "./Learn.css";

export default function Learn() {
  return (
    <div className="container">
      {/* First Section */}
      <div className="section">
        <div className="text-content">
          <h1>Make your money transfer simple and clear</h1>
          <ul className="features">
            <li>Banking transactions are free for you</li>
            <li>No monthly cash commission</li>
            <li>Manage payments and transactions online</li>
          </ul>
          <a href="#" className="learn-more-btn">
            Learn more
          </a>
        </div>
        <div className="media-placeholder">
          <img src="images/moneytransfer.svg" />
        </div>
      </div>

      {/* Second Section */}
      <div className="section">
        <div className="media-placeholder">
          <img src="images/paymentreceive.svg" />
        </div>
        <div className="text-content">
          <h1>Receive payment from international bank details</h1>
          <div className="payment-section">
            <div className="payment-features">
              <h3>Manage your payments online</h3>
              <p>Mollis congue egestas egestas fermentum fames.</p>
            </div>
            <div className="payment-features">
              <h3>Fast and secure transfers</h3>
              <p>A elementum et imperdiet enim, pretium etiam facilisi.</p>
            </div>
          </div>
          <a href="#" className="learn-more-btn">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}
