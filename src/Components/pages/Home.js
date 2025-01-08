import React from 'react'; 
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="overlay"></div>  
      <div className="content">
        <h1>Trade <strong>Forex </strong> with Confidence</h1>
        <p>Join Millions of Traders Worldwide</p>
        <button className="cta-button">OPEN DEMO ACCOUNT</button>
        <button className="cta-button live-account">OPEN LIVE ACCOUNT</button>
        <section className="features">
          <img src='/Assets/awards1-qbavhc29tfey9u9nvsqu3tr5dosp9ifo3n51jtjfdw.png' alt='Feature 92' />
          <img src='/Assets/awards2-qbavhc29tfey9u9nvsqu3tr5dosp9ifo3n51jtjfdw.png' alt='Feature 92f' />
          <img src='/Assets/awards3-qbavhc29tfey9u9nvsqu3tr5dosp9ifo3n51jtjfdw.png' alt='Feature 92fg' />
        </section>
      </div>
    
    </>
  );
}

export default Home;
