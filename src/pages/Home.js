import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SurplusFoodForm from '../components/SurplusFoodForm';
import './Home.css';

function Home() {
  const [data, setData] = useState([]);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => setData(data));

    // Hide the intro after 3 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      <Header />
      <main>
        {showIntro ? (
          <section className="intro">
            <h2>Welcome to Hand2Plate</h2>
            <p>Join us in our mission to reduce food waste and help those in need.</p>
          </section>
        ) : (
          <>
            <section className="hero">
              <h2>Help Us Reduce Food Waste</h2>
              <p>Join us in our mission to donate surplus food to those in need.</p>
              <div className="cta-buttons">
                <a href="/register-donor" className="cta-button">Register as Donor</a>
                <a href="/register-receiver" className="cta-button">Register as Receiver</a>
              </div>
            </section>

            <section className="how-it-works">
              <h2>How It Works</h2>
              <div className="steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h3>Donate</h3>
                  <p>Restaurants donate surplus food through our platform.</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h3>Collect</h3>
                  <p>Our volunteers collect the donated food.</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h3>Distribute</h3>
                  <p>The food is distributed to local charities and those in need.</p>
                </div>
              </div>
            </section>

            <section className="testimonials">
              <h2>Testimonials</h2>
              <div className="testimonials-content">
                {data.map((item, index) => (
                  <div key={index} className="testimonial">
                    <p>{item.message}</p>
                    <p>- {item.author}</p>
                  </div>
                ))}
              </div>
            </section>

          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Home;