import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

function JobListerDashboard() {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      const querySnapshot = await getDocs(collection(db, "jobs"));
      setJobs(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchJobs();
  }, []);

  const addJob = async () => {
    if (!newJob) return;
    const docRef = await addDoc(collection(db, "jobs"), {
      title: newJob,
      approved: false
    });
    setJobs([...jobs, { id: docRef.id, title: newJob, approved: false }]);
    setNewJob("");
  };

  return (
    <div>
      <h1>Job Lister Dashboard</h1>
      <input type="text" value={newJob} onChange={(e) => setNewJob(e.target.value)} placeholder="Add new job" />
      <button onClick={addJob}>Add Job</button>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>{job.title} - {job.approved ? "Approved" : "Pending"}</li>
        ))}
      </ul>
    </div>
  );
}

export default JobListerDashboard;
