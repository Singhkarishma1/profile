// // import React from 'react';

// // function Notification() {
// //     const notifications = [
// //         {
// //           time: '8:00 AM',
// //           title: 'NITK Blood Camp',
// //           description: 'Start your day with a 30-minute exercise routine.',
// //         },
// //         {
// //           time: '12:30 PM',
// //           title: 'Manipur University Blood Camp',
// //           description: 'Its time to refuel! Have a balanced lunch.',
// //         },
// //         {
// //           time: '3:00 PM',
// //           title: 'Hydration Break',
// //           description: 'Drink a glass of water to stay hydrated.',
// //         },
// //         {
// //           time: '6:00 PM',
// //           title: 'Evening Walk',
// //           description: 'Take a 20-minute walk to unwind after work.',
// //         },
// //         {
// //           time: '6:00 PM',
// //           title: 'Evening Walk',
// //           description: 'Take a 20-minute walk to unwind after work.',
// //         },
// //         {
// //           time: '6:00 PM',
// //           title: 'Evening Walk',
// //           description: 'Take a 20-minute walk to unwind after work.',
// //         },
        
// //       ];
// //   return (
// //     <div className="bg-white p-6 rounded-lg shadow-lg h-auto">
// //       <h2 className="text-2xl font-semibold mb-6">Scheduled Notifications</h2>

// //       <div className="grid grid-cols-1 gap-4">
// //         {notifications.map((notification) => (
// //           <div  className="bg-gray-100  p-4 rounded-lg">
// //             <h3 className="text-xl font-semibold text-red-700 mb-1">{notification.title}</h3>
// //             <p className="text-sm text-gray-600">{notification.time}</p>
// //             <p className="mt-2">{notification.description}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Notification;
// import React, { useState } from 'react';

// function Notification() {
//   const [notifications, setNotifications] = useState([
//     {
//       time: '8:00 AM',
//       title: 'NITK Blood Camp',
//       description: 'Start your day with a 30-minute exercise routine.',
//       marked: false,
//     },
//     {
//       time: '12:30 PM',
//       title: 'Manipur University Blood Camp',
//       description: 'It’s time to refuel! Have a balanced lunch.',
//       marked: false,
//     },
//     {
//       time: '3:00 PM',
//       title: 'Hydration Break',
//       description: 'Drink a glass of water to stay hydrated.',
//       marked: false,
//     },
//     {
//       time: '6:00 PM',
//       title: 'Evening Walk',
//       description: 'Take a 20-minute walk to unwind after work.',
//       marked: false,
//     },
//     {
//       time: '6:00 PM',
//       title: 'Blood Donation Camp Evening',
//       description: 'Donate blood to save lives.',
//       marked: false,
//     },
//   ]);

//   const [showModal, setShowModal] = useState(false);
//   const [activeNotification, setActiveNotification] = useState(null);

//   // Function to convert time to 24-hour format for sorting
//   const convertTo24Hour = (time) => {
//     const [hourMinute, period] = time.split(' ');
//     let [hour, minute] = hourMinute.split(':').map(Number);
//     if (period === 'PM' && hour !== 12) hour += 12;
//     if (period === 'AM' && hour === 12) hour = 0;
//     return `${hour.toString().padStart(2, '0')}:${minute}`;
//   };

//   // Sorting notifications based on time
//   const sortedNotifications = notifications.sort(
//     (a, b) => convertTo24Hour(a.time).localeCompare(convertTo24Hour(b.time))
//   );

//   // Toggle the mark/unmark status
//   const toggleMark = (index) => {
//     const updatedNotifications = [...notifications];
//     updatedNotifications[index].marked = !updatedNotifications[index].marked;
//     setNotifications(updatedNotifications);
//   };

//   // Handle opening a modal with notification details
//   const openNotification = (index) => {
//     setActiveNotification(notifications[index]);
//     setShowModal(true);

//     // Mark the notification as read
//     const updatedNotifications = [...notifications];
//     updatedNotifications[index].marked = true;
//     setNotifications(updatedNotifications);
//   };

//   // Close the modal
//   const closeModal = () => {
//     setShowModal(false);
//   };

//   // Calculate the total number of unread notifications
//   const unreadCount = notifications.filter((notification) => !notification.marked).length;

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg h-auto">
//       <h2 className="text-2xl font-semibold mb-6">Scheduled Notifications</h2>

