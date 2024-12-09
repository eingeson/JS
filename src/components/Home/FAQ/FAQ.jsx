import { useState, useEffect } from "react";
import Loading from "react-loading";
import { Api } from "../../../lib";
import "./FAQ.css";

export default function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getFaqs() {
    setLoading(true);
    try {
      setLoading(true);
      let response = await fetch(Api.faqs, {
        type: "GET",
        headers: { "Response-Type": "application/json" },
      });
      response = await response.json();
      setFaqs(response);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getFaqs();
  }, []);

  return (
    <div className="faq-container">
      <div className="left-section">
        <h1>Any questions? Check out the FAQs</h1>
        <p className="subtitle">
          Still have unanswered questions and need to get in touch?
        </p>

        <div className="contact-options">
          <div className="contact-option">
            <div className="icon">
              <img src="images/phone.svg" />
            </div>
            <div className="text">Still have questions?</div>
            <a href="#">Contact us</a>
          </div>
          <div className="contact-option">
            <div className="icon">
              <img src="images/msg.svg" />
            </div>
            <div className="text">Don't like phone calls?</div>
            <a href="#">Contact us</a>
          </div>
        </div>
      </div>

      <div className="right-section">
        {loading ? (
          <div className="faq-loading-container">
            <Loading type="spin" width={20} color="#212121" />
          </div>
        ) : (
          faqs.map((data) => <FAQSingle key={data.id} {...data} />)
        )}
      </div>

      <div className="newsletter">
        <div className="icon">🔔</div>
        <div className="text">
          Subscribe to our newsletter to stay informed about the latest updates
        </div>
        <div className="subscription">
          <input type="email" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

function FAQSingle(props) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`faq ${open ? "open" : ""}`}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="faq-question">
        <span>{props.title}</span>
        <div className="faq-arrow">&#x25BC;</div>
      </div>
      <div className="faq-answer">{props.content}</div>
    </div>
  );
}
