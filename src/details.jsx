import React, { useState } from 'react';
import Bloodlist from './components/bloodlist';
import Userlist from './components/userlist';
import Hospitallist from './components/hospitallist';

function Details() {
  const [activePanel, setActivePanel] = useState('bloodlist'); // Initial state is bloodlist

  return (
    <div className="flex flex-col items-start bg-white p-6 rounded-lg h-full">
      {/* Sidebar or Navigation Buttons */}
      <div className="flex p-4 px-5 mx-6 gap-5 w-96">
        <button
          onClick={() => setActivePanel('bloodlist')}
          className="p-2 text-black bg-red-200 hover:bg-red-700 rounded w-full"
        >
          Blood List
        </button>
        <button
          onClick={() => setActivePanel('userlist')}
          className="p-2 text-black bg-red-200 hover:bg-red-700 rounded w-full"
        >
          User List
        </button>
        <button
          onClick={() => setActivePanel('hospitallist')}
          className="p-2 text-black bg-red-200 hover:bg-red-700 rounded w-full"
        >
          Hospital List
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 bg-gray-100 w-full overflow-y-auto flex">
        {/* Conditionally render components based on activePanel state */}
        {activePanel === 'bloodlist' && <Bloodlist />}
        {activePanel === 'userlist' && <Userlist />}
        {activePanel === 'hospitallist' && <Hospitallist />}
      </div>
    </div>
  );
}

export default Details;
