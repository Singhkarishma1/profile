// import React, { useState } from 'react';
// import Notification from './notification';

// const Profile = () => {
//   const [userData, setUserData] = useState({
//     name: 'Karishma Singh',
//     bloodGroup: 'A+',
//     contact: '+91 9876543210',
//     email: 'karishma@example.com',
//     donations: 5,
//     receipts: 2,
//     city: 'Mangalore',
//     state: 'Karnataka',
//     country: 'India',
//     pinCode: '575025',
//     profilePhoto: 'https://imgs.search.brave.com/mRib_i-Szar0NIbygBBAm9WO0KitFDrDrjbum_HIfwg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODY0/NTE2ODcwL3Bob3Rv/L3lvdW5nLXdvbWFu/LXBob3RvZ3JhcGhp/bmctdGhlLWF1dHVt/bi1zZWFzb24uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPU0z/RzJTd0tKMTV6b2xz/U2FGQUJzbmVMaXRk/V1hDcnJKM0xrVEVL/bklPeXM9',
//   });

//   const [editedData, setEditedData] = useState({ ...userData });
//   const [isEditing, setIsEditing] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   // Handle field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedData({ ...editedData, [name]: value });
//   };

//   // Handle image change
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setEditedData({ ...editedData, profilePhoto: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Toggle edit mode
//   const handleEditToggle = () => {
//     setIsEditing(!isEditing);
//   };

//   // Save edited data
//   const handleSave = () => {
//     setUserData({ ...editedData });
//     setIsEditing(false);
//     setShowPopup(true); // Show popup on save
//     setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
//   };

//   // Cancel editing
//   const handleCancel = () => {
//     setEditedData({ ...userData }); // Reset to original data
//     setIsEditing(false);
//   };

//   return (
//     <>
    
//     <div className="flex flex-col items-center space-y-4 p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold text-center">User Profile</h1>
      
//       <div className="flex justify-center space-x-4 w-full max-w-4xl">
//         {/* Profile Image Card */}
//         <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4 space-y-4 w-1/4">
//           <h2 className="text-xl text-black font-semibold">Profile Image</h2>
//           <img className="block mx-auto h-36 w-36 rounded-full" src={editedData.profilePhoto} alt="Profile" />
//           <input
//             type="file"
//             onChange={handleImageChange}
//             className="mt-2 border border-gray-300 rounded p-2 w-full"
//           />
//         </div>

//         {/* User Info Card */}
//         <div className="flex flex-col bg-white rounded-xl shadow-lg p-4 space-y-4 w-1/4">
//           <h2 className="text-xl text-black font-semibold">User Information</h2>
//           <p className="text-slate-500 font-medium">Name: {editedData.name}</p>
//           <p className="text-slate-500 font-medium">Blood Group: {editedData.bloodGroup}</p>
//           <p className="text-slate-500 font-medium">Mobile: {editedData.contact}</p>
//           <p className="text-slate-500 font-medium">Email: {editedData.email}</p>
//         </div>
//       </div>

//       <div className="flex justify-center space-x-4 w-full max-w-4xl">
//         {/* Address Details Card */}
//         <div className="flex flex-col bg-white rounded-xl shadow-lg p-4 space-y-4 w-1/4">
//           <h2 className="text-xl text-black font-semibold">Address Details</h2>
//           <p className="text-slate-500 font-medium">City: {editedData.city}</p>
//           <p className="text-slate-500 font-medium">State: {editedData.state}</p>
//           <p className="text-slate-500 font-medium">Country: {editedData.country}</p>
//           <p className="text-slate-500 font-medium">Pin Code: {editedData.pinCode}</p>
//         </div>

//         {/* Donations and Receipts */}
//         <div className="flex flex-col bg-white rounded-xl shadow-lg p-4 space-y-4 w-1/4">
//           <h2 className="text-xl text-black font-semibold">Donations</h2>
//           <p className="text-slate-500 font-medium">Number of Donations: {editedData.donations}</p>
//           <h2 className="text-xl text-black font-semibold">Receipts</h2>
//           <p className="text-slate-500 font-medium">Number of Receipts: {editedData.receipts}</p>
//         </div>
//       </div>

//       {/* Edit Modal */}
//       {isEditing && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur">
//           <div className="bg-white rounded-xl shadow-lg p-4 space-y-4 w-1/2">
//             <h2 className="text-xl text-black font-semibold">Edit Details</h2>
//             <input
//               type="text"
//               name="name"
//               value={editedData.name}
//               onChange={handleChange}
//               placeholder="Name"
//               className="border border-gray-300 rounded p-2 w-full"
//             />
//             <input
//               type="text"
//               name="contact"
//               value={editedData.contact}
//               onChange={handleChange}
//               placeholder="Contact"
//               className="border border-gray-300 rounded p-2 w-full"
//             />
//             <input
//               type="email"
//               name="email"
//               value={editedData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               className="border border-gray-300 rounded p-2 w-full"
//             />
//             <input
//               type="text"
//               name="city"
//               value={editedData.city}
//               onChange={handleChange}
//               placeholder="City"
//               className="border border-gray-300 rounded p-2 w-full"
//             />
//             <input
//               type="text"
//               name="state"
//               value={editedData.state}
//               onChange={handleChange}
//               placeholder="State"
//               className="border border-gray-300 rounded p-2 w-full"
//             />
//             <input
//               type="text"
//               name="country"
//               value={editedData.country}
//               onChange={handleChange}
//               placeholder="Country"
//               className="border border-gray-300 rounded p-2 w-full"
//             />
//             <input
//               type="text"
//               name="pinCode"
//               value={editedData.pinCode}
//               onChange={handleChange}
//               placeholder="Pin Code"
//               className="border border-gray-300 rounded p-2 w-full"
//             />
//             <div className="flex justify-between">
//               <button onClick={handleCancel} className="mt-2 bg-gray-400 text-white font-semibold rounded p-2">
//                 Cancel
//               </button>
//               <button onClick={handleSave} className="mt-2 bg-red-600 text-white font-semibold rounded p-2">
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <button onClick={handleEditToggle} className="bg-blue-600 text-white font-semibold rounded p-2">
//         {isEditing ? 'Cancel Editing' : 'Edit Details'}
//       </button>

//       {/* Popup Confirmation */}
//       {showPopup && (
//         <div className="absolute top-0 right-0 left-0 mx-auto mt-4 w-full max-w-md p-4 bg-green-100 border border-green-400 text-green-700 rounded shadow-md text-center">
//           <p>Details saved successfully!</p>
//         </div>
//       )}
//       <Notification limit={3} />
//     </div>
    
    
//     </>
//   );
// };

// export default Profile;
import React, { useState } from 'react';
import Notification from './notification';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: 'Karishma Singh',
    bloodGroup: 'A+',
    contact: '+91 9876543210',
    email: 'karishma@example.com',
    donations: 5,
    receipts: 2,
    city: 'Mangalore',
    state: 'Karnataka',
    country: 'India',
    pinCode: '575025',
    profilePhoto: 'https://imgs.search.brave.com/mRib_i-Szar0NIbygBBAm9WO0KitFDrDrjbum_HIfwg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODY0/NTE2ODcwL3Bob3Rv/L3lvdW5nLXdvbWFu/LXBob3RvZ3JhcGhp/bmctdGhlLWF1dHVt/bi1zZWFzb24uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPU0z/RzJTd0tKMTV6b2xz/U2FGQUJzbmVMaXRk/V1hDcnJKM0xrVEVL/bklPeXM9',
  });

  const [editedData, setEditedData] = useState({ ...userData });
  const [isEditing, setIsEditing] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Handle field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedData({ ...editedData, profilePhoto: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Toggle edit mode
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  // Save edited data
  const handleSave = () => {
    setUserData({ ...editedData });
    setIsEditing(false);
    setShowPopup(true); // Show popup on save
    setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
  };

  // Cancel editing
  const handleCancel = () => {
    setEditedData({ ...userData }); // Reset to original data
    setIsEditing(false);
  };

  return (
    <>
      <div className="flex flex-col items-center space-y-4 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold text-center">User Profile</h1>
        
        <div className="flex justify-center space-x-4 w-full max-w-6xl">
          {/* Profile Image Card */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4 space-y-4 w-1/4">
            <h2 className="text-xl text-black font-semibold">Profile Image</h2>
            <img className="block mx-auto h-36 w-36 rounded-full" src={editedData.profilePhoto} alt="Profile" />
            <input
              type="file"
              onChange={handleImageChange}
              className="mt-2 border border-gray-300 rounded p-2 w-full"
            />
          </div>

          {/* Combined User Info and Address Details Card */}
          <div className="flex flex-col bg-white rounded-xl shadow-lg p-4 space-y-4 w-1/2">
            <h2 className="text-xl text-black font-semibold">User Information & Address Details</h2>
            <p className="text-slate-500 font-medium">Name: {editedData.name}</p>
            <p className="text-slate-500 font-medium">Blood Group: {editedData.bloodGroup}</p>
            <p className="text-slate-500 font-medium">Mobile: {editedData.contact}</p>
            <p className="text-slate-500 font-medium">Email: {editedData.email}</p>
            <h2 className="text-xl text-black font-semibold">Address Details</h2>
            <p className="text-slate-500 font-medium">City: {editedData.city}</p>
            <p className="text-slate-500 font-medium">State: {editedData.state}</p>
            <p className="text-slate-500 font-medium">Country: {editedData.country}</p>
            <p className="text-slate-500 font-medium">Pin Code: {editedData.pinCode}</p>
          </div>
        </div>

        <div className="flex justify-center space-x-4 w-full max-w-6xl">
          {/* Donations and Receipts */}
          <div className="flex flex-col bg-white rounded-xl shadow-lg p-4 space-y-4 w-1/4">
            <h2 className="text-xl text-black font-semibold">Donations</h2>
            <p className="text-slate-500 font-medium">Number of Donations: {editedData.donations}</p>
            <h2 className="text-xl text-black font-semibold">Receipts</h2>
            <p className="text-slate-500 font-medium">Number of Receipts: {editedData.receipts}</p>
          </div>
        </div>

        {/* Edit Modal */}
        {isEditing && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur">
            <div className="bg-white rounded-xl shadow-lg p-4 space-y-4 w-1/2">
              <h2 className="text-xl text-black font-semibold">Edit Details</h2>
              <input
                type="text"
                name="name"
                value={editedData.name}
                onChange={handleChange}
                placeholder="Name"
                className="border border-gray-300 rounded p-2 w-full"
              />
              <input
                type="text"
                name="contact"
                value={editedData.contact}
                onChange={handleChange}
                placeholder="Contact"
                className="border border-gray-300 rounded p-2 w-full"
              />
              <input
                type="email"
                name="email"
                value={editedData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border border-gray-300 rounded p-2 w-full"
              />
              <input
                type="text"
                name="city"
                value={editedData.city}
                onChange={handleChange}
                placeholder="City"
                className="border border-gray-300 rounded p-2 w-full"
              />
              <input
                type="text"
                name="state"
                value={editedData.state}
                onChange={handleChange}
                placeholder="State"
                className="border border-gray-300 rounded p-2 w-full"
              />
              <input
                type="text"
                name="country"
                value={editedData.country}
                onChange={handleChange}
                placeholder="Country"
                className="border border-gray-300 rounded p-2 w-full"
              />
              <input
                type="text"
                name="pinCode"
                value={editedData.pinCode}
                onChange={handleChange}
                placeholder="Pin Code"
                className="border border-gray-300 rounded p-2 w-full"
              />
              <div className="flex justify-between">
                <button onClick={handleCancel} className="mt-2 bg-gray-400 text-white font-semibold rounded p-2">
                  Cancel
                </button>
                <button onClick={handleSave} className="mt-2 bg-red-600 text-white font-semibold rounded p-2">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        <button onClick={handleEditToggle} className="bg-blue-600 text-white font-semibold rounded p-2">
          {isEditing ? 'Cancel Editing' : 'Edit Details'}
        </button>

        {/* Popup Confirmation */}
        {showPopup && (
          <div className="absolute top-0 right-0 left-0 mx-auto mt-4 w-full max-w-md p-4 bg-green-100 border border-green-400 text-green-700 rounded shadow-md text-center">
            <p>Details saved successfully!</p>
          </div>
        )}
        <Notification limit={3} />
      </div>
    </>
  );
};

export default Profile;
