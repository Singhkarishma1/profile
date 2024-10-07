// // // import React, { useState, useEffect } from "react";

// // // const DonationHistory = () => {
// // //   // Initial static donation history data (you can replace it with API fetched data)
// // //   const [donationHistory, setDonationHistory] = useState([
// // //     {
// // //       date: "2023-09-10",
// // //       bloodBank: "City Hospital Blood Bank",
// // //       location: "New York, NY",
// // //       status: "Completed",
// // //     },
// // //     {
// // //       date: "2023-07-15",
// // //       bloodBank: "Red Cross Blood Bank",
// // //       location: "Los Angeles, CA",
// // //       status: "Completed",
// // //     },
// // //     {
// // //       date: "2023-05-20",
// // //       bloodBank: "Community Blood Center",
// // //       location: "Chicago, IL",
// // //       status: "Completed",
// // //     },
// // //   ]);

// // //   // Simulate data fetching (for API integration)
// // //   useEffect(() => {
// // //     // You can fetch the user's donation history from an API here
// // //     // Example:
// // //     // fetch('api/getDonationHistory')
// // //     //   .then(response => response.json())
// // //     //   .then(data => setDonationHistory(data));
// // //   }, []);

// // //   return (
// // //     <div className="donation-history-container">
// // //       <h2>Donation History</h2>
// // //       {donationHistory.length === 0 ? (
// // //         <p>No donations found.</p>
// // //       ) : (
// // //         <table>
// // //           <thead>
// // //             <tr>
// // //               <th>Date</th>
// // //               <th>Blood Bank</th>
// // //               <th>Location</th>
// // //               <th>Status</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {donationHistory.map((donation, index) => (
// // //               <tr key={index}>
// // //                 <td>{donation.date}</td>
// // //                 <td>{donation.bloodBank}</td>
// // //                 <td>{donation.location}</td>
// // //                 <td>{donation.status}</td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default DonationHistory;
// // // import React from 'react';

// // // function History() {
// // //     const history = [
// // //         {
// // //           time: '8:00 AM',
// // //           title: 'NITK Blood Camp',
// // //           description: 'Start your day with a 30-minute exercise routine.',
// // //         },
// // //         {
// // //           time: '12:30 PM',
// // //           title: 'Manipur University Blood Camp',
// // //           description: 'Its time to refuel! Have a balanced lunch.',
// // //         },
// // //         {
// // //           time: '3:00 PM',
// // //           title: 'Hydration Break',
// // //           description: 'Drink a glass of water to stay hydrated.',
// // //         },
// // //         {
// // //           time: '6:00 PM',
// // //           title: 'Evening Walk',
// // //           description: 'Take a 20-minute walk to unwind after work.',
// // //         },
// // //         {
// // //           time: '6:00 PM',
// // //           title: 'Evening Walk',
// // //           description: 'Take a 20-minute walk to unwind after work.',
// // //         },
// // //         {
// // //           time: '6:00 PM',
// // //           title: 'Evening Walk',
// // //           description: 'Take a 20-minute walk to unwind after work.',
// // //         },
        
// // //       ];
// // //   return (
// // //     <div className="bg-white p-6 rounded-lg shadow-lg h-auto">
// // //       <h2 className="text-2xl font-semibold mb-6">Your History</h2>

// // //       <div className="grid grid-cols-1 gap-4">
// // //         {history.map((history) => (
// // //           <div  className="bg-gray-100  p-4 rounded-lg">
// // //             <h3 className="text-xl font-semibold text-red-700 mb-1">{history.title}</h3>
// // //             <p className="text-sm text-gray-600">{history.time}</p>
// // //             <p className="mt-2">{history.description}</p>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default History;
// // import React from 'react';

// // function History() {
// //   // Sample data including hospital name, address, date, and time
// //   const history = [
// //     {
// //       hospitalName: 'NITK Blood Camp',
// //       address: 'Surathkal, Karnataka',
// //       date: '2024-09-15',
// //       time: '8:00 AM',
// //     },
// //     {
// //       hospitalName: 'Manipur University Blood Camp',
// //       address: 'Imphal, Manipur',
// //       date: '2024-09-20',
// //       time: '12:30 PM',
// //     },
// //     {
// //       hospitalName: 'City Hospital Blood Donation Camp',
// //       address: 'Mangalore, Karnataka',
// //       date: '2024-09-22',
// //       time: '3:00 PM',
// //     },
// //     {
// //       hospitalName: 'District Hospital Donation Camp',
// //       address: 'Udupi, Karnataka',
// //       date: '2024-09-25',
// //       time: '10:00 AM',
// //     },
// //     {
// //       hospitalName: 'Red Cross Blood Donation Camp',
// //       address: 'Bangalore, Karnataka',
// //       date: '2024-09-28',
// //       time: '4:00 PM',
// //     }
// //   ];

// //   return (
// //     <div className="bg-white p-6 rounded-lg shadow-lg h-auto">
// //       <h2 className="text-2xl font-semibold mb-6">Your Donation History</h2>

// //       <div className="grid grid-cols-1 gap-4">
// //         {history.map((item, index) => (
// //           <div key={index} className="bg-gray-100 p-4 rounded-lg">
// //             <h3 className="text-xl font-semibold text-red-700 mb-1">
// //               {item.hospitalName}
// //             </h3>
// //             <p className="text-sm text-gray-600">{item.address}</p>
// //             <p className="text-sm text-gray-600">{item.date}</p>
// //             <p className="text-sm text-gray-600">{item.time}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default History;
// import React, { useState } from 'react';

