import "../styles/About.css";
import NikkiPhoto from "../assets/Nikki.jpg";
import FamilyPhoto from "../assets/Thecarsos.jpg";
export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">

        {/* LEFT – FAMILY PHOTO */}
        <div className="about-image-wrapper">
          
  {/* Nikki Main Photo */}
  <img
    src={NikkiPhoto}
    alt="Nikki Cozzi Carso"
    className="about-image"
  />

  {/* Family Photo */}
  <img
    src={FamilyPhoto}
    alt="The Carso Family"
    className="family-image"
  />

  {/* Quote */}
  <p className="family-quote">
    “In her final days, Mom said that if one soul was saved because of what she went through,
    it would all be worth it. Our prayer is that through this scholarship, students grow in
    their relationship with God.”
    <br /><br />
    — <span className="carso-signature">The Carso's</span>
  </p>
        </div>

        {/* RIGHT – TEXT */}
        <div className="about-text">
          <h1 className="about-title">Nikki Cozzi Carso</h1>

          
          <p>
            Nikki truly embodied what it means to be a teacher, reaching far beyond the classroom. She taught 8th grade at Holy Family Catholic Academy and was a devoted parishioner at St. James Church in Arlington Heights. Gifted at making complex ideas understandable, she combined intelligence with poise and a genuine eagerness to share knowledge. She was especially passionate about Catholic education, believing it gave students meaningful ways to encounter and engage with God in daily life.

          </p>
          <p>
            In February 2020, Nikki passed away from pancreatic cancer. In her final days, she said, “If one soul was saved because of what I went through, it would all be worth it.” Instead of flowers, family and friends were asked to donate toward a scholarship supporting Catholic school education.

          </p>
          <p>
Thanks to an outpouring of generosity, the Nikki scholarship was established, awarding $1,000 annually to one student from Holy Family Catholic Academy and one from St. James Catholic School. Teachers nominate students who are active in their faith, demonstrate a deep understanding of their beliefs, and show compassion, kindness, and empathy. They are committed learners, independent thinkers, and active in service both in and out of school. Their actions reflect a dedication to using their talents to positively impact the community and inspire those around them. 
          </p>
          <p>
            Though the scholarship represents only one aspect of Nikki’s life, it carries forward her legacy.
          </p>

          <p>
To date, four remarkable students from Holy Family and St. James have received the award, demonstrating faith, character, and service. With ongoing support, 
we hope this tradition will continue for years to come.
          </p>

          <p>
John 11:4 “When he heard this, Jesus said: This sickness will not end in death. No, it is for God’s glory so that God’s Son may be glorified through it.”

          </p>
        </div>

      </div>
    </div>
  );
}
