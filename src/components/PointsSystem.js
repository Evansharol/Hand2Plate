import React from 'react';
import './PointsSystem.css';

function PointsSystem() {
  const points = 120;
  const incentives = [
    { id: 1, name: 'Free Advertisement', pointsRequired: 100 },
    { id: 2, name: 'Discount on Supplies', pointsRequired: 200 },
  ];

  const handleRedeem = (incentive) => {
    console.log('Redeemed:', incentive);
  };

  return (
    <div className="points-system">
      <h2>Points & Incentive System</h2>
      <div className="points-summary">
        <p>Total Points: {points}</p>
      </div>
      <div className="incentives-list">
        {incentives.map((incentive) => (
          <div key={incentive.id} className="incentive">
            <div className="incentive-name">{incentive.name}</div>
            <div className="incentive-points">Points Required: {incentive.pointsRequired}</div>
            <button
              className="redeem-button"
              onClick={() => handleRedeem(incentive)}
              disabled={points < incentive.pointsRequired}
            >
              Redeem Points
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PointsSystem;