import React from 'react';
import './Profile.css';

const Profile = () => {
 
  const tradingAccounts = [
    { account: 'MT5 001003', amount: '$590', visits: 20 },
    { account: 'MT4 000434', amount: '$210', visits: 12 },
    { account: 'MT4 004567', amount: '$100', visits: 8 },
    { account: 'MT5 104567', amount: '$100', visits: 14 },
  ];

  return (
    <div className="profile-container">
      <div className="sidebar">
        <div className="profile-photo">
          <img src="/Assets/profile.pic123.jpg" alt="Profile" />
        </div>
        <div className="user-details">
         
          <p><strong>Cynthia Rose</strong>  </p>
          <p>Username:@Rose12</p>
        </div>
        <div className="wallet-section">
     
       
          <p><strong>  
             <svg aria-hidden="true" width="26" fill="white" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="⚙   as15 as16 as17 as18 as56 as7d as7e asby as3t as48 ⚙vbrckh"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 3.884c0-.8.545-1.476 1.306-1.68l.018-.004L10.552.213c.15-.038.3-.055.448-.055.927.006 1.75.733 1.75 1.74V4.5h.75A2.5 2.5 0 0 1 16 7v6.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 13.5V3.884ZM10.913 1.67c.199-.052.337.09.337.23v2.6H2.5c-.356 0-.694.074-1 .208v-.824c0-.092.059-.189.181-.227l9.216-1.984.016-.004ZM1.5 7v6.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.897 1.673 1.681 3.657c-.122.038-.181.135-.181.227v.824a2.492 2.492 0 0 1 1-.208h8.75V1.898c0-.14-.138-.281-.337-.23m0 0-.016.005Zm-9.59.532 9.23-1.987c.15-.038.3-.055.448-.055.927.006 1.75.733 1.75 1.74V4.5h.75A2.5 2.5 0 0 1 16 7v6.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 13.5V3.884c0-.8.545-1.476 1.306-1.68l.018-.004ZM1.5 13.5V7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1ZM13 10.25c0 .688-.563 1.25-1.25 1.25-.688 0-1.25-.55-1.25-1.25 0-.688.563-1.25 1.25-1.25.688 0 1.25.562 1.25 1.25Z"></path></svg>
          </strong>
          $1000.00</p>
        </div>
        <button>Deposit </button>
      </div>
      <div className="center-content">
        <h3>Trading Accounts</h3>
        <table className="trading-table">
          <thead>
            <tr>
              <th>Account</th>
              <th>Amount</th>
              <th>Trades</th>
            </tr>
          </thead>
          <tbody>
            {tradingAccounts.map((account, index) => (
              <tr key={index}>
                <td>{account.account}</td>
                <td>{account.amount}</td>
                <td>{account.visits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Profile;
