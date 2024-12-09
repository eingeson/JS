import "./Features.css";

export default function Features() {
  return (
    <div className="brand-page-main-container">
      <div className="brand-page-image">
        <img src="images/phonebrandpage.svg" />
      </div>
      <div className="app-features-container">
        <h2>App Features</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam
          voluptatem provident exercitationem vero praesentium, non, uam sint!
        </p>
        <div className="app-features">
          <div id="app-1" className="app-content">
            <img src="images/card-icon.svg" />
            <h3>Easy Payments</h3>
            <p>
              Id mollis consectetur congue egestas egestas suspendisse blandit
              justo.
            </p>
          </div>
          <div id="app-2" className="app-content">
            <img src="images/stats-icon.svg" />
            <h3>Cost Statistics</h3>
            <p>
              Id mollis consectetur congue egestas egestas suspendisse blandit
              justo.
            </p>
          </div>
          <div id="app-3" className="app-content">
            <img src="images/wallet-icon.svg" />
            <h3>Regular Cashback</h3>
            <p>
              Id mollis consectetur congue egestas egestas suspendisse blandit
              justo.
            </p>
          </div>
          <div id="app-4" className="app-content">
            <img src="images/shield-icon.svg" />
            <h3>Data Security</h3>
            <p>
              Id mollis consectetur congue egestas egestas suspendisse blandit
              justo.
            </p>
          </div>
          <div id="app-5" className="app-content">
            <img src="images/support-icon.svg" />
            <h3>Support 24/7</h3>
            <p>
              Id mollis consectetur congue egestas egestas suspendisse blandit
              justo.
            </p>
          </div>
          <div id="app-6" className="app-content">
            <img src="images/smiley-icon.svg" />
            <h3>Top Standards</h3>
            <p>
              Id mollis consectetur congue egestas egestas suspendisse blandit
              justo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
