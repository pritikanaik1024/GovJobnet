// src/components/AdminPanel.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';

function AdminPanel() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "jobs"), (snapshot) => {
      const updatedJobs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setJobs(updatedJobs);
    });

    return () => unsubscribe(); // This is the cleanup function to stop listening to changes
  }, []);

  return (
    <div>
      <h1>Admin Panel</h1>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            {job.title} - {job.approved ? "Approved" : "Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;
