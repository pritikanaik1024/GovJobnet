import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ViewApplications = ({ jobId }) => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const q = query(collection(db, "applications"), where("jobId", "==", jobId));
      const querySnapshot = await getDocs(q);
      setApplications(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchApplications();
  }, [jobId]);

  return (
    <div>
      <h2>Applications</h2>
      <ul>
        {applications.map(app => (
          <li key={app.id}>
            {app.userId} - Status: {app.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewApplications;
