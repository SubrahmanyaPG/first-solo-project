
import profileImage from "../assets/WhatsApp Image 2026-09-26 at 7.44.57 PM.jpeg";

export default function Info() {
  return (
    <div className="info">
      <img className="profile-img" src={profileImage} alt="Subrahmanya P G" />

      <h1>Subrahmanya P G</h1>
      <h3> Software Developer</h3>
      <p>subrahmanya.website</p>

      <div className="buttons">
        <a href="gulabisubrahmanya@gmail.com">
          Email
        </a>

        <a href="https://www.linkedin.www.linkedin.com/in/subrahmanya-p-g/">
          LinkedIn
        </a>
      </div>
    </div>
  );
}

 
