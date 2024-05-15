import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

function HomePage() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      const jobsCollection = collection(db, "jobs");
      const q = query(jobsCollection, where("approved", "==", true));
      const querySnapshot = await getDocs(q);
      const jobsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setJobs(jobsList);
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <input type="text" placeholder="Search jobs..." onChange={(e) => setSearchTerm(e.target.value)} />
      <ul>
        {jobs.filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase())).map(job => (
          <li key={job.id}>{job.title} - {job.location}</li>
        ))}
      </ul>
    </div>
  );
}
const getUserLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('Latitude:', position.coords.latitude, 'Longitude:', position.coords.longitude);
      },
      () => {
        alert('Unable to retrieve your location');
      }
    );
  } else {
    alert('Geolocation is not supported by your browser');
  }
};

export default HomePage;
