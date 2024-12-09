import "./Working.css";

export default function Working() {
  return (
    <section id="phone-section">
      <h2 className="phone-section-heading">How does it work?</h2>
      <div className="phone-container">
        <div id="phone-1" className="phones">
          <img src="images/iPhone-right.svg" />
        </div>
        <div id="phone-2" className="phones">
          <img src="images/iPhone-middle.svg" />
        </div>
        <div id="phone-3" className="phones">
          <img src="images/iPhone-right.svg" />
        </div>
      </div>
      <div className="footer-phone-section">
        <p>Latest transaction history</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          cumque?
        </p>
      </div>
    </section>
  );
}
