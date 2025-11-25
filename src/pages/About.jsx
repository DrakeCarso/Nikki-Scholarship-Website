import "../styles/About.css";
import FamilyPhoto from "../assets/Thecarsos.jpg";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">

        {/* LEFT – FAMILY PHOTO */}
        <div className="about-image-wrapper">
          <img
            src={FamilyPhoto}
            alt="The Carso Family"
            className="about-image"
          />
        </div>

        {/* RIGHT – TEXT */}
        <div className="about-text">
          <h1 className="about-title">Nikki Cozzi Carso</h1>

          <h2 className="section-header">Holy Family</h2>
          <p>
            The student who would receive this award exhibits a commitment to growing
            in their faith and a dedication to serving others, mirroring the values
            and actions exemplified by Mrs. Nikki Carso. They actively participate
            in religious activities, demonstrate a strong understanding of their
            faith, and serve as a positive role model for their peers in living out
            the principles of compassion, kindness, and empathy.
          </p>

          <p>
            Additionally, they engage in service-oriented initiatives within the
            school and broader community—selflessly giving their time and talents to
            support those in need. Like Mrs. Carso, they embody the spirit of faith
            and service, enriching the lives of those around them through their
            exemplary actions and unwavering commitment to making a difference.
          </p>

          <h2 className="section-header">St. James</h2>
          <ul>
            <li>
              Commitment to learning — “Most men seem to live according to sense
              rather than reason.”
            </li>
            <li>
              Compassionate — “We must love one another as God loves each one of us.”
            </li>
            <li>
              Independent — “Go forth and set the world aflame.”
            </li>
            <li>
              Commitment to service inside and outside the classroom...
            </li>
            <li>
              Involvement with at least one service initiative
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
