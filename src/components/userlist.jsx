import React from 'react';

function Userlist() {
  const notifications = [
    {
      time: 'A+',
      title: 'Ankur Punia',
      description: 'Start your day with a 30-minute exercise routine.',
    },
    {
      time: 'B-',
      title: 'Karishma Singh',
      description: 'Its time to refuel! Have a balanced lunch.',
    },
    {
      time: 'AB+',
      title: 'Charulata Singh',
      description: 'Drink a glass of water to stay hydrated.',
    },
    {
      time: 'O-',
      title: 'Nitesh Yadav',
      description: 'Take a 20-minute walk to unwind after work.',
    },
    {
      time: 'O+',
      title: 'Deep Saha',
      description: 'Take a 20-minute walk to unwind after work.',
    },
    {
      time: 'AB-',
      title: 'Ankush Kumar',
      description: 'Take a 20-minute walk to unwind after work.',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 w-full">
      {notifications.map((notification, index) => (
        <div key={index} className="bg-gray-300 w-full p-4 rounded-lg">
          <div className="flex justify-between align-baseline">
          <div className="flex text-xl font-semibold text-black-700 mb-1">{notification.title} </div>
          <button className="text-sm ustify-between text-red-600">details</button>
          
          </div>
          <div className='text-sm text-gray-600'>{notification.time}</div>
          
        </div>
      ))}
    </div>
  );
}

export default Userlist;
