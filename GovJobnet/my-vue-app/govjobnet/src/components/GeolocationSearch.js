import React, { useState } from 'react';
import { firestore } from '../../govjobnet/src/firebase';

const GeolocationSearch = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  const fetchJobsNearby = async () => {
    try {
      // Request permission to access geolocation
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      // Fetch job data from Firestore based on user's geolocation
      const { latitude, longitude } = position.coords;
      const snapshot = await firestore.collection('jobs')
      .where('location.latitude', '>', minLat)
      .where('location.latitude', '<', maxLat)
      .where('location.longitude', '>', minLng)
      .where('location.longitude', '<', maxLng)
      .get();
    

      const jobList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setJobs(jobList);
    } catch (error) {
      setError('Error fetching jobs:', error);
    }
  };

  return (
    <div>
      <h2>Find Jobs Nearby</h2>
      <button onClick={fetchJobsNearby}>Search</button>
      {error && <p>{error}</p>}
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>Location: {job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GeolocationSearch;
