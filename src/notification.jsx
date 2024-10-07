import React from 'react';

function Notification() {
    const notifications = [
        {
          time: '8:00 AM',
          title: 'NITK Blood Camp',
          description: 'Start your day with a 30-minute exercise routine.',
        },
        {
          time: '12:30 PM',
          title: 'Manipur University Blood Camp',
          description: 'Its time to refuel! Have a balanced lunch.',
        },
        {
          time: '3:00 PM',
          title: 'Hydration Break',
          description: 'Drink a glass of water to stay hydrated.',
        },
        {
          time: '6:00 PM',
          title: 'Evening Walk',
          description: 'Take a 20-minute walk to unwind after work.',
        },
        {
          time: '6:00 PM',
          title: 'Evening Walk',
          description: 'Take a 20-minute walk to unwind after work.',
        },
        {
          time: '6:00 PM',
          title: 'Evening Walk',
          description: 'Take a 20-minute walk to unwind after work.',
        },
        
      ];
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-auto">
      <h2 className="text-2xl font-semibold mb-6">Scheduled Notifications</h2>

      <div className="grid grid-cols-1 gap-4">
        {notifications.map((notification) => (
          <div  className="bg-gray-100  p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-red-700 mb-1">{notification.title}</h3>
            <p className="text-sm text-gray-600">{notification.time}</p>
            <p className="mt-2">{notification.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notification;
