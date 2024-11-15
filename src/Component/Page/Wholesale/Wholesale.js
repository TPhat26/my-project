import React from 'react';
import './Wholesale.css';

const Wholesale = () => {
  return (
    <div className="wholesale-container">
      <header className="wholesale-header">
        <h1>Wholesale Coffee Roaster</h1>
        <p>
          Partner with OZO Coffee for your wholesale coffee needs. We are a full-service wholesale coffee roasting and consulting company here for you.
          We are eager to help you with all your coffee-related needs.
        </p>
      </header>

      <section className="wholesale-services">
        <div className="service">
          <h2>Wholesale Coffee</h2>
          <p>Cafes, Offices + Restaurants</p>
          <p>
            Fresh roasted OZO coffee straight to your cafe, restaurant, market, or office. We have a comprehensive wholesale program that emphasizes quality at every level.
          </p>
        </div>

        <div className="service">
          <h2>Equipment, Sales + Service</h2>
          <p>Sales, Service, Training + Support</p>
          <p>
            Prompt and reliable equipment installation, training, service, and support. We distribute and service brands like Synesso, La Marzocco, and many more.
          </p>
        </div>

        <div className="service">
          <h2>Coffee Catering</h2>
          <p>Event Service</p>
          <p>
            Need coffee for your upcoming event? We offer catering services for groups of 10-300 people. Contact us for more information!
          </p>
        </div>

        <div className="service">
          <h2>Education</h2>
          <p>Training Lab + Public Classes</p>
          <p>
            Our lab is dedicated to quality control, wholesale training, and coffee education. Join our classes, whether you're a beginner or a professional.
          </p>
        </div>
      </section>

      <section className="wholesale-inquiry">
        <h2>Wholesale Inquiry</h2>
        <form className="inquiry-form">
          <div className="form-row">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Name of Business" required />
            <input type="text" placeholder="Type of Business" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="City" required />
            <input type="text" placeholder="State" required />
          </div>

          <textarea placeholder="Do you currently have a coffee program?" required></textarea>
          <textarea placeholder="What are 3 things you are looking for in a coffee provider?" required></textarea>
          <textarea placeholder="How much coffee do you use weekly?" required></textarea>

          <div className="checkbox-group">
            <h3>What type of coffee services are you interested in?</h3>
            <label><input type="checkbox" /> Espresso</label>
            <label><input type="checkbox" /> Individual Pour-Over Brewing</label>
            <label><input type="checkbox" /> French Press</label>
            <label><input type="checkbox" /> Automatic Batch Brewing</label>
            <label><input type="checkbox" /> Retail Bean Sales</label>
            <label><input type="checkbox" /> Other</label>
          </div>

          <textarea placeholder="What type of coffee equipment do you currently own/use?" required></textarea>
          <textarea placeholder="Additional Comments"></textarea>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Wholesale;
