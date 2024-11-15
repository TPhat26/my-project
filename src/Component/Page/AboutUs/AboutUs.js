import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (email) {
      localStorage.setItem('subscribedEmail', email);
      setShowThankYou(true);
      setEmail('');
      setTimeout(() => setShowThankYou(false), 3000);
    }
  };

  return (
    <div className="about-us-container">
      <section className="section">
        <div className="text">
          <h2>Our Mission</h2>
          <p>
            Cafe Ethnical was founded in 2015 and aims to bring exceptional, sustainable coffee to the world. Our team collaborates with farmers who practice sustainable farming techniques. This is reflected in our high-quality coffee beans and dedication to creating a positive impact on the environment.
          </p>
        </div>
        <div className="image">
          <img src="https://images.squarespace-cdn.com/content/v1/50ce0513e4b0c301a8234314/e71a24ba-f3ef-47d6-ade2-3413ba68e0a4/PLANT_CUP_BW.jpg?format=1000w" alt="Mission" />
        </div>
      </section>

      <section className="section reverse">
        <div className="text">
          <h2>Our Unique Methodology</h2>
          <p>
            At Cafe Ethnical, we work closely with our farmers, ensuring that their traditional techniques blend harmoniously with modern advancements. Our unique process allows us to maintain the integrity and quality of each coffee bean, bringing a rich and smooth taste to every cup.
          </p>
        </div>
        <div className="image">
          <img src="https://images.squarespace-cdn.com/content/v1/50ce0513e4b0c301a8234314/1e146bec-bf9e-42fb-823e-5eba61a4349f/details_offerings+square.png?format=1000w" alt="Methodology" />
        </div>
      </section>

      <section className="section">
        <div className="text">
          <h2>Our Process</h2>
          <p>
            From seed to cup, every step of our coffee production is carefully monitored to ensure premium quality. We select only the finest beans and roast them in small batches, ensuring a unique flavor profile that represents our commitment to sustainability and excellence.
          </p>
        </div>
        <div className="image">
          <img src="https://images.squarespace-cdn.com/content/v1/50ce0513e4b0c301a8234314/6be04c78-4733-4d0e-8476-e5de3d19365d/MILL_BW.jpg?format=1000w" alt="Process" />
        </div>
      </section>

      <footer className="footerAB">
        <div className="footer-links">
          <a href="#locations">Locations</a>
          <a href="#press">Press</a>
          <a href="#accessibility">Accessibility</a>
          <a href="#faq">FAQ</a>
        </div>
        
        <div className="social-media">
          <a href="#facebook"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#instagram"><i className="fa-brands fa-instagram"></i></a>
        </div>

        <div className="newsletter">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
          />
          <button onClick={handleSubscribe}>Keep In Touch</button>
        </div>

        {showThankYou && <div className="thank-you-message">Thank You!</div>}
      </footer>
    </div>
  );
};

export default AboutUs;