//       {/* Display total count of notifications and unread notifications */}
//       <p className="text-sm text-gray-600 mb-4">
//         Total Notifications: {notifications.length} | Unread: {unreadCount}
//       </p>

//       <div className="grid grid-cols-1 gap-4">
//         {sortedNotifications.map((notification, index) => (
//           <div
//             key={index}
//             className={`bg-gray-100 p-4 rounded-lg cursor-pointer ${notification.marked ? 'bg-green-100' : ''}`}
//             onClick={() => openNotification(index)}
//           >
//             <div className="flex justify-between items-center">
//               <h3 className="text-xl font-semibold text-red-700 mb-1">{notification.title}</h3>
//             </div>
//             <p className="text-sm text-gray-600">{notification.time}</p>
//             <p className="mt-2">{notification.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Modal for displaying notification details */}
//       {showModal && activeNotification && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold text-red-700 mb-2">{activeNotification.title}</h3>
//             <p className="text-sm text-gray-600 mb-4">{activeNotification.time}</p>
//             <p>{activeNotification.description}</p>
//             <button
//               onClick={closeModal}
//               className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Notification;
import React, { useState } from 'react';

function Notification({ limit }) {
  const [notifications, setNotifications] = useState([
    {
      time: '8:00 AM',
      title: 'NITK Blood Camp',
      description: 'Start your day with a 30-minute exercise routine.',
      marked: false,
    },
    {
      time: '12:30 PM',
      title: 'Manipur University Blood Camp',
      description: 'It’s time to refuel! Have a balanced lunch.',
      marked: false,
    },
    {
      time: '3:00 PM',
      title: 'Hydration Break',
      description: 'Drink a glass of water to stay hydrated.',
      marked: false,
    },
    {
      time: '6:00 PM',
      title: 'Evening Walk',
      description: 'Take a 20-minute walk to unwind after work.',
      marked: false,
    },
    {
      time: '6:00 PM',
      title: 'Blood Donation Camp Evening',
      description: 'Donate blood to save lives.',
      marked: false,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [activeNotification, setActiveNotification] = useState(null);

  // Function to convert time to 24-hour format for sorting
  const convertTo24Hour = (time) => {
    const [hourMinute, period] = time.split(' ');
    let [hour, minute] = hourMinute.split(':').map(Number);
    if (period === 'PM' && hour !== 12) hour += 12;
    if (period === 'AM' && hour === 12) hour = 0;
    return `${hour.toString().padStart(2, '0')}:${minute}`;
  };

  // Sorting notifications based on time
  const sortedNotifications = notifications.sort(
    (a, b) => convertTo24Hour(a.time).localeCompare(convertTo24Hour(b.time))
  );

  // Handle opening a modal with notification details
  const openNotification = (index) => {
    setActiveNotification(notifications[index]);
    setShowModal(true);

    // Mark the notification as read
    const updatedNotifications = [...notifications];
    updatedNotifications[index].marked = true;
    setNotifications(updatedNotifications);
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Calculate the total number of unread notifications
  const unreadCount = notifications.filter((notification) => !notification.marked).length;

  // Limit the number of notifications to display based on the passed limit prop
  const limitedNotifications = limit ? sortedNotifications.slice(0, limit) : sortedNotifications;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-auto">
      <h2 className="text-2xl font-semibold mb-6">Scheduled Notifications</h2>

      {/* Display total count of notifications and unread notifications */}
      <p className="text-sm text-gray-600 mb-4">
        Total Notifications: {notifications.length} | Unread: {unreadCount}
      </p>

      <div className="grid grid-cols-1 gap-4">
        {limitedNotifications.map((notification, index) => (
          <div
            key={index}
            className={`bg-gray-100 p-4 rounded-lg cursor-pointer ${notification.marked ? 'bg-green-100' : ''}`}
            onClick={() => openNotification(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-red-700 mb-1">{notification.title}</h3>
            </div>
            <p className="text-sm text-gray-600">{notification.time}</p>
            <p className="mt-2">{notification.description}</p>
          </div>
        ))}
      </div>

      {/* Modal for displaying notification details */}
      {showModal && activeNotification && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-red-700 mb-2">{activeNotification.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{activeNotification.time}</p>
            <p>{activeNotification.description}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notification;
