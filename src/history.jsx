import React, { useState, useEffect } from "react";

const DonationHistory = () => {
  // Initial static donation history data (you can replace it with API fetched data)
  const [donationHistory, setDonationHistory] = useState([
    {
      date: "2023-09-10",
      bloodBank: "City Hospital Blood Bank",
      location: "New York, NY",
      status: "Completed",
    },
    {
      date: "2023-07-15",
      bloodBank: "Red Cross Blood Bank",
      location: "Los Angeles, CA",
      status: "Completed",
    },
    {
      date: "2023-05-20",
      bloodBank: "Community Blood Center",
      location: "Chicago, IL",
      status: "Completed",
    },
  ]);

  // Simulate data fetching (for API integration)
  useEffect(() => {
    // You can fetch the user's donation history from an API here
    // Example:
    // fetch('api/getDonationHistory')
    //   .then(response => response.json())
    //   .then(data => setDonationHistory(data));
  }, []);

  return (
    <div className="donation-history-container">
      <h2>Donation History</h2>
      {donationHistory.length === 0 ? (
        <p>No donations found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Blood Bank</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {donationHistory.map((donation, index) => (
              <tr key={index}>
                <td>{donation.date}</td>
                <td>{donation.bloodBank}</td>
                <td>{donation.location}</td>
                <td>{donation.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DonationHistory;