// function History() {
//   // Sample data for donation and received history
//   const donationHistory = [
//     {
//       hospitalName: 'NITK Blood Camp',
//       address: 'Surathkal, Karnataka',
//       date: '2024-09-15',
//       time: '8:00 AM',
//     },
//     {
//       hospitalName: 'Manipur University Blood Camp',
//       address: 'Imphal, Manipur',
//       date: '2024-09-20',
//       time: '12:30 PM',
//     },
//     {
//       hospitalName: 'City Hospital Blood Donation Camp',
//       address: 'Mangalore, Karnataka',
//       date: '2024-09-22',
//       time: '3:00 PM',
//     },
//   ];

//   const receivedHistory = [
//     {
//       hospitalName: 'City Hospital',
//       address: 'Udupi, Karnataka',
//       date: '2024-10-01',
//       time: '10:00 AM',
//     },
//     {
//       hospitalName: 'Red Cross Blood Bank',
//       address: 'Bangalore, Karnataka',
//       date: '2024-10-05',
//       time: '12:00 PM',
//     },
//   ];

//   // State to toggle between donation and received history
//   const [view, setView] = useState('donate'); // 'donate' or 'receive'

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg h-auto">
//       <h2 className="text-2xl font-semibold mb-6">Your History</h2>

//       {/* Buttons to toggle between Donate and Receive views */}
//       <div className="mb-4">
//         <button
//           onClick={() => setView('donate')}
//           className={`mr-4 px-4 py-2 rounded-lg ${
//             view === 'donate' ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'
//           }`}
//         >
//           Donate History
//         </button>
//         <button
//           onClick={() => setView('receive')}
//           className={`px-4 py-2 rounded-lg ${
//             view === 'receive' ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'
//           }`}
//         >
//           Receive History
//         </button>
//       </div>

//       {/* Display Donate History */}
//       {view === 'donate' && (
//         <div className="grid grid-cols-1 gap-4">
//           {donationHistory.map((item, index) => (
//             <div key={index} className="bg-gray-100 p-4 rounded-lg">
//               <h3 className="text-xl font-semibold text-red-700 mb-1">
//                 {item.hospitalName}
//               </h3>
//               <p className="text-sm text-gray-600">{item.address}</p>
//               <p className="text-sm text-gray-600">{item.date}</p>
//               <p className="text-sm text-gray-600">{item.time}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Display Receive History */}
//       {view === 'receive' && (
//         <div className="grid grid-cols-1 gap-4">
//           {receivedHistory.map((item, index) => (
//             <div key={index} className="bg-gray-100 p-4 rounded-lg">
//               <h3 className="text-xl font-semibold text-red-700 mb-1">
//                 {item.hospitalName}
//               </h3>
//               <p className="text-sm text-gray-600">{item.address}</p>
//               <p className="text-sm text-gray-600">{item.date}</p>
//               <p className="text-sm text-gray-600">{item.time}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default History;
import React, { useState, useEffect } from 'react';
import data from './data.json'; // Adjust the path according to your structure

function History() {
  const [donationHistory, setDonationHistory] = useState([]);
  const [receivedHistory, setReceivedHistory] = useState([]);

  // State to toggle between donation and received history
  const [view, setView] = useState('donate'); // 'donate' or 'receive'

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch data and separate into donation and received history
  useEffect(() => {
    const donations = data.filter(item => item.donationStatus === 'Donated');
    const received = data.filter(item => item.receivingBloodDate !== null);
    setDonationHistory(donations);
    setReceivedHistory(received);
  }, []);

  // Helper function to get the current page data
  const paginateData = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  // Total number of pages
  const totalPages = Math.ceil((view === 'donate' ? donationHistory.length : receivedHistory.length) / itemsPerPage);

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-auto">
      {/* <h2 className="text-2xl font-semibold mb-6">Your History</h2> */}

      {/* Buttons to toggle between Donate and Receive views */}
      <div className="mb-4">
        <button
          onClick={() => { setView('donate'); setCurrentPage(1); }}
          className={`mr-4 px-4 py-2 rounded-lg ${view === 'donate' ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'}`}
        >
          Donate History
        </button>
        <button
          onClick={() => { setView('receive'); setCurrentPage(1); }}
          className={`px-4 py-2 rounded-lg ${view === 'receive' ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'}`}
        >
          Receive History
        </button>
      </div>

      {/* Display Donate or Receive History based on selected view */}
      <div className="grid grid-cols-1 gap-4">
        {paginateData(view === 'donate' ? donationHistory : receivedHistory).map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-red-700 mb-1">{item.hospitalName}</h3>
            <p className="text-sm text-gray-600">{item.hospitalAddress}</p>
            {view === 'donate' ? (
              <>
                <p className="text-sm text-gray-600">{item.dateOfDonation ? `Date of Donation: ${item.dateOfDonation}` : 'Donation Status: Not Donated'}</p>
              </>
            ) : (
              <>
                <p className="text-sm text-gray-600">{item.receivingBloodDate ? `Receiving Blood Date: ${item.receivingBloodDate}` : 'No Scheduled Receiving'}</p>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg bg-gray-200 text-black disabled:opacity-50"
        >
          Previous
        </button>
        <p className="text-sm">Page {currentPage} of {totalPages}</p>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg bg-gray-200 text-black disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default History;
