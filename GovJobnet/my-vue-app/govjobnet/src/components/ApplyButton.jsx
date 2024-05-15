import React from 'react';
import { db } from '../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const ApplyButton = ({ jobId, userId }) => {
  const handleApply = async () => {
    await addDoc(collection(db, "applications"), {
      jobId,
      userId,
      status: 'pending' // Initial status of the application
    });
    alert('Application submitted!');
  };

  return <button onClick={handleApply}>Apply</button>;
};

export default ApplyButton;
