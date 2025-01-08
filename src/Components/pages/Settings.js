import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-container">
      <aside className="sidebar">
        <h2>Settings</h2>
        <ul>
          <li><i className="fas fa-cogs"></i> Preferences</li>
          <li><i className="fas fa-chart-line"></i> Trading Settings</li>
          <li><i className="fas fa-bell"></i> Notifications</li>
          <li><i className="fas fa-question-circle"></i> Help</li>
        </ul>
      </aside>

      <main className="main-content">
        <h1>Account Settings</h1>

        <section className="withdrawal-section">
          <h2>Withdrawals</h2>
          <form>
            <div className="form-group">
             
              <input type="number" id="withdrawal-amount" placeholder="Enter amount" required />
            </div>
        
            <button type="submit" className="btn">Withdraw</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Settings;
