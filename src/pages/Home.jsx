import "../styles/Home.css"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero">
      <div className="hero-box">

        <h1>
          Nikki Cozzi-Carso Scholarship Annual 5K <br />
          <span style={{ fontSize: "1.25rem", fontWeight: "400" }}>
            Presented by Chicago Canicross Club
          </span>
        </h1>

        <p>
          Thank you for joining us for our fun family-friendly event open to 
          runners, walkers, and canicrossers* (yes—people brought their dogs!). 
          Whether participants were chasing a personal best, 
          enjoying a morning stroll, or letting their pups lead the way, 
          there was a place for everyone at the starting line.
        </p>

        <p>
          All proceeds support the Nikki Cozzi-Carso Scholarship Fund, which 
          provides financial aid to local Catholic school students. The funds 
          help continue Nikki’s legacy by ensuring children in our community 
          have access to a faith-based education rooted in academic excellence, 
          compassion, and service.
        </p>

        <h2>Race Highlights Included:</h2>

        <ul>
          <li>Scenic 5K trail (paved option available)</li>
          <li>Canicross-friendly course for you and your dog</li>
          <li>Awards for top finishers (both two- and four-legged!)</li>
          <li>Post-race refreshments &amp; community fun</li>        
        </ul>

        <p>
          Thank you to those who ran, walked, and canicrossed all for a great cause!
        </p>

        {/* --- NEW SECTION ADDED BELOW --- */}
       <div className="cta-section">
  <p className="cta-text">
    Feel free to click the buttons below to view the Gallery or Donate.
  </p>

  <div className="cta-buttons">

    {/* ----- GALLERY BUTTON (external link) ----- */}
    <a 
      href="https://northcoastcaninecontent.pixieset.com/nccs5k/?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
      className="cta-btn cta-btn-gallery"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Gallery
    </a>

    {/* ----- DONATE BUTTON (Stripe checkout) ----- */}
    <a
      href="https://buy.stripe.com/5kQcN71pJdev338fNP2Ji00"
      className="cta-btn cta-btn-donate"
      target="_blank"
      rel="noopener noreferrer"
    >
      Donate
    </a>

  </div>
</div>

      </div>
    </div>
  );
}
