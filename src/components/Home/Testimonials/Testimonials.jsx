import { useState, useEffect } from "react";
import Loading from "react-loading";
import { Api } from "../../../lib";
import "./Testimonials.css";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getTestimonials() {
    setLoading(true);
    try {
      setLoading(true);
      let response = await fetch(Api.testimonials, {
        type: "GET",
        headers: { "Response-Type": "application/json" },
      });
      response = await response.json();
      setTestimonials(response);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getTestimonials();
  }, []);
  return (
    <section className="testimonial-section">
      <div className="section-header">
        <h2>Clients are Loving Our App</h2>
      </div>
      <div className="testimonial-container">
        {loading ? (
          <div className="testimonial-loading-container">
            <Loading type="spin" width={30} color="#212121" />
          </div>
        ) : (
          testimonials.map((data) => (
            <TestimonialCard key={data.id} {...data} />
          ))
        )}
      </div>
    </section>
  );
}

function TestimonialCard(props) {
  return (
    <div className="testimonial-card">
      <div className="quote-icon">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 2.02926C17.3099 1.59385 15.3119 2.10842 14.0058 3.57298C12.6998 5.03754 12.0468 7.19479 12.0468 10.0447V18.1196H20V10.0447H15.9064C15.692 8.61976 15.8869 7.46197 16.4912 6.57136C17.115 5.68075 18.1287 5.29482 19.5322 5.41357L20 2.02926ZM7.95322 2.02926C5.26316 1.59385 3.26511 2.10842 1.95906 3.57298C0.653022 5.03754 0 7.19479 0 10.0447V18.1196H7.95322V10.0447H3.85965C3.64522 8.61976 3.84016 7.46197 4.44444 6.57136C5.06823 5.68075 6.08187 5.29482 7.48538 5.41357L7.95322 2.02926Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="rating">
        {props.starRating >= 5
          ? "★★★★★"
          : props.starRating >= 4
            ? "★★★★☆"
            : props.starRating >= 3
              ? "★★★☆☆"
              : props.starRating >= 2
                ? "★★☆☆☆"
                : props.starRating >= 1
                  ? "★☆☆☆☆"
                  : "☆☆☆☆☆"}
      </div>
      <p className="testimonial-text">{props.comment}</p>
      <div className="testimonial-info">
        <img
          src={props.avatarUrl}
          alt={props.author}
          className="testimonial-avatar"
        />
        <div>
          <h4 className="testimonial-name">{props.author}</h4>
          <p className="testimonial-role">{props.jobRole}</p>
        </div>
      </div>
    </div>
  );
}
